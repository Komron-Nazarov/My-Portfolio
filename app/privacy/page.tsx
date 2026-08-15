"use client";

import { useLang } from "@/src/hooks/useLang";

export default function PrivacyPage() {
  const { lang } = useLang();

  const content =
    lang === "ru"
      ? {
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
                "Данные могут обрабатываться техническими сервисами, необходимыми для работы сайта и отправки сообщений, например сервисом отправки email.",
            },
            {
              title: "Хранение",
              text:
                "Данные хранятся только столько, сколько это необходимо для обработки обращения и дальнейшей деловой переписки.",
            },
            {
              title: "Cookies и аналитика",
              text:
                "Сайт не использует рекламные или маркетинговые cookies, если это отдельно не указано. Если аналитика будет добавлена в будущем, эта политика будет обновлена.",
            },
            {
              title: "Ваши права",
              text:
                "Вы можете запросить удаление или уточнение данных, отправив запрос на контактный email, указанный на сайте.",
            },
            {
              title: "Контакты",
              text:
                "По вопросам конфиденциальности можно написать на komron7nazarov@gmail.com.",
            },
          ],
        }
      : {
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
                "Information may be processed by technical services required to operate the website and deliver messages, such as email delivery providers.",
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
        min-h-screen
        bg-[#070707]
        px-6
        py-28
        text-white
      "
    >
      <div className="container-main max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-white/25">
          Legal
        </p>

        <h1
          className="
            mt-5
            text-4xl
            font-semibold
            tracking-[-0.04em]
            md:text-6xl
          "
        >
          {content.title}
        </h1>

        <p className="mt-4 text-sm text-white/30">
          {content.updated}
        </p>

        <p className="mt-10 text-base leading-8 text-white/50">
          {content.intro}
        </p>

        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <div
              key={section.title}
              className="
                border-t
                border-white/[0.07]
                pt-6
              "
            >
              <h2 className="text-lg font-medium text-white/80">
                {section.title}
              </h2>

              <p className="mt-3 leading-7 text-white/40">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}