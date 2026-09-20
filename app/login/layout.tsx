import type { Metadata } from "next";
import "../admin-surface.css";

export const metadata: Metadata = { title: "Admin access", robots: { index: false, follow: false } };

export default function LoginLayout({ children }: { children: React.ReactNode }) { return children; }
