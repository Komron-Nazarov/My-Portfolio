// // // // "use client";

// // // // import { useState } from "react";
// // // // import Link from "next/link";
// // // // import { usePathname } from "next/navigation";
// // // // import { Menu, X } from "lucide-react";

// // // // export default function Navbar() {
// // // //   const pathname = usePathname();
// // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // //   const links = [
// // // //     { href: "/", label: "Home" },
// // // //     { href: "/about", label: "About" },
// // // //     { href: "/projects", label: "Projects" },
// // // //     { href: "/contact", label: "Contact" },
// // // //   ];

// // // //   const isActive = (href: string) => pathname === href;

// // // //   return (
// // // //     <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
// // // //       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">

// // // //         {/* LOGO */}
// // // //         <Link href="/" className="text-2xl font-bold">
// // // //           Komron<span className="text-blue-500">.</span>
// // // //         </Link>

// // // //         {/* DESKTOP MENU */}
// // // //         <ul className="hidden md:flex gap-8 items-center">
// // // //           {links.map((l) => (
// // // //             <li key={l.href} className="relative">
// // // //               <Link
// // // //                 href={l.href}
// // // //                 className={`text-sm transition ${
// // // //                   isActive(l.href)
// // // //                     ? "text-white"
// // // //                     : "text-gray-400 hover:text-white"
// // // //                 }`}
// // // //               >
// // // //                 {l.label}
// // // //               </Link>

// // // //               {/* underline animation */}
// // // //               <span
// // // //                 className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
// // // //                   isActive(l.href) ? "w-full" : "w-0"
// // // //                 }`}
// // // //               />
// // // //             </li>
// // // //           ))}
// // // //         </ul>

// // // //         {/* AUTH BUTTONS (DESKTOP) */}
// // // //         <div className="hidden md:flex gap-3">
// // // //           <Link
// // // //             href="/login"
// // // //             className="px-4 py-1 bg-gray-900 hover:bg-gray-800 rounded"
// // // //           >
// // // //             Login
// // // //           </Link>

// // // //           <Link
// // // //             href="/register"
// // // //             className="px-4 py-1 bg-blue-600 hover:bg-blue-500 rounded"
// // // //           >
// // // //             Register
// // // //           </Link>
// // // //         </div>

// // // //         {/* BURGER */}
// // // //         <button
// // // //           className="md:hidden"
// // // //           onClick={() => setMenuOpen(!menuOpen)}
// // // //         >
// // // //           {menuOpen ? <X size={28} /> : <Menu size={28} />}
// // // //         </button>
// // // //       </div>

// // // //       {/* MOBILE MENU */}
// // // //       {menuOpen && (
// // // //         <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8">

// // // //           {links.map((l) => (
// // // //             <Link
// // // //               key={l.href}
// // // //               href={l.href}
// // // //               onClick={() => setMenuOpen(false)}
// // // //               className={`text-2xl relative ${
// // // //                 isActive(l.href)
// // // //                   ? "text-white"
// // // //                   : "text-gray-400"
// // // //               }`}
// // // //             >
// // // //               {l.label}

// // // //               {/* underline mobile */}
// // // //               <span
// // // //                 className={`absolute left-0 -bottom-2 h-[2px] bg-blue-500 transition-all duration-300 ${
// // // //                   isActive(l.href) ? "w-full" : "w-0"
// // // //                 }`}
// // // //               />
// // // //             </Link>
// // // //           ))}

// // // //           {/* AUTH MOBILE */}
// // // //           <div className="flex gap-4 mt-6">
// // // //             <Link
// // // //               href="/login"
// // // //               onClick={() => setMenuOpen(false)}
// // // //               className="px-5 py-2 bg-gray-900 rounded"
// // // //             >
// // // //               Login
// // // //             </Link>

// // // //             <Link
// // // //               href="/register"
// // // //               onClick={() => setMenuOpen(false)}
// // // //               className="px-5 py-2 bg-blue-600 rounded"
// // // //             >
// // // //               Register
// // // //             </Link>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // }



// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import Link from "next/link";
// // // import { Menu, X } from "lucide-react";

// // // export default function Navbar() {
// // //   const [menuOpen, setMenuOpen] = useState(false);
// // //   const [active, setActive] = useState("home");

// // //   const links = [
// // //     { id: "home", label: "Home", href: "#home" },
// // //     { id: "about", label: "About", href: "#about" },
// // //     { id: "projects", label: "Projects", href: "#projects" },
// // //     { id: "contact", label: "Contact", href: "#contact" },
// // //   ];

// // //   useEffect(() => {
// // //     const handleScroll = () => {
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
// // //     <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
// // //       <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-white">

// // //         {/* LOGO */}
// // //         <a href="#home" className="font-bold text-xl">
// // //           KAN<span className="text-blue-500">.</span>
// // //         </a>

// // //         {/* DESKTOP */}
// // //         <ul className="hidden md:flex gap-8">
// // //           {links.map((l) => (
// // //             <li key={l.id} className="relative">
// // //               <a
// // //                 href={l.href}
// // //                 className={`transition ${
// // //                   active === l.id ? "text-white" : "text-gray-400"
// // //                 }`}
// // //               >
// // //                 {l.label}
// // //               </a>

// // //               {/* underline animation */}
// // //               <span
// // //                 className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
// // //                   active === l.id ? "w-full" : "w-0"
// // //                 }`}
// // //               />
// // //             </li>
// // //           ))}
// // //         </ul>

