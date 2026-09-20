"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/src/hooks/useLang";

const copy = {
  en: { privacy:"PRIVACY", terms:"TERMS", top:"BACK TO TOP", email:"WRITE DIRECTLY" },
  ru: { privacy:"КОНФИДЕНЦИАЛЬНОСТЬ", terms:"УСЛОВИЯ", top:"НАВЕРХ", email:"НАПИСАТЬ НАПРЯМУЮ" },
  tj: { privacy:"МАХФИЯТ", terms:"ШАРТҲО", top:"БОЛО", email:"МУСТАҚИМ НАВИШТАН" },
} as const;
export default function Footer() {
  const pathname = usePathname();
  const { lang } = useLang();
  if (pathname === "/login" || pathname.startsWith("/admin")) return null;
  const c = copy[lang];
  return <footer className="site-footer"><div className="shell footer-compact">
    <div className="footer-sign"><span><Image src="/logo-kn.jpg" alt="KN" width={737} height={726} sizes="54px" /></span><div><strong>KOMRON NAZAROV</strong><small>© 2026</small></div></div>
    <a className="footer-mail" href="mailto:komron7nazarov@gmail.com"><small>{c.email}</small><strong>komron7nazarov@gmail.com</strong><i>↗</i></a>
    <nav aria-label="Footer"><Link href="/privacy">{c.privacy}</Link><Link href="/terms">{c.terms}</Link><a href="#main-content">{c.top} ↑</a></nav>
  </div></footer>;
}
