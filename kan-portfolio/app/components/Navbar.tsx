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

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-white">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold">
          Komron<span className="text-blue-500">.</span>
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm text-gray-400 hover:text-white transition"
            >
              {l.label}

              {/* underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300
                ${isActive(l.href) ? "w-full" : "w-0"}`}
              />
            </Link>
          ))}

          {/* AUTH */}
          <Link
            href="/login"
            className="px-3 py-1 bg-white text-black rounded"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-3 py-1 bg-gray-800 text-white rounded"
          >
            Register
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-2xl relative text-gray-400 hover:text-white"
            >
              {l.label}

              <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-blue-500 transition-all
                ${isActive(l.href) ? "w-full" : "w-0"}`}
              />
            </Link>
          ))}

          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="px-5 py-2 bg-white text-black rounded"
          >
            Login
          </Link>

          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="px-5 py-2 bg-gray-800 text-white rounded"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}