// // //         {/* AUTH BUTTONS (DESKTOP) */}
// // //         <div className="hidden md:flex gap-3">
// // //           <Link href="/login" className="px-3 py-1 bg-white text-black rounded">
// // //             Login
// // //           </Link>

// // //           <Link href="/register" className="px-3 py-1 bg-gray-800 text-white rounded">
// // //             Register
// // //           </Link>
// // //         </div>

// // //         {/* MOBILE BUTTON */}
// // //         <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
// // //           {menuOpen ? <X /> : <Menu />}
// // //         </button>
// // //       </div>

// // //       {/* MOBILE MENU */}
// // //       {menuOpen && (
// // //         <div className="md:hidden bg-black/95 h-screen flex flex-col items-center justify-center gap-8 text-white">

// // //           {links.map((l) => (
// // //             <a
// // //               key={l.id}
// // //               href={l.href}
// // //               onClick={() => setMenuOpen(false)}
// // //               className={`text-2xl ${
// // //                 active === l.id ? "text-white font-bold" : "text-gray-400"
// // //               }`}
// // //             >
// // //               {l.label}
// // //             </a>
// // //           ))}

// // //           {/* AUTH MOBILE */}
// // //           <div className="flex flex-col gap-3 mt-6 w-40">
// // //             <Link
// // //               href="/login"
// // //               className="px-3 py-2 bg-white text-black rounded text-center"
// // //               onClick={() => setMenuOpen(false)}
// // //             >
// // //               Login
// // //             </Link>

// // //             <Link
// // //               href="/register"
// // //               className="px-3 py-2 bg-gray-800 text-white rounded text-center"
// // //               onClick={() => setMenuOpen(false)}
// // //             >
// // //               Register
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // }

// // // "use client";

// // // import { usePathname } from "next/navigation";
// // // import Link from "next/link";
// // // import { useState } from "react";
// // // import { Menu, X } from "lucide-react";

// // // export default function Navbar() {
// // //   const pathname = usePathname();
// // //   const [open, setOpen] = useState(false);

// // //   const links = [
// // //     { href: "/", label: "Home" },
// // //     { href: "/about", label: "About" },
// // //     { href: "/projects", label: "Projects" },
// // //     { href: "/contact", label: "Contact" },
// // //   ];

// // //   const isActive = (href: string) =>
// // //     href === "/" ? pathname === "/" : pathname.startsWith(href);

// // //   return (
// // //     <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
// // //       <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-white">

// // //         {/* LOGO */}
// // //         <Link href="/" className="text-xl font-bold">
// // //           Komron<span className="text-blue-500">.</span>
// // //         </Link>

// // //         {/* DESKTOP */}
// // //         <div className="hidden md:flex items-center gap-8">
// // //           {links.map((l) => (
// // //             <Link
// // //               key={l.href}
// // //               href={l.href}
// // //               className="relative text-sm text-gray-400 hover:text-white transition"
// // //             >
// // //               {l.label}

// // //               {/* underline animation */}
// // //               <span
// // //                 className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300
// // //                 ${isActive(l.href) ? "w-full" : "w-0"}`}
// // //               />
// // //             </Link>
// // //           ))}

// // //           {/* AUTH */}
// // //           <Link
// // //             href="/login"
// // //             className="px-3 py-1 bg-white text-black rounded"
// // //           >
// // //             Login
// // //           </Link>

// // //           <Link
// // //             href="/register"
// // //             className="px-3 py-1 bg-gray-800 text-white rounded"
// // //           >
// // //             Register
// // //           </Link>
// // //         </div>

// // //         {/* MOBILE BUTTON */}
// // //         <button onClick={() => setOpen(!open)} className="md:hidden">
// // //           {open ? <X size={28} /> : <Menu size={28} />}
// // //         </button>
// // //       </div>

// // //       {/* MOBILE MENU */}
// // //       {open && (
// // //         <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8">
// // //           {links.map((l) => (
// // //             <Link
// // //               key={l.href}
// // //               href={l.href}
// // //               onClick={() => setOpen(false)}
// // //               className="text-2xl relative text-gray-400 hover:text-white"
// // //             >
// // //               {l.label}

// // //               <span
// // //                 className={`absolute left-0 -bottom-2 h-[2px] bg-blue-500 transition-all
// // //                 ${isActive(l.href) ? "w-full" : "w-0"}`}
// // //               />
// // //             </Link>
// // //           ))}

// // //           <Link
// // //             href="/login"
// // //             onClick={() => setOpen(false)}
// // //             className="px-5 py-2 bg-white text-black rounded"
// // //           >
// // //             Login
// // //           </Link>

// // //           <Link
// // //             href="/register"
// // //             onClick={() => setOpen(false)}
// // //             className="px-5 py-2 bg-gray-800 text-white rounded"
// // //           >
// // //             Register
// // //           </Link>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // }







// // // "use client";

// // // import Link from "next/link";
// // // import { usePathname } from "next/navigation";
// // // import { useState } from "react";
// // // import Logo from './Logo'

// // // export default function Navbar() {
// // //   const pathname = usePathname();

// // //   const [open, setOpen] = useState(false);

// // //   const links = [
// // //     {
// // //       href: "/",
// // //       label: "Home",
// // //     },
// // //     {
// // //       href: "/about",
// // //       label: "About",
// // //     },
// // //     {
// // //       href: "/projects",
// // //       label: "Projects",
// // //     },
// // //     {
// // //       href: "/contact",
// // //       label: "Contact",
// // //     },
// // //   ];

// // //   const active = (href: string) =>
// // //     href === "/"
// // //       ? pathname === "/"
// // //       : pathname.startsWith(href);

