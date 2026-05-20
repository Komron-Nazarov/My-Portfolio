"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Check your email!");
    router.push("/login");
  }

  return (
    <main className="min-h-screen text-white flex items-center justify-center">
      <div className="w-75 flex flex-col gap-3">

        <h1 className="text-2xl mb-4">Register</h1>

        <input
          placeholder="email"
          className="p-2 bg-gray-900"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          className="p-2 bg-gray-900"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={register}
          className="bg-white text-black p-2"
        >
          Register
        </button>

      </div>
    </main>
  );
}