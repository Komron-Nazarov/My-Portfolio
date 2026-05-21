// // // // "use client";

// // // // import { useEffect, useState } from "react";
// // // // import { Menu, X } from "lucide-react";
// // // // import Link from "next/link";

// // // // export default function Navbar() {
// // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // //   const [active, setActive] = useState("home");
// // // //   const [scrolled, setScrolled] = useState(false);
// // // //   const [scrollProgress, setScrollProgress] = useState(0);

// // // //   const links = [
// // // //     { id: "home", label: "Home" },
// // // //     { id: "about", label: "About" },
// // // //     { id: "projects", label: "Projects" },
// // // //     { id: "contact", label: "Contact" },
// // // //   ];

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       const scrollY = window.scrollY;
// // // //       const height =
// // // //         document.documentElement.scrollHeight - window.innerHeight;

// // // //       setScrollProgress((scrollY / height) * 100);
// // // //       setScrolled(scrollY > 20);

// // // //       links.forEach((l) => {
// // // //         const el = document.getElementById(l.id);
// // // //         if (!el) return;

// // // //         const rect = el.getBoundingClientRect();

// // // //         if (rect.top <= 200 && rect.bottom >= 200) {
// // // //           setActive(l.id);
// // // //         }
// // // //       });
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       {/* progress */}
// // // //       <div
// // // //         className="fixed top-0 left-0 h-[2px] bg-blue-500 z-[60]"
// // // //         style={{ width: `${scrollProgress}%` }}
// // // //       />

// // // //       <nav
// // // //         className={`fixed top-0 left-0 w-full z-50 transition ${
// // // //           scrolled
// // // //             ? "bg-black/80 backdrop-blur-md border-b border-gray-800"
// // // //             : "bg-black/40 backdrop-blur-sm"
// // // //         }`}
// // // //       >
// // // //         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">

// // // //           {/* LOGO */}
// // // //           <Link href="/" className="text-2xl font-bold">
// // // //             Komron<span className="text-blue-500">.</span>
// // // //           </Link>

// // // //           {/* DESKTOP */}
// // // //           <div className="hidden md:flex items-center gap-6">

// // // //             {links.map((l) => (
// // // //               <a
// // // //                 key={l.id}
// // // //                 href={`#${l.id}`}
// // // //                 className={`text-sm ${
// // // //                   active === l.id
// // // //                     ? "text-white"
// // // //                     : "text-gray-400 hover:text-white"
// // // //                 }`}
// // // //               >
// // // //                 {l.label}
// // // //               </a>
// // // //             ))}

// // // //             <Link href="/admin" className="text-gray-400 hover:text-white">
// // // //               Admin
// // // //             </Link>

// // // //             <Link href="/login" className="px-3 py-1 bg-white text-black rounded">
// // // //               Login
// // // //             </Link>

// // // //             <Link href="/register" className="px-3 py-1 bg-gray-800 text-white rounded">
// // // //               Register
// // // //             </Link>
// // // //           </div>

// // // //           {/* BURGER */}
// // // //           <button
// // // //             className="md:hidden"
// // // //             onClick={() => setMenuOpen(!menuOpen)}
// // // //           >
// // // //             {menuOpen ? <X size={28} /> : <Menu size={28} />}
// // // //           </button>
// // // //         </div>

// // // //         {/* MOBILE MENU (FIXED VERSION) */}
// // // //         {menuOpen && (
// // // //           <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8">

// // // //             {/* close on click */}
// // // //             {links.map((l) => (
// // // //               <a
// // // //                 key={l.id}
// // // //                 href={`#${l.id}`}
// // // //                 onClick={() => setMenuOpen(false)}
// // // //                 className="text-2xl text-gray-300"
// // // //               >
// // // //                 {l.label}
// // // //               </a>
// // // //             ))}

// // // //             <Link
// // // //               href="/admin"
// // // //               onClick={() => setMenuOpen(false)}
// // // //               className="text-white"
// // // //             >
// // // //               Admin
// // // //             </Link>

// // // //             <Link
// // // //               href="/login"
// // // //               onClick={() => setMenuOpen(false)}
// // // //               className="text-white"
// // // //             >
// // // //               Login
// // // //             </Link>

