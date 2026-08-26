// // // "use client";

// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import { motion } from "framer-motion";

// // // export default function ProjectCard({ project }: any) {
// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 30 }}
// // //       whileInView={{ opacity: 1, y: 0 }}
// // //       transition={{ duration: 0.5 }}
// // //       viewport={{ once: true }}
// // //       className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-white/10 transition"
// // //     >
// // //      {project.image ? (
// // //   <Image
// // //     src={project.image}
// // //     alt={project.title}
// // //     width={500}
// // //     height={300}
// // //   />
// // // ) : (
// // //   <div className="w-full h-50 bg-gray-800 rounded-xl flex items-center justify-center">
// // //     No image
// // //   </div>
// // // )}

// // //       <div className="flex flex-wrap gap-2 mb-4 justify-center">
// // //         {project.stack.map((tech: string) => (
// // //           <span
// // //             key={tech}
// // //             className="bg-gray-800 text-sm px-3 py-1 rounded-full"
// // //           >
// // //             {tech}
// // //           </span>
// // //         ))}
// // //       </div>

// // //       <h3 className="text-xl font-semibold mb-2">
// // //         {project.title}
// // //       </h3>

// // //       <div className="h-px bg-gray-800 my-4"></div>

// // //       <p className="text-gray-400 mb-4">
// // //         {project.description}
// // //       </p>

// // //       <Link
// // //         href={`/projects/${project.slug}`}
// // //         className="inline-block px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-300 transition"
// // //       >
// // //         View Project
// // //       </Link>

// // //       <div className="flex gap-3 justify-center mt-4">
// // //         <a
// // //           href={project.github}
// // //           target="_blank"
// // //           className="text-sm text-gray-400 underline"
// // //         >
// // //           GitHub
// // //         </a>

// // //         <a
// // //           href={project.demo}
// // //           target="_blank"
// // //           className="text-sm text-gray-400 underline"
// // //         >
// // //           Live
// // //         </a>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // }


// // // "use client";

// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import { motion } from "framer-motion";

// // // export default function ProjectCard({ project }: any) {

// // //   const imageSrc =
// // //     typeof project.image === "string" &&
// // //     project.image.startsWith("http")
// // //       ? project.image
// // //       : null;

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 30 }}
// // //       whileInView={{ opacity: 1, y: 0 }}
// // //       transition={{ duration: 0.5 }}
// // //       viewport={{ once: true }}
// // //       className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-white/10 transition"
// // //     >
// // //       {/* IMAGE SAFE BLOCK */}
// // //       {imageSrc ? (
// // //         <Image
// // //           src={imageSrc}
// // //           alt={project.title}
// // //           width={500}
// // //           height={300}
// // //           className="rounded-xl"
// // //         />
// // //       ) : (
// // //         <div className="w-full h-[200px] bg-gray-800 rounded-xl flex items-center justify-center text-gray-500">
// // //           No image
// // //         </div>
// // //       )}

// // //       {/* STACK */}
// // //       <div className="flex flex-wrap gap-2 mb-4 justify-center mt-4">
// // //         {project.stack?.map((tech: string) => (
// // //           <span
// // //             key={tech}
// // //             className="bg-gray-800 text-sm px-3 py-1 rounded-full"
// // //           >
// // //             {tech}
// // //           </span>
// // //         ))}
// // //       </div>

// // //       <h3 className="text-xl font-semibold mb-2">
// // //         {project.title}
// // //       </h3>

// // //       <div className="h-px bg-gray-800 my-4"></div>

// // //       <p className="text-gray-400 mb-4">
// // //         {project.description}
// // //       </p>

// // //       <Link
// // //         href={`/projects/${project.slug}`}
// // //         className="inline-block px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-300 transition"
// // //       >
// // //         View Project
// // //       </Link>

// // //       <div className="flex gap-3 justify-center mt-4">
// // //         {project.github && (
// // //           <a
// // //             href={project.github}
// // //             target="_blank"
// // //             className="text-sm text-gray-400 underline"
// // //           >
// // //             GitHub
// // //           </a>
// // //         )}

// // //         {project.demo && (
// // //           <a
// // //             href={project.demo}
// // //             target="_blank"
// // //             className="text-sm text-gray-400 underline"
// // //           >
// // //             Live
// // //           </a>
// // //         )}
// // //       </div>
// // //     </motion.div>
// // //   );
// // // }


// // "use client";

// // import Link from "next/link";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import type { Project } from "../types/project";

// // export default function ProjectCard({
// //   project,
// // }: {
// //   project: Project;
// // }) {
// //   // const imageSrc =
// //   //   typeof project.image === "string" &&
// //   //   project.image.startsWith("http")
// //   //     ? project.image
// //   //     : null;
// //   const imageSrc =
// // project.image || "/placeholder.png";

