"use client";

import { motion } from "framer-motion";
import { useLang } from "@/src/hooks/useLang";

export default function ProjectsHeader() {
  const { lang } = useLang();

  const content =
    lang === "ru"
      ? {
          eyebrow: "ИЗБРАННЫЕ РАБОТЫ",
          title: "Проекты, которые",
          titleAccent: "показывают мой подход.",
          description:
            "Веб-приложения, backend-системы, Telegram-инструменты и эксперименты, где я работаю не только над интерфейсом, но и над архитектурой, данными и логикой продукта.",
        }
      : {
          eyebrow: "SELECTED WORK",
          title: "Projects that show",
          titleAccent: "how I think and build.",
          description:
            "Web applications, backend systems, Telegram tools and experiments where I work not only on the interface, but also on architecture, data and product logic.",
        };

  return (
    <div className="mb-16 md:mb-20">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          mb-6
          text-xs
          font-medium
          uppercase
          tracking-[0.24em]
          text-white/35
        "
      >
        {content.eyebrow}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          max-w-4xl
          text-4xl
          font-semibold
          leading-[1.02]
          tracking-[-0.045em]
          text-white
          md:text-6xl
        "
      >
        {content.title}

        <span className="mt-2 block text-white/35">
          {content.titleAccent}
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="
          mt-8
          max-w-2xl
          text-base
          leading-8
          text-white/40
          md:text-lg
        "
      >
        {content.description}
      </motion.p>
    </div>
  );
}