// // // //             <Link
// // // //               href="/register"
// // // //               onClick={() => setMenuOpen(false)}
// // // //               className="text-gray-400"
// // // //             >
// // // //               Register
// // // //             </Link>

// // // //           </div>
// // // //         )}
// // // //       </nav>
// // // //     </>
// // // //   );
// // // // }

// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { Menu, X } from "lucide-react";
// // // import Link from "next/link";

// // // export default function Navbar() {
// // //   const [menuOpen, setMenuOpen] = useState(false);
// // //   const [active, setActive] = useState("home");
// // //   const [scrolled, setScrolled] = useState(false);
// // //   const [scrollProgress, setScrollProgress] = useState(0);

// // //   const links = [
// // //     { id: "home", label: "Home" },
// // //     { id: "about", label: "About" },
// // //     { id: "projects", label: "Projects" },
// // //     { id: "contact", label: "Contact" },
// // //   ];

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const scrollY = window.scrollY;
// // //       const height =
// // //         document.documentElement.scrollHeight - window.innerHeight;

// // //       setScrollProgress((scrollY / height) * 100);
// // //       setScrolled(scrollY > 20);

// // //       links.forEach((l) => {
// // //         const el = document.getElementById(l.id);
// // //         if (!el) return;

// // //         const rect = el.getBoundingClientRect();

