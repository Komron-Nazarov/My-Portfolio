"use client";

import { motion } from "framer-motion";
import { useLang } from "@/src/hooks/useLang";

export default function TermsContent() {
  const { lang } = useLang();

  const content =
    lang === "ru"
      ? {
          eyebrow: "ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ",
          title: "Условия использования",
          updated: "Последнее обновление: август 2026",
          intro:
            "Используя этот сайт, вы соглашаетесь с условиями, описанными ниже.",
          sections: [
            {
              title: "Назначение сайта",
              text:
                "Сайт является личным профессиональным портфолио и предназначен для демонстрации проектов, навыков и опыта.",
            },
            {
              title: "Контент",
              text:
                "Тексты, визуальные материалы, дизайн и другой контент сайта не должны копироваться или использоваться в коммерческих целях без разрешения, если иное не указано отдельно.",
            },
            {
              title: "Проекты и демонстрации",
              text:
                "Некоторые проекты могут быть учебными, экспериментальными или находиться в разработке. Демонстрационные версии могут изменяться или быть временно недоступны.",
            },
            {
              title: "Внешние ссылки",
              text:
                "Сайт может содержать ссылки на GitHub, демонстрационные проекты и сторонние сервисы. Я не отвечаю за содержание и работу сторонних ресурсов.",
            },
            {
              title: "Отказ от гарантий",
              text:
                "Информация на сайте предоставляется в ознакомительных целях и может обновляться без предварительного уведомления.",
            },
            {
              title: "Контакты",
              text:
                "По вопросам использования материалов сайта можно написать на komron7nazarov@gmail.com.",
            },
          ],
        }
      : {
          eyebrow: "LEGAL",
          title: "Terms of Use",
          updated: "Last updated: August 2026",
          intro:
            "By using this website, you agree to the terms described below.",
          sections: [
            {
              title: "Purpose of this website",
              text:
                "This website is a personal professional portfolio intended to showcase projects, skills and experience.",
            },
            {
              title: "Content",
              text:
                "Text, visual materials, design and other website content may not be copied or used commercially without permission unless otherwise stated.",
            },
            {
              title: "Projects and demos",
              text:
                "Some projects may be educational, experimental or still in development. Demo versions may change or become temporarily unavailable.",
            },
            {
              title: "External links",
              text:
                "The website may include links to GitHub, live demos and third-party services. I am not responsible for third-party content or availability.",
            },
            {
              title: "No warranties",
              text:
                "Information on this website is provided for informational purposes and may be updated without prior notice.",
            },
            {
              title: "Contact",
              text:
                "For questions regarding use of website materials, contact komron7nazarov@gmail.com.",
            },
          ],
        };

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#070707]
        px-6
        py-28
        text-white
        md:py-36
      "
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[-10%]
            top-[12%]
            h-[460px]
            w-[460px]
            rounded-full
            bg-red-600/[0.018]
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.012]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "84px 84px",
          }}
        />
      </div>

      <div className="container-main relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-3"
        >
          <span className="h-[12px] w-[2px] bg-red-600" />

          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.22em]
              text-white/35
            "
          >
            {content.eyebrow}
          </p>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 22,
            filter: "blur(5px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-5
            text-4xl
            font-semibold
            tracking-[-0.045em]
            md:text-6xl
          "
        >
          {content.title}
          <span className="text-red-600">.</span>
        </motion.h1>

        <p className="mt-4 text-sm text-white/30">
          {content.updated}
        </p>

        <p
          className="
            mt-10
            max-w-2xl
            text-base
            leading-8
            text-white/50
          "
        >
          {content.intro}
        </p>

        <div className="mt-14">
          {content.sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
              }}
              className="
                group
                relative
                border-t
                border-white/[0.07]
                py-8
              "
            >
              <span
                className="
                  absolute
                  left-0
                  top-[-1px]
                  h-[2px]
                  w-0
                  bg-red-600
                  transition-all
                  duration-500
                  group-hover:w-12
                "
              />

              <h2
                className="
                  text-lg
                  font-medium
                  tracking-[-0.015em]
                  text-white/85
                "
              >
                {section.title}
              </h2>

              <p
                className="
                  mt-3
                  max-w-2xl
                  leading-7
                  text-white/42
                "
              >
                {section.text}
              </p>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}