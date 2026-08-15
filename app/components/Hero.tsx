// // // "use client";

// // // import { motion } from "framer-motion";

// // // export default function Hero() {
// // //   return (
// // //     <section className="flex flex-col text-center px-6 pt-28 md:pt-32 items-center justify-center min-h-[80vh]">

// // //       <motion.h1
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.6 }}
// // //         className="text-5xl font-bold mb-4"
// // //       >
// // //         Komron Nazarov
// // //       </motion.h1>

// // //       <motion.p
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ delay: 0.3 }}
// // //         className="text-xl text-gray-300 mb-2"
// // //       >
// // //         Full-stack Developer
// // //       </motion.p>

// // //       <motion.p
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ delay: 0.5 }}
// // //         className="max-w-xl text-gray-400 mb-6"
// // //       >
// // //         I build modern web applications using Next.js, Go and PostgreSQL.
// // //         I focus on performance, clean architecture and real-world systems.
// // //       </motion.p>

// // //       <motion.a
// // //         href="#contact"
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ delay: 0.7 }}
// // //         className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-300 transition"
// // //       >
// // //         Contact Me
// // //       </motion.a>

// // //     </section>
// // //   );
// // // }





// // "use client";

// // import Link from "next/link";
// // import { motion } from "framer-motion";


// // export default function Hero() {
// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

// //       {/* LIGHT */}
// //       <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-175 h-175 bg-red-600/10 blur-[180px]" />

// //       {/* GRID */}
// //       <div
// //         className="absolute inset-0 opacity-[0.03]"
// //         style={{
// //           backgroundImage:
// //             "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
// //           backgroundSize: "70px 70px",
// //         }}
// //       />

// //       {/* CONTENT */}
// //       <div className="relative z-20 max-w-6xl w-full">

// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="text-center"
// //         >

// //           {/* BADGE */}
// //           <motion.div
// //             animate={{
// //               boxShadow: [
// //                 "0 0 20px rgba(255,0,0,.2)",
// //                 "0 0 50px rgba(255,0,0,.4)",
// //                 "0 0 20px rgba(255,0,0,.2)",
// //               ],
// //             }}
// //             transition={{
// //               repeat: Infinity,
// //               duration: 5,
// //             }}
// //             className="inline-flex mb-8 rounded-full border border-red-900 bg-red-950/20 px-6 py-2 backdrop-blur-lg"
// //           >
// //             <span className="text-red-300 text-sm tracking-[0.25em] uppercase">
// //               Fullstack-Developer
// //             </span>
// //           </motion.div>

// //           {/* TITLE */}
// //           <motion.h1
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.2 }}
// //             className="font-black leading-none"
// //           >
// //             <span className="block text-white text-6xl md:text-8xl">
// //               KOMRON
// //             </span>

// //             <span
// //               className="block text-6xl md:text-8xl
// //               bg-linear-to-r
// //               from-white
// //               via-red-400
// //               to-red-700
// //               bg-clip-text
// //               text-transparent"
// //             >
// //               NAZAROV
// //             </span>
// //           </motion.h1>

// //           {/* LINE */}
// //           <motion.div
// //             initial={{ width: 0 }}
// //             animate={{ width: 220 }}
// //             transition={{ delay: 0.4 }}
// //             className="mx-auto mt-8 h-0.5
// //             bg-linear-to-r
// //             from-transparent
// //             via-red-500
// //             to-transparent"
// //           />

// //           {/* DESC */}
// //           <motion.p
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.5 }}
// //             className="mt-10 max-w-3xl mx-auto
// //             text-gray-300
// //             text-lg
// //             md:text-xl
// //             leading-9"
// //           >
// //             Building futuristic digital products,
// //             scalable platforms and interactive experiences.

// //             <br />

// //             Next.js • Go • PostgreSQL • React
// //           </motion.p>

// //           {/* BUTTONS */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.8 }}
// //             className="mt-12 flex flex-col md:flex-row justify-center gap-5"
// //           >

// //             <Link
// //               href="/projects"
// //               className="
// //               group
// //               px-8
// //               py-4
// //               rounded-2xl
// //               border
// //               border-red-700
// //               bg-red-900/20
// //               backdrop-blur-xl
// //               hover:scale-[1.04]
// //               transition"
// //             >
// //               <span className="text-white">
// //                 Explore Projects
// //               </span>
// //             </Link>

