// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft, ArrowUpRight } from "lucide-react";

// import { useLang } from "@/src/hooks/useLang";

// type ProjectDetailsProps = {
//   project: {
//     slug: string;
//     title: string;
//     description: string;
//     image?: string | null;
//     stack?: string[] | null;
//     github?: string | null;
//     demo?: string | null;
//   };
// };

// export default function ProjectDetails({
//   project,
// }: ProjectDetailsProps) {
//   const { lang } = useLang();

//   const content =
//     lang === "ru"
//       ? {
//           back: "Проекты",
//           caseStudy: "Кейс проекта",
//           overview: "Обзор",
//           engineering: "Разработка",
//           engineeringTitle:
//             "Проект построен вокруг реальной задачи.",
//           engineeringText:
//             "Здесь я объединяю интерфейс, бизнес-логику, работу с данными и технические решения в единый рабочий продукт. По мере развития проекта этот кейс будет дополняться архитектурой, сложностями и результатами.",
//           technologies: "Технологии",
//           demo: "Открыть демо",
//           github: "Исходный код",
//         }
//       : {
//           back: "Projects",
//           caseStudy: "Case Study",
//           overview: "Overview",
//           engineering: "Engineering",
//           engineeringTitle:
//             "Built around real product requirements.",
//           engineeringText:
//             "This project combines interface design, application logic, data handling and implementation decisions into a working product. The case study will evolve with deeper architecture, challenges and results.",
//           technologies: "Technologies",
//           demo: "Live Demo",
//           github: "Source Code",
//         };

//   return (
//     <main
//       className="
//         relative min-h-screen overflow-hidden
//         bg-[#070707] px-6 pb-28 pt-32 text-white
//       "
//     >
//       <div className="pointer-events-none absolute inset-0">
//         <div
//           className="
//             absolute right-[-10%] top-[8%]
//             h-[500px] w-[500px]
//             rounded-full bg-indigo-500/[0.025]
//             blur-[160px]
//           "
//         />
//       </div>

//       <div className="container-main relative z-10">
//         <Link
//           href="/projects"
//           className="
//             inline-flex items-center gap-2
//             text-sm text-white/35
//             transition-colors hover:text-white/70
//           "
//         >
//           <ArrowLeft size={15} />
//           {content.back}
//         </Link>

//         <div className="mt-12 max-w-4xl">
//           <p
//             className="
//               text-xs font-medium uppercase
//               tracking-[0.24em] text-white/30
//             "
//           >
//             {content.caseStudy}
//           </p>

//           <h1
//             className="
//               mt-5 text-5xl font-semibold
//               leading-[0.95] tracking-[-0.055em]
//               md:text-7xl
//             "
//           >
//             {project.title}
//           </h1>

//           <p
//             className="
//               mt-7 max-w-2xl text-base leading-8
//               text-white/40 md:text-lg
//             "
//           >
//             {project.description}
//           </p>
//         </div>

//         <div
//           className="
//             relative mt-14 aspect-[16/9]
//             overflow-hidden rounded-[30px]
//             border border-white/[0.08]
//             bg-white/[0.02]
//           "
//         >
//           <Image
//             src={project.image || "/placeholder.png"}
//             alt={project.title}
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover"
//           />

//           <div
//             className="
//               absolute inset-0
//               bg-gradient-to-t
//               from-black/40 via-transparent to-transparent
//             "
//           />
//         </div>

//         <div
//           className="
//             mt-16 grid gap-12
//             lg:grid-cols-[1fr_320px]
//             lg:gap-20
//           "
//         >
//           <div>
//             <section>
//               <p
//                 className="
//                   text-xs uppercase tracking-[0.2em]
//                   text-white/25
//                 "
//               >
//                 {content.overview}
//               </p>

//               <p
//                 className="
//                   mt-5 max-w-3xl text-base
//                   leading-8 text-white/50
//                   md:text-lg
//                 "
//               >
//                 {project.description}
//               </p>
//             </section>