// //   return (
// //     <motion.article
// //       initial={{
// //         opacity: 0,
// //         y: 25,
// //       }}
// //       whileInView={{
// //         opacity: 1,
// //         y: 0,
// //       }}
// //       whileHover={{
// //         y: -8,
// //       }}
// //       transition={{
// //         duration: 0.45,
// //       }}
// //       viewport={{
// //         once: true,
// //       }}
// //       className="
// //       group
// //       relative

// //       overflow-hidden

// //       rounded-[34px]

// //       border
// //       border-red-600/50

// //       bg-black/45

// //       backdrop-blur-xl

// //       shadow-
// //       [0_0_0_1px_rgba(255,0,0,.18)_inset]

// //       transition-all
// //       duration-500

// //       hover:border-red-400

// //       hover:shadow-
// //       [0_0_80px_rgba(255,0,0,.18)]
// //     "
// //     >
// //       {/* OUTER GLOW */}

// //       <div
// //         className="
// //         absolute

// //         inset-0

// //         rounded-[34px]

// //         border

// //         border-red-500/10

// //         pointer-events-none
// //       "
// //       />

// //       {/* LIGHT */}

// //       <div
// //         className="
// //         absolute

// //         -top-20
// //         right-0

// //         w-[250px]
// //         h-[250px]

// //         rounded-full

// //         bg-red-600/15

// //         blur-[120px]

// //         opacity-0

// //         transition

// //         group-hover:opacity-100
// //       "
// //       />

// //       {/* IMAGE */}

// //       <div className="relative overflow-hidden">

// //         {imageSrc ? (
// //           <>
// //             <Image
// //               src={imageSrc}
// //               alt={project.title}
// //               width={800}
// //               height={500}
// //               className="
// //               h-[250px]

// //               w-full

// //               object-cover

// //               transition-all
// //               duration-700

// //               group-hover:scale-[1.05]
// //             "
// //             />

// //             <div
// //               className="
// //               absolute
// //               bottom-0

// //               w-full

// //               h-[140px]

// //               bg-gradient-to-t
// //               from-black
// //               via-black/70
// //               to-transparent
// //             "
// //             />
// //           </>
// //         ) : (
// //           <div
// //             className="
// //             h-[250px]

// //             bg-gradient-to-br

// //             from-red-950
// //             via-black
// //             to-black

// //             flex

// //             items-center
// //             justify-center
// //           "
// //           >
// //             <span
// //               className="
// //               text-red-400

// //               tracking-[6px]

// //               text-sm
// //             "
// //             >
// //               NO IMAGE
// //             </span>
// //           </div>
// //         )}

// //       </div>

// //       {/* CONTENT */}

// //       <div className="p-7">

// //         {/* STACK */}

// //         <div
// //           className="
// //           flex
// //           flex-wrap

// //           gap-2

// //           mb-6
// //         "
// //         >
// //           {project.stack?.map(
// //             (tech: string) => (
// //               <span
// //                 key={tech}
// //                 className="
// //                 px-3
// //                 py-1

// //                 rounded-full

// //                 text-xs

// //                 text-red-100

// //                 border
// //                 border-red-600/50

// //                 bg-red-950/20

// //                 shadow-
// //                 [0_0_10px_rgba(255,0,0,.08)]

// //                 hover:border-red-400

// //                 transition
// //                 "
// //               >
// //                 {tech}
// //               </span>
// //             )
// //           )}
// //         </div>

// //         {/* TITLE */}

// //         <h3
// //           className="
// //           text-2xl

// //           font-black

// //           text-white

// //           mb-4
// //         "
// //         >
// //           {project.title}
// //         </h3>

// //         {/* LINE */}

// //         <div
// //           className="
// //           h-[2px]

// //           mb-6

// //           rounded-full

// //           bg-gradient-to-r

// //           from-red-500
// //           via-red-500/40
// //           to-transparent
// //           "
// //         />

// //         {/* DESCRIPTION */}

// //         <p
// //           className="
// //           text-gray-400

// //           leading-8

// //           mb-8

// //           line-clamp-4
// //         "
// //         >
// //           {project.description}
// //         </p>

// //         {/* BUTTONS */}

// //         <div
// //           className="
// //           flex
// //           flex-wrap

// //           gap-3
// //         "
// //         >
// //           <Link
// //             href={`/projects/${project.slug}`}
// //             className="
// //             flex-1

// //             py-3

// //             rounded-2xl

// //             bg-red-600

// //             text-center

// //             hover:bg-red-500

// //             hover:shadow-
// //             [0_0_35px_rgba(255,0,0,.4)]

// //             transition
// //             "
// //           >
// //             Open
// //           </Link>