// //             <Link
// //               href="/contact"
// //               className="
// //               px-8
// //               py-4
// //               rounded-2xl
// //               bg-white
// //               text-black
// //               hover:scale-[1.04]
// //               transition"
// //             >
// //               Contact Me
// //             </Link>

// //           </motion.div>

// //           {/* STATS */}
// //           <div className="mt-24 grid grid-cols-3 gap-5">

// //             {[
// //               ["Frontend", "React / Next.js"],
// //               ["Backend", "Go / Python"],
// //               ["Database", "PostgreSQL"],
// //             ].map(([a, b]) => (
// //               <div
// //                 key={a}
// //                 className="
// //                 rounded-3xl
// //                 border
// //                 border-red-950
// //                 bg-black/40
// //                 backdrop-blur-lg
// //                 p-6"
// //               >
// //                 <div className="text-red-400 text-xl font-bold">
// //                   {a}
// //                 </div>

// //                 <div className="text-gray-500 mt-2">
// //                   {b}
// //                 </div>
// //               </div>
// //             ))}

// //           </div>

// //         </motion.div>

// //       </div>

// //     </section>
// //   );
// // }







// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// // import { ArrowDownRight, ArrowUpRight, Github, Mail } from "lucide-react";
// import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
// import { useLang } from "@/src/hooks/useLang";

// export default function Hero() {
//   const { t } = useLang();
//   const content = t.hero;

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springX = useSpring(mouseX, {
//     stiffness: 80,
//     damping: 20,
//     mass: 0.5,
//   });

//   const springY = useSpring(mouseY, {
//     stiffness: 80,
//     damping: 20,
//     mass: 0.5,
//   });

//   const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);
//   const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);

//   const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
//     const rect = event.currentTarget.getBoundingClientRect();

//     const x = (event.clientX - rect.left) / rect.width - 0.5;
//     const y = (event.clientY - rect.top) / rect.height - 0.5;

//     mouseX.set(x);
//     mouseY.set(y);
//   };

//   const handleMouseLeave = () => {
//     mouseX.set(0);
//     mouseY.set(0);
//   };

// // const content =
// //     lang === "ru"
// //       ? {
// //           eyebrow: "РАЗРАБОТЧИК ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ",
// //           titleFirst: "Создаю",
// //           titleSecond: "цифровые продукты.",
// //           description:
// //             "Разрабатываю веб-приложения, backend-системы и мобильные интерфейсы — от идеи и архитектуры до рабочего продукта.",
// //           projects: "Смотреть проекты",
// //           contact: "Связаться",
// //           available: "Открыт к новым проектам",
// //           based: "Web · Backend · Mobile",
// //           role: "Software Developer",
// //         }
// //       : {
// //           eyebrow: "SOFTWARE DEVELOPER",
// //           titleFirst: "I build",
// //           titleSecond: "digital products.",
// //           description:
// //             "I build web applications, backend systems and mobile interfaces — from architecture and engineering to a working product.",
// //           projects: "View projects",
// //           contact: "Get in touch",
// //           available: "Open to new opportunities",
// //           based: "Web · Backend · Mobile",
// //           role: "Software Developer",
// //         };

//   return (
//     <section
//       id="hero"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className="
//         relative
//         min-h-screen
//         overflow-hidden
//         bg-[#050505]
//         px-6
//         pt-28
//         pb-16
//         text-white
//       "
//     >
//       {/* -------------------------------------------------- */}
//       {/* BACKGROUND */}
//       {/* -------------------------------------------------- */}

//       <div className="pointer-events-none absolute inset-0">
//         {/* soft light */}
//         <motion.div
//           style={{
//             x: useTransform(springX, [-0.5, 0.5], [-40, 40]),
//             y: useTransform(springY, [-0.5, 0.5], [-30, 30]),
//           }}
//           className="
//             absolute
//             left-[15%]
//             top-[20%]
//             h-[500px]
//             w-[500px]
//             rounded-full
//             bg-white/[0.025]
//             blur-[140px]
//           "
//         />

//         <motion.div
//           style={{
//             x: useTransform(springX, [-0.5, 0.5], [50, -50]),
//             y: useTransform(springY, [-0.5, 0.5], [30, -30]),
//           }}
//           className="
//             absolute
//             right-[5%]
//             top-[10%]
//             h-[550px]
//             w-[550px]
//             rounded-full
//             bg-indigo-500/[0.035]
//             blur-[160px]
//           "
//         />

//         {/* subtle grid */}
//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.025]
//           "
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
//             backgroundSize: "80px 80px",
//           }}
//         />

//         {/* vignette */}
//         <div
//           className="
//             absolute
//             inset-0
//             bg-[radial-gradient(circle_at_center,transparent_25%,#050505_85%)]
//           "
//         />
//       </div>

//       {/* -------------------------------------------------- */}
//       {/* MAIN CONTENT */}
//       {/* -------------------------------------------------- */}

//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           flex
//           min-h-[calc(100vh-9rem)]
//           w-full
//           max-w-7xl
//           items-center
//         "
//       >
//         <div
//           className="
//             grid
//             w-full
//             grid-cols-1
//             items-center
//             gap-16
//             lg:grid-cols-[1.05fr_0.95fr]
//             lg:gap-20
//           "
//         >
//           {/* ------------------------------------------------ */}
//           {/* LEFT */}
//           {/* ------------------------------------------------ */}

//           <div className="max-w-3xl">
//             {/* availability */}
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="
//                 mb-8
//                 inline-flex
//                 items-center
//                 gap-3
//                 rounded-full
//                 border
//                 border-white/10
//                 bg-white/[0.035]
//                 px-4
//                 py-2
//                 backdrop-blur-xl
//               "
//             >
//               <span className="relative flex h-2 w-2">
//                 <span
//                   className="
//                     absolute
//                     inline-flex
//                     h-full
//                     w-full
//                     animate-ping
//                     rounded-full
//                     bg-emerald-400
//                     opacity-60
//                   "
//                 />
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
//               </span>

//               <span className="text-xs font-medium tracking-wide text-white/60">
//                 {content.available}
//               </span>
//             </motion.div>

//             {/* eyebrow */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="
//                 mb-5
//                 text-xs
//                 font-medium
//                 uppercase
//                 tracking-[0.28em]
//                 text-white/40
//               "
//             >
//               {content.eyebrow}
//             </motion.p>

//             {/* title */}
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.15 }}
//               className="
//                 max-w-4xl
//                 text-[clamp(3.5rem,8vw,7.5rem)]
//                 font-semibold
//                 leading-[0.88]
//                 tracking-[-0.065em]
//               "
//             >
//               <span className="block text-white">
//                 {content.titleFirst}
//               </span>

