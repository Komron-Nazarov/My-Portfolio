// import TypingTitle from "../components/TypingTitle";

// export default function About() {
//   return (
//     <section
//       className="
//       relative
//       min-h-screen

//       flex
//       items-center

//       px-6
//       py-32

//       overflow-hidden
//     "
//     >
//       {/* LIGHT */}
//       <div
//         className="
//         absolute
//         top-[20%]
//         left-[20%]

//         w-[500px]
//         h-[500px]

//         rounded-full

//         bg-red-600/10

//         blur-[180px]
//       "
//       />

//       <div
//         className="
//         relative

//         max-w-6xl
//         mx-auto

//         grid
//         md:grid-cols-2

//         gap-16

//         items-center
//       "
//       >
//         {/* LEFT */}

//         <div>

//           <div
//             className="
//             inline-block

//             px-4
//             py-2

//             mb-6

//             rounded-full

//             border
//             border-red-500/30

//             text-red-300
//             text-sm

//             bg-red-900/10
//           "
//           >
//             ● ABOUT ME
//           </div>

//           {/* <h1
//             className="
//             text-5xl
//             md:text-7xl

//             font-black

//             leading-tight

//             text-white
//           "
//           >
//             Building
//             <br />

//             <span
//               className="
//               text-red-500

//               drop-shadow-[0_0_30px_red]
//             "
//             >
//               Digital
//             </span>

//             <br />

//             Systems
//           </h1>

//           <div
//             className="
//             mt-10

//             w-[140px]
//             h-[2px]

//             bg-gradient-to-r
//             from-red-500
//             to-transparent
//           "
//           /> */}

//           <TypingTitle
//   className="
//     text-5xl
//     md:text-7xl
//     font-black
//     leading-tight
//     text-white
//   "
//   parts={[
//     {
//       text: "Building\n",
//     },
//     {
//       text: "Digital\n",
//       className: `
//         text-red-500
//         drop-shadow-[0_0_30px_red]
//       `,
//     },
//     {
//       text: "Systems",
//     },
//   ]}
// />

// <div
//   className="
//     mt-10
//     w-[140px]
//     h-[2px]
//     bg-gradient-to-r
//     from-red-500
//     to-transparent
//   "
// />

//           <p
//             className="
//             mt-8

//             text-gray-300

//             text-lg

//             leading-9
//           "
//           >
//             I create scalable web applications
//             and modern interfaces.

//             Working with Next.js,
//             Go, PostgreSQL and
//             frontend technologies.

//             Also experienced with
//             economics and accounting
//             systems (1C).
//           </p>
//         </div>

//         {/* RIGHT */}

//         <div
//           className="
//           relative

//           rounded-[30px]

//           p-10

//           bg-black/30

//           border
//           border-red-900/40

//           backdrop-blur-xl

//           shadow-[0_0_80px_rgba(255,0,0,.08)]
//         "
//         >
//           <div
//             className="
//             absolute
//             top-0
//             left-0

//             w-full
//             h-[2px]

//             bg-gradient-to-r
//             from-transparent
//             via-red-500
//             to-transparent
//           "
//           />

//           <div className="space-y-10">

//             <div>
//               <div className="text-red-500 text-sm mb-2">
//                 EXPERIENCE
//               </div>

//               <div className="text-white text-4xl font-black">
//                 2+
//               </div>

//               <div className="text-gray-500">
//                 Years Learning Development
//               </div>
//             </div>

//             <div>
//               <div className="text-red-500 text-sm mb-2">
//                 STACK
//               </div>

//               <div className="flex flex-wrap gap-3">

//                 {[
//                   "JavaScript / Typescript",
//                   "Next.js",
//                   "React",
//                   "Go",
//                   "PostgreSQL",
//                   "Supabase",
//                   "Tailwind CSS",
//                   "Python",
//                 ].map((i) => (
//                   <span
//                     key={i}
//                     className="
//                     px-4
//                     py-2

//                     rounded-full

//                     border
//                     border-red-800

//                     text-gray-200

//                     hover:border-red-500
//                     hover:text-white

//                     transition
//                   "
//                   >
//                     {i}
//                   </span>
//                 ))}

//               </div>
//             </div>

//             <div>
//               <div className="text-red-500 text-sm mb-2">
//                 STATUS
//               </div>

//               <div className="text-white">
//                 Open for projects
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }






// "use client";

// import { motion } from "framer-motion";
// import {
//   Code2,
//   Database,
//   Smartphone,
//   Bot,
//   Server,
//   Boxes,
// } from "lucide-react";