// // //   return (
// // //     <>
// // //       {/* TOP ENERGY LINE */}
// // //       <div
// // //         className="
// // //         fixed
// // //         top-0
// // //         left-0
// // //         w-full
// // //         h-[1px]
// // //         z-[70]
// // //         bg-gradient-to-r
// // //         from-transparent
// // //         via-red-500
// // //         to-transparent
// // //         animate-pulse
// // //       "
// // //       />

// // //       <nav
// // //         className="
// // //         fixed
// // //         top-0
// // //         left-0
// // //         w-full
// // //         z-50

// // //         bg-black/45
// // //         backdrop-blur-xl

// // //         border-b
// // //         border-red-900/30
// // //       "
// // //       >
// // //         {/* glow */}
// // //         <div
// // //           className="
// // //           absolute
// // //           inset-0

// // //           bg-gradient-to-r
// // //           from-red-950/10
// // //           via-red-500/5
// // //           to-red-950/10
// // //         "
// // //         />

// // //         <div
// // //           className="
// // //           relative
// // //           max-w-7xl
// // //           mx-auto

// // //           px-8
// // //           h-[76px]

// // //           flex
// // //           items-center
// // //           justify-between
// // //         "
// // //         >
// // //           {/* LOGO */}

// // //           <Link
// // //             href="/"
// // //             className="
// // //               text-white
// // //               text-2xl
// // //               font-black

// // //               hover:scale-105
// // //               transition
// // //             "
// // //           >
// // //             <Logo />

// // //             <span
// // //               className="
// // //               text-red-500
// // //               drop-shadow-[0_0_16px_red]
// // //             "
// // //             >
              
// // //             </span>
// // //           </Link>

// // //           {/* DESKTOP */}

// // //           <div className="hidden md:flex items-center gap-10">
// // //             {links.map((l) => (
// // //               <Link
// // //                 key={l.href}
// // //                 href={l.href}
// // //                 className="
// // //                   relative
// // //                   group
// // //                   py-2
// // //                 "
// // //               >
// // //                 <span
// // //                   className={`
// // //                     relative
// // //                     z-10

// // //                     transition

// // //                     ${
// // //                       active(l.href)
// // //                         ? `
// // //                       text-white
// // //                     `
// // //                         : `
// // //                       text-gray-400
// // //                       group-hover:text-red-300
// // //                     `
// // //                     }
// // //                   `}
// // //                 >
// // //                   {l.label}
// // //                 </span>

// // //                 {/* ACTIVE LINE */}

// // //                 <span
// // //                   className={`
// // //                     absolute
// // //                     left-0
// // //                     bottom-0

// // //                     h-[2px]

// // //                     bg-gradient-to-r
// // //                     from-red-700
// // //                     via-red-400
// // //                     to-red-700

// // //                     shadow-[0_0_20px_red]

// // //                     transition-all
// // //                     duration-500

// // //                     ${
// // //                       active(l.href)
// // //                         ? "w-full"
// // //                         : `
// // //                         w-0
// // //                         group-hover:w-full
// // //                       `
// // //                     }
// // //                   `}
// // //                 />

// // //                 {/* glow */}
// // //                 <span
// // //                   className="
// // //                   absolute
// // //                   inset-0

// // //                   rounded

// // //                   opacity-0
// // //                   group-hover:opacity-100

// // //                   transition

// // //                   bg-red-500/5
// // //                 "
// // //                 />
// // //               </Link>
// // //             ))}

// // //             {/* AUTH */}

// // //             <Link
// // //               href="/login"
// // //               className="
// // //                 px-5
// // //                 py-2

// // //                 rounded-xl

// // //                 border
// // //                 border-red-500/40

// // //                 text-white

// // //                 hover:bg-red-500
// // //                 hover:text-black

// // //                 transition
// // //               "
// // //             >
// // //               Login
// // //             </Link>

// // //             <Link
// // //               href="/register"
// // //               className="
// // //                 px-5
// // //                 py-2

// // //                 rounded-xl

// // //                 bg-red-600

// // //                 shadow-[0_0_24px_rgba(255,0,0,.4)]

// // //                 hover:scale-105

// // //                 transition
// // //               "
// // //             >
// // //               Register
// // //             </Link>
// // //           </div>

// // //           {/* BURGER */}

// // //           <button
// // //             onClick={() => setOpen(!open)}
// // //             className="
// // //             md:hidden

// // //             relative

// // //             w-[42px]
// // //             h-[42px]

// // //             rounded-xl

// // //             border
// // //             border-red-500/40
// // //           "
// // //           >
// // //             <span
// // //               className={`
// // //                 absolute
// // //                 left-[10px]
// // //                 top-[13px]

// // //                 w-[20px]
// // //                 h-[2px]

// // //                 bg-red-400

// // //                 transition

// // //                 ${
// // //                   open
// // //                     ? `
// // //                     rotate-45
// // //                     translate-y-[6px]
// // //                   `
// // //                     : ""
// // //                 }
// // //               `}
// // //             />

// // //             <span
// // //               className={`
// // //                 absolute
// // //                 left-[10px]
// // //                 top-[19px]

// // //                 w-[20px]
// // //                 h-[2px]

// // //                 bg-red-400

// // //                 transition

// // //                 ${
// // //                   open
// // //                     ? "opacity-0"
// // //                     : ""
// // //                 }
// // //               `}
// // //             />

// // //             <span
// // //               className={`
// // //                 absolute
// // //                 left-[10px]
// // //                 top-[25px]