//               <span
//                 className="
//                   mt-2
//                   block
//                   bg-gradient-to-r
//                   from-white
//                   via-white/80
//                   to-white/30
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 {content.titleSecond}
//               </span>
//             </motion.h1>

//             {/* description */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.35 }}
//               className="
//                 mt-9
//                 max-w-2xl
//                 text-base
//                 leading-8
//                 text-white/45
//                 md:text-lg
//               "
//             >
//               {content.description}
//             </motion.p>

//             {/* buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.5 }}
//               className="
//                 mt-10
//                 flex
//                 flex-col
//                 gap-3
//                 sm:flex-row
//               "
//             >
//               <Link
//                 href="/projects"
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-3
//                   rounded-full
//                   bg-white
//                   px-6
//                   py-3.5
//                   text-sm
//                   font-medium
//                   text-black
//                   transition-all
//                   duration-300
//                   hover:scale-[1.02]
//                   hover:bg-white/90
//                 "
//               >
//                 {content.projects}

//                 <ArrowUpRight
//                   size={17}
//                   className="
//                     transition-transform
//                     duration-300
//                     group-hover:-translate-y-0.5
//                     group-hover:translate-x-0.5
//                   "
//                 />
//               </Link>

//               <Link
//                 href="/contact"
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-3
//                   rounded-full
//                   border
//                   border-white/10
//                   bg-white/[0.035]
//                   px-6
//                   py-3.5
//                   text-sm
//                   font-medium
//                   text-white
//                   backdrop-blur-xl
//                   transition-all
//                   duration-300
//                   hover:border-white/20
//                   hover:bg-white/[0.07]
//                 "
//               >
//                 <Mail size={16} className="text-white/50" />

//                 {content.contact}
//               </Link>
//             </motion.div>

