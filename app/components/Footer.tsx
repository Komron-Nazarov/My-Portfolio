"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/src/hooks/useLang";

export default function Footer() {
  const { lang } = useLang();

  const content =
    lang === "ru"
      ? {
          role: "Software Developer",
          subtitle: "Web · Backend · Bots · Mobile",
          privacy: "Политика конфиденциальности",
          terms: "Условия использования",
          rights: "Все права защищены.",
        }
      : {
          role: "Software Developer",
          subtitle: "Web · Backend · Bots · Mobile",
          privacy: "Privacy Policy",
          terms: "Terms of Use",
          rights: "All rights reserved.",
        };

  const year = new Date().getFullYear();

  return (
    <footer
      className="
        border-t
        border-white/[0.06]
        bg-[#050505]
        px-6
        py-10
      "
    >
      <div className="container-main">
        <div
          className="
            flex
            flex-col
            gap-10
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            <p className="text-base font-medium text-white">
              Komron Nazarov
            </p>

            <p className="mt-1 text-sm text-white/35">
              {content.role}
            </p>

            <p className="mt-1 text-xs text-white/20">
              {content.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a
                href="https://github.com/Komron-Nazarov"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-1.5
                  text-white/35
                  transition-colors
                  hover:text-white/70
                "
              >
                GitHub

                <ArrowUpRight
                  size={12}
                  className="
                    transition-transform
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

              <a
                href="mailto:komron7nazarov@gmail.com"
                className="
                  text-white/35
                  transition-colors
                  hover:text-white/70
                "
              >
                Email
              </a>

              <Link
                href="/privacy"
                className="
                  text-white/35
                  transition-colors
                  hover:text-white/70
                "
              >
                {content.privacy}
              </Link>

              <Link
                href="/terms"
                className="
                  text-white/35
                  transition-colors
                  hover:text-white/70
                "
              >
                {content.terms}
              </Link>
            </div>

            <p className="text-xs text-white/20">
              © {year} Komron Nazarov. {content.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}