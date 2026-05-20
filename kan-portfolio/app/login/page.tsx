// // "use client";

// // import { useState } from "react";
// // import { supabase } from "@/lib/supabase";
// // import { useRouter } from "next/navigation";

// // export default function LoginPage() {

// //   const router = useRouter();

// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const login = async () => {

// //     const { error } = await supabase.auth.signInWithPassword({
// //       email,
// //       password,
// //     });

// //     if (error) {
// //       alert(error.message);
// //       return;
// //     }

// //     router.push("/admin");
// //   };

// //   return (
// //     <main className="min-h-screen bg-black text-white flex items-center justify-center">

// //       <div className="w-full max-w-sm flex flex-col gap-4">

// //         <h1 className="text-3xl font-bold">
// //           Login
// //         </h1>

// //         <input
// //           type="email"
// //           placeholder="email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           className="p-3 rounded bg-gray-900"
// //         />

// //         <input
// //           type="password"
// //           placeholder="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           className="p-3 rounded bg-gray-900"
// //         />

// //         <button
// //           onClick={login}
// //           className="bg-white text-black py-3 rounded font-bold cursor-pointer"
// //         >
// //           Login
// //         </button>

// //       </div>

// //     </main>
// //   );
// // }






// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/lib/supabase";

// export default function LoginPage() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   // LOGIN
//   async function login() {
//     setLoading(true);

//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     setLoading(false);

//     if (error) {
//       alert(error.message);
//       return;
//     }

//     router.push("/admin");
//   }

//   // REGISTER
//   async function register() {
//     setLoading(true);

//     const { error } = await supabase.auth.signUp({
//       email,
//       password,
//     });

//     setLoading(false);

//     if (error) {
//       alert(error.message);
//       return;
//     }

//     alert("Check your email (confirmation link sent)");
//   }

//   return (
//     <main className="min-h-screen bg-black text-white flex items-center justify-center">
//       <div className="w-full max-w-md p-6 bg-zinc-900 rounded-xl">

//         <h1 className="text-2xl mb-6 font-bold">Login</h1>

//         {/* EMAIL */}
//         <input
//           className="w-full p-3 mb-3 bg-black border border-zinc-700 rounded"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         {/* PASSWORD */}
//         <input
//           className="w-full p-3 mb-5 bg-black border border-zinc-700 rounded"
//           placeholder="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {/* BUTTONS */}
//         <div className="flex gap-3">
//           <button
//             onClick={login}
//             disabled={loading}
//             className="flex-1 bg-white text-black p-3 rounded"
//           >
//             Login
//           </button>

//           <button
//             onClick={register}
//             disabled={loading}
//             className="flex-1 bg-gray-700 p-3 rounded"
//           >
//             Register
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin");
  }

  return (
    <main className="min-h-screen text-white flex items-center justify-center">
      <div className="w-75 flex flex-col gap-3">

        <h1 className="text-2xl mb-4">Login</h1>

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
          onClick={login}
          className="bg-white text-black p-2"
        >
          Login
        </button>

      </div>
    </main>
  );
}