// // //         if (rect.top <= 200 && rect.bottom >= 200) {
// // //           setActive(l.id);
// // //         }
// // //       });
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   return (
// // //     <>
// // //       {/* PROGRESS BAR */}
// // //       <div
// // //         className="fixed top-0 left-0 h-[2px] bg-blue-500 z-[60] transition-all duration-200"
// // //         style={{ width: `${scrollProgress}%` }}
// // //       />

// // //       <nav
// // //         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
// // //           scrolled
// // //             ? "bg-black/80 backdrop-blur-md border-b border-gray-800"
// // //             : "bg-black/40 backdrop-blur-sm"
// // //         }`}
// // //       >
// // //         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">

// // //           {/* LOGO */}
// // //           <Link href="/" className="text-2xl font-bold">
// // //             Komron<span className="text-blue-500">.</span>
// // //           </Link>

// // //           {/* DESKTOP */}
// // //           <div className="hidden md:flex items-center gap-6">

// // //             {links.map((l) => (
// // //               <div key={l.id} className="relative">
// // //                 <a
// // //                   href={`#${l.id}`}
// // //                   className={`text-sm transition-colors duration-200 ${
// // //                     active === l.id
// // //                       ? "text-white"
// // //                       : "text-gray-400 hover:text-white"
// // //                   }`}
// // //                 >
// // //                   {l.label}
// // //                 </a>

// // //                 {/* underline ANIMATED */}
// // //                 <span
// // //                   className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
// // //                     active === l.id ? "w-full opacity-100" : "w-0 opacity-0"
// // //                   }`}
// // //                 />
// // //               </div>
// // //             ))}

// // //             <Link href="/admin" className="text-gray-400 hover:text-white">
// // //               Admin
// // //             </Link>

// // //             <Link
// // //               href="/login"
// // //               className="px-3 py-1 bg-white text-black rounded hover:opacity-80 transition"
// // //             >
// // //               Login
// // //             </Link>

// // //             <Link
// // //               href="/register"
// // //               className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
// // //             >
// // //               Register
// // //             </Link>
// // //           </div>

// // //           {/* BURGER */}
// // //           <button
// // //             className="md:hidden"
// // //             onClick={() => setMenuOpen(!menuOpen)}
// // //           >
// // //             {menuOpen ? <X size={28} /> : <Menu size={28} />}
// // //           </button>
// // //         </div>

// // //         {/* MOBILE MENU */}
// // //         {menuOpen && (
// // //           <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8">

// // //             {links.map((l) => (
// // //               <div key={l.id} className="relative">
// // //                 <a
// // //                   href={`#${l.id}`}
// // //                   onClick={() => setMenuOpen(false)}
// // //                   className={`text-2xl ${
// // //                     active === l.id
// // //                       ? "text-white"
// // //                       : "text-gray-400"
// // //                   }`}
// // //                 >
// // //                   {l.label}
// // //                 </a>

// // //                 {/* MOBILE underline */}
// // //                 <span
// // //                   className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
// // //                     active === l.id ? "w-full opacity-100" : "w-0 opacity-0"
// // //                   }`}
// // //                 />
// // //               </div>
// // //             ))}

// // //             {/* ADMIN */}
// // //             <Link
// // //               href="/admin"
// // //               onClick={() => setMenuOpen(false)}
// // //               className="text-white"
// // //             >
// // //               Admin
// // //             </Link>

// // //             {/* LOGIN BUTTON */}
// // //             <Link
// // //               href="/login"
// // //               onClick={() => setMenuOpen(false)}
// // //               className="px-4 py-2 bg-white text-black rounded w-[160px] text-center"
// // //             >
// // //               Login
// // //             </Link>

// // //             {/* REGISTER BUTTON */}
// // //             <Link
// // //               href="/register"
// // //               onClick={() => setMenuOpen(false)}
// // //               className="px-4 py-2 bg-gray-800 text-white rounded w-[160px] text-center"
// // //             >
// // //               Register
// // //             </Link>

// // //           </div>
// // //         )}
// // //       </nav>
// // //     </>
// // //   );
// // // }


// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { Menu, X } from "lucide-react";

// // export default function Navbar() {
// //   const pathname = usePathname();
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const links = [
// //     { href: "/", label: "Home" },
// //     { href: "/about", label: "About" },
// //     { href: "/projects", label: "Projects" },
// //     { href: "/contact", label: "Contact" },
// //   ];

// //   const isActive = (href: string) => pathname === href;

// //   return (
// //     <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
// //       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">

// //         {/* LOGO */}
// //         <Link href="/" className="text-2xl font-bold">
// //           Komron<span className="text-blue-500">.</span>
// //         </Link>

// //         {/* DESKTOP MENU */}
// //         <ul className="hidden md:flex gap-8 items-center">
// //           {links.map((l) => (
// //             <li key={l.href} className="relative">
// //               <Link
// //                 href={l.href}
// //                 className={`text-sm transition ${
// //                   isActive(l.href)
// //                     ? "text-white"
// //                     : "text-gray-400 hover:text-white"
// //                 }`}
// //               >
// //                 {l.label}
// //               </Link>

// //               {/* underline animation */}
// //               <span
// //                 className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
// //                   isActive(l.href) ? "w-full" : "w-0"
// //                 }`}
// //               />
// //             </li>
// //           ))}
// //         </ul>

// //         {/* AUTH BUTTONS (DESKTOP) */}
// //         <div className="hidden md:flex gap-3">
// //           <Link
// //             href="/login"
// //             className="px-4 py-1 bg-gray-900 hover:bg-gray-800 rounded"
// //           >
// //             Login
// //           </Link>

// //           <Link
// //             href="/register"
// //             className="px-4 py-1 bg-blue-600 hover:bg-blue-500 rounded"
// //           >
// //             Register
// //           </Link>
// //         </div>

// //         {/* BURGER */}
// //         <button
// //           className="md:hidden"
// //           onClick={() => setMenuOpen(!menuOpen)}
// //         >
// //           {menuOpen ? <X size={28} /> : <Menu size={28} />}
// //         </button>
// //       </div>

// //       {/* MOBILE MENU */}
// //       {menuOpen && (
// //         <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8">

// //           {links.map((l) => (
// //             <Link
// //               key={l.href}
// //               href={l.href}
// //               onClick={() => setMenuOpen(false)}
// //               className={`text-2xl relative ${
// //                 isActive(l.href)
// //                   ? "text-white"
// //                   : "text-gray-400"
// //               }`}
// //             >
// //               {l.label}

// //               {/* underline mobile */}
// //               <span
// //                 className={`absolute left-0 -bottom-2 h-[2px] bg-blue-500 transition-all duration-300 ${
// //                   isActive(l.href) ? "w-full" : "w-0"
// //                 }`}
// //               />
// //             </Link>
// //           ))}

// //           {/* AUTH MOBILE */}
// //           <div className="flex gap-4 mt-6">
// //             <Link
// //               href="/login"
// //               onClick={() => setMenuOpen(false)}
// //               className="px-5 py-2 bg-gray-900 rounded"
// //             >
// //               Login
// //             </Link>

// //             <Link
// //               href="/register"
// //               onClick={() => setMenuOpen(false)}
// //               className="px-5 py-2 bg-blue-600 rounded"
// //             >
// //               Register
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }



// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [active, setActive] = useState("home");

//   const links = [
//     { id: "home", label: "Home", href: "#home" },
//     { id: "about", label: "About", href: "#about" },
//     { id: "projects", label: "Projects", href: "#projects" },
//     { id: "contact", label: "Contact", href: "#contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       links.forEach((l) => {
//         const el = document.getElementById(l.id);
//         if (!el) return;

//         const rect = el.getBoundingClientRect();

//         if (rect.top <= 200 && rect.bottom >= 200) {
//           setActive(l.id);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-white">

//         {/* LOGO */}
//         <a href="#home" className="font-bold text-xl">
//           KAN<span className="text-blue-500">.</span>
//         </a>

//         {/* DESKTOP */}
//         <ul className="hidden md:flex gap-8">
//           {links.map((l) => (
//             <li key={l.id} className="relative">
//               <a
//                 href={l.href}
//                 className={`transition ${
//                   active === l.id ? "text-white" : "text-gray-400"
//                 }`}
//               >
//                 {l.label}
//               </a>

//               {/* underline animation */}
//               <span
//                 className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
//                   active === l.id ? "w-full" : "w-0"
//                 }`}
//               />
//             </li>
//           ))}
//         </ul>

//         {/* AUTH BUTTONS (DESKTOP) */}
//         <div className="hidden md:flex gap-3">
//           <Link href="/login" className="px-3 py-1 bg-white text-black rounded">
//             Login
//           </Link>

//           <Link href="/register" className="px-3 py-1 bg-gray-800 text-white rounded">
//             Register
//           </Link>
//         </div>

//         {/* MOBILE BUTTON */}
//         <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {menuOpen && (
//         <div className="md:hidden bg-black/95 h-screen flex flex-col items-center justify-center gap-8 text-white">

//           {links.map((l) => (
//             <a
//               key={l.id}
//               href={l.href}
//               onClick={() => setMenuOpen(false)}
//               className={`text-2xl ${
//                 active === l.id ? "text-white font-bold" : "text-gray-400"
//               }`}
//             >
//               {l.label}
//             </a>
//           ))}

//           {/* AUTH MOBILE */}
//           <div className="flex flex-col gap-3 mt-6 w-40">
//             <Link
//               href="/login"
//               className="px-3 py-2 bg-white text-black rounded text-center"
//               onClick={() => setMenuOpen(false)}
//             >
//               Login
//             </Link>

//             <Link
//               href="/register"
//               className="px-3 py-2 bg-gray-800 text-white rounded text-center"
//               onClick={() => setMenuOpen(false)}
//             >
//               Register
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/projects", label: "Projects" },
//     { href: "/contact", label: "Contact" },
//   ];

//   const isActive = (href: string) =>
//     href === "/" ? pathname === "/" : pathname.startsWith(href);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-white">

//         {/* LOGO */}
//         <Link href="/" className="text-xl font-bold">
//           Komron<span className="text-blue-500">.</span>
//         </Link>

//         {/* DESKTOP */}
//         <div className="hidden md:flex items-center gap-8">
//           {links.map((l) => (
//             <Link
//               key={l.href}
//               href={l.href}
//               className="relative text-sm text-gray-400 hover:text-white transition"
//             >
//               {l.label}

//               {/* underline animation */}
//               <span
//                 className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300
//                 ${isActive(l.href) ? "w-full" : "w-0"}`}
//               />
//             </Link>
//           ))}

//           {/* AUTH */}
//           <Link
//             href="/login"
//             className="px-3 py-1 bg-white text-black rounded"
//           >
//             Login
//           </Link>

//           <Link
//             href="/register"
//             className="px-3 py-1 bg-gray-800 text-white rounded"
//           >
//             Register
//           </Link>
//         </div>

//         {/* MOBILE BUTTON */}
//         <button onClick={() => setOpen(!open)} className="md:hidden">
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8">
//           {links.map((l) => (
//             <Link
//               key={l.href}
//               href={l.href}
//               onClick={() => setOpen(false)}
//               className="text-2xl relative text-gray-400 hover:text-white"
//             >
//               {l.label}

//               <span
//                 className={`absolute left-0 -bottom-2 h-[2px] bg-blue-500 transition-all
//                 ${isActive(l.href) ? "w-full" : "w-0"}`}
//               />
//             </Link>
//           ))}

//           <Link
//             href="/login"
//             onClick={() => setOpen(false)}
//             className="px-5 py-2 bg-white text-black rounded"
//           >
//             Login
//           </Link>

//           <Link
//             href="/register"
//             onClick={() => setOpen(false)}
//             className="px-5 py-2 bg-gray-800 text-white rounded"
//           >
//             Register
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }







// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import Logo from './Logo'

// export default function Navbar() {
//   const pathname = usePathname();

//   const [open, setOpen] = useState(false);

//   const links = [
//     {
//       href: "/",
//       label: "Home",
//     },
//     {
//       href: "/about",
//       label: "About",
//     },
//     {
//       href: "/projects",
//       label: "Projects",
//     },
//     {
//       href: "/contact",
//       label: "Contact",
//     },
//   ];

//   const active = (href: string) =>
//     href === "/"
//       ? pathname === "/"
//       : pathname.startsWith(href);

//   return (
//     <>
//       {/* TOP ENERGY LINE */}
//       <div
//         className="
//         fixed
//         top-0
//         left-0
//         w-full
//         h-[1px]
//         z-[70]
//         bg-gradient-to-r
//         from-transparent
//         via-red-500
//         to-transparent
//         animate-pulse
//       "
//       />

//       <nav
//         className="
//         fixed
//         top-0
//         left-0
//         w-full
//         z-50

//         bg-black/45
//         backdrop-blur-xl

//         border-b
//         border-red-900/30
//       "
//       >
//         {/* glow */}
//         <div
//           className="
//           absolute
//           inset-0

//           bg-gradient-to-r
//           from-red-950/10
//           via-red-500/5
//           to-red-950/10
//         "
//         />