// import { useLang } from "@/src/hooks/useLang";

// const stackGroups = {
//   web: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
//   backend: ["Go", "Gin", "Node.js"],
//   bots: ["Python", "Aiogram"],
//   mobile: ["Swift", "SwiftUI", "UIKit"],
//   data: ["PostgreSQL", "Supabase", "SQL"],
//   tools: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Railway"],
// };

// export default function About() {
//   const { lang } = useLang();

//   const content =
//     lang === "ru"
//       ? {
//           eyebrow: "ОБО МНЕ",
//           title: "Не только интерфейсы.",
//           titleAccent: "Я строю системы.",
//           description:
//             "Я разработчик, который работает сразу с несколькими уровнями продукта — от интерфейса и API до базы данных, Telegram-ботов и мобильных интерфейсов.",
//           descriptionSecond:
//             "Мне интересны проекты, где важно не просто сделать красивый экран, а продумать архитектуру, данные, пользовательский сценарий и довести идею до рабочего результата.",
//           focus: "Основные направления",
//           web: "Web",
//           backend: "Backend",
//           bots: "Telegram Bots",
//           mobile: "Mobile",
//           data: "Data",
//           tools: "Tools",
//           status: "Сейчас",
//           statusValue: "Развиваю full-stack и software engineering навыки",
//         }
//       : {
//           eyebrow: "ABOUT",
//           title: "More than interfaces.",
//           titleAccent: "I build systems.",
//           description:
//             "I’m a software developer working across multiple layers of a product — from interfaces and APIs to databases, Telegram bots and mobile experiences.",
//           descriptionSecond:
//             "I’m most interested in projects where the goal is not only to make something look good, but to think through architecture, data, user flow and turn an idea into a working product.",
//           focus: "Core areas",
//           web: "Web",
//           backend: "Backend",
//           bots: "Telegram Bots",
//           mobile: "Mobile",
//           data: "Data",
//           tools: "Tools",
//           status: "Current focus",
//           statusValue: "Growing across full-stack and software engineering",
//         };

//   const groups = [
//     {
//       title: content.web,
//       icon: Code2,
//       items: stackGroups.web,
//     },
//     {
//       title: content.backend,
//       icon: Server,
//       items: stackGroups.backend,
//     },
//     {
//       title: content.bots,
//       icon: Bot,
//       items: stackGroups.bots,
//     },
//     {
//       title: content.mobile,
//       icon: Smartphone,
//       items: stackGroups.mobile,
//     },
//     {
//       title: content.data,
//       icon: Database,
//       items: stackGroups.data,
//     },
//     {
//       title: content.tools,
//       icon: Boxes,
//       items: stackGroups.tools,
//     },
//   ];

//   return (
//     <section
//       id="about"
//       className="
//         relative
//         overflow-hidden
//         border-t
//         border-white/[0.06]
//         bg-[#070707]
//         px-6
//         py-28
//         md:py-36
//       "
//     >
//       <div className="pointer-events-none absolute inset-0">
//         <div
//           className="
//             absolute
//             left-[-10%]
//             top-[15%]
//             h-[420px]
//             w-[420px]
//             rounded-full
//             bg-indigo-500/[0.025]
//             blur-[150px]
//           "
//         />

//         <div
//           className="
//             absolute
//             right-[-10%]
//             bottom-[5%]
//             h-[400px]
//             w-[400px]
//             rounded-full
//             bg-white/[0.02]
//             blur-[160px]
//           "
//         />
//       </div>

//       <div className="container-main relative z-10">
//         <div
//           className="
//             grid
//             grid-cols-1
//             gap-16
//             lg:grid-cols-[0.95fr_1.05fr]
//             lg:gap-20
//           "
//         >
//           {/* LEFT */}

//           <div>
//             <motion.p
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="
//                 mb-6
//                 text-xs
//                 font-medium
//                 uppercase
//                 tracking-[0.24em]
//                 text-white/35
//               "
//             >
//               {content.eyebrow}
//             </motion.p>

//             <motion.h2
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="
//                 max-w-2xl
//                 text-4xl
//                 font-semibold
//                 leading-[1.02]
//                 tracking-[-0.045em]
//                 text-white
//                 md:text-6xl
//               "
//             >
//               {content.title}

//               <span className="mt-2 block text-white/35">
//                 {content.titleAccent}
//               </span>
//             </motion.h2>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="mt-9 max-w-xl space-y-5"
//             >
//               <p className="text-base leading-8 text-white/50 md:text-lg">
//                 {content.description}
//               </p>

