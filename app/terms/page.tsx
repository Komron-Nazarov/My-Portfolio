import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the personal portfolio of Komron Nazarov.",
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms of Use — Komron Nazarov", description: "Terms of Use for the personal portfolio of Komron Nazarov.", url: "/terms" },
};

export default function TermsPage() { return <TermsContent />; }