// // //                 w-[20px]
// // //                 h-[2px]

// // //                 bg-red-400

// // //                 transition

// // //                 ${
// // //                   open
// // //                     ? `
// // //                     -rotate-45
// // //                     -translate-y-[6px]
// // //                   `
// // //                     : ""
// // //                 }
// // //               `}
// // //             />
// // //           </button>
// // //         </div>
// // //       </nav>

// // //       {/* MOBILE */}

// // //       <div
// // //         className={`
// // //           fixed
// // //           top-0
// // //           right-0

// // //           z-40

// // //           w-full
// // //           h-screen

// // //           bg-black/95
// // //           backdrop-blur-2xl

// // //           transition

// // //           ${
// // //             open
// // //               ? "translate-x-0"
// // //               : "translate-x-full"
// // //           }
// // //         `}
// // //       >
// // //         <div
// // //           className="
// // //           h-full

// // //           flex
// // //           flex-col

// // //           justify-center
// // //           items-center

// // //           gap-8
// // //         "
// // //         >
// // //           {links.map((l) => (
// // //             <Link
// // //               key={l.href}
// // //               href={l.href}
// // //               onClick={() => setOpen(false)}
// // //               className={`
// // //                 text-3xl

// // //                 transition

// // //                 ${
// // //                   active(l.href)
// // //                     ? `
// // //                     text-white
// // //                     scale-110
// // //                   `
// // //                     : `
// // //                     text-gray-400
// // //                   `
// // //                 }
// // //               `}
// // //             >
// // //               {l.label}
// // //             </Link>
// // //           ))}

// // //           <div className="mt-10 flex flex-col gap-4 w-[220px]">
// // //             <Link
// // //               href="/login"
// // //               onClick={() => setOpen(false)}
// // //               className="
// // //                 text-center

// // //                 py-3

// // //                 rounded-xl

// // //                 border
// // //                 border-red-500

// // //                 text-white
// // //               "
// // //             >
// // //               Login
// // //             </Link>

// // //             <Link
// // //               href="/register"
// // //               onClick={() => setOpen(false)}
// // //               className="
// // //                 text-center

// // //                 py-3

// // //                 rounded-xl

// // //                 bg-red-600

// // //                 shadow-[0_0_30px_red]
// // //               "
// // //             >
// // //               Register
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // "use client";

// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { useLang } from "@/src/hooks/useLang";
// // import { useState } from "react";
// // import Logo from './Logo';

// // export default function Navbar() {
// //   const pathname = usePathname();
// //   const [open, setOpen] = useState(false);
// //   const { lang, changeLang, t } = useLang();

// //   // const links = [
// //   //   { href: "/", label: "Home" },
// //   //   { href: "/about", label: "About" },
// //   //   { href: "/projects", label: "Projects" },
// //   //   { href: "/contact", label: "Contact" },
// //   // ];

// // const links = [
// //   { href: "/", label: t.home },
// //   { href: "/about", label: t.about },
// //   { href: "/projects", label: t.projects },
// //   { href: "/contact", label: t.contact },
// // ];

// //   const active = (href: string) =>
// //     href === "/"
// //       ? pathname === "/"
// //       : pathname.startsWith(href);

// //   return (
// //     <>
// //       {/* TOP ENERGY LINE */}
// //       <div
// //         className="
// //         fixed
// //         top-0
// //         left-0
// //         w-full
// //         h-[1px]
// //         z-[70]
// //         bg-gradient-to-r
// //         from-transparent
// //         via-red-500
// //         to-transparent
// //         animate-pulse
// //       "
// //       />

// //       <nav
// //         className="
// //         fixed
// //         top-0
// //         left-0
// //         w-full
// //         z-50
// //         bg-black/45
// //         backdrop-blur-xl
// //         border-b
// //         border-red-900/30
// //       "
// //       >
// //         {/* glow */}
// //         <div
// //           className="
// //           absolute
// //           inset-0
// //           bg-gradient-to-r
// //           from-red-950/10
// //           via-red-500/5
// //           to-red-950/10
// //         "
// //         />

// //         <div
// //           className="
// //           relative
// //           max-w-7xl
// //           mx-auto
// //           px-8
// //           h-[76px]
// //           flex
// //           items-center
// //           justify-between
// //         "
// //         >
// //           {/* LOGO CONTAINER */}
// //           {/* 🛠 Убрал внешний Link, так как он уже есть внутри компонента <Logo /> */}
// //           <div className="flex items-center justify-center hover:scale-105 transition duration-200">
// //             <Logo />
// //           </div>

// //           {/* DESKTOP */}
// //           <div className="hidden md:flex items-center gap-10">
// //             {links.map((l) => (
// //               <Link
// //                 key={l.href}
// //                 href={l.href}
// //                 className="
// //                   relative
// //                   group
// //                   py-2
// //                 "
// //               >
// //                 <span
// //                   className={`
// //                     relative
// //                     z-10
// //                     transition
// //                     ${
// //                       active(l.href)
// //                         ? "text-white"
// //                         : "text-gray-400 group-hover:text-red-300"
// //                     }
// //                   `}
// //                 >
// //                   {l.label}
// //                 </span>

// //                 {/* ACTIVE LINE */}
// //                 <span
// //                   className={`
// //                     absolute
// //                     left-0
// //                     bottom-0
// //                     h-[2px]
// //                     bg-gradient-to-r
// //                     from-red-700
// //                     via-red-400
// //                     to-red-700
// //                     shadow-[0_0_20px_red]
// //                     transition-all
// //                     duration-500
// //                     ${active(l.href) ? "w-full" : "w-0 group-hover:w-full"}
// //                   `}
// //                 />

