import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./public-experience.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

const siteUrl = "https://kn-portfolio-one.vercel.app";
const geologica = localFont({ src: "../public/Geologica-variable.ttf", weight: "100 900", variable: "--font-geologica", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Komron Nazarov — Software & Product Engineer", template: "%s — Komron Nazarov" },
  description: "Software and product engineer building full-stack systems, native iOS applications, backend services and business automation.",
  applicationName: "Komron Nazarov Portfolio",
  authors: [{ name: "Komron Nazarov", url: siteUrl }],
  creator: "Komron Nazarov",
  publisher: "Komron Nazarov",
  other: { "contact:email": "komron7nazarov@gmail.com" },
  keywords: ["Komron Nazarov", "Software Engineer", "Full Stack Developer", "iOS Developer", "Swift Developer", "SwiftUI", "UIKit", "Go Developer", "Next.js Developer", "Product Engineer", "Telegram Bot Developer"],
  icons: { icon: "/icon.jpg", apple: "/icon.jpg" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Komron Nazarov",
    title: "Komron Nazarov — Software & Product Engineer",
    description: "Full-stack systems, native iOS, backend and delivery — engineered as one product.",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Komron Nazarov — Software & Product Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Komron Nazarov — Software & Product Engineer",
    description: "Full-stack systems, native iOS, backend and delivery — engineered as one product.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  category: "technology",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#050505", colorScheme: "dark" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Komron Nazarov",
  url: siteUrl,
  jobTitle: "Software and Product Engineer",
  email: "mailto:komron7nazarov@gmail.com",
  sameAs: ["https://github.com/Komron-Nazarov", "https://www.instagram.com/komron.n7/", "https://t.me/KNazarov_7", "https://t.me/KN7_Life", "https://www.linkedin.com/in/komron-nazarov-0aa193361/"],
  knowsAbout: ["Next.js", "React", "TypeScript", "Swift", "SwiftUI", "UIKit", "Go", "Python", "PostgreSQL", "Product engineering", "Telegram bots"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geologica.variable}>
        <a href="#main-content" className="fixed left-4 top-4 z-[200] -translate-y-24 bg-white px-4 py-3 text-sm font-bold text-black focus:translate-y-0">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
