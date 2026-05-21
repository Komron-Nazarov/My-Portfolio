// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function ProjectCard({ project }: any) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-white/10 transition"
//     >
//      {project.image ? (
//   <Image
//     src={project.image}
//     alt={project.title}
//     width={500}
//     height={300}
//   />
// ) : (
//   <div className="w-full h-50 bg-gray-800 rounded-xl flex items-center justify-center">
//     No image
//   </div>
// )}

//       <div className="flex flex-wrap gap-2 mb-4 justify-center">
//         {project.stack.map((tech: string) => (
//           <span
//             key={tech}
//             className="bg-gray-800 text-sm px-3 py-1 rounded-full"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>

//       <h3 className="text-xl font-semibold mb-2">
//         {project.title}
//       </h3>

//       <div className="h-px bg-gray-800 my-4"></div>

//       <p className="text-gray-400 mb-4">
//         {project.description}
//       </p>

//       <Link
//         href={`/projects/${project.slug}`}
//         className="inline-block px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-300 transition"
//       >
//         View Project
//       </Link>

//       <div className="flex gap-3 justify-center mt-4">
//         <a
//           href={project.github}
//           target="_blank"
//           className="text-sm text-gray-400 underline"
//         >
//           GitHub
//         </a>

//         <a
//           href={project.demo}
//           target="_blank"
//           className="text-sm text-gray-400 underline"
//         >
//           Live
//         </a>
//       </div>
//     </motion.div>
//   );
// }


// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function ProjectCard({ project }: any) {

//   const imageSrc =
//     typeof project.image === "string" &&
//     project.image.startsWith("http")
//       ? project.image
//       : null;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-white/10 transition"
//     >
//       {/* IMAGE SAFE BLOCK */}
//       {imageSrc ? (
//         <Image
//           src={imageSrc}
//           alt={project.title}
//           width={500}
//           height={300}
//           className="rounded-xl"
//         />
//       ) : (
//         <div className="w-full h-[200px] bg-gray-800 rounded-xl flex items-center justify-center text-gray-500">
//           No image
//         </div>
//       )}

//       {/* STACK */}
//       <div className="flex flex-wrap gap-2 mb-4 justify-center mt-4">
//         {project.stack?.map((tech: string) => (
//           <span
//             key={tech}
//             className="bg-gray-800 text-sm px-3 py-1 rounded-full"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>

//       <h3 className="text-xl font-semibold mb-2">
//         {project.title}
//       </h3>

//       <div className="h-px bg-gray-800 my-4"></div>

//       <p className="text-gray-400 mb-4">
//         {project.description}
//       </p>

//       <Link
//         href={`/projects/${project.slug}`}
//         className="inline-block px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-300 transition"
//       >
//         View Project
//       </Link>

//       <div className="flex gap-3 justify-center mt-4">
//         {project.github && (
//           <a
//             href={project.github}
//             target="_blank"
//             className="text-sm text-gray-400 underline"
//           >
//             GitHub
//           </a>
//         )}

//         {project.demo && (
//           <a
//             href={project.demo}
//             target="_blank"
//             className="text-sm text-gray-400 underline"
//           >
//             Live
//           </a>
//         )}
//       </div>
//     </motion.div>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({
  project,
}: any) {
  // const imageSrc =
  //   typeof project.image === "string" &&
  //   project.image.startsWith("http")
  //     ? project.image
  //     : null;
  const imageSrc =
project.image || "/placeholder.png";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.45,
      }}
      viewport={{
        once: true,
      }}
      className="
      group
      relative

      overflow-hidden

      rounded-[34px]

      border
      border-red-600/50

      bg-black/45

      backdrop-blur-xl

      shadow-
      [0_0_0_1px_rgba(255,0,0,.18)_inset]

      transition-all
      duration-500

      hover:border-red-400

      hover:shadow-
      [0_0_80px_rgba(255,0,0,.18)]
    "
    >
      {/* OUTER GLOW */}

      <div
        className="
        absolute

        inset-0

        rounded-[34px]

        border

        border-red-500/10

        pointer-events-none
      "
      />

      {/* LIGHT */}

      <div
        className="
        absolute

        -top-20
        right-0

        w-[250px]
        h-[250px]

        rounded-full

        bg-red-600/15

        blur-[120px]

        opacity-0

        transition

        group-hover:opacity-100
      "
      />

      {/* IMAGE */}

      <div className="relative overflow-hidden">

        {imageSrc ? (
          <>
            <Image
              src={imageSrc}
              alt={project.title}
              width={800}
              height={500}
              className="
              h-[250px]

              w-full

              object-cover

              transition-all
              duration-700

              group-hover:scale-[1.05]
            "
            />

            <div
              className="
              absolute
              bottom-0

              w-full

              h-[140px]

              bg-gradient-to-t
              from-black
              via-black/70
              to-transparent
            "
            />
          </>
        ) : (
          <div
            className="
            h-[250px]

            bg-gradient-to-br

            from-red-950
            via-black
            to-black

            flex

            items-center
            justify-center
          "
          >
            <span
              className="
              text-red-400

              tracking-[6px]

              text-sm
            "
            >
              NO IMAGE
            </span>
          </div>
        )}

      </div>

      {/* CONTENT */}

      <div className="p-7">

        {/* STACK */}

        <div
          className="
          flex
          flex-wrap

          gap-2

          mb-6
        "
        >
          {project.stack?.map(
            (tech: string) => (
              <span
                key={tech}
                className="
                px-3
                py-1

                rounded-full

                text-xs

                text-red-100

                border
                border-red-600/50

                bg-red-950/20

                shadow-
                [0_0_10px_rgba(255,0,0,.08)]

                hover:border-red-400

                transition
                "
              >
                {tech}
              </span>
            )
          )}
        </div>

        {/* TITLE */}

        <h3
          className="
          text-2xl

          font-black

          text-white

          mb-4
        "
        >
          {project.title}
        </h3>

        {/* LINE */}

        <div
          className="
          h-[2px]

          mb-6

          rounded-full

          bg-gradient-to-r

          from-red-500
          via-red-500/40
          to-transparent
          "
        />

        {/* DESCRIPTION */}

        <p
          className="
          text-gray-400

          leading-8

          mb-8

          line-clamp-4
        "
        >
          {project.description}
        </p>

        {/* BUTTONS */}

        <div
          className="
          flex
          flex-wrap

          gap-3
        "
        >
          <Link
            href={`/projects/${project.slug}`}
            className="
            flex-1

            py-3

            rounded-2xl

            bg-red-600

            text-center

            hover:bg-red-500

            hover:shadow-
            [0_0_35px_rgba(255,0,0,.4)]

            transition
            "
          >
            Open
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="
              px-5
              py-3

              rounded-2xl

              border
              border-red-600/50

              hover:border-red-400

              hover:bg-red-950/20

              transition
              "
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="
              px-5
              py-3

              rounded-2xl

              border
              border-red-600/50

              hover:border-red-400

              hover:bg-red-950/20

              transition
              "
            >
              Live
            </a>
          )}
        </div>

      </div>
    </motion.article>
  );
}