// //                 {/* glow */}
// //                 <span
// //                   className="
// //                   absolute
// //                   inset-0
// //                   rounded
// //                   opacity-0
// //                   group-hover:opacity-100
// //                   transition
// //                   bg-red-500/5
// //                 "
// //                 />
// //               </Link>
// //             ))}

// // <button
// //   onClick={() => changeLang(lang === "en" ? "ru" : "en")}
// //   className="
// //     px-4 py-2
// //     rounded-xl
// //     border border-red-500/40
// //     text-white
// //     hover:bg-red-500/20
// //     transition
// //   "
// // >
// //   {lang.toUpperCase()}
// // </button>

// //             {/* AUTH */}
// //             <Link
// //               href="/login"
// //               className="
// //                 px-5
// //                 py-2
// //                 rounded-xl
// //                 border
// //                 border-red-500/40
// //                 text-white
// //                 hover:bg-red-500
// //                 hover:text-black
// //                 transition
// //               "
// //             >
// //          {t.login}
// //             </Link>

// //             <Link
// //               href="/register"
// //               className="
// //                 px-5
// //                 py-2
// //                 rounded-xl
// //                 bg-red-600
// //                 shadow-[0_0_24px_rgba(255,0,0,.4)]
// //                 hover:scale-105
// //                 transition
// //               "
// //             >
// //             {t.register}
// //             </Link>
// //           </div>

// //           {/* BURGER */}
// //           <button
// //             onClick={() => setOpen(!open)}
// //             className="
// //             md:hidden
// //             relative
// //             w-[42px]
// //             h-[42px]
// //             rounded-xl
// //             border
// //             border-red-500/40
// //           "
// //           >
// //             <span
// //               className={`
// //                 absolute
// //                 left-[10px]
// //                 top-[13px]
// //                 w-[20px]
// //                 h-[2px]
// //                 bg-red-400
// //                 transition
// //                 ${open ? "rotate-45 translate-y-[6px]" : ""}
// //               `}
// //             />

// //             <span
// //               className={`
// //                 absolute
// //                 left-[10px]
// //                 top-[19px]
// //                 w-[20px]
// //                 h-[2px]
// //                 bg-red-400
// //                 transition
// //                 ${open ? "opacity-0" : ""}
// //               `}
// //             />

// //             <span
// //               className={`
// //                 absolute
// //                 left-[10px]
// //                 top-[2026-05-21]
// //                 top-[25px]
// //                 w-[20px]
// //                 h-[2px]
// //                 bg-red-400
// //                 transition
// //                 ${open ? "-rotate-45 -translate-y-[6px]" : ""}
// //               `}
// //             />
// //           </button>
// //         </div>
// //       </nav>

// //       {/* MOBILE */}
// //       <div
// //         className={`
// //           fixed
// //           top-0
// //           right-0
// //           z-40
// //           w-full
// //           h-screen
// //           bg-black/95
// //           backdrop-blur-2xl
// //           transition
// //           ${open ? "translate-x-0" : "translate-x-full"}
// //         `}
// //       >
// //         <div
// //           className="
// //           h-full
// //           flex
// //           flex-col
// //           justify-center
// //           items-center
// //           gap-8
// //         "
// //         >
// //           {links.map((l) => (
// //             <Link
// //               key={l.href}
// //               href={l.href}
// //               onClick={() => setOpen(false)}
// //               className={`
// //                 text-3xl
// //                 transition
// //                 ${
// //                   active(l.href)
// //                     ? "text-white scale-110"
// //                     : "text-gray-400"
// //                 }
// //               `}
// //             >
// //               {l.label}
// //             </Link>
// //           ))}

// //           <div className="mt-10 flex flex-col gap-4 w-[220px]">
// //             <Link
// //               href="/login"
// //               onClick={() => setOpen(false)}
// //               className="
// //                 text-center
// //                 py-3
// //                 rounded-xl
// //                 border
// //                 border-red-500
// //                 text-white
// //               "
// //             >
// //             {t.login}
// //             </Link>

// //             <Link
// //               href="/register"
// //               onClick={() => setOpen(false)}
// //               className="
// //                 text-center
// //                 py-3
// //                 rounded-xl
// //                 bg-red-600
// //                 shadow-[0_0_30px_red]
// //               "
// //             >
// //              {t.register}
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }






// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Menu, X, ArrowUpRight } from "lucide-react";

// import { useLang } from "@/src/hooks/useLang";
// import Logo from "./Logo";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const { lang, changeLang, t } = useLang();

//   const links = [
//     {
//       href: "/",
//       label: t.home,
//     },
//     {
//       href: "/about",
//       label: t.about,
//     },
//     {
//       href: "/projects",
//       label: t.projects,
//     },
//     {
//       href: "/contact",
//       label: t.contact,
//     },
//   ];

//   const isActive = (href: string) => {
//     if (href === "/") {
//       return pathname === "/";
//     }

//     return pathname.startsWith(href);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 24);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   // useEffect(() => {
//   //   setOpen(false);
//   // }, [pathname]);

//   return (
//     <>
//       <header
//         className={`
//           fixed
//           top-0
//           left-0
//           right-0
//           z-50
//           transition-all
//           duration-500
//           ${
//             scrolled
//               ? "border-b border-white/[0.08] bg-[#070707]/80 backdrop-blur-2xl"
//               : "bg-transparent"
//           }
//         `}
//       >
//         <div className="container-main">
//           <nav
//             className="
//               flex
//               h-[72px]
//               items-center
//               justify-between
//             "
//             aria-label="Main navigation"
//           >
//             {/* LOGO */}