//         <div
//           className="
//           relative
//           max-w-7xl
//           mx-auto

//           px-8
//           h-[76px]

//           flex
//           items-center
//           justify-between
//         "
//         >
//           {/* LOGO */}

//           <Link
//             href="/"
//             className="
//               text-white
//               text-2xl
//               font-black

//               hover:scale-105
//               transition
//             "
//           >
//             <Logo />

//             <span
//               className="
//               text-red-500
//               drop-shadow-[0_0_16px_red]
//             "
//             >
              
//             </span>
//           </Link>

//           {/* DESKTOP */}

//           <div className="hidden md:flex items-center gap-10">
//             {links.map((l) => (
//               <Link
//                 key={l.href}
//                 href={l.href}
//                 className="
//                   relative
//                   group
//                   py-2
//                 "
//               >
//                 <span
//                   className={`
//                     relative
//                     z-10

//                     transition

//                     ${
//                       active(l.href)
//                         ? `
//                       text-white
//                     `
//                         : `
//                       text-gray-400
//                       group-hover:text-red-300
//                     `
//                     }
//                   `}
//                 >
//                   {l.label}
//                 </span>

//                 {/* ACTIVE LINE */}

//                 <span
//                   className={`
//                     absolute
//                     left-0
//                     bottom-0

//                     h-[2px]

//                     bg-gradient-to-r
//                     from-red-700
//                     via-red-400
//                     to-red-700

//                     shadow-[0_0_20px_red]

//                     transition-all
//                     duration-500

//                     ${
//                       active(l.href)
//                         ? "w-full"
//                         : `
//                         w-0
//                         group-hover:w-full
//                       `
//                     }
//                   `}
//                 />

//                 {/* glow */}
//                 <span
//                   className="
//                   absolute
//                   inset-0

//                   rounded

//                   opacity-0
//                   group-hover:opacity-100

//                   transition