//             {/* stack */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.7 }}
//               className="
//                 mt-16
//                 flex
//                 flex-wrap
//                 items-center
//                 gap-x-6
//                 gap-y-3
//                 border-t
//                 border-white/[0.08]
//                 pt-6
//               "
//             >
//               {[
//                 "Next.js",
//                 "React",
//                 "TypeScript",
//                 "Go / Gin",
//                 "Python / Aiogram",
//                 "PostgreSQL",
//                 "Swift",
//                 "Docker",
//               ].map((technology, index) => (
//                 <span
//                   key={technology}
//                   className="
//                     text-xs
//                     font-medium
//                     tracking-wide
//                     text-white/35
//                     transition-colors
//                     duration-300
//                     hover:text-white/70
//                   "
//                 >
//                   {technology}
//                   {index < 7 && (
//                     <span className="ml-6 text-white/15">/</span>
//                   )}
//                 </span>
//               ))}
//             </motion.div>
//           </div>

//           {/* ------------------------------------------------ */}
//           {/* RIGHT / PHOTO */}
//           {/* ------------------------------------------------ */}

//           <motion.div
//             initial={{ opacity: 0, scale: 0.96, x: 30 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             transition={{
//               duration: 1,
//               delay: 0.25,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               relative
//               mx-auto
//               w-full
//               max-w-[520px]
//               lg:ml-auto
//             "
//             style={{
//               perspective: 1200,
//             }}
//           >
//             {/* outer frame */}
//             <motion.div
//               style={{
//                 rotateX,
//                 rotateY,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 20,
//               }}
//               className="
//                 relative
//                 aspect-[4/5]
//                 overflow-hidden
//                 rounded-[2rem]
//                 border
//                 border-white/10
//                 bg-white/[0.025]
//                 shadow-2xl
//                 shadow-black/50
//               "
//             >
//               {/* photo */}
//               <Image
//                 src="/images/KAN.jpg"
//                 alt="Komron Nazarov"
//                 fill
//                 priority
//                 sizes="(max-width: 1024px) 90vw, 520px"
//                 className="
//                   object-cover
//                   object-center
//                   grayscale
//                   transition-transform
//                   duration-700
//                   ease-out
//                   hover:scale-[1.025]
//                 "
//               />

//               {/* image gradient */}
//               <div
//                 className="
//                   absolute
//                   inset-0
//                   bg-gradient-to-t
//                   from-black/75
//                   via-transparent
//                   to-black/10
//                 "
//               />

//               {/* glass reflection */}
//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   inset-0
//                   bg-gradient-to-br
//                   from-white/[0.08]
//                   via-transparent
//                   to-transparent
//                 "
//               />

//               {/* photo information */}
//               <div
//                 className="
//                   absolute
//                   bottom-0
//                   left-0
//                   right-0
//                   flex
//                   items-end
//                   justify-between
//                   p-6
//                   md:p-8
//                 "
//               >
//                 <div>
//                   <p className="text-sm font-medium text-white">
//                     Komron Nazarov
//                   </p>

//                   <p className="mt-1 text-xs text-white/45">
//                     {content.role}
//                   </p>
//                 </div>

//                 <span className="text-xs tracking-wider text-white/35">
//                   {content.based}
//                 </span>
//               </div>
//             </motion.div>

//             {/* floating card */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 0.6 }}
//               className="
//                 absolute
//                 -bottom-5
//                 -left-5
//                 hidden
//                 rounded-2xl
//                 border
//                 border-white/10
//                 bg-[#0b0b0b]/90
//                 px-5
//                 py-4
//                 shadow-xl
//                 backdrop-blur-xl
//                 sm:block
//               "
//             >
//               <div className="flex items-center gap-3">
//                 <span className="text-xs text-white/35">
//                       {content.currentlyBuilding}               
//                 </span>
//                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//               </div>

//               <p className="mt-1 text-sm font-medium text-white/80">
//                     {content.digitalProducts}
//               </p>
//             </motion.div>

//             {/* github floating button */}
//             <motion.a
//               href="https://github.com/Komron-Nazarov"
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 1.1, duration: 0.5 }}
//               className="
//                 absolute
//                 -right-4
//                 top-8
//                 flex
//                 h-12
//                 w-12
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-white/10
//                 bg-[#0b0b0b]/90
//                 text-white/60
//                 shadow-xl
//                 backdrop-blur-xl
//                 transition-all
//                 duration-300
//                 hover:scale-110
//                 hover:text-white
//               "
//               aria-label="GitHub"
//             >
//               {/* <Github size={19} /> */}
// <svg
//   width="19"
//   height="19"
//   viewBox="0 0 24 24"
//   fill="currentColor"
//   aria-hidden="true"
// >
//   <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
// </svg>
//             </motion.a>
//           </motion.div>
//         </div>
//       </div>