//             {/* <Link
//               href="/"
//               aria-label="Komron Nazarov — Home"
//               className="
//                 group
//                 relative
//                 z-10
//                 flex
//                 items-center
//                 transition-transform
//                 duration-300
//                 hover:scale-[1.02]
//               "
//             >
//               <Logo />
//             </Link> */}
// <div
//   className="
//     group
//     relative
//     z-10
//     flex
//     items-center
//     transition-transform
//     duration-300
//     hover:scale-[1.02]
//   "
// >
//   <Logo />
// </div>

//             {/* DESKTOP NAVIGATION */}

//             <div className="hidden items-center gap-1 md:flex">
//               {links.map((link) => {
//                 const active = isActive(link.href);

//                 return (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     aria-current={active ? "page" : undefined}
//                     className={`
//                       group
//                       relative
//                       px-4
//                       py-2
//                       text-[13px]
//                       font-medium
//                       tracking-[-0.01em]
//                       transition-colors
//                       duration-300
//                       ${
//                         active
//                           ? "text-white"
//                           : "text-zinc-500 hover:text-zinc-200"
//                       }
//                     `}
//                   >
//                     {link.label}

//                     <span
//                       className={`
//                         absolute
//                         bottom-0
//                         left-4
//                         right-4
//                         h-px
//                         origin-left
//                         bg-white
//                         transition-transform
//                         duration-300
//                         ${
//                           active
//                             ? "scale-x-100"
//                             : "scale-x-0 group-hover:scale-x-100"
//                         }
//                       `}
//                     />
//                   </Link>
//                 );
//               })}
//             </div>

//             {/* RIGHT SIDE */}

//             <div className="hidden items-center gap-3 md:flex">
//               {/* LANGUAGE */}

//               <button
//                 type="button"
//                 onClick={() =>
//                   changeLang(lang === "en" ? "ru" : "en")
//                 }
//                 aria-label={
//                   lang === "en"
//                     ? "Switch language to Russian"
//                     : "Switch language to English"
//                 }
//                 className="
//                   rounded-full
//                   border
//                   border-white/[0.1]
//                   bg-white/[0.03]
//                   px-3
//                   py-1.5
//                   text-[11px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.12em]
//                   text-zinc-400
//                   transition-all
//                   duration-300
//                   hover:border-white/[0.2]
//                   hover:bg-white/[0.07]
//                   hover:text-white
//                 "
//               >
//                 {lang}
//               </button>

//               {/* CONTACT CTA */}

//               <Link
//                 href="/contact"
//                 className="
//                   group
//                   flex
//                   items-center
//                   gap-1.5
//                   rounded-full
//                   bg-white
//                   px-4
//                   py-2
//                   text-[12px]
//                   font-semibold
//                   !text-black
//                   transition-all
//                   duration-300
//                   hover:bg-zinc-200
//                   hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]
//                 "
//               >
//                 {t.contact}

//                 <ArrowUpRight
//                   size={13}
//                   strokeWidth={2.2}
//                   className="
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-0.5
//                     group-hover:-translate-y-0.5
//                   "
//                 />
//               </Link>
//             </div>

//             {/* MOBILE BUTTON */}

//             <button
//               type="button"
//               aria-label={open ? "Close menu" : "Open menu"}
//               aria-expanded={open}
//               onClick={() => setOpen((value) => !value)}
//               className="
//                 relative
//                 z-[60]
//                 flex
//                 h-10
//                 w-10
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-white/[0.1]
//                 bg-white/[0.03]
//                 text-white
//                 transition-all
//                 duration-300
//                 hover:bg-white/[0.08]
//                 md:hidden
//               "
//             >
//               {open ? (
//                 <X size={18} strokeWidth={1.8} />
//               ) : (
//                 <Menu size={18} strokeWidth={1.8} />
//               )}
//             </button>
//           </nav>
//         </div>
//       </header>

//       {/* MOBILE MENU */}

//       <div
//         className={`
//           fixed
//           inset-0
//           z-40
//           bg-[#070707]
//           transition-all
//           duration-500
//           md:hidden
//           ${
//             open
//               ? "pointer-events-auto opacity-100"
//               : "pointer-events-none opacity-0"
//           }
//         `}
//         aria-hidden={!open}
//       >
//         <div className="container-main flex h-full flex-col justify-center">
//           <div className="mb-12">
//             <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
//               Navigation
//             </p>

//             <div className="flex flex-col">
//               {links.map((link, index) => {
//                 const active = isActive(link.href);

//                 return (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     tabIndex={open ? 0 : -1}
//                     className={`
//                       border-b
//                       border-white/[0.06]
//                       py-4
//                       text-4xl
//                       font-medium
//                       tracking-[-0.04em]
//                       transition-all
//                       duration-300
//                       ${
//                         active
//                           ? "text-white"
//                           : "text-zinc-600 hover:pl-2 hover:text-white"
//                       }
//                     `}
//                     style={{
//                       transitionDelay: open
//                         ? `${index * 40}ms`
//                         : "0ms",
//                     }}
//                   >
//                     <span className="flex items-center justify-between">
//                       {link.label}

