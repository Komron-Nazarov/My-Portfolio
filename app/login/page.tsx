"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

const ADMIN_EMAIL = "komron7nazarov@gmail.com";

export default function LoginPage() {
  const router = useRouter();
  const [email] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setNotice("");
    if (!email.trim() || !password) { setError("Enter your email and password."); return; }
    setLoading(true);
    try {
      const result = await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (result.error) { setError("Access denied. Check your credentials."); return; }
      if (result.data.user.email?.toLowerCase() !== ADMIN_EMAIL) { await supabase.auth.signOut(); setError("This account is not authorized for the portfolio admin."); return; }
      router.replace("/admin"); router.refresh();
    } catch { setError("Authentication is temporarily unavailable."); }
    finally { setLoading(false); }
  }

  async function recoverAccess() {
    setError(""); setNotice("");
    if (!email.trim()) { setError("Enter the admin email first."); return; }
    setLoading(true);
    try {
      const { error: recoveryError } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (recoveryError) { setError("Recovery email could not be sent. Check the address and Supabase redirect settings."); return; }
      setNotice("Recovery link sent. Open the email and return through that link.");
    } catch { setError("Password recovery is temporarily unavailable."); }
    finally { setLoading(false); }
  }

  return (
    <div className="auth-screen">
      <section className="auth-intro"><div className="auth-logo"><Image src="/logo-kn.jpg" alt="KN" width={737} height={726} loading="eager" style={{width:72,height:"auto"}}/><span>PRIVATE CONTROL</span></div><p className="eyebrow">PORTFOLIO / ADMIN</p><h1>CONTROL THE CONTENT.<br />KEEP THE FRONT-END CLEAN.</h1><p>Private access for portfolio content, projects, media and site settings.</p><div><span>KN</span><small>CONTENT SYSTEM / V6</small></div></section>
      <section className="auth-panel">
        <div className="auth-panel-head"><span>ADMIN ACCESS</span><i>01</i></div>
        <form onSubmit={login}>
          <label htmlFor="email">ADMIN EMAIL</label><input id="email" type="email" autoComplete="username" value={email} readOnly aria-readonly="true" />
          <label htmlFor="password">PASSWORD</label><input id="password" type="password" autoComplete="current-password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="••••••••" />
          {error && <p className="auth-error" role="alert">{error}</p>}
          {notice && <p className="auth-success" role="status">{notice}</p>}
          <button type="submit" disabled={loading}>{loading ? "SIGNING IN…" : "ENTER DASHBOARD ↗"}</button>
          <button className="auth-recover" type="button" disabled={loading} onClick={recoverAccess}>FORGOT PASSWORD / RESTORE ACCESS</button>
        </form>
        <p className="auth-note">RESTRICTED AREA / AUTHORIZED ACCESS ONLY</p>
      </section>
    </div>
  );
}
