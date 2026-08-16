// "use client";

// import { motion } from "framer-motion";
// import { useLang } from "@/src/hooks/useLang";

// export default function ProjectsHeader() {
//   const { lang } = useLang();

//   const content =
//     lang === "ru"
//       ? {
//           eyebrow: "ИЗБРАННЫЕ РАБОТЫ",
//           title: "Проекты, которые",
//           titleAccent: "показывают мой подход.",
//           description:
//             "Веб-приложения, backend-системы, Telegram-инструменты и эксперименты, где я работаю не только над интерфейсом, но и над архитектурой, данными и логикой продукта.",
//         }
//       : {
//           eyebrow: "SELECTED WORK",
//           title: "Projects that show",
//           titleAccent: "how I think and build.",
//           description:
//             "Web applications, backend systems, Telegram tools and experiments where I work not only on the interface, but also on architecture, data and product logic.",
//         };

//   return (
//     <div className="mb-16 md:mb-20">
//       <motion.p
//         initial={{ opacity: 0, y: 12 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="
//           mb-6
//           text-xs
//           font-medium
//           uppercase
//           tracking-[0.24em]
//           text-white/35
//         "
//       >
//         {content.eyebrow}
//       </motion.p>

//       <motion.h2
//         initial={{ opacity: 0, y: 24 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="
//           max-w-4xl
//           text-4xl
//           font-semibold
//           leading-[1.02]
//           tracking-[-0.045em]
//           text-white
//           md:text-6xl
//         "
//       >
//         {content.title}

//         <span className="mt-2 block text-white/35">
//           {content.titleAccent}
//         </span>
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: 18 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.65, delay: 0.1 }}
//         className="
//           mt-8
//           max-w-2xl
//           text-base
//           leading-8
//           text-white/40
//           md:text-lg
//         "
//       >
//         {content.description}
//       </motion.p>
//     </div>
//   );
// }





"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/src/hooks/useLang";

export default function ProjectsHeader() {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();

  const content = t.projectsSection;

  return (
    <div className="mb-16 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mb-6
          flex
          items-center
          gap-3
        "
      >
        <span className="h-[12px] w-[2px] bg-red-600" />

        <p
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.24em]
            text-white/40
          "
        >
          {content.eyebrow}
        </p>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
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
        <span className="block">
          {content.title}
        </span>

        <motion.span
          initial={{ color: "rgba(255,255,255,0.35)" }}
          whileInView={{ color: "#dc2626" }}
          viewport={{ once: true }}
          whileHover={
            reduceMotion
              ? undefined
              : {
                  y: -5,
                  scale: 1.025,
                  textShadow:
                    "0 12px 30px rgba(220,38,38,0.18)",
                }
          }
          transition={{
            duration: 0.6,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-2
            block
            w-fit
            cursor-default
            origin-bottom
          "
        >
          {content.titleAccent}
        </motion.span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.65,
          delay: 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mt-8
          max-w-2xl
          text-base
          leading-8
          text-white/50
          md:text-lg
        "
      >
        {content.description}
      </motion.p>
    </div>
  );
}