// //           {project.github && (
// //             <a
// //               href={project.github}
// //               target="_blank"
// //               className="
// //               px-5
// //               py-3

// //               rounded-2xl

// //               border
// //               border-red-600/50

// //               hover:border-red-400

// //               hover:bg-red-950/20

// //               transition
// //               "
// //             >
// //               GitHub
// //             </a>
// //           )}

// //           {project.demo && (
// //             <a
// //               href={project.demo}
// //               target="_blank"
// //               className="
// //               px-5
// //               py-3

// //               rounded-2xl

// //               border
// //               border-red-600/50

// //               hover:border-red-400

// //               hover:bg-red-950/20

// //               transition
// //               "
// //             >
// //               Live
// //             </a>
// //           )}
// //         </div>

// //       </div>
// //     </motion.article>
// //   );
// // }




// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowUpRight, ExternalLink } from "lucide-react";

// import type { Project } from "../types/project";
// import { useLang } from "@/src/hooks/useLang";

// type ProjectCardProps = {
//   project: Project;
//   priority?: boolean;
//   index?: number;
// };

// export default function ProjectCard({
//   project,
//   priority = false,
//   index = 0,
// }: ProjectCardProps) {
//   const { lang } = useLang();

//   const labels =
//     lang === "ru"
//       ? {
//           open: "Открыть проект",
//           live: "Демо",
//           source: "Код",
//         }
//       : {
//           open: "View project",
//           live: "Live",
//           source: "Source",
//         };

//   const imageSrc = project.image || "/placeholder.png";

//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-80px" }}
//       transition={{
//         duration: 0.65,
//         delay: index * 0.04,
//       }}
//       className="
//         group
//         relative
//         overflow-hidden
//         rounded-[28px]
//         border
//         border-white/[0.08]
//         bg-white/[0.02]
//         transition-all
//         duration-500
//         hover:border-white/[0.16]
//         hover:bg-white/[0.03]
//       "
//     >
//       <div className="relative aspect-[16/10] overflow-hidden">
//         <Image
//           src={imageSrc}
//           alt={project.title}
//           fill
//           priority={priority}
//           sizes="(max-width: 768px) 100vw, 50vw"
//           className="
//             object-cover
//             transition-transform
//             duration-700
//             ease-out
//             group-hover:scale-[1.025]
//           "
//         />

//         <div
//           className="
//             absolute
//             inset-0
//             bg-gradient-to-t
//             from-[#070707]
//             via-transparent
//             to-transparent
//           "
//         />

//         <div
//           className="
//             absolute
//             left-5
//             top-5
//             flex
//             h-9
//             min-w-9
//             items-center
//             justify-center
//             rounded-full
//             border
//             border-white/10
//             bg-black/35
//             px-3
//             text-[10px]
//             font-medium
//             tracking-[0.14em]
//             text-white/50
//             backdrop-blur-xl
//           "
//         >
//           {String(index + 1).padStart(2, "0")}
//         </div>
//       </div>

//       <div className="p-6 md:p-7">
//         <div className="mb-5 flex flex-wrap gap-x-3 gap-y-2">
//           {project.stack?.map((tech) => (
//             <span
//               key={tech}
//               className="
//                 text-[11px]
//                 font-medium
//                 tracking-wide
//                 text-white/30
//               "
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         <h3
//           className="
//             text-2xl
//             font-medium
//             tracking-[-0.03em]
//             text-white
//             md:text-3xl
//           "
//         >
//           {project.title}
//         </h3>

//         <p
//           className="
//             mt-4
//             max-w-xl
//             text-sm
//             leading-7
//             text-white/40
//             md:text-base
//           "
//         >
//           {project.description}
//         </p>

//         <div
//           className="
//             mt-7
//             flex
//             flex-wrap
//             items-center
//             gap-3
//             border-t
//             border-white/[0.06]
//             pt-5
//           "
//         >
//           <Link
//             href={`/projects/${project.slug}`}
//             className="
//               group/link
//               inline-flex
//               items-center
//               gap-2
//               text-sm
//               font-medium
//               text-white/80
//               transition-colors
//               hover:text-white
//             "
//           >
//             {labels.open}

//             <ArrowUpRight
//               size={15}
//               className="
//                 transition-transform
//                 duration-300
//                 group-hover/link:translate-x-0.5
//                 group-hover/link:-translate-y-0.5
//               "
//             />
//           </Link>

//           <div className="ml-auto flex items-center gap-2">
//             {project.github && (
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-1.5
//                   rounded-full
//                   border
//                   border-white/[0.08]
//                   px-3
//                   py-1.5
//                   text-[11px]
//                   font-medium
//                   text-white/35
//                   transition-all
//                   hover:border-white/[0.16]
//                   hover:text-white/70
//                 "
//               >
//                 {labels.source}
//                 <ExternalLink size={11} />
//               </a>
//             )}

