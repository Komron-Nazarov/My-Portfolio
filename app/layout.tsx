// // // import Navbar from "./components/Navbar";
// // // import "./globals.css";

// // // export default function RootLayout({
// // //   children,
// // // }: {
// // //   children: React.ReactNode;
// // // }) {
// // //   return (
// // //     <html lang="en">
// // //       <body className="bg-black text-white">
        
// // //         <Navbar />

// // //         {children}

// // //       </body>
// // //     </html>
// // //   );
// // // }

// // import "./globals.css";
// // import AnimatedBackground from "./components/AnimatedBackground";
// // import Navbar from "./components/Navbar";
// // import { Toaster } from "sonner"

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <html lang="en">
// //       <body className="bg-black text-white overflow-x-hidden">

// //         {/* BACKGROUND (самый нижний слой) */}
// //         <AnimatedBackground />

// //         {/* NAVBAR (поверх всего, фиксированный) */}
// //         <Navbar />

// //         {/* PAGE CONTENT */}
// //         <div className="relative z-10 pt-20">
// //           {children}
// //         </div>

// //          <Toaster
// //           position="top-right"
// //           richColors
// //         />

// //       </body>
// //     </html>
// //   );
// // }




// import type { Metadata, Viewport } from "next";
// import "./globals.css";

// import AnimatedBackground from "./components/AnimatedBackground";
// import Navbar from "./components/Navbar";
// import { Toaster } from "sonner";
// import Footer from "./components/Footer";

// export const metadata: Metadata = {
//   title: {
//     default: "Komron Nazarov — Software Developer",
//     template: "%s — Komron Nazarov",
//   },

//   description:
//     "Komron Nazarov — Software Developer building web applications, backend systems, Telegram bots and mobile experiences.",

//   keywords: [
//     "Komron Nazarov",
//     "Software Developer",
//     "Full-Stack Developer",
//     "Web Developer",
//     "Go Developer",
//     "Next.js Developer",
//     "React Developer",
//     "Telegram Bot Developer",
//     "Swift Developer",
//   ],

//   authors: [
//     {
//       name: "Komron Nazarov",
//     },
//   ],

//   creator: "Komron Nazarov",

//   metadataBase: new URL("https://kn-portfolio-one.vercel.app"),

//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     title: "Komron Nazarov — Software Developer",
//     description:
//       "Software Developer building web applications, backend systems, Telegram bots and mobile experiences.",
//     url: "https://kn-portfolio-one.vercel.app",
//     siteName: "Komron Nazarov",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
//   themeColor: "#070707",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="overflow-x-hidden">
//         <AnimatedBackground />

//         <Navbar />

//         <main className="relative z-10 pt-20">
//           {children}
//         </main>

//         <Footer />
        
//         <Toaster position="top-right" richColors />
//       </body>
//     </html>
//   );
// }






import type {
  Metadata,
  Viewport,
} from "next";

import "./globals.css";

import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Toaster } from "sonner";

const siteUrl =
  "https://kn-portfolio-one.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Komron Nazarov — Software Developer",
    template:
      "%s — Komron Nazarov",
  },

  description:
    "Software Developer building web applications, backend systems, Telegram bots and mobile experiences.",

  applicationName:
    "Komron Nazarov Portfolio",

  authors: [
    {
      name: "Komron Nazarov",
    },
  ],

  creator: "Komron Nazarov",
  publisher: "Komron Nazarov",

  keywords: [
    "Komron Nazarov",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "Backend Developer",
    "Go Developer",
    "Next.js Developer",
    "React Developer",
    "Telegram Bot Developer",
    "Swift Developer",
    "Portfolio",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",

    url: siteUrl,

    siteName: "Komron Nazarov",

    title:
      "Komron Nazarov — Software Developer",

    description:
      "Software Developer building web applications, backend systems, Telegram bots and mobile experiences.",

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Komron Nazarov — Software Developer",

    description:
      "Software Developer building web applications, backend systems, Telegram bots and mobile experiences.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview":
        "large",

      "max-snippet": -1,

      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,

  themeColor: "#050505",

  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="
          overflow-x-hidden
          bg-[#050505]
          text-white
        "
      >
        <AnimatedBackground />

        <Navbar />

        <main className="relative z-10 pt-20">
          {children}
        </main>

        <Footer />

        <Toaster
          position="top-right"
          richColors
        />
      </body>
    </html>
  );
}