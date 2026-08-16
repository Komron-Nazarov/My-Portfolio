// // // // "use client";

// // // // import { useState } from "react";
// // // // import { supabase } from "@/lib/supabase";
// // // // import { useRouter } from "next/navigation";

// // // // export default function LoginPage() {

// // // //   const router = useRouter();

// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");

// // // //   const login = async () => {

// // // //     const { error } = await supabase.auth.signInWithPassword({
// // // //       email,
// // // //       password,
// // // //     });

// // // //     if (error) {
// // // //       alert(error.message);
// // // //       return;
// // // //     }

// // // //     router.push("/admin");
// // // //   };

// // // //   return (
// // // //     <main className="min-h-screen bg-black text-white flex items-center justify-center">

// // // //       <div className="w-full max-w-sm flex flex-col gap-4">

// // // //         <h1 className="text-3xl font-bold">
// // // //           Login
// // // //         </h1>

// // // //         <input
// // // //           type="email"
// // // //           placeholder="email"
// // // //           value={email}
// // // //           onChange={(e) => setEmail(e.target.value)}
// // // //           className="p-3 rounded bg-gray-900"
// // // //         />

// // // //         <input
// // // //           type="password"
// // // //           placeholder="password"
// // // //           value={password}
// // // //           onChange={(e) => setPassword(e.target.value)}
// // // //           className="p-3 rounded bg-gray-900"
// // // //         />

// // // //         <button
// // // //           onClick={login}
// // // //           className="bg-white text-black py-3 rounded font-bold cursor-pointer"
// // // //         >
// // // //           Login
// // // //         </button>

// // // //       </div>

// // // //     </main>
// // // //   );
// // // // }






// // // "use client";

// // // import { useState } from "react";
// // // import { useRouter } from "next/navigation";
// // // import { supabase } from "@/lib/supabase";

// // // export default function LoginPage() {
// // //   const router = useRouter();

// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [loading, setLoading] = useState(false);

// // //   // LOGIN
// // //   async function login() {
// // //     setLoading(true);

// // //     const { error } = await supabase.auth.signInWithPassword({
// // //       email,
// // //       password,
// // //     });

// // //     setLoading(false);

// // //     if (error) {
// // //       alert(error.message);
// // //       return;
// // //     }

// // //     router.push("/admin");
// // //   }

// // //   // REGISTER
// // //   async function register() {
// // //     setLoading(true);

// // //     const { error } = await supabase.auth.signUp({
// // //       email,
// // //       password,
// // //     });

// // //     setLoading(false);

// // //     if (error) {
// // //       alert(error.message);
// // //       return;
// // //     }

// // //     alert("Check your email (confirmation link sent)");
// // //   }

// // //   return (
// // //     <main className="min-h-screen bg-black text-white flex items-center justify-center">
// // //       <div className="w-full max-w-md p-6 bg-zinc-900 rounded-xl">

// // //         <h1 className="text-2xl mb-6 font-bold">Login</h1>

// // //         {/* EMAIL */}
// // //         <input
// // //           className="w-full p-3 mb-3 bg-black border border-zinc-700 rounded"
// // //           placeholder="Email"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //         />

// // //         {/* PASSWORD */}
// // //         <input
// // //           className="w-full p-3 mb-5 bg-black border border-zinc-700 rounded"
// // //           placeholder="Password"
// // //           type="password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //         />

// // //         {/* BUTTONS */}
// // //         <div className="flex gap-3">
// // //           <button
// // //             onClick={login}
// // //             disabled={loading}
// // //             className="flex-1 bg-white text-black p-3 rounded"
// // //           >
// // //             Login
// // //           </button>

// // //           <button
// // //             onClick={register}
// // //             disabled={loading}
// // //             className="flex-1 bg-gray-700 p-3 rounded"
// // //           >
// // //             Register
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </main>
// // //   );
// // // }


// // // "use client";

// // // import { useState } from "react";
// // // import { supabase } from "@/lib/supabase";
// // // import { useRouter } from "next/navigation";

// // // export default function LoginPage() {
// // //   const router = useRouter();

// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   async function login() {
// // //     const { error } = await supabase.auth.signInWithPassword({
// // //       email,
// // //       password,
// // //     });

// // //     if (error) {
// // //       alert(error.message);
// // //       return;
// // //     }

// // //     router.push("/admin");
// // //   }

// // //   return (
// // //     <main className="min-h-screen text-white flex items-center justify-center">
// // //       <div className="w-75 flex flex-col gap-3">