//                   bg-red-500/5
//                 "
//                 />
//               </Link>
//             ))}

//             {/* AUTH */}

//             <Link
//               href="/login"
//               className="
//                 px-5
//                 py-2

//                 rounded-xl

//                 border
//                 border-red-500/40

//                 text-white

//                 hover:bg-red-500
//                 hover:text-black

//                 transition
//               "
//             >
//               Login
//             </Link>

//             <Link
//               href="/register"
//               className="
//                 px-5
//                 py-2

//                 rounded-xl

//                 bg-red-600

//                 shadow-[0_0_24px_rgba(255,0,0,.4)]

//                 hover:scale-105

//                 transition
//               "
//             >
//               Register
//             </Link>
//           </div>

//           {/* BURGER */}

//           <button
//             onClick={() => setOpen(!open)}
//             className="
//             md:hidden

//             relative

//             w-[42px]
//             h-[42px]

//             rounded-xl

//             border
//             border-red-500/40
//           "
//           >
//             <span
//               className={`
//                 absolute
//                 left-[10px]
//                 top-[13px]

//                 w-[20px]
//                 h-[2px]

//                 bg-red-400

//                 transition

//                 ${
//                   open
//                     ? `
//                     rotate-45
//                     translate-y-[6px]
//                   `
//                     : ""
//                 }
//               `}
//             />

//             <span
//               className={`
//                 absolute
//                 left-[10px]
//                 top-[19px]

//                 w-[20px]
//                 h-[2px]

//                 bg-red-400

//                 transition

//                 ${
//                   open
//                     ? "opacity-0"
//                     : ""
//                 }
//               `}
//             />

//             <span
//               className={`
//                 absolute
//                 left-[10px]
//                 top-[25px]

//                 w-[20px]
//                 h-[2px]

//                 bg-red-400

//                 transition

//                 ${
//                   open
//                     ? `
//                     -rotate-45
//                     -translate-y-[6px]
//                   `
//                     : ""
//                 }
//               `}
//             />
//           </button>
//         </div>
//       </nav>

//       {/* MOBILE */}

//       <div
//         className={`
//           fixed
//           top-0
//           right-0

//           z-40

//           w-full
//           h-screen

//           bg-black/95
//           backdrop-blur-2xl

//           transition

//           ${
//             open
//               ? "translate-x-0"
//               : "translate-x-full"
//           }
//         `}
//       >
//         <div
//           className="
//           h-full

//           flex
//           flex-col

//           justify-center
//           items-center

//           gap-8
//         "
//         >
//           {links.map((l) => (
//             <Link
//               key={l.href}
//               href={l.href}
//               onClick={() => setOpen(false)}
//               className={`
//                 text-3xl

//                 transition

//                 ${
//                   active(l.href)
//                     ? `
//                     text-white
//                     scale-110
//                   `
//                     : `
//                     text-gray-400
//                   `
//                 }
//               `}
//             >
//               {l.label}
//             </Link>
//           ))}

//           <div className="mt-10 flex flex-col gap-4 w-[220px]">
//             <Link
//               href="/login"
//               onClick={() => setOpen(false)}
//               className="
//                 text-center

//                 py-3

//                 rounded-xl

//                 border
//                 border-red-500

//                 text-white
//               "
//             >
//               Login
//             </Link>

//             <Link
//               href="/register"
//               onClick={() => setOpen(false)}
//               className="
//                 text-center

//                 py-3

//                 rounded-xl

//                 bg-red-600

//                 shadow-[0_0_30px_red]
//               "
//             >
//               Register
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/src/hooks/useLang";
import { useState } from "react";
import Logo from './Logo';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { lang, changeLang, t } = useLang();

  // const links = [
  //   { href: "/", label: "Home" },
  //   { href: "/about", label: "About" },
  //   { href: "/projects", label: "Projects" },
  //   { href: "/contact", label: "Contact" },
  // ];

