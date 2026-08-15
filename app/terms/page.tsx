"use client";

import { useLang } from "@/src/hooks/useLang";

export default function TermsPage() {
  const { lang } = useLang();

  const content =
    lang === "ru"
      ? {
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