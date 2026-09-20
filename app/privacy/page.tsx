import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the personal portfolio of Komron Nazarov.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy Policy — Komron Nazarov", description: "Privacy Policy for the personal portfolio of Komron Nazarov.", url: "/privacy" },
};

export default function PrivacyPage() { return <PrivacyContent />; }