//               <p className="text-base leading-8 text-white/35">
//                 {content.descriptionSecond}
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="
//                 mt-12
//                 border-t
//                 border-white/[0.08]
//                 pt-6
//               "
//             >
//               <p className="text-xs uppercase tracking-[0.2em] text-white/25">
//                 {content.status}
//               </p>

//               <p className="mt-3 max-w-lg text-sm leading-6 text-white/55">
//                 {content.statusValue}
//               </p>
//             </motion.div>
//           </div>

//           {/* RIGHT */}

//           <div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="
//                 rounded-[28px]
//                 border
//                 border-white/[0.08]
//                 bg-white/[0.02]
//                 p-6
//                 backdrop-blur-xl
//                 md:p-8
//               "
//             >
//               <div className="mb-8 flex items-center justify-between">
//                 <p className="text-sm font-medium text-white/75">
//                   {content.focus}
//                 </p>

//                 <span className="text-xs text-white/25">
//                   06
//                 </span>
//               </div>

//               <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2">
//                 {groups.map((group, index) => {
//                   const Icon = group.icon;

//                   return (
//                     <motion.div
//                       key={group.title}
//                       initial={{ opacity: 0, y: 15 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{
//                         duration: 0.45,
//                         delay: index * 0.05,
//                       }}
//                       className="
//                         group
//                         bg-[#0a0a0a]
//                         p-6
//                         transition-colors
//                         duration-300
//                         hover:bg-white/[0.035]
//                       "
//                     >
//                       <div className="mb-6 flex items-center justify-between">
//                         <div
//                           className="
//                             flex
//                             h-9
//                             w-9
//                             items-center
//                             justify-center
//                             rounded-xl
//                             border
//                             border-white/[0.08]
//                             bg-white/[0.025]
//                             text-white/45
//                           "
//                         >
//                           <Icon size={17} strokeWidth={1.7} />
//                         </div>

//                         <span className="text-[10px] text-white/20">
//                           0{index + 1}
//                         </span>
//                       </div>

//                       <h3 className="text-sm font-medium text-white/80">
//                         {group.title}
//                       </h3>

//                       <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
//                         {group.items.map((item) => (
//                           <span
//                             key={item}
//                             className="
//                               text-xs
//                               leading-5
//                               text-white/35
//                               transition-colors
//                               duration-300
//                               group-hover:text-white/50
//                             "
//                           >
//                             {item}
//                           </span>
//                         ))}
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { motion } from "framer-motion";

import {
  Code2,
  Database,
  Smartphone,
  Bot,
  Server,
  Boxes,
} from "lucide-react";

import { useLang } from "@/src/hooks/useLang";

/* =========================================================
   STACK
========================================================= */

const stackGroups = {
  web: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
  ],

  backend: [
    "Go",
    "Gin",
    "Node.js",
  ],

  bots: [
    "Python",
    "Aiogram",
  ],

  mobile: [
    "Swift",
    "SwiftUI",
    "UIKit",
  ],

  data: [
    "PostgreSQL",
    "Supabase",
    "SQL",
  ],

  tools: [
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "Vercel",
    "Railway",
  ],
};

/* =========================================================
   ABOUT
========================================================= */

