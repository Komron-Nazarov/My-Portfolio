// // // import { projects } from "@/app/data/projects";
// // // import Image from "next/image";

// // // export default async function ProjectPage({
// // //   params,
// // // }: {
// // //   params: Promise<{ slug: string }>;
// // // }) {

// // //   const { slug } = await params;

// // //   const project = projects.find(
// // //     (p) => p.slug === slug
// // //   );

// // //   if (!project) {
// // //     return (
// // //       <main className="bg-black text-white min-h-screen p-10">
// // //         <h1 className="text-3xl font-bold">
// // //           Project not found
// // //         </h1>
// // //       </main>
// // //     );
// // //   }

// // //   return (
// // //     <main className="bg-black text-white min-h-screen p-10">
// // //       <h1 className="text-4xl font-bold">
// // //         {project.title}
// // //       </h1>

// // //       <Image
// // //         src={project.image}
// // //         alt={project.title}
// // //         width={900}
// // //         height={500}
// // //         className="rounded-2xl mt-6"
// // //       />

// // //       <p className="text-gray-400 mt-6">
// // //         {project.description}
// // //       </p>

// // //       <div className="flex gap-3 mt-6">
// // //         {project.stack.map((tech) => (
// // //           <span
// // //             key={tech}
// // //             className="bg-gray-800 px-3 py-1 rounded-full"
// // //           >
// // //             {tech}
// // //           </span>
// // //         ))}
// // //       </div>
// // //     </main>
// // //   );
// // // }

// // import { supabase } from "@/lib/supabase";
// // import Link from "next/link";

// // export default async function ProjectsPage() {
// //   const { data: projects, error } = await supabase
// //     .from("projects")
// //     .select("*");

// //   if (error) {
// //     return (
// //       <main className="p-10 text-white">
// //         <h1>Error loading projects</h1>
// //       </main>
// //     );
// //   }

// //   return (
// //     <main className="p-10 bg-black text-white min-h-screen">
// //       <h1 className="text-3xl font-bold mb-10">Projects</h1>

// //       <div className="grid md:grid-cols-3 gap-6">
// //         {projects?.map((project: any) => (
// //           <div
// //             key={project.id}
// //             className="bg-gray-900 p-5 rounded-xl border border-gray-800"
// //           >
// //             <h2 className="text-xl font-bold">{project.title}</h2>

// //             <p className="text-gray-400 mt-2">
// //               {project.description}
// //             </p>

// //             <div className="flex gap-2 flex-wrap mt-3">
// //               {project.stack?.map((tech: string) => (
// //                 <span
// //                   key={tech}
// //                   className="text-xs bg-gray-800 px-2 py-1 rounded"
// //                 >
// //                   {tech}
// //                 </span>
// //               ))}
// //             </div>

// //             <Link
// //               href={`/projects/${project.slug}`}
// //               className="inline-block mt-4 text-blue-400"
// //             >
// //               Open →
// //             </Link>
// //           </div>
// //         ))}
// //       </div>
// //     </main>
// //   );
// // }


// import Image from "next/image";
// import { notFound } from "next/navigation";

// // пока используем локальные данные
// import { projects as localProjects } from "@/app/data/projects";

// export default async function ProjectPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = params;

//   // 🔥 пока БД НЕТ → используем local
//   const project = localProjects.find((p) => p.slug === slug);

//   // ❌ если не найден
//   if (!project) {
//     return (
//       <main className="bg-black text-white min-h-screen p-10">
//         <h1 className="text-3xl font-bold">Project not found</h1>
//       </main>
//     );
//   }

//   return (
//     <main className="bg-black text-white min-h-screen p-10 max-w-5xl mx-auto">
      
//       <h1 className="text-4xl font-bold">{project.title}</h1>

//       <Image
//         src={project.image}
//         alt={project.title}
//         width={1000}
//         height={600}
//         className="rounded-2xl mt-6"
//       />

//       <p className="text-gray-400 mt-6 text-lg">
//         {project.description}
//       </p>

//       <div className="flex flex-wrap gap-3 mt-6">
//         {project.stack.map((tech) => (
//           <span
//             key={tech}
//             className="bg-gray-800 px-3 py-1 rounded-full text-sm"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//     </main>
//   );
// }

import Image from "next/image";
import { notFound } from "next/navigation";

// пока используем локальные данные
import { projects as localProjects } from "@/app/data/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>; // 👈 Next.js 16 требует, чтобы params был Promise
}) {
  const { slug } = await params; // 👈 Обязательно делаем await перед деструктуризацией

  // 🔥 пока БД НЕТ → используем local
  const project = localProjects.find((p) => p.slug === slug);

  // ❌ если не найден — отдаем стандартную 404 страницу Next.js
  if (!project) {
    notFound();
  }

  return (
    <main className="bg-black text-white min-h-screen p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">{project.title}</h1>

      <Image
        src={project.image}
        alt={project.title}
        width={1000}
        height={600}
        className="rounded-2xl mt-6 object-cover"
        priority // Картинка на странице проекта важная, загружаем её быстрее
      />

      <p className="text-gray-400 mt-6 text-lg">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="bg-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </main>
  );
}