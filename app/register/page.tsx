// "use client";

// import { useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";

// export default function RegisterPage() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function register() {
//     const { error } = await supabase.auth.signUp({
//       email,
//       password,
//     });

//     if (error) {
//       alert(error.message);
//       return;
//     }

//     alert("Check your email!");
//     router.push("/login");
//   }

//   return (
//     <main className="min-h-screen text-white flex items-center justify-center">
//       <div className="w-75 flex flex-col gap-3">

//         <h1 className="text-2xl mb-4">Register</h1>

//         <input
//           placeholder="email"
//           className="p-2 bg-gray-900"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="password"
//           className="p-2 bg-gray-900"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           onClick={register}
//           className="bg-white text-black p-2"
//         >
//           Register
//         </button>

//       </div>
//     </main>
//   );
// }


"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function register() {
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Check your email!");
    router.push("/login");
  }

  return (
    <main className="min-h-screen flex items-center justify-center text-white bg-black relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-black" />

      <div className="absolute w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full top-1/3 right-1/2 translate-x-1/2" />

      <div className="relative w-full max-w-md px-6">

        {/* card */}
        <div className="backdrop-blur-xl bg-black/40 border border-red-500/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(255,0,0,0.15)]">

          <h1 className="text-3xl font-bold text-center mb-6">
            Register
            <span className="text-red-500 drop-shadow-[0_0_10px_red]">.</span>
          </h1>

          <div className="flex flex-col gap-4">

            <input
              placeholder="Email"
              className="
                p-3
                rounded-xl
                bg-black/60
                border border-red-500/20
                outline-none

                focus:border-red-500
                focus:shadow-[0_0_15px_rgba(255,0,0,0.3)]

                transition
              "
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="
                p-3
                rounded-xl
                bg-black/60
                border border-red-500/20
                outline-none

                focus:border-red-500
                focus:shadow-[0_0_15px_rgba(255,0,0,0.3)]

                transition
              "
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={register}
              disabled={loading}
              className="
                mt-2
                p-3
                rounded-xl

                bg-red-600
                text-white

                shadow-[0_0_25px_rgba(255,0,0,0.35)]

                hover:scale-[1.03]
                hover:shadow-[0_0_35px_rgba(255,0,0,0.6)]

                transition
              "
            >
              {loading ? "Loading..." : "Register"}
            </button>

          </div>

        </div>
      </div>
    </main>
  );
}