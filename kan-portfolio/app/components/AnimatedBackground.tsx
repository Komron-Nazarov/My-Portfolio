"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    // STARS
    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.4,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: (Math.random() - 0.5) * 0.15,
    }));

    let t = 0;

    const drawWave = (
      amplitude: number,
      frequency: number,
      speed: number,
      yOffset: number,
      opacity: number
    ) => {
      ctx.beginPath();

      for (let x = 0; x <= canvas.width; x += 8) {
        const y =
          canvas.height / 2 +
          Math.sin(x * frequency + t * speed) * amplitude +
          Math.cos(x * 0.003 + t * speed) * 30 +
          yOffset;

        ctx.lineTo(x, y);
      }

      // WHITE GLOW
      ctx.shadowBlur = 20;
      ctx.shadowColor = "rgba(255,255,255,0.5)";

      // RED CORE
      ctx.strokeStyle = `rgba(255,40,40,${opacity})`;
      ctx.lineWidth = 2;

      ctx.stroke();

      ctx.shadowBlur = 0;
    };

    const animate = () => {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // WAVES
      drawWave(70, 0.01, 1, -120, 0.9);
      drawWave(60, 0.012, -1.2, -40, 0.7);
      drawWave(90, 0.008, 0.8, 50, 0.5);
      drawWave(50, 0.015, -0.6, 130, 0.35);

      // STARS
      stars.forEach((s, i) => {
        s.x += s.speedX;
        s.y += s.speedY;

        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;

        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;

        // STAR
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);

        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(255,80,80,0.8)";
        ctx.fill();

        // CONNECTIONS
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];

          const dx = s.x - s2.x;
          const dy = s.y - s2.y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s2.x, s2.y);

            ctx.strokeStyle = `rgba(255,60,60,${
              0.15 - dist / 1000
            })`;

            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        ctx.shadowBlur = 0;
      });

      t += 0.01;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10"
      />

      {/* RED GLOW */}
      <div className="fixed top-[-300px] left-[-300px] w-[700px] h-[700px] bg-red-600/10 blur-3xl rounded-full -z-10" />

      <div className="fixed bottom-[-300px] right-[-300px] w-[700px] h-[700px] bg-red-500/10 blur-3xl rounded-full -z-10" />
    </>
  );
}