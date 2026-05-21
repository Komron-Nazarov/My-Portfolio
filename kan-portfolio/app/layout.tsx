// import Navbar from "./components/Navbar";
// import "./globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-black text-white">
        
//         <Navbar />

//         {children}

//       </body>
//     </html>
//   );
// }

import "./globals.css";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import { Toaster } from "sonner"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">

        {/* BACKGROUND (самый нижний слой) */}
        <AnimatedBackground />

        {/* NAVBAR (поверх всего, фиксированный) */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="relative z-10 pt-20">
          {children}
        </div>

         <Toaster
          position="top-right"
          richColors
        />

      </body>
    </html>
  );
}