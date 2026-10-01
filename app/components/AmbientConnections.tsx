"use client";

import { useEffect, useRef } from "react";

/** A quiet, pointer-driven field: no perpetual animation or pointer interception. */
export default function AmbientConnections() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;
    const media = matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let width = 0, height = 0, frame = 0, last = 0;
    let x = -1000, y = -1000, strength = 0, target = 0;
    let points: { x: number; y: number }[] = [];

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      if (!media.matches) return;
      const near = points.filter(p => Math.hypot(p.x - x, p.y - y) < 190);
      if (strength > .005) {
        const light = ctx!.createRadialGradient(x, y, 0, x, y, 240);
        light.addColorStop(0, `rgba(231,22,40,${.08 * strength})`);
        light.addColorStop(1, "rgba(231,22,40,0)");
        ctx!.fillStyle = light;
        ctx!.fillRect(0, 0, width, height);
        for (let i = 0; i < near.length; i++) {
          for (let j = i + 1; j < near.length; j++) {
            const a = near[i], b = near[j];
            const distance = Math.hypot(a.x - b.x, a.y - b.y);
            if (distance > 115) continue;
            const proximity = 1 - Math.max(Math.hypot(a.x-x,a.y-y), Math.hypot(b.x-x,b.y-y)) / 190;
            ctx!.strokeStyle = `rgba(231,22,40,${.5 * strength * proximity * (1-distance/115)})`;
            ctx!.lineWidth = .8;
            ctx!.beginPath(); ctx!.moveTo(a.x,a.y); ctx!.lineTo(b.x,b.y); ctx!.stroke();
          }
        }
      }
      for (const p of points) {
        const proximity = Math.max(0, 1-Math.hypot(p.x-x,p.y-y)/190) * strength;
        ctx!.fillStyle = `rgba(231,45,58,${.12 + proximity*.55})`;
        ctx!.beginPath(); ctx!.arc(p.x,p.y,.8+proximity*.6,0,Math.PI*2); ctx!.fill();
      }
    }
    function tick(now: number) {
      frame = 0;
      const elapsed = Math.min(64, now-last || 16); last = now;
      strength += (target-strength) * (1-Math.exp(-elapsed/120));
      draw();
      if (Math.abs(strength-target) > .005) frame = requestAnimationFrame(tick);
    }
    function schedule() { if (!frame && !document.hidden) { last=0; frame=requestAnimationFrame(tick); } }
    function resize() {
      width=host!.clientWidth; height=host!.clientHeight;
      const dpr=Math.min(devicePixelRatio || 1,1.5);
      canvas!.width=Math.round(width*dpr); canvas!.height=Math.round(height*dpr);
      ctx!.setTransform(dpr,0,0,dpr,0,0);
      points=[];
      // Staggered, deterministic spacing prevents dense clusters and resize flicker.
      for(let row=0;row<Math.ceil(height/80);row++) {
        for(let col=0;col<Math.ceil(width/85);col++) {
          const seed=Math.sin(row*127+col*311)*43758.5453;
          const jitter=seed-Math.floor(seed);
          points.push({x:col*85+18+jitter*36,y:row*80+18+(1-jitter)*32});
        }
      }
      draw();
    }
    function move(e: PointerEvent) {
      if (!media.matches || e.pointerType === "touch") return;
      const rect=host!.getBoundingClientRect(); x=e.clientX-rect.left; y=e.clientY-rect.top;
      target=1; schedule();
    }
    function leave() { target=0; schedule(); }
    function visibility() { if(document.hidden) { cancelAnimationFrame(frame); frame=0; } else { strength=0; target=0; draw(); } }
    const observer=new ResizeObserver(resize); observer.observe(host);
    host.addEventListener("pointermove",move,{passive:true});
    host.addEventListener("pointerleave",leave);
    window.addEventListener("blur",leave);
    document.addEventListener("visibilitychange",visibility);
    media.addEventListener("change",resize);
    resize();
    return () => {
      cancelAnimationFrame(frame); observer.disconnect();
      host.removeEventListener("pointermove",move); host.removeEventListener("pointerleave",leave);
      window.removeEventListener("blur",leave); document.removeEventListener("visibilitychange",visibility);
      media.removeEventListener("change",resize);
    };
  }, []);

  return <canvas ref={ref} className="ambient-connections" aria-hidden="true" />;
}
