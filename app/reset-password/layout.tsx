import type { Metadata } from "next";
import "../admin-surface.css";

export const metadata: Metadata = { title: "Restore admin access", robots: { index: false, follow: false } };

export default function ResetPasswordLayout({ children }: { children: React.ReactNode }) { return children; }
