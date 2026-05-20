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


"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: any) {

  const imageSrc =
    typeof project.image === "string" &&
    project.image.startsWith("http")
      ? project.image
      : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-white/10 transition"
    >
      {/* IMAGE SAFE BLOCK */}
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={project.title}
          width={500}
          height={300}
          className="rounded-xl"
        />
      ) : (
        <div className="w-full h-[200px] bg-gray-800 rounded-xl flex items-center justify-center text-gray-500">
          No image
        </div>
      )}

      {/* STACK */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center mt-4">
        {project.stack?.map((tech: string) => (
          <span
            key={tech}
            className="bg-gray-800 text-sm px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>

      <div className="h-px bg-gray-800 my-4"></div>

      <p className="text-gray-400 mb-4">
        {project.description}
      </p>

      <Link
        href={`/projects/${project.slug}`}
        className="inline-block px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-300 transition"
      >
        View Project
      </Link>

      <div className="flex gap-3 justify-center mt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="text-sm text-gray-400 underline"
          >
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="text-sm text-gray-400 underline"
          >
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
}