// // //         <h1 className="text-2xl mb-4">Login</h1>

// // //         <input
// // //           placeholder="email"
// // //           className="p-2 bg-gray-900"
// // //           onChange={(e) => setEmail(e.target.value)}
// // //         />

// // //         <input
// // //           type="password"
// // //           placeholder="password"
// // //           className="p-2 bg-gray-900"
// // //           onChange={(e) => setPassword(e.target.value)}
// // //         />

// // //         <button
// // //           onClick={login}
// // //           className="bg-white text-black p-2"
// // //         >
// // //           Login
// // //         </button>

// // //       </div>
// // //     </main>
// // //   );
// // // }




// // "use client";

// // import { useState } from "react";
// // import { supabase } from "@/lib/supabase";
// // import { useRouter } from "next/navigation";

// // export default function LoginPage() {
// //   const router = useRouter();

// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   async function login() {
// //     setLoading(true);

// //     const { error } = await supabase.auth.signInWithPassword({
// //       email,
// //       password,
// //     });

// //     setLoading(false);

// //     if (error) {
// //       alert(error.message);
// //       return;
// //     }

// //     router.push("/admin");
// //   }

// //   return (
// //     <main className="min-h-screen flex items-center justify-center text-white bg-black relative overflow-hidden">

// //       {/* cosmic glow background */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-black" />

// //       {/* floating red aura */}
// //       <div className="absolute w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full top-1/4 left-1/2 -translate-x-1/2" />

// //       <div className="relative w-full max-w-md px-6">

// //         {/* card */}
// //         <div className="backdrop-blur-xl bg-black/40 border border-red-500/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(255,0,0,0.15)]">

// //           <h1 className="text-3xl font-bold text-center mb-6">
// //             Login
// //             <span className="text-red-500 drop-shadow-[0_0_10px_red]">.</span>
// //           </h1>

// //           <div className="flex flex-col gap-4">

// //             <input
// //               placeholder="Email"
// //               className="
// //                 p-3
// //                 rounded-xl
// //                 bg-black/60
// //                 border border-red-500/20
// //                 outline-none

// //                 focus:border-red-500
// //                 focus:shadow-[0_0_15px_rgba(255,0,0,0.3)]

// //                 transition
// //               "
// //               onChange={(e) => setEmail(e.target.value)}
// //             />

// //             <input
// //               type="password"
// //               placeholder="Password"
// //               className="
// //                 p-3
// //                 rounded-xl
// //                 bg-black/60
// //                 border border-red-500/20
// //                 outline-none

// //                 focus:border-red-500
// //                 focus:shadow-[0_0_15px_rgba(255,0,0,0.3)]

// //                 transition
// //               "
// //               onChange={(e) => setPassword(e.target.value)}
// //             />

// //             <button
// //               onClick={login}
// //               disabled={loading}
// //               className="
// //                 mt-2
// //                 p-3
// //                 rounded-xl

// //                 bg-red-600
// //                 text-white

// //                 shadow-[0_0_25px_rgba(255,0,0,0.35)]

// //                 hover:scale-[1.03]
// //                 hover:shadow-[0_0_35px_rgba(255,0,0,0.6)]

// //                 transition
// //               "
// //             >
// //               {loading ? "Loading..." : "Login"}
// //             </button>

// //           </div>

// //         </div>
// //       </div>
// //     </main>
// //   );
// // }




// "use client";

// import { FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";
// import { LockKeyhole, LoaderCircle } from "lucide-react";

// import { supabase } from "@/lib/supabase";

// export default function LoginPage() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   async function login(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     if (!email.trim() || !password) {
//       setErrorMessage("Enter email and password.");
//       return;
//     }

//     try {
//       setLoading(true);
//       setErrorMessage("");

//       const { error } = await supabase.auth.signInWithPassword({
//         email: email.trim(),
//         password,
//       });

//       if (error) {
//         setErrorMessage("Invalid email or password.");
//         return;
//       }

//       router.replace("/admin");
//       router.refresh();
//     } catch {
//       setErrorMessage("Unable to sign in right now.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <main
//       className="
//         relative
//         flex
//         min-h-screen
//         items-center
//         justify-center
//         overflow-hidden
//         bg-[#050505]
//         px-6
//         text-white
//       "
//     >
//       <div className="pointer-events-none absolute inset-0">
//         <div
//           className="
//             absolute
//             left-1/2
//             top-1/3
//             h-[480px]
//             w-[480px]
//             -translate-x-1/2
//             rounded-full
//             bg-indigo-500/[0.035]
//             blur-[160px]
//           "
//         />