export default function About() {
  const { t } = useLang();

  const content = t.aboutSection;

  /* =======================================================
     GROUPS
  ======================================================= */

  const groups = [
    {
      title: content.web,
      icon: Code2,
      items: stackGroups.web,
    },

    {
      title: content.backend,
      icon: Server,
      items: stackGroups.backend,
    },

    {
      title: content.bots,
      icon: Bot,
      items: stackGroups.bots,
    },

    {
      title: content.mobile,
      icon: Smartphone,
      items: stackGroups.mobile,
    },

    {
      title: content.data,
      icon: Database,
      items: stackGroups.data,
    },

    {
      title: content.tools,
      icon: Boxes,
      items: stackGroups.tools,
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden

        border-t
        border-white/[0.06]

        bg-[#070707]

        px-6
        py-28

        md:py-36
      "
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* RED BRAND GLOW */}

        <div
          className="
            absolute

            left-[-10%]
            top-[15%]

            h-[420px]
            w-[420px]

            rounded-full

            bg-red-600/[0.025]

            blur-[150px]
          "
        />

        {/* WHITE GLOW */}

        <div
          className="
            absolute

            bottom-[5%]
            right-[-10%]

            h-[400px]
            w-[400px]

            rounded-full

            bg-white/[0.02]

            blur-[160px]
          "
        />

        {/* SUBTLE GRID */}

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

      {/* ===================================================
          CONTENT
      =================================================== */}

      <div className="container-main relative z-10">
        <div
          className="
            grid
            grid-cols-1

            gap-16

            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-20
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div>

            {/* EYEBROW */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                mb-6

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

                  text-white/40
                "
              >
                {content.eyebrow}
              </p>
            </motion.div>

            {/* =================================================
                TITLE
            ================================================= */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 24,
                filter: "blur(6px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-2xl

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

              {/* BRAND ACCENT */}

              <motion.span
                initial={{
                  color: "rgba(255,255,255,0.35)",
                }}
                whileInView={{
                  color: "#dc2626",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                  scale: 1.025,
                  textShadow:
                    "0 10px 30px rgba(220,38,38,0.18)",
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

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-9

                max-w-xl

                space-y-5
              "
            >
              <p
                className="
                  text-base

                  leading-8

                  text-white/60

                  md:text-lg
                "
              >
                {content.description}
              </p>

              <p
                className="
                  text-base

                  leading-8

                  text-white/40
                "
              >
                {content.descriptionSecond}
              </p>
            </motion.div>

            {/* =================================================
                CURRENT FOCUS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="
                mt-12

                border-t
                border-white/[0.08]

                pt-6
              "
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
                  {content.status}
                </p>
              </div>

              <p
                className="
                  mt-3

                  max-w-lg

                  text-sm

                  leading-6

                  text-white/60
                "
              >
                {content.statusValue}
              </p>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT
          ================================================= */}

          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                rounded-[28px]

                border
                border-white/[0.08]

                bg-white/[0.02]

                p-6

                backdrop-blur-xl

                md:p-8
              "
            >
              {/* HEADER */}

              <div
                className="
                  mb-8

                  flex
                  items-center
                  justify-between
                "
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
                      text-sm

                      font-medium

                      text-white/80
                    "
                  >
                    {content.focus}
                  </p>
                </div>

                <span
                  className="
                    text-xs

                    font-medium

                    text-white/25
                  "
                >
                  06
                </span>
              </div>

              {/* =================================================
                  STACK GRID
              ================================================= */}

              <div
                className="
                  grid

                  gap-px

                  overflow-hidden

                  rounded-2xl

                  border
                  border-white/[0.06]

                  bg-white/[0.06]

                  sm:grid-cols-2
                "
              >
                {groups.map(
                  (group, index) => {
                    const Icon =
                      group.icon;

                    return (
                      <motion.div
                        key={group.title}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.45,

                          delay:
                            index * 0.05,
                        }}
                        whileHover={{
                          y: -3,
                        }}
                        className="
                          group

                          relative

                          bg-[#0a0a0a]

                          p-6

                          transition-colors
                          duration-300

                          hover:bg-white/[0.035]
                        "
                      >
                        {/* TOP RED ACCENT */}

                        <div
                          className="
                            absolute

                            left-0
                            top-0

                            h-[2px]
                            w-0

                            bg-red-600

                            transition-all
                            duration-500

                            group-hover:w-full
                          "
                        />

                        {/* ICON + NUMBER */}

                        <div
                          className="
                            mb-6

                            flex
                            items-center
                            justify-between
                          "
                        >
                          <div
                            className="
                              flex

                              h-9
                              w-9

                              items-center
                              justify-center

                              rounded-xl

                              border
                              border-white/[0.08]

                              bg-white/[0.025]

                              text-white/50

                              transition-all
                              duration-300

                              group-hover:border-red-600/40

                              group-hover:text-red-500
                            "
                          >
                            <Icon
                              size={17}
                              strokeWidth={1.7}
                            />
                          </div>

                          <span
                            className="
                              text-[10px]

                              text-white/20

                              transition-colors
                              duration-300

                              group-hover:text-red-500/60
                            "
                          >
                            0{index + 1}
                          </span>
                        </div>

                        {/* TITLE */}

                        <h3
                          className="
                            text-sm

                            font-medium

                            text-white/85
                          "
                        >
                          {group.title}
                        </h3>

                        {/* TECHNOLOGIES */}

                        <div
                          className="
                            mt-4

                            flex
                            flex-wrap

                            gap-x-3
                            gap-y-2
                          "
                        >
                          {group.items.map(
                            (item) => (
                              <span
                                key={item}
                                className="
                                  text-xs

                                  leading-5

                                  text-white/40

                                  transition-colors
                                  duration-300

                                  group-hover:text-white/65
                                "
                              >
                                {item}
                              </span>
                            )
                          )}
                        </div>
                      </motion.div>
                    );
                  }
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}