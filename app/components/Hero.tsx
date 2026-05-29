// "use client";

// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="flex flex-col text-center px-6 pt-28 md:pt-32 items-center justify-center min-h-[80vh]">

//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-5xl font-bold mb-4"
//       >
//         Komron Nazarov
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//         className="text-xl text-gray-300 mb-2"
//       >
//         Full-stack Developer
//       </motion.p>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="max-w-xl text-gray-400 mb-6"
//       >
//         I build modern web applications using Next.js, Go and PostgreSQL.
//         I focus on performance, clean architecture and real-world systems.
//       </motion.p>

//       <motion.a
//         href="#contact"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.7 }}
//         className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-300 transition"
//       >
//         Contact Me
//       </motion.a>

//     </section>
//   );
// }





"use client";

import Link from "next/link";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* LIGHT */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-175 h-175 bg-red-600/10 blur-[180px]" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-20 max-w-6xl w-full">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          {/* BADGE */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(255,0,0,.2)",
                "0 0 50px rgba(255,0,0,.4)",
                "0 0 20px rgba(255,0,0,.2)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="inline-flex mb-8 rounded-full border border-red-900 bg-red-950/20 px-6 py-2 backdrop-blur-lg"
          >
            <span className="text-red-300 text-sm tracking-[0.25em] uppercase">
              Fullstack-Developer
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-black leading-none"
          >
            <span className="block text-white text-6xl md:text-8xl">
              KOMRON
            </span>

            <span
              className="block text-6xl md:text-8xl
              bg-linear-to-r
              from-white
              via-red-400
              to-red-700
              bg-clip-text
              text-transparent"
            >
              NAZAROV
            </span>
          </motion.h1>

          {/* LINE */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 220 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-8 h-0.5
            bg-linear-to-r
            from-transparent
            via-red-500
            to-transparent"
          />

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 max-w-3xl mx-auto
            text-gray-300
            text-lg
            md:text-xl
            leading-9"
          >
            Building futuristic digital products,
            scalable platforms and interactive experiences.

            <br />

            Next.js • Go • PostgreSQL • React
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-col md:flex-row justify-center gap-5"
          >

            <Link
              href="/projects"
              className="
              group
              px-8
              py-4
              rounded-2xl
              border
              border-red-700
              bg-red-900/20
              backdrop-blur-xl
              hover:scale-[1.04]
              transition"
            >
              <span className="text-white">
                Explore Projects
              </span>
            </Link>

            <Link
              href="/contact"
              className="
              px-8
              py-4
              rounded-2xl
              bg-white
              text-black
              hover:scale-[1.04]
              transition"
            >
              Contact Me
            </Link>

          </motion.div>

          {/* STATS */}
          <div className="mt-24 grid grid-cols-3 gap-5">

            {[
              ["Frontend", "React / Next.js"],
              ["Backend", "Go / Python"],
              ["Database", "PostgreSQL"],
            ].map(([a, b]) => (
              <div
                key={a}
                className="
                rounded-3xl
                border
                border-red-950
                bg-black/40
                backdrop-blur-lg
                p-6"
              >
                <div className="text-red-400 text-xl font-bold">
                  {a}
                </div>

                <div className="text-gray-500 mt-2">
                  {b}
                </div>
              </div>
            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}