"use client";

import { useEffect, useState } from "react";
import { translations } from "@/src/i18n/translations";

export type Lang = "en" | "ru";

export function useLang() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved) setLang(saved);
  }, []);

  const changeLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  const t = translations[lang];

  return { lang, changeLang, t };
}