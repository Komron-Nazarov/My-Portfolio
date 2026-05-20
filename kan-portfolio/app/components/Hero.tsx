"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col text-center px-6 pt-28 md:pt-32 items-center justify-center min-h-[80vh]">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4"
      >
        Komron Nazarov
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-gray-300 mb-2"
      >
        Full-stack Developer
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-xl text-gray-400 mb-6"
      >
        I build modern web applications using Next.js, Go and PostgreSQL.
        I focus on performance, clean architecture and real-world systems.
      </motion.p>

      <motion.a
        href="#contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-300 transition"
      >
        Contact Me
      </motion.a>

    </section>
  );
}