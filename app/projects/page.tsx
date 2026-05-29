// export default function Projects() {
//   return (
//     <section className="mt-20 px-6 py-20 text-center">
      
//       <h2 className="text-4xl font-bold mb-10">
//         My Projects
//       </h2>

//       <div className="grid gap-6 md:grid-cols-3">



// <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl 
// hover:scale-105 hover:shadow-xl hover:shadow-white/10 
// transition duration-300">
  
//   <h3 className="text-xl font-semibold mb-2">
//     Mobile Library App
//   </h3>

//   <p className="text-gray-400 mb-4">
//     Mobile app for library system of an organization.
//   </p>

//   <a
//     href="/projects/mobile-library"
//     className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-300 transition"
//   >
//     View Project
//   </a>

//   <a href="#" className="text-gray-400 text-sm ml-4 underline">
//   GitHub
// </a>
  

// </div>






// <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl 
// hover:scale-105 hover:shadow-xl hover:shadow-white/10 
// transition duration-300">
  
//   <h3 className="text-xl font-semibold mb-2">
//     Sport Market
//   </h3>

//   <p className="text-gray-400 mb-4">
//            E-commerce platform for selling sports clothing.
//   </p>

//   <a
//     href="#"
//     className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-300 transition"
//   >
//     View Project
//   </a>

//   <a href="#" className="text-gray-400 text-sm ml-4 underline">
//   GitHub
// </a>

// </div>





// <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl 
// hover:scale-105 hover:shadow-xl hover:shadow-white/10 
// transition duration-300">
  
//   <h3 className="text-xl font-semibold mb-2">
//                 Telegram Bot
//   </h3>

//   <p className="text-gray-400 mb-4">
//          Personal assistant bot (currently in development).
//   </p>

//   <a
//     href="#"
// className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-300 transition"
//   >
//     View Project
//   </a>

//   <a href="#" className="text-gray-400 text-sm ml-4 underline">
//   GitHub
// </a>

// </div>

//       </div>
//     </section>
//   );
// // }

// "use client"

// import { supabase } from "@/lib/supabase";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default async function Projects() {
//   return (
//     <section className="px-6 py-20 text-center mt-20">
//       <h2 className="text-4xl font-bold mb-10">My Projects</h2>

//       <div className="grid gap-6 md:grid-cols-3">
//         {projects.map((project) => (
//           <motion.div
//   key={project.slug}
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.5 }}
//   viewport={{ once: true }}
//   className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-white/10 transition"
// >
//             <Image
//                 src={project.image}
//                 alt={project.title}
//                 width={500}
//                 height={300}
//                 className="rounded-xl mb-4"
//               />

//             <div className="flex flex-wrap gap-2 mb-4 justify-center">
//   {project.stack.map((tech) => (
//     <span
//       key={tech}
//       className="bg-gray-800 text-sm px-3 py-1 rounded-full"
//     >
//       {tech}
//     </span>
//   ))}
// </div>

//             <h3 className="text-xl font-semibold mb-2">
//               {project.title}
//             </h3>

//             <div className="h-px bg-gray-800 my-4"></div>

//             <p className="text-gray-400 mb-4">
//               {project.description}
//             </p>

//             <Link
//               href={`/projects/${project.slug}`}
//               className="inline-block px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-300 transition"
//             >
//               View Project
//             </Link>

//           <div className="flex gap-3 justify-center mt-4">
  
//   <a
//     href={project.github}
//     target="_blank"
//     className="text-sm text-gray-400 underline"
//   >
//     GitHub
//   </a>

//   <a
//     href={project.demo}
//     target="_blank"
//     className="text-sm text-gray-400 underline"
//   >
//     Live
//   </a>

// </div>

//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import { supabase } from "@/lib/supabase";
// import ProjectCard from "./ProjectCard";

// export default async function Projects() {

//   const { data: projects, error } = await supabase
//     .from("projects")
//     .select("*");

//  if (error) {
//   console.log(error);
//   return (
//     <div className="text-red-500">
//       {error.message}
//     </div>
//   );
// }

//   return (
//     <section className="px-6 py-20 text-center mt-20">
//       ?<h2 className="text-4xl font-bold mb-10">
//         My Projects
//       </h2>