//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.02]
//           "
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
//             backgroundSize: "80px 80px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 w-full max-w-[420px]">
//         <div className="mb-8 text-center">
//           <div
//             className="
//               mx-auto
//               flex
//               h-11
//               w-11
//               items-center
//               justify-center
//               rounded-2xl
//               border
//               border-white/[0.08]
//               bg-white/[0.03]
//               text-white/50
//             "
//           >
//             <LockKeyhole size={18} strokeWidth={1.7} />
//           </div>

//           <h1
//             className="
//               mt-5
//               text-3xl
//               font-semibold
//               tracking-[-0.04em]
//             "
//           >
//             Admin access
//           </h1>

//           <p className="mt-2 text-sm text-white/35">
//             Sign in to manage portfolio content.
//           </p>
//         </div>

//         <form
//           onSubmit={login}
//           className="
//             rounded-[28px]
//             border
//             border-white/[0.08]
//             bg-white/[0.02]
//             p-6
//             backdrop-blur-xl
//             md:p-7
//           "
//         >
//           <div>
//             <label
//               htmlFor="admin-email"
//               className="mb-2 block text-xs font-medium text-white/40"
//             >
//               Email
//             </label>

//             <input
//               id="admin-email"
//               type="email"
//               autoComplete="email"
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//               className="
//                 h-13
//                 w-full
//                 rounded-xl
//                 border
//                 border-white/[0.08]
//                 bg-white/[0.025]
//                 px-4
//                 text-sm
//                 text-white
//                 outline-none
//                 transition
//                 placeholder:text-white/20
//                 hover:border-white/[0.13]
//                 focus:border-white/[0.22]
//                 focus:bg-white/[0.04]
//               "
//               placeholder="admin@example.com"
//             />
//           </div>

//           <div className="mt-5">
//             <label
//               htmlFor="admin-password"
//               className="mb-2 block text-xs font-medium text-white/40"
//             >
//               Password
//             </label>

//             <input
//               id="admin-password"
//               type="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//               className="
//                 h-13
//                 w-full
//                 rounded-xl
//                 border
//                 border-white/[0.08]
//                 bg-white/[0.025]
//                 px-4
//                 text-sm
//                 text-white
//                 outline-none
//                 transition
//                 placeholder:text-white/20
//                 hover:border-white/[0.13]
//                 focus:border-white/[0.22]
//                 focus:bg-white/[0.04]
//               "
//               placeholder="••••••••"
//             />
//           </div>

//           {errorMessage && (
//             <div
//               role="alert"
//               className="
//                 mt-5
//                 rounded-xl
//                 border
//                 border-red-400/10
//                 bg-red-400/[0.035]
//                 px-4
//                 py-3
//                 text-xs
//                 text-white/50
//               "
//             >
//               {errorMessage}
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={loading}
//             className="
//               mt-6
//               flex
//               h-13
//               w-full
//               items-center
//               justify-center
//               gap-2
//               rounded-xl
//               bg-white
//               text-sm
//               font-medium
//               !text-black
//               transition-all
//               duration-300
//               hover:bg-white/90
//               disabled:cursor-not-allowed
//               disabled:opacity-60
//             "
//           >
//             {loading ? (
//               <>
//                 <LoaderCircle size={15} className="animate-spin" />
//                 Signing in...
//               </>
//             ) : (
//               "Sign in"
//             )}
//           </button>
//         </form>

//         <p className="mt-5 text-center text-[11px] text-white/20">
//           Restricted administration area
//         </p>
//       </div>
//     </main>
//   );
// }







"use client";