//                       {active && (
//                         <span className="text-sm text-zinc-500">
//                           0{index + 1}
//                         </span>
//                       )}
//                     </span>
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="flex items-center justify-between border-t border-white/[0.06] pt-6">
//             <button
//               type="button"
//               onClick={() =>
//                 changeLang(lang === "en" ? "ru" : "en")
//               }
//               className="
//                 rounded-full
//                 border
//                 border-white/[0.1]
//                 px-4
//                 py-2
//                 text-xs
//                 font-semibold
//                 uppercase
//                 tracking-[0.15em]
//                 text-zinc-400
//                 transition
//                 hover:border-white/[0.2]
//                 hover:text-white
//               "
//             >
//               {lang}
//             </button>

//             <Link
//               href="/contact"
//               tabIndex={open ? 0 : -1}
//               className="
//                 flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 bg-white
//                 px-5
//                 py-2.5
//                 text-sm
//                 font-semibold
//                 !text-black
//               "
//             >
//               {t.contact}

//               <ArrowUpRight size={15} />
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
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import { useLang } from "@/src/hooks/useLang";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const {
    lang,
    changeLang,
    t,
  } = useLang();

  const content = t.navbarSection;

  /* =========================================================
     LINKS
  ========================================================= */

  const links = [
    {
      href: "/",
      label: t.home,
    },
    {
      href: "/about",
      label: t.about,
    },
    {
      href: "/projects",
      label: t.projects,
    },
    {
      href: "/contact",
      label: t.contact,
    },
  ];

  /* =========================================================
     ACTIVE ROUTE
  ========================================================= */

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  /* =========================================================
     SCROLL STATE
  ========================================================= */

  useEffect(() => {
    function handleScroll() {
      setScrolled(
        window.scrollY > 24
      );
    }

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =========================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    if (!open) {
      return;
    }

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [open]);

  /* =========================================================
     LANGUAGE
  ========================================================= */

  function toggleLanguage() {
    changeLang(
      lang === "en"
        ? "ru"
        : "en"
    );
  }

  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`
          fixed
          left-0
          right-0
          top-0

          z-50

          transition-all
          duration-500

          ${
            scrolled
              ? `
                border-b
                border-white/[0.07]

                bg-[#050505]/82

                shadow-[0_10px_40px_rgba(0,0,0,0.18)]

                backdrop-blur-2xl
              `
              : `
                border-b
                border-transparent

                bg-transparent
              `
          }
        `}
      >
        <div className="container-main">
          <nav
            className="
              flex
              h-[72px]

              items-center
              justify-between

              px-3
    sm:px-6
    lg:px-7
            "
            aria-label="Main navigation"
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <motion.div
              whileHover={{
                scale: 1.025,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                relative
                z-10

                flex
                items-center
              "
            >
              <Logo />
            </motion.div>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <div
              className="
                hidden

                items-center

                gap-1

                md:flex
              "
            >
              {links.map(
                (link) => {
                  const active =
                    isActive(
                      link.href
                    );

                  return (
                    <Link
                      key={
                        link.href
                      }
                      href={
                        link.href
                      }
                      aria-current={
                        active
                          ? "page"
                          : undefined
                      }
                      className={`
                        group
                        relative

                        px-4
                        py-2

                        text-[13px]
                        font-medium

                        tracking-[-0.01em]

                        transition-colors
                        duration-300

                        ${
                          active
                            ? "text-white"
                            : "text-white/40 hover:text-white/80"
                        }
                      `}
                    >
                      {
                        link.label
                      }

                      {/* ACTIVE MARKER */}

                      <span
                        className={`
                          absolute

                          bottom-[-2px]
                          left-1/2

                          h-[2px]

                          -translate-x-1/2

                          bg-red-600

                          transition-all
                          duration-300

                          ${
                            active
                              ? "w-5 opacity-100"
                              : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-100"
                          }
                        `}
                      />
                    </Link>
                  );
                }
              )}
            </div>

            {/* =================================================
                DESKTOP RIGHT SIDE
            ================================================= */}

            <div
              className="
                hidden

                items-center

                gap-3

                md:flex
              "
            >
              {/* LANGUAGE */}

              <button
                type="button"
                onClick={
                  toggleLanguage
                }
                aria-label={
                  lang === "en"
                    ? content.switchToRussian
                    : content.switchToEnglish
                }
                className="
                  group

                  relative

                  overflow-hidden

                  rounded-full

                  border
                  border-white/[0.1]

                  bg-white/[0.025]

                  px-3.5
                  py-2

                  text-[10px]
                  font-semibold
                  uppercase

                  tracking-[0.14em]

                  text-white/45

                  transition-all
                  duration-300

                  hover:border-red-600/50

                  hover:text-white
                "
              >
                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2

                    h-[2px]
                    w-0

                    -translate-x-1/2

                    bg-red-600

                    transition-all
                    duration-300

                    group-hover:w-5
                  "
                />

                {lang}
              </button>

              {/* CONTACT CTA */}

              <Link
                href="/contact"
                className="
                  group

                  relative

                  flex
                  items-center

                  gap-2

                  overflow-hidden

                  rounded-full

                  bg-white

                  px-4.5
                  py-2.5

                  text-[12px]
                  font-semibold

                  !text-black

                  transition-all
                  duration-300

                  hover:scale-[1.02]

                  hover:bg-white/90
                "
              >
                {/* RED HIT */}

                <span
                  className="
                    absolute

                    bottom-0
                    left-0

                    h-[2px]
                    w-0

                    bg-red-600

                    transition-all
                    duration-500

                    group-hover:w-full
                  "
                />

                {t.contact}

                <ArrowUpRight
                  size={13}
                  strokeWidth={
                    2.2
                  }
                  className="
                    transition-all
                    duration-300

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5

                    group-hover:text-red-600
                  "
                />
              </Link>
            </div>

            {/* =================================================
                MOBILE BUTTON
            ================================================= */}

            <button
              type="button"
              aria-label={
                open
                  ? content.closeMenu
                  : content.openMenu
              }
              aria-expanded={
                open
              }
              onClick={() =>
                setOpen(
                  (value) =>
                    !value
                )
              }
              className="
                relative
                z-[70]

                flex
                h-10
                w-10

                items-center
                justify-center

                overflow-hidden

                rounded-full

                border
                border-white/[0.1]

                bg-white/[0.03]

                text-white

                transition-all
                duration-300

                hover:border-red-600/50

                hover:bg-white/[0.06]

                md:hidden
              "
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                {open ? (
                  <motion.span
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -60,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 60,
                      scale: 0.8,
                    }}
                    transition={{
                      duration:
                        0.2,
                    }}
                  >
                    <X
                      size={18}
                      strokeWidth={
                        1.8
                      }
                    />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 60,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -60,
                      scale: 0.8,
                    }}
                    transition={{
                      duration:
                        0.2,
                    }}
                  >
                    <Menu
                      size={18}
                      strokeWidth={
                        1.8
                      }
                    />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed
              inset-0

              z-40

              overflow-hidden

              bg-[#050505]

              md:hidden
            "
          >
            {/* BACKGROUND */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
              "
            >
              <div
                className="
                  absolute

                  right-[-40%]
                  top-[15%]

                  h-[420px]
                  w-[420px]

                  rounded-full

                  bg-red-600/[0.025]

                  blur-[150px]
                "
              />

              <div
                className="
                  absolute
                  inset-0

                  opacity-[0.015]
                "
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",

                  backgroundSize:
                    "84px 84px",
                }}
              />
            </div>

            <div
              className="
                container-main

                relative
                z-10

                flex
                h-full

                flex-col

                justify-center

                px-6

                pt-[72px]
              "
            >
              {/* LABEL */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.1,
                }}
                className="
                  mb-5

                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-[11px]
                    w-[2px]

                    bg-red-600
                  "
                />

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase

                    tracking-[0.2em]

                    text-white/30
                  "
                >
                  {
                    content.navigation
                  }
                </p>
              </motion.div>

              {/* LINKS */}

              <div className="flex flex-col">
                {links.map(
                  (
                    link,
                    index
                  ) => {
                    const active =
                      isActive(
                        link.href
                      );

                    return (
                      <motion.div
                        key={
                          link.href
                        }
                        initial={{
                          opacity: 0,
                          y: 18,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration:
                            0.45,

                          delay:
                            0.12 +
                            index *
                              0.055,

                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        }}
                      >
                        <Link
                          href={
                            link.href
                          }
                          onClick={
                            closeMenu
                          }
                          aria-current={
                            active
                              ? "page"
                              : undefined
                          }
                          className={`
                            group

                            relative

                            flex
                            items-center
                            justify-between

                            border-b
                            border-white/[0.06]

                            py-4

                            text-4xl
                            font-medium

                            tracking-[-0.04em]

                            transition-all
                            duration-300

                            ${
                              active
                                ? "text-white"
                                : "text-white/30 hover:pl-2 hover:text-white"
                            }
                          `}
                        >
                          <span
                            className="
                              flex
                              items-center
                              gap-3
                            "
                          >
                            {/* ACTIVE RED BAR */}

                            <span
                              className={`
                                h-6

                                bg-red-600

                                transition-all
                                duration-300

                                ${
                                  active
                                    ? "w-[3px]"
                                    : "w-0 group-hover:w-[3px]"
                                }
                              `}
                            />

                            {
                              link.label
                            }
                          </span>

                          <span
                            className={`
                              text-xs
                              font-semibold

                              tracking-[0.12em]

                              transition-colors

                              ${
                                active
                                  ? "text-red-500"
                                  : "text-white/15 group-hover:text-white/35"
                              }
                            `}
                          >
                            {String(
                              index +
                                1
                            ).padStart(
                              2,
                              "0"
                            )}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  }
                )}
              </div>

              {/* =================================================
                  MOBILE BOTTOM
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.45,
                }}
                className="
                  mt-10

                  flex
                  items-center
                  justify-between

                  border-t
                  border-white/[0.06]

                  pt-6
                "
              >
                {/* LANGUAGE */}

                <button
                  type="button"
                  onClick={
                    toggleLanguage
                  }
                  className="
                    rounded-full

                    border
                    border-white/[0.1]

                    px-4
                    py-2

                    text-xs
                    font-semibold
                    uppercase

                    tracking-[0.15em]

                    text-white/45

                    transition-all
                    duration-300

                    hover:border-red-600/50

                    hover:text-white
                  "
                >
                  {lang}
                </button>

                {/* CONTACT */}

                <Link
                  href="/contact"
                  onClick={
                    closeMenu
                  }
                  className="
                    group

                    relative

                    flex
                    items-center

                    gap-2

                    overflow-hidden

                    rounded-full

                    bg-white

                    px-5
                    py-2.5

                    text-sm
                    font-semibold

                    !text-black
                  "
                >
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0

                      h-[2px]
                      w-0

                      bg-red-600

                      transition-all
                      duration-500

                      group-hover:w-full
                    "
                  />

                  {t.contact}

                  <ArrowUpRight
                    size={15}
                    className="
                      transition-all
                      duration-300

                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5

                      group-hover:text-red-600
                    "
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}