//       <div className="grid gap-6 md:grid-cols-3">
//         {projects?.map((project) => (
//           <ProjectCard
//             key={project.slug}
//             project={project}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }



// import { supabase } from "@/lib/supabase";
// import ProjectCard from "../components/ProjectCard";

// export default async function Projects() {
//   const { data: projects, error } = await supabase
//     .from("projects")
//     .select("*");

//   if (error) {
//     console.log(error);
//     return (
//       <div className="text-red-500 text-center py-10">
//         {error.message}
//       </div>
//     );
//   }

//   return (
//     <section className="px-6 py-20 text-center mt-20">
//       {/* 🛠 Убрал случайный знак вопроса перед заголовком */}
//       <h2 className="text-4xl font-bold mb-10">
//         My Projects
//       </h2>

//       {/* Проверяем: если проектов вообще нет или массив пустой */}
//       {!projects || projects.length === 0 ? (
//         <div className="mt-10 p-8 border border-dashed border-gray-800 rounded-2xl max-w-md mx-auto bg-gray-900/20">
//           <p className="text-gray-400 text-lg font-medium">
//             Пока проектов нету
//           </p>
//           <p className="text-gray-600 text-sm mt-1">
//             Они появятся сразу, как только я добавлю их в админку.
//           </p>
//         </div>
//       ) : (
//         /* Если проекты есть — рендерим сетку карточек */
//         <div className="grid gap-6 md:grid-cols-3">
//           {projects.map((project) => (
//             <ProjectCard
//               key={project.slug}
//               project={project}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

import { supabase } from "@/lib/supabase";
import ProjectCard from "../components/ProjectCard";
import TypingTitle from "../components/TypingTitle";

export const dynamic = "force-dynamic";

export default async function Projects() {
  const { data: projects, error } =
    await supabase
      .from("projects")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div
          className="
          border
          border-red-900

          rounded-3xl

          px-10
          py-8

          bg-black/30
          backdrop-blur-xl
        "
        >
          <p className="text-red-400">
            {error.message}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="
      relative

      min-h-screen

      px-6
      pt-[150px]
      pb-[100px]

      overflow-hidden
    "
    >
      {/* RED LIGHT */}

      <div
        className="
        absolute
        top-[20%]
        right-[10%]

        w-[500px]
        h-[500px]

        rounded-full

        bg-red-700/10

        blur-[180px]
      "
      />

      <div
        className="
        max-w-7xl
        mx-auto

        relative
      "
      >
        {/* HEADER */}

        <div
          className="
          mb-20

          text-center
        "
        >
          <div
            className="
            inline-flex

            px-5
            py-2

            rounded-full

            border
            border-red-500/30

            text-red-400

            bg-red-950/20
          "
          >
            ● MY WORK
          </div>

          {/* <h1
            className="
            mt-8

            text-5xl
            md:text-7xl

            font-black

            text-white
          "
          >
            Featured

            <span
              className="
              block

              text-red-500

              drop-shadow-[0_0_30px_red]
            "
            >
              Projects
            </span>
          </h1> */}


<TypingTitle
  className="
    mt-8
    text-5xl
    md:text-7xl
    font-black
    text-white
  "
  parts={[
    {
      text: "Featured ",
    },
    {
      text: "Projects",
      className: `
        text-red-500
        drop-shadow-[0_0_30px_red]
      `,
    },
  ]}
/>
      <div
            className="
            mt-8

            max-w-2xl
            mx-auto

            text-gray-400
            text-lg
          "
          >
            Collection of web applications,
            systems and experiments
            built with modern technologies.
          </div>
        </div>

        {/* EMPTY */}

        {!projects?.length ? (
          <div
            className="
            max-w-xl
            mx-auto

            rounded-[32px]

            p-14

            bg-black/30

            border
            border-red-900/40

            backdrop-blur-xl

            text-center
          "
          >
            <div
              className="
              text-red-500

              text-6xl

              mb-5
            "
            >
              ◎
            </div>

            <h3
              className="
              text-3xl
              text-white

              mb-4
            "
            >
              No Projects Yet
            </h3>

            <p
              className="
              text-gray-500
            "
            >
              New projects will appear
              automatically from admin panel.
            </p>
          </div>
        ) : (
          <div
            className="
            grid

            gap-8

            md:grid-cols-2
            xl:grid-cols-3
          "
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}