import {
  FormEvent,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import {
  LockKeyhole,
  LoaderCircle,
} from "lucide-react";

import { motion } from "framer-motion";

import { supabase } from "@/lib/supabase";
import { useLang } from "@/src/hooks/useLang";

export default function LoginPage() {
  const router = useRouter();

  const { t } = useLang();

  const content = t.loginSection;

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [
    errorMessage,
    setErrorMessage,
  ] = useState("");

  async function login(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (
      !email.trim() ||
      !password
    ) {
      setErrorMessage(
        content.required
      );

      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");

      const { error } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (error) {
        setErrorMessage(
          content.invalid
        );

        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch {
      setErrorMessage(
        content.unavailable
      );
    } finally {
      setLoading(false);
    }
  }

  const inputClassName = `
    h-13
    w-full

    rounded-xl

    border
    border-white/[0.08]

    bg-white/[0.025]

    px-4

    text-sm
    text-white

    outline-none

    transition-all
    duration-300

    placeholder:text-white/20

    hover:border-white/[0.13]

    focus:border-red-600/55
    focus:bg-white/[0.04]

    focus:ring-4
    focus:ring-red-600/[0.04]
  `;

  return (
    <main
      className="
        relative

        flex
        min-h-screen

        items-center
        justify-center

        overflow-hidden

        bg-[#050505]

        px-6

        text-white
      "
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute

            left-1/2
            top-1/3

            h-[480px]
            w-[480px]

            -translate-x-1/2

            rounded-full

            bg-red-600/[0.02]

            blur-[160px]
          "
        />

        <div
          className="
            absolute
            inset-0

            opacity-[0.018]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",

            backgroundSize:
              "80px 80px",
          }}
        />
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10

          w-full

          max-w-[420px]
        "
      >
        {/* HEADER */}

        <div className="mb-8 text-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="
              relative

              mx-auto

              flex
              h-11
              w-11

              items-center
              justify-center

              overflow-hidden

              rounded-2xl

              border
              border-white/[0.08]

              bg-white/[0.03]

              text-white/55
            "
          >
            <span
              className="
                absolute

                bottom-0
                left-0

                h-[2px]
                w-full

                bg-red-600
              "
            />

            <LockKeyhole
              size={18}
              strokeWidth={1.7}
            />
          </motion.div>

          <h1
            className="
              mt-5

              text-3xl
              font-semibold

              tracking-[-0.04em]
            "
          >
            {content.title}
          </h1>

          <p
            className="
              mt-2

              text-sm

              text-white/40
            "
          >
            {content.subtitle}
          </p>
        </div>

        {/* FORM */}

        <form
          onSubmit={login}
          className="
            relative

            overflow-hidden

            rounded-[28px]

            border
            border-white/[0.08]

            bg-white/[0.02]

            p-6

            backdrop-blur-xl

            md:p-7
          "
        >
          {/* TOP BRAND LINE */}

          <motion.div
            initial={{
              scaleX: 0,
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute

              left-7
              top-0

              h-[2px]
              w-16

              origin-left

              bg-red-600
            "
          />

          {/* EMAIL */}

          <div>
            <label
              htmlFor="admin-email"
              className="
                mb-2
                block

                text-xs
                font-medium

                text-white/45
              "
            >
              {content.email}
            </label>

            <input
              id="admin-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) =>
                setEmail(
                  event.target.value
                )
              }
              className={
                inputClassName
              }
              placeholder={
                content.emailPlaceholder
              }
            />
          </div>

          {/* PASSWORD */}

          <div className="mt-5">
            <label
              htmlFor="admin-password"
              className="
                mb-2
                block

                text-xs
                font-medium

                text-white/45
              "
            >
              {content.password}
            </label>

            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) =>
                setPassword(
                  event.target.value
                )
              }
              className={
                inputClassName
              }
              placeholder={
                content.passwordPlaceholder
              }
            />
          </div>

          {/* ERROR */}

          {errorMessage && (
            <motion.div
              initial={{
                opacity: 0,
                y: 6,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              role="alert"
              className="
                relative

                mt-5

                overflow-hidden

                rounded-xl

                border
                border-red-600/20

                bg-red-600/[0.035]

                px-4
                py-3

                text-xs

                text-white/55
              "
            >
              <span
                className="
                  absolute

                  bottom-0
                  left-0
                  top-0

                  w-[2px]

                  bg-red-600
                "
              />

              {errorMessage}
            </motion.div>
          )}

          {/* SUBMIT */}

          <button
            type="submit"
            disabled={loading}
            className="
              group

              relative

              mt-6

              flex
              h-13
              w-full

              items-center
              justify-center

              gap-2

              overflow-hidden

              rounded-xl

              bg-white

              text-sm
              font-semibold

              !text-black

              transition-all
              duration-300

              hover:scale-[1.01]
              hover:bg-white/90

              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            <span
              className="
                absolute

                bottom-0
                left-0

                h-[2px]
                w-0

                bg-red-600

                transition-all
                duration-500

                group-hover:w-full
              "
            />

            {loading ? (
              <>
                <LoaderCircle
                  size={15}
                  className="animate-spin"
                />

                {content.signingIn}
              </>
            ) : (
              content.signIn
            )}
          </button>
        </form>

        <p
          className="
            mt-5

            text-center

            text-[11px]

            text-white/22
          "
        >
          {content.restricted}
        </p>
      </motion.div>
    </main>
  );
}