//             <section
//               className="
//                 mt-12 border-t
//                 border-white/[0.07] pt-10
//               "
//             >
//               <p
//                 className="
//                   text-xs uppercase tracking-[0.2em]
//                   text-white/25
//                 "
//               >
//                 {content.engineering}
//               </p>

//               <h2
//                 className="
//                   mt-5 text-2xl font-medium
//                   tracking-[-0.03em]
//                   text-white/85
//                 "
//               >
//                 {content.engineeringTitle}
//               </h2>

//               <p
//                 className="
//                   mt-4 max-w-3xl
//                   leading-8 text-white/40
//                 "
//               >
//                 {content.engineeringText}
//               </p>
//             </section>
//           </div>

//           <aside
//             className="
//               h-fit rounded-[24px]
//               border border-white/[0.08]
//               bg-white/[0.02] p-6
//             "
//           >
//             <p
//               className="
//                 text-xs uppercase tracking-[0.18em]
//                 text-white/25
//               "
//             >
//               {content.technologies}
//             </p>

//             <div className="mt-5 flex flex-wrap gap-2">
//               {project.stack?.map((tech) => (
//                 <span
//                   key={tech}
//                   className="
//                     rounded-full border
//                     border-white/[0.08]
//                     px-3 py-1.5
//                     text-xs text-white/45
//                   "
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {(project.github || project.demo) && (
//               <div
//                 className="
//                   mt-7 border-t
//                   border-white/[0.07] pt-6
//                 "
//               >
//                 <div className="flex flex-col gap-3">
//                   {project.demo && (
//                     <a
//                       href={project.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="
//                         group flex items-center
//                         justify-between rounded-xl
//                         bg-white px-4 py-3
//                         text-sm font-medium text-black
//                       "
//                     >
//                       {content.demo}

//                       <ArrowUpRight
//                         size={15}
//                         className="
//                           transition-transform
//                           group-hover:-translate-y-0.5
//                           group-hover:translate-x-0.5
//                         "
//                       />
//                     </a>
//                   )}

//                   {project.github && (
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="
//                         group flex items-center
//                         justify-between rounded-xl
//                         border border-white/[0.1]
//                         px-4 py-3 text-sm
//                         text-white/60
//                         transition-colors
//                         hover:text-white
//                       "
//                     >
//                       {content.github}

//                       <ArrowUpRight
//                         size={15}
//                         className="
//                           transition-transform
//                           group-hover:-translate-y-0.5
//                           group-hover:translate-x-0.5
//                         "
//                       />
//                     </a>
//                   )}
//                 </div>
//               </div>
//             )}
//           </aside>
//         </div>
//       </div>
//     </main>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

import { useLang } from "@/src/hooks/useLang";

type ProjectDetailsProps = {
  project: {
    slug: string;
    title: string;
    description: string;
    image?: string | null;
    stack?: string[] | null;
    github?: string | null;
    demo?: string | null;
  };
};

export default function ProjectDetails({
  project,
}: ProjectDetailsProps) {
  const { t } = useLang();

  const content = t.projectsSection;

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden

        bg-[#070707]

        px-6
        pb-28
        pt-32

        text-white
      "
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute

            right-[-10%]
            top-[8%]

            h-[500px]
            w-[500px]

            rounded-full

            bg-red-600/[0.02]

            blur-[160px]
          "
        />
      </div>

      <div className="container-main relative z-10">
        {/* BACK */}

        <Link
          href="/projects"
          className="
            group

            inline-flex
            items-center
            gap-2

            text-sm
            text-white/40

            transition-colors

            hover:text-red-500
          "
        >
          <ArrowLeft
            size={15}
            className="
              transition-transform

              group-hover:-translate-x-1
            "
          />

          {content.back}
        </Link>

        {/* INTRO */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 max-w-4xl"
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-[12px]
                w-[2px]

                bg-red-600
              "
            />

            <p
              className="
                text-xs
                font-medium
                uppercase

                tracking-[0.24em]

                text-white/35
              "
            >
              {content.caseStudy}
            </p>
          </div>

          <h1
            className="
              mt-5

              text-5xl
              font-semibold

              leading-[0.95]

              tracking-[-0.055em]

              md:text-7xl
            "
          >
            {project.title}
          </h1>

          <p
            className="
              mt-7

              max-w-2xl

              text-base
              leading-8

              text-white/50

              md:text-lg
            "
          >
            {project.description}
          </p>
        </motion.div>

        {/* HERO IMAGE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.985,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative

            mt-14

            aspect-[16/9]

            overflow-hidden

            rounded-[30px]

            border
            border-white/[0.08]

            bg-white/[0.02]
          "
        >
          <Image
            src={
              project.image ||
              "/placeholder.png"
            }
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t

              from-black/45
              via-transparent
              to-transparent
            "
          />
        </motion.div>

        {/* CONTENT */}

        <div
          className="
            mt-16

            grid

            gap-12

            lg:grid-cols-[1fr_320px]

            lg:gap-20
          "
        >
          <div>
            {/* OVERVIEW */}

            <section>
              <SectionLabel>
                {content.overview}
              </SectionLabel>

              <p
                className="
                  mt-5

                  max-w-3xl

                  text-base
                  leading-8

                  text-white/55

                  md:text-lg
                "
              >
                {project.description}
              </p>
            </section>

            {/* ENGINEERING */}

            <section
              className="
                mt-12

                border-t
                border-white/[0.07]

                pt-10
              "
            >
              <SectionLabel>
                {content.engineering}
              </SectionLabel>

              <h2
                className="
                  mt-5

                  text-2xl
                  font-medium

                  tracking-[-0.03em]

                  text-white/90
                "
              >
                {content.engineeringTitle}
              </h2>

              <p
                className="
                  mt-4

                  max-w-3xl

                  leading-8

                  text-white/45
                "
              >
                {content.engineeringText}
              </p>
            </section>
          </div>

          {/* SIDEBAR */}

          <aside
            className="
              h-fit

              rounded-[24px]

              border
              border-white/[0.08]

              bg-white/[0.02]

              p-6
            "
          >
            <SectionLabel>
              {content.technologies}
            </SectionLabel>

            <div
              className="
                mt-5

                flex
                flex-wrap

                gap-2
              "
            >
              {project.stack?.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full

                    border
                    border-white/[0.09]

                    bg-white/[0.02]

                    px-3
                    py-1.5

                    text-xs

                    text-white/55

                    transition-colors

                    hover:border-red-600/50
                    hover:text-white
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {(project.github ||
              project.demo) && (
              <div
                className="
                  mt-7

                  border-t
                  border-white/[0.07]

                  pt-6
                "
              >
                <div className="flex flex-col gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group

                        flex
                        items-center
                        justify-between

                        rounded-xl

                        bg-white

                        px-4
                        py-3

                        text-sm
                        font-medium

                        !text-black

                        transition-transform

                        hover:scale-[1.015]
                      "
                    >
                      {content.liveDemo}

                      <ArrowUpRight
                        size={15}
                        className="
                          transition-transform

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group

                        flex
                        items-center
                        justify-between

                        rounded-xl

                        border
                        border-white/[0.1]

                        px-4
                        py-3

                        text-sm

                        text-white/60

                        transition-all

                        hover:border-red-600/50
                        hover:text-white
                      "
                    >
                      {content.sourceCode}

                      <ArrowUpRight
                        size={15}
                        className="
                          transition-transform

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </a>
                  )}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
      "
    >
      <span
        className="
          h-[10px]
          w-[2px]

          bg-red-600
        "
      />

      <p
        className="
          text-xs
          uppercase

          tracking-[0.2em]

          text-white/30
        "
      >
        {children}
      </p>
    </div>
  );
}