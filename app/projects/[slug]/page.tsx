// // // // // import { projects } from "@/app/data/projects";
// // // // // import Image from "next/image";

// // // // // export default async function ProjectPage({
// // // // //   params,
// // // // // }: {
// // // // //   params: Promise<{ slug: string }>;
// // // // // }) {

// // // // //   const { slug } = await params;

// // // // //   const project = projects.find(
// // // // //     (p) => p.slug === slug
// // // // //   );

// // // // //   if (!project) {
// // // // //     return (
// // // // //       <main className="bg-black text-white min-h-screen p-10">
// // // // //         <h1 className="text-3xl font-bold">
// // // // //           Project not found
// // // // //         </h1>
// // // // //       </main>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <main className="bg-black text-white min-h-screen p-10">
// // // // //       <h1 className="text-4xl font-bold">
// // // // //         {project.title}
// // // // //       </h1>

// // // // //       <Image
// // // // //         src={project.image}
// // // // //         alt={project.title}
// // // // //         width={900}
// // // // //         height={500}
// // // // //         className="rounded-2xl mt-6"
// // // // //       />

// // // // //       <p className="text-gray-400 mt-6">
// // // // //         {project.description}
// // // // //       </p>

// // // // //       <div className="flex gap-3 mt-6">
// // // // //         {project.stack.map((tech) => (
// // // // //           <span
// // // // //             key={tech}
// // // // //             className="bg-gray-800 px-3 py-1 rounded-full"
// // // // //           >
// // // // //             {tech}
// // // // //           </span>
// // // // //         ))}
// // // // //       </div>
// // // // //     </main>
// // // // //   );
// // // // // }

// // // // import { supabase } from "@/lib/supabase";
// // // // import Link from "next/link";

// // // // export default async function ProjectsPage() {
// // // //   const { data: projects, error } = await supabase
// // // //     .from("projects")
// // // //     .select("*");

// // // //   if (error) {
// // // //     return (
// // // //       <main className="p-10 text-white">
// // // //         <h1>Error loading projects</h1>
// // // //       </main>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <main className="p-10 bg-black text-white min-h-screen">
// // // //       <h1 className="text-3xl font-bold mb-10">Projects</h1>

// // // //       <div className="grid md:grid-cols-3 gap-6">
// // // //         {projects?.map((project: any) => (
// // // //           <div
// // // //             key={project.id}
// // // //             className="bg-gray-900 p-5 rounded-xl border border-gray-800"
// // // //           >
// // // //             <h2 className="text-xl font-bold">{project.title}</h2>

// // // //             <p className="text-gray-400 mt-2">
// // // //               {project.description}
// // // //             </p>

// // // //             <div className="flex gap-2 flex-wrap mt-3">
// // // //               {project.stack?.map((tech: string) => (
// // // //                 <span
// // // //                   key={tech}
// // // //                   className="text-xs bg-gray-800 px-2 py-1 rounded"
// // // //                 >
// // // //                   {tech}
// // // //                 </span>
// // // //               ))}
// // // //             </div>

// // // //             <Link
// // // //               href={`/projects/${project.slug}`}
// // // //               className="inline-block mt-4 text-blue-400"
// // // //             >
// // // //               Open →
// // // //             </Link>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }


// // // import Image from "next/image";
// // // import { notFound } from "next/navigation";

// // // // пока используем локальные данные
// // // import { projects as localProjects } from "@/app/data/projects";

// // // export default async function ProjectPage({
// // //   params,
// // // }: {
// // //   params: { slug: string };
// // // }) {
// // //   const { slug } = params;

// // //   // 🔥 пока БД НЕТ → используем local
// // //   const project = localProjects.find((p) => p.slug === slug);

// // //   // ❌ если не найден
// // //   if (!project) {
// // //     return (
// // //       <main className="bg-black text-white min-h-screen p-10">
// // //         <h1 className="text-3xl font-bold">Project not found</h1>
// // //       </main>
// // //     );
// // //   }

// // //   return (
// // //     <main className="bg-black text-white min-h-screen p-10 max-w-5xl mx-auto">
      
// // //       <h1 className="text-4xl font-bold">{project.title}</h1>

// // //       <Image
// // //         src={project.image}
// // //         alt={project.title}
// // //         width={1000}
// // //         height={600}
// // //         className="rounded-2xl mt-6"
// // //       />

