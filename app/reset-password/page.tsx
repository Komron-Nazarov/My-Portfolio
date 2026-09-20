"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Verifying recovery link…");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const valid = Boolean(data.session);
      setReady(valid);
      setMessage(valid ? "Create a new password for the admin account." : "Recovery session is missing or expired. Request a new link from the login page.");
    });
  }, []);

  async function updatePassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password.length < 10) { setMessage("Use at least 10 characters."); return; }
    if (password !== confirm) { setMessage("Passwords do not match."); return; }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) { setMessage("Password could not be updated. Request a fresh recovery link."); return; }
    await supabase.auth.signOut();
    router.replace("/login?reset=success");
  }

  return <div className="auth-screen auth-reset-screen">
    <section className="auth-intro"><div className="auth-logo"><Image src="/logo-kn.jpg" alt="KN" width={737} height={726} priority style={{width:72,height:"auto"}}/><span>SECURE RECOVERY</span></div><p className="eyebrow">PORTFOLIO / ADMIN</p><h1>RESTORE ACCESS.<br/>KEEP CONTROL.</h1><p>Only a recovery link delivered by Supabase can open this password update screen.</p><div><span>KN</span><small>CONTENT SYSTEM / V6</small></div></section>
    <section className="auth-panel"><div className="auth-panel-head"><span>NEW PASSWORD</span><i>02</i></div><p className={ready?"auth-success":"auth-error"} role="status">{message}</p>{ready&&<form onSubmit={updatePassword}><label htmlFor="new-password">NEW PASSWORD</label><input id="new-password" type="password" autoComplete="new-password" value={password} onChange={e=>setPassword(e.target.value)}/><label htmlFor="confirm-password">CONFIRM PASSWORD</label><input id="confirm-password" type="password" autoComplete="new-password" value={confirm} onChange={e=>setConfirm(e.target.value)}/><button type="submit" disabled={loading}>{loading?"UPDATING…":"UPDATE PASSWORD ↗"}</button></form>}<a className="auth-back" href="/login">← RETURN TO LOGIN</a></section>
  </div>;
}