const links = [
  { href: "/", label: t.home },
  { href: "/about", label: t.about },
  { href: "/projects", label: t.projects },
  { href: "/contact", label: t.contact },
];

  const active = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <>
      {/* TOP ENERGY LINE */}
      <div
        className="
        fixed
        top-0
        left-0
        w-full
        h-[1px]
        z-[70]
        bg-gradient-to-r
        from-transparent
        via-red-500
        to-transparent
        animate-pulse
      "
      />

      <nav
        className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-black/45
        backdrop-blur-xl
        border-b
        border-red-900/30
      "
      >
        {/* glow */}
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-r
          from-red-950/10
          via-red-500/5
          to-red-950/10
        "
        />

        <div
          className="
          relative
          max-w-7xl
          mx-auto
          px-8
          h-[76px]
          flex
          items-center
          justify-between
        "
        >
          {/* LOGO CONTAINER */}
          {/* 🛠 Убрал внешний Link, так как он уже есть внутри компонента <Logo /> */}
          <div className="flex items-center justify-center hover:scale-105 transition duration-200">
            <Logo />
          </div>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="
                  relative
                  group
                  py-2
                "
              >
                <span
                  className={`
                    relative
                    z-10
                    transition
                    ${
                      active(l.href)
                        ? "text-white"
                        : "text-gray-400 group-hover:text-red-300"
                    }
                  `}
                >
                  {l.label}
                </span>

                {/* ACTIVE LINE */}
                <span
                  className={`
                    absolute
                    left-0
                    bottom-0
                    h-[2px]
                    bg-gradient-to-r
                    from-red-700
                    via-red-400
                    to-red-700
                    shadow-[0_0_20px_red]
                    transition-all
                    duration-500
                    ${active(l.href) ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />

                {/* glow */}
                <span
                  className="
                  absolute
                  inset-0
                  rounded
                  opacity-0
                  group-hover:opacity-100
                  transition
                  bg-red-500/5
                "
                />
              </Link>
            ))}

<button
  onClick={() => changeLang(lang === "en" ? "ru" : "en")}
  className="
    px-4 py-2
    rounded-xl
    border border-red-500/40
    text-white
    hover:bg-red-500/20
    transition
  "
>
  {lang.toUpperCase()}
</button>

            {/* AUTH */}
            <Link
              href="/login"
              className="
                px-5
                py-2
                rounded-xl
                border
                border-red-500/40
                text-white
                hover:bg-red-500
                hover:text-black
                transition
              "
            >
         {t.login}
            </Link>

            <Link
              href="/register"
              className="
                px-5
                py-2
                rounded-xl
                bg-red-600
                shadow-[0_0_24px_rgba(255,0,0,.4)]
                hover:scale-105
                transition
              "
            >
            {t.register}
            </Link>
          </div>

          {/* BURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="
            md:hidden
            relative
            w-[42px]
            h-[42px]
            rounded-xl
            border
            border-red-500/40
          "
          >
            <span
              className={`
                absolute
                left-[10px]
                top-[13px]
                w-[20px]
                h-[2px]
                bg-red-400
                transition
                ${open ? "rotate-45 translate-y-[6px]" : ""}
              `}
            />

            <span
              className={`
                absolute
                left-[10px]
                top-[19px]
                w-[20px]
                h-[2px]
                bg-red-400
                transition
                ${open ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
                absolute
                left-[10px]
                top-[2026-05-21]
                top-[25px]
                w-[20px]
                h-[2px]
                bg-red-400
                transition
                ${open ? "-rotate-45 -translate-y-[6px]" : ""}
              `}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE */}
      <div
        className={`
          fixed
          top-0
          right-0
          z-40
          w-full
          h-screen
          bg-black/95
          backdrop-blur-2xl
          transition
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div
          className="
          h-full
          flex
          flex-col
          justify-center
          items-center
          gap-8
        "
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`
                text-3xl
                transition
                ${
                  active(l.href)
                    ? "text-white scale-110"
                    : "text-gray-400"
                }
              `}
            >
              {l.label}
            </Link>
          ))}

          <div className="mt-10 flex flex-col gap-4 w-[220px]">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="
                text-center
                py-3
                rounded-xl
                border
                border-red-500
                text-white
              "
            >
            {t.login}
            </Link>

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="
                text-center
                py-3
                rounded-xl
                bg-red-600
                shadow-[0_0_30px_red]
              "
            >
             {t.register}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}