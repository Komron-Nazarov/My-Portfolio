"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLang, type Lang } from "@/src/hooks/useLang";

const labels = {
  en: { work: "WORK", about: "ABOUT", stack: "SYSTEM", journey: "JOURNEY", contact: "CONTACT", talk: "LET'S TALK", menu: "MENU", close: "CLOSE" },
  ru: { work: "ПРОЕКТЫ", about: "ОБО МНЕ", stack: "СИСТЕМА", journey: "ПУТЬ", contact: "КОНТАКТ", talk: "ОБСУДИТЬ", menu: "МЕНЮ", close: "ЗАКРЫТЬ" },
  tj: { work: "ЛОИҲАҲО", about: "ДАР БОРАМ", stack: "СИСТЕМА", journey: "МАСИР", contact: "ТАМОС", talk: "ГУФТУГӮ", menu: "МЕНЮ", close: "ПӮШИДАН" },
} as const;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { lang, changeLang } = useLang();
  const t = labels[lang];
  if (pathname === "/login" || pathname.startsWith("/admin")) return null;

  const links = [["/#work", t.work], ["/#about", t.about], ["/#system", t.stack], ["/#journey", t.journey], ["/#contact", t.contact]];
  return (
    <header className="site-header">
      <nav className="site-nav shell" aria-label="Primary navigation">
        <Link className="brand-mark" href="/" aria-label="Komron Nazarov — home">
          <Image src="/logo-kn.jpg" alt="" width={737} height={726} loading="eager" style={{ width: 42, height: "auto" }} />
          <span>KOMRON<br />NAZAROV</span>
        </Link>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </div>
        <div className="nav-tools">
          <div className="language-switch" aria-label="Language">
            {(["ru", "en", "tj"] as Lang[]).map((item) => <button key={item} className={lang === item ? "active" : ""} onClick={() => changeLang(item)} aria-pressed={lang === item}>{item.toUpperCase()}</button>)}
          </div>
          <Link className="nav-cta" href="/#contact">{t.talk} <span>↗</span></Link>
          <button className="nav-menu" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? t.close : t.menu}</button>
        </div>
      </nav>
    </header>
  );
}
