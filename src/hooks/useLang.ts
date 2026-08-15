// "use client";

// import { useEffect, useState } from "react";
// import { translations } from "@/src/i18n/translations";

// export type Lang = "en" | "ru";

// export function useLang() {
//   const [lang, setLang] = useState<Lang>("en");

//   useEffect(() => {
//     const saved = localStorage.getItem("lang") as Lang | null;
//     if (saved) setLang(saved);
//   }, []);

//   const changeLang = (l: Lang) => {
//     setLang(l);
//     localStorage.setItem("lang", l);
//   };

//   const t = translations[lang];

//   return { lang, changeLang, t };
// }
"use client";

import { useSyncExternalStore } from "react";
import { translations } from "@/src/i18n/translations";

export type Lang = "en" | "ru";

const STORAGE_KEY = "lang";
const LANGUAGE_EVENT = "portfolio-language-change";

function isLang(value: string | null): value is Lang {
  return value === "en" || value === "ru";
}

function getSnapshot(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY);

  return isLang(saved) ? saved : "en";
}

function getServerSnapshot(): Lang {
  return "en";
}

function subscribe(callback: () => void) {
  const handleLanguageChange = () => callback();

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      callback();
    }
  };

  window.addEventListener(LANGUAGE_EVENT, handleLanguageChange);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(LANGUAGE_EVENT, handleLanguageChange);
    window.removeEventListener("storage", handleStorage);
  };
}

export function useLang() {
  const lang = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const changeLang = (nextLang: Lang) => {
    localStorage.setItem(STORAGE_KEY, nextLang);

    document.documentElement.lang = nextLang;

    window.dispatchEvent(new Event(LANGUAGE_EVENT));
  };

  const t = translations[lang];

  return {
    lang,
    changeLang,
    t,
  };
}