// // //       <p className="text-gray-400 mt-6 text-lg">
// // //         {project.description}
// // //       </p>

// // //       <div className="flex flex-wrap gap-3 mt-6">
// // //         {project.stack.map((tech) => (
// // //           <span
// // //             key={tech}
// // //             className="bg-gray-800 px-3 py-1 rounded-full text-sm"
// // //           >
// // //             {tech}
// // //           </span>
// // //         ))}
// // //       </div>
// // //     </main>
// // //   );
// // // }

// // // import Image from "next/image";
// // // import { notFound } from "next/navigation";

// // // // пока используем локальные данные
// // // import { projects as localProjects } from "@/app/data/projects";

// // // export default async function ProjectPage({
// // //   params,
// // // }: {
// // //   params: Promise<{ slug: string }>; // 👈 Next.js 16 требует, чтобы params был Promise
// // // }) {
// // //   const { slug } = await params; // 👈 Обязательно делаем await перед деструктуризацией

// // //   // 🔥 пока БД НЕТ → используем local
// // //   const project = localProjects.find((p) => p.slug === slug);

// // //   // ❌ если не найден — отдаем стандартную 404 страницу Next.js
// // //   if (!project) {
// // //     notFound();
// // //   }

// // //   return (
// // //     <main className="bg-black text-white min-h-screen p-10 max-w-5xl mx-auto">
// // //       <h1 className="text-4xl font-bold">{project.title}</h1>

// // //       <Image
// // //         src={project.image}
// // //         alt={project.title}
// // //         width={1000}
// // //         height={600}
// // //         className="rounded-2xl mt-6 object-cover"
// // //         priority // Картинка на странице проекта важная, загружаем её быстрее
// // //       />

// // //       <p className="text-gray-400 mt-6 text-lg">
// // //         {project.description}
// // //       </p>

// // //       <div className="flex flex-wrap gap-3 mt-6">
// // //         {project.stack.map((tech) => (
// // //           <span
// // //             key={tech}
// // //             className="bg-gray-800 px-3 py-1 rounded-full text-sm"
// // //           >
// // //             {tech}
// // //           </span>
// // //         ))}
// // //       </div>
// // //     </main>
// // //   );
// // // }



// // import Image from "next/image";
// // import { notFound } from "next/navigation";

// // import { projects as localProjects } from "@/app/data/projects";

// // export default async function ProjectPage({
// //   params,
// // }: {
// //   params: Promise<{
// //     slug: string;
// //   }>;
// // }) {
// //   const { slug } = await params;

// //   const project =
// //     localProjects.find(
// //       (p) => p.slug === slug
// //     );

// //   if (!project) {
// //     notFound();
// //   }

// //   return (
// //     <main
// //       className="
// //       relative

// //       min-h-screen

// //       overflow-hidden

// //       px-6
// //       pt-[140px]
// //       pb-[80px]

// //       text-white
// //     "
// //     >
// //       {/* RED SPACE */}

// //       <div
// //         className="
// //         absolute

// //         top-[5%]
// //         right-[10%]

// //         w-[500px]
// //         h-[500px]

// //         rounded-full

// //         bg-red-700/10

// //         blur-[180px]
// //       "
// //       />

// //       <div
// //         className="
// //         absolute

// //         bottom-[10%]
// //         left-[10%]

// //         w-[400px]
// //         h-[400px]

// //         rounded-full

// //         bg-red-500/10

// //         blur-[180px]
// //       "
// //       />

// //       <div
// //         className="
// //         relative

// //         max-w-6xl
// //         mx-auto
// //       "
// //       >
// //         {/* TOP */}

// //         <div
// //           className="
// //           mb-12
// //         "
// //         >
// //           <div
// //             className="
// //             inline-flex

// //             px-5
// //             py-2

// //             rounded-full

// //             border
// //             border-red-500/30

// //             text-red-400

// //             bg-red-950/20
// //           "
// //           >
// //             ● PROJECT
// //           </div>

// //           <h1
// //             className="
// //             mt-8

// //             text-5xl
// //             md:text-7xl

// //             font-black

// //             leading-tight
// //           "
// //           >
// //             {project.title}
// //           </h1>

// //           <div
// //             className="
// //             w-[150px]

