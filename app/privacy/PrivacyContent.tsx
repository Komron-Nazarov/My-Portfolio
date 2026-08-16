"use client";

import { motion } from "framer-motion";
import { useLang } from "@/src/hooks/useLang";

export default function PrivacyContent() {
  const { lang } = useLang();

  const content =
    lang === "ru"
      ? {
          eyebrow: "ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ",
          title: "Политика конфиденциальности",
          updated: "Последнее обновление: август 2026",
          intro:
            "Эта политика объясняет, какие данные могут обрабатываться при использовании этого сайта и как они используются.",
          sections: [
            {
              title: "Какие данные могут собираться",
              text:
                "Если вы используете контактную форму, могут обрабатываться ваше имя, email и текст сообщения.",
            },
            {
              title: "Для чего используются данные",
              text:
                "Данные используются только для ответа на ваше сообщение, обсуждения проекта или связи по вашему запросу.",
            },
            {
              title: "Передача данных",
              text:
                "Данные могут обрабатываться техническими сервисами, необходимыми для работы сайта и отправки сообщений.",
            },
            {
              title: "Хранение данных",
              text:
                "Данные хранятся только столько, сколько это необходимо для обработки обращения и связанной с ним деловой переписки.",
            },
            {
              title: "Cookies и аналитика",
              text:
                "Сайт не использует рекламные или маркетинговые cookies, если это отдельно не указано. Если аналитика будет добавлена в будущем, эта политика будет обновлена.",
            },
            {
              title: "Ваши права",
              text:
                "Вы можете запросить удаление или уточнение ваших данных, отправив запрос на контактный email, указанный на сайте.",
            },
            {
              title: "Контакты",
              text:
                "По вопросам конфиденциальности можно написать на komron7nazarov@gmail.com.",
            },
          ],
        }
      : {
          eyebrow: "LEGAL",
          title: "Privacy Policy",
          updated: "Last updated: August 2026",
          intro:
            "This policy explains what information may be processed when you use this website and how that information is used.",
          sections: [
            {
              title: "Information that may be collected",
              text:
                "If you use the contact form, your name, email address and message may be processed.",
            },
            {
              title: "How information is used",
              text:
                "Information is used only to respond to your message, discuss a project or contact you regarding your request.",
            },
            {
              title: "Service providers",
              text:
                "Information may be processed by technical services required to operate the website and deliver messages.",
            },
            {
              title: "Data retention",
              text:
                "Information is retained only for as long as necessary to handle the request and any related professional communication.",
            },
            {
              title: "Cookies and analytics",
              text:
                "This website does not use advertising or marketing cookies unless explicitly stated. If analytics are added in the future, this policy will be updated.",
            },
            {
              title: "Your rights",
              text:
                "You may request deletion or clarification of your information by contacting the email address listed on this website.",
            },
            {
              title: "Contact",
              text:
                "For privacy-related questions, contact komron7nazarov@gmail.com.",
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
            right-[-10%]
            top-[10%]
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