//             {project.demo && (
//               <a
//                 href={project.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-1.5
//                   rounded-full
//                   border
//                   border-white/[0.08]
//                   px-3
//                   py-1.5
//                   text-[11px]
//                   font-medium
//                   text-white/35
//                   transition-all
//                   hover:border-white/[0.16]
//                   hover:text-white/70
//                 "
//               >
//                 {labels.live}
//                 <ExternalLink size={11} />
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.article>
//   );
// }










"use client";

import Image from "next/image";
import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import type { Project } from "../types/project";
import { useLang } from "@/src/hooks/useLang";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  index?: number;
};

export default function ProjectCard({
  project,
  priority = false,
  index = 0,
}: ProjectCardProps) {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();

  const labels = t.projectsSection;

  const imageSrc =
    project.image || "/placeholder.png";

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: reduceMotion
          ? 0
          : index % 2 === 0
            ? -72
            : 72,
        y: reduceMotion ? 0 : 18,
        rotateY: reduceMotion
          ? 0
          : index % 2 === 0
            ? 8
            : -8,
        filter: reduceMotion
          ? "blur(0px)"
          : "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        rotateY: 0,
        filter: "blur(0px)",
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              rotateX: -2,
              scale: 1.012,
              transition: {
                type: "spring",
                stiffness: 280,
                damping: 21,
              },
            }
      }
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: reduceMotion
          ? 0.01
          : 0.72,
        delay: index * 0.055,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transformPerspective: 1100,
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-[24px]

        border
        border-white/[0.08]

        bg-white/[0.02]

        transition-colors
        duration-500

        hover:border-white/[0.15]
        hover:bg-white/[0.03]
      "
    >
      {/* RED TOP ACCENT */}

      <div
        className="
          absolute
          left-0
          top-0
          z-30

          h-[2px]
          w-0

          bg-red-600

          transition-all
          duration-500

          group-hover:w-full
        "
      />

      {/* IMAGE */}

      <div
        className="
          relative
          aspect-[16/9]
          overflow-hidden
        "
      >
        <Image
          src={imageSrc}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="
            object-cover

            transition-transform
            duration-700
            ease-out

            group-hover:scale-[1.035]
          "
        />

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-[#070707]
            via-black/5
            to-transparent
          "
        />

        {/* NUMBER */}

        <div
          className="
            absolute
            left-4
            top-4

            flex
            h-8
            min-w-8

            items-center
            justify-center

            rounded-full

            border
            border-white/10

            bg-black/45

            px-2.5

            text-[10px]
            font-semibold
            tracking-[0.14em]

            text-white/50

            backdrop-blur-xl

            transition-colors
            duration-300

            group-hover:border-red-600/60
            group-hover:text-red-500
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-5">
        {/* STACK */}

        <div
          className="
            mb-4
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
                border-white/[0.07]

                bg-white/[0.02]

                px-2.5
                py-1

                text-[10px]
                font-medium
                tracking-wide

                text-white/50

                transition-colors
                duration-300

                group-hover:text-white/65
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* TITLE */}

        <h3
          className="
            text-xl
            font-medium
            tracking-[-0.03em]
            text-white

            lg:text-2xl
          "
        >
          {project.title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-3
            max-w-xl

            line-clamp-3

            text-sm
            leading-6

            text-white/48
          "
        >
          {project.description}
        </p>

        {/* ACTIONS */}

        <div
          className="
            mt-5

            flex
            flex-wrap
            items-center
            gap-3

            border-t
            border-white/[0.07]

            pt-4
          "
        >
          <Link
            href={`/projects/${project.slug}`}
            className="
              group/link

              inline-flex
              items-center
              gap-2

              text-sm
              font-medium

              text-white/80

              transition-colors

              hover:text-red-500
            "
          >
            {labels.viewProject}

            <ArrowUpRight
              size={15}
              className="
                transition-transform
                duration-300

                group-hover/link:-translate-y-0.5
                group-hover/link:translate-x-0.5
              "
            />
          </Link>

          <div className="ml-auto flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-1.5

                  rounded-full

                  border
                  border-white/[0.08]

                  px-3
                  py-1.5

                  text-[11px]
                  font-medium

                  text-white/40

                  transition-all

                  hover:border-red-600/50
                  hover:text-white
                "
              >
                {labels.source}

                <ExternalLink size={11} />
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-1.5

                  rounded-full

                  border
                  border-white/[0.08]

                  px-3
                  py-1.5

                  text-[11px]
                  font-medium

                  text-white/40

                  transition-all

                  hover:border-red-600/50
                  hover:text-white
                "
              >
                {labels.live}

                <ExternalLink size={11} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