// //             h-[2px]

// //             mt-8

// //             bg-gradient-to-r
// //             from-red-500
// //             to-transparent
// //             "
// //           />
// //         </div>

// //         {/* CARD */}

// //         <div
// //           className="
// //           rounded-[32px]

// //           overflow-hidden

// //           border
// //           border-red-900/40

// //           bg-black/30

// //           backdrop-blur-xl

// //           shadow-[0_0_100px_rgba(255,0,0,.08)]
// //         "
// //         >
// //           <div className="relative">

// //             <Image
// //               src={project.image}
// //               alt={project.title}
// //               width={1400}
// //               height={800}
// //               priority
// //               className="
// //               w-full

// //               max-h-[700px]

// //               object-cover
// //               "
// //             />

// //             <div
// //               className="
// //               absolute
// //               bottom-0

// //               w-full
// //               h-[250px]

// //               bg-gradient-to-t
// //               from-black
// //               to-transparent
// //               "
// //             />
// //           </div>

// //           <div className="p-10">

// //             <h2
// //               className="
// //               text-2xl

// //               font-bold

// //               mb-6
// //             "
// //             >
// //               Overview
// //             </h2>

// //             <p
// //               className="
// //               text-gray-300

// //               text-lg

// //               leading-9
// //             "
// //             >
// //               {project.description}
// //             </p>

// //             {/* STACK */}

// //             <div className="mt-10">

// //               <div
// //                 className="
// //                 text-red-400

// //                 mb-5
// //               "
// //               >
// //                 Technologies
// //               </div>

// //               <div
// //                 className="
// //                 flex
// //                 flex-wrap

// //                 gap-3
// //               "
// //               >
// //                 {project.stack.map((tech) => (
// //                   <div
// //                     key={tech}
// //                     className="
// //                     px-5
// //                     py-2

// //                     rounded-full

// //                     border
// //                     border-red-900

// //                     bg-black/40

// //                     hover:border-red-500

// //                     hover:shadow-[0_0_20px_rgba(255,0,0,.4)]

// //                     transition
// //                     "
// //                   >
// //                     {tech}
// //                   </div>
// //                 ))}
// //               </div>

// //             </div>

// //             {/* ACTIONS */}

// //             <div
// //               className="
// //               flex
// //               flex-wrap

// //               gap-4

// //               mt-12
// //             "
// //             >

// //               <a
// //                 href="#"
// //                 className="
// //                 px-8
// //                 py-4

// //                 rounded-2xl

// //                 bg-red-600

// //                 hover:bg-red-500

// //                 transition
// //                 "
// //               >
// //                 Live Demo
// //               </a>

// //               <a
// //                 href="#"
// //                 className="
// //                 px-8
// //                 py-4

// //                 rounded-2xl

// //                 border
// //                 border-red-900

// //                 hover:border-red-500

// //                 transition
// //                 "
// //               >
// //                 GitHub
// //               </a>

// //             </div>

// //           </div>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }




// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { ArrowLeft, ArrowUpRight } from "lucide-react";

// import { supabase } from "@/lib/supabase";

// export const dynamic = "force-dynamic";

// type ProjectPageProps = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export default async function ProjectPage({
//   params,
// }: ProjectPageProps) {
//   const { slug } = await params;

//   const { data: project, error } = await supabase
//     .from("projects")
//     .select("*")
//     .eq("slug", slug)
//     .single();

//   if (error || !project) {
//     notFound();
//   }

//   return (
//     <main
//       className="
//         relative
//         min-h-screen
//         overflow-hidden
//         bg-[#070707]
//         px-6
//         pb-28
//         pt-32
//         text-white
//       "
//     >
//       <div className="pointer-events-none absolute inset-0">
//         <div
//           className="
//             absolute
//             right-[-10%]
//             top-[8%]
//             h-[500px]
//             w-[500px]
//             rounded-full
//             bg-indigo-500/[0.025]
//             blur-[160px]
//           "
//         />
//       </div>

//       <div className="container-main relative z-10">
//         <Link
//           href="/projects"
//           className="
//             inline-flex
//             items-center
//             gap-2
//             text-sm
//             text-white/35
//             transition-colors
//             hover:text-white/70
//           "
//         >
//           <ArrowLeft size={15} />
//           Projects
//         </Link>