//       {/* -------------------------------------------------- */}
//       {/* SCROLL INDICATOR */}
//       {/* -------------------------------------------------- */}

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.3 }}
//         className="
//           absolute
//           bottom-8
//           left-1/2
//           hidden
//           -translate-x-1/2
//           items-center
//           gap-3
//           text-[10px]
//           uppercase
//           tracking-[0.25em]
//           text-white/25
//           md:flex
//         "
//       >
//           <span>{content.scroll}</span>

//         <ArrowDownRight size={13} />
//       </motion.div>
//     </section>
//   );
// }





"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";

import { useLang } from "@/src/hooks/useLang";

const technologies = [
  { label: "Next.js", position: "left-[2%] top-[18%]" },
  { label: "Go / Gin", position: "right-[-2%] top-[22%]" },
  { label: "PostgreSQL", position: "left-[-4%] bottom-[20%]" },
];

type FloatingTechnologyProps = {
  label: string;
  position: string;
  index: number;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  reduceMotion: boolean | null;
};

function FloatingTechnology({
  label,
  position,
  index,
  springX,
  springY,
  reduceMotion,
}: FloatingTechnologyProps) {
  const depth = index + 1;

  const x = useTransform(
    springX,
    [-0.5, 0.5],
    reduceMotion ? [0, 0] : [-depth * 4, depth * 4]
  );

  const y = useTransform(
    springY,
    [-0.5, 0.5],
    reduceMotion ? [0, 0] : [-depth * 3, depth * 3]
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.55,
        delay: 0.85 + index * 0.08,
      }}
      style={{ x, y }}
      className={`
        absolute
        z-20
        hidden
        rounded-full
        border
        border-white/[0.1]
        bg-[#0b0b0b]/85
        px-4
        py-2
        text-[11px]
        font-medium
        tracking-wide
        text-white/55
        shadow-xl
        backdrop-blur-xl
        md:block
        ${position}
      `}
    >
      {label}
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useLang();
  const content = t.hero;
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 90,
    damping: 22,
    mass: 0.45,
  });

  const springY = useSpring(mouseY, {
    stiffness: 90,
    damping: 22,
    mass: 0.45,
  });

  const rotateY = useTransform(
    springX,
    [-0.5, 0.5],
    reduceMotion ? [0, 0] : [-4, 4]
  );

  const rotateX = useTransform(
    springY,
    [-0.5, 0.5],
    reduceMotion ? [0, 0] : [4, -4]
  );

  const photoX = useTransform(
    springX,
    [-0.5, 0.5],
    reduceMotion ? [0, 0] : [-10, 10]
  );

  const photoY = useTransform(
    springY,
    [-0.5, 0.5],
    reduceMotion ? [0, 0] : [-8, 8]
  );

  const glowX = useTransform(
    springX,
    [-0.5, 0.5],
    reduceMotion ? [0, 0] : [-70, 70]
  );

  const glowY = useTransform(
    springY,
    [-0.5, 0.5],
    reduceMotion ? [0, 0] : [-55, 55]
  );

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
        px-6
        pb-16
        pt-28
        text-white
      "
    >
      {/* ambient background */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{
            x: glowX,
            y: glowY,
          }}
          className="
            absolute
            right-[8%]
            top-[16%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-indigo-500/[0.035]
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            left-[10%]
            top-[10%]
            h-[460px]
            w-[460px]
            rounded-full
            bg-white/[0.02]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.022]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "84px 84px",
          }}
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,#050505_88%)]
          "
        />
      </div>

      <div
        className="
          container-main
          relative
          z-10
          flex
          min-h-[calc(100vh-9rem)]
          items-center
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-16
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-20
          "
        >
          {/* LEFT */}

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                mb-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/[0.1]
                bg-white/[0.035]
                px-4
                py-2
                backdrop-blur-xl
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-emerald-400
                    opacity-50
                  "
                />
                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-400
                  "
                />
              </span>

              <span className="text-xs font-medium text-white/55">
                {content.available}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="
                mb-5
                text-xs
                font-medium
                uppercase
                tracking-[0.27em]
                text-white/35
              "
            >
              {content.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-4xl
                text-[clamp(3.5rem,8vw,7.3rem)]
                font-semibold
                leading-[0.88]
                tracking-[-0.065em]
              "
            >
              <span className="block text-white">
                {content.titleFirst}
              </span>

              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-white
                  via-white/78
                  to-white/30
                  bg-clip-text
                  text-transparent
                "
              >
                {content.titleSecond}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="
                mt-9
                max-w-2xl
                text-base
                leading-8
                text-white/43
                md:text-lg
              "
            >
              {content.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45 }}
              className="
                mt-10
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <Link
                href="/projects"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-black
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-white/90
                "
              >
                {content.projects}

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-white/[0.1]
                  bg-white/[0.035]
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-white/[0.2]
                  hover:bg-white/[0.07]
                "
              >
                <Mail
                  size={16}
                  className="text-white/45"
                />

                {content.contact}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="
                mt-14
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-3
                border-t
                border-white/[0.07]
                pt-6
              "
            >
              {[
                "Next.js",
                "TypeScript",
                "Go / Gin",
                "Python / Aiogram",
                "PostgreSQL",
                "Swift",
                "Docker",
              ].map((technology) => (
                <span
                  key={technology}
                  className="
                    text-xs
                    font-medium
                    tracking-wide
                    text-white/30
                    transition-colors
                    duration-300
                    hover:text-white/65
                  "
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.95,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[520px]
              lg:ml-auto
            "
            style={{
              perspective: 1300,
            }}
          >
            {/* floating technology labels */}

{technologies.map((technology, index) => (
  <FloatingTechnology
    key={technology.label}
    label={technology.label}
    position={technology.position}
    index={index}
    springX={springX}
    springY={springY}
    reduceMotion={reduceMotion}
  />
))}

            {/* photo shell */}

            <motion.div
              style={{
                rotateX,
                rotateY,
              }}
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[2rem]
                border
                border-white/[0.1]
                bg-white/[0.025]
                shadow-[0_40px_100px_rgba(0,0,0,0.45)]
              "
            >
              <motion.div
                style={{
                  x: photoX,
                  y: photoY,
                }}
                className="absolute inset-[-12px]"
              >
                <Image
                  src="/images/KAN.jpg"
                  alt="Komron Nazarov"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="
                    object-cover
                    object-center
                    grayscale
                  "
                />
              </motion.div>

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/5
                  to-black/10
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-white/[0.08]
                  via-transparent
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  flex
                  items-end
                  justify-between
                  gap-6
                  p-6
                  md:p-8
                "
              >
                <div>
                  <p className="text-sm font-medium text-white">
                    Komron Nazarov
                  </p>

                  <p className="mt-1 text-xs text-white/40">
                    {content.role}
                  </p>
                </div>

                <span
                  className="
                    hidden
                    text-right
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-white/30
                    sm:block
                  "
                >
                  {content.based}
                </span>
              </div>
            </motion.div>

            {/* status card */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1 }}
              style={{
                x: useTransform(
                  springX,
                  [-0.5, 0.5],
                  reduceMotion ? [0, 0] : [-7, 7]
                ),
                y: useTransform(
                  springY,
                  [-0.5, 0.5],
                  reduceMotion ? [0, 0] : [-5, 5]
                ),
              }}
              className="
                absolute
                -bottom-5
                -left-5
                hidden
                rounded-2xl
                border
                border-white/[0.1]
                bg-[#0b0b0b]/90
                px-5
                py-4
                shadow-2xl
                backdrop-blur-xl
                sm:block
              "
            >
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/30">
                  {content.currentlyBuilding}
                </span>

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-emerald-400
                  "
                />
              </div>

              <p className="mt-1 text-sm font-medium text-white/75">
                {content.digitalProducts}
              </p>
            </motion.div>

            {/* GitHub */}

            <motion.a
              href="https://github.com/Komron-Nazarov"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.05 }}
              className="
                absolute
                -right-4
                top-8
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.1]
                bg-[#0b0b0b]/90
                text-white/50
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-110
                hover:border-white/[0.18]
                hover:text-white
              "
              aria-label="GitHub"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25 }}
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          items-center
          gap-3
          text-[10px]
          uppercase
          tracking-[0.25em]
          text-white/20
          md:flex
        "
      >
        <span>{content.scroll}</span>
        <ArrowDownRight size={13} />
      </motion.div>
    </section>
  );
}