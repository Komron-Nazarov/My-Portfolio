"use client";

import { useEffect, useRef, useState } from "react";

type Part = {
  text: string;
  className?: string;
};

type Props = {
  parts: Part[];
  className?: string;
};

export default function TypingTitle({
  parts,
  className = "",
}: Props) {
  const [length, setLength] = useState(0);
  const [started, setStarted] = useState(false);

  const ref = useRef<HTMLHeadingElement | null>(null);

  const fullText = parts.map((p) => p.text).join("");

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let i = 0;

    const type = () => {
      setLength(i);

      i++;

      if (i <= fullText.length) {
        setTimeout(type, 45);
      }
    };

    type();
  }, [started, fullText.length]);

  const currentRef = { value: 0 };

  return (
    <h1
      ref={ref}
      className={`
        relative
        whitespace-pre-line
        ${className}
      `}
    >
      {parts.map((part, index) => {
        const start = currentRef.value;
        const end = currentRef.value + part.text.length;

        const visibleText = fullText.slice(
          start,
          Math.min(end, length)
        );

        currentRef.value = end;

        return (
          <span
            key={index}
            className={part.className}
          >
            {visibleText}
          </span>
        );
      })}

      <span
        className="
          animate-pulse
          text-red-500
        "
      >
        |
      </span>
    </h1>
  );
}