//         <div className="mt-12 max-w-4xl">
//           <p
//             className="
//               text-xs
//               font-medium
//               uppercase
//               tracking-[0.24em]
//               text-white/30
//             "
//           >
//             Case Study
//           </p>

//           <h1
//             className="
//               mt-5
//               text-5xl
//               font-semibold
//               leading-[0.95]
//               tracking-[-0.055em]
//               md:text-7xl
//             "
//           >
//             {project.title}
//           </h1>

//           <p
//             className="
//               mt-7
//               max-w-2xl
//               text-base
//               leading-8
//               text-white/40
//               md:text-lg
//             "
//           >
//             {project.description}
//           </p>
//         </div>

//         <div
//           className="
//             relative
//             mt-14
//             aspect-[16/9]
//             overflow-hidden
//             rounded-[30px]
//             border
//             border-white/[0.08]
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
//               absolute
//               inset-0
//               bg-gradient-to-t
//               from-black/40
//               via-transparent
//               to-transparent
//             "
//           />
//         </div>

//         <div
//           className="
//             mt-16
//             grid
//             gap-12
//             lg:grid-cols-[1fr_320px]
//             lg:gap-20
//           "
//         >
//           <div>
//             <section>
//               <p
//                 className="
//                   text-xs
//                   uppercase
//                   tracking-[0.2em]
//                   text-white/25
//                 "
//               >
//                 Overview
//               </p>

//               <p
//                 className="
//                   mt-5
//                   max-w-3xl
//                   text-base
//                   leading-8
//                   text-white/50
//                   md:text-lg
//                 "
//               >
//                 {project.description}
//               </p>
//             </section>

//             <section
//               className="
//                 mt-12
//                 border-t
//                 border-white/[0.07]
//                 pt-10
//               "
//             >
//               <p
//                 className="
//                   text-xs
//                   uppercase
//                   tracking-[0.2em]
//                   text-white/25
//                 "
//               >
//                 Engineering
//               </p>

//               <h2
//                 className="
//                   mt-5
//                   text-2xl
//                   font-medium
//                   tracking-[-0.03em]
//                   text-white/85
//                 "
//               >
//                 Built around real product requirements.
//               </h2>

//               <p
//                 className="
//                   mt-4
//                   max-w-3xl
//                   leading-8
//                   text-white/40
//                 "
//               >
//                 This project combines interface design, application logic,
//                 data handling and implementation decisions into a working
//                 product. More detailed architecture, challenges and results
//                 can be added as the case study evolves.
//               </p>
//             </section>
//           </div>

//           <aside
//             className="
//               h-fit
//               rounded-[24px]
//               border
//               border-white/[0.08]
//               bg-white/[0.02]
//               p-6
//             "
//           >
//             <p
//               className="
//                 text-xs
//                 uppercase
//                 tracking-[0.18em]
//                 text-white/25
//               "
//             >
//               Technologies
//             </p>

//             <div className="mt-5 flex flex-wrap gap-2">
//               {project.stack?.map((tech: string) => (
//                 <span
//                   key={tech}
//                   className="
//                     rounded-full
//                     border
//                     border-white/[0.08]
//                     px-3
//                     py-1.5
//                     text-xs
//                     text-white/45
//                   "
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {(project.github || project.demo) && (
//               <div
//                 className="
//                   mt-7
//                   border-t
//                   border-white/[0.07]
//                   pt-6
//                 "
//               >
//                 <div className="flex flex-col gap-3">
//                   {project.demo && (
//                     <a
//                       href={project.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="
//                         group
//                         flex
//                         items-center
//                         justify-between
//                         rounded-xl
//                         bg-white
//                         px-4
//                         py-3
//                         text-sm
//                         font-medium
//                         text-black
//                       "
//                     >
//                       Live Demo

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
//                         group
//                         flex
//                         items-center
//                         justify-between
//                         rounded-xl
//                         border
//                         border-white/[0.1]
//                         px-4
//                         py-3
//                         text-sm
//                         text-white/60
//                         transition-colors
//                         hover:text-white
//                       "
//                     >
//                       GitHub

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



import { notFound } from "next/navigation";

import { supabase } from "@/lib/supabase";
import ProjectDetails from "@/app/components/ProjectDetails";

export const dynamic = "force-dynamic";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}