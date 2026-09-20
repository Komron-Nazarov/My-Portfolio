"use client";

export default function ErrorPage({ unstable_retry }: { error: Error & { digest?: string }; unstable_retry: () => void }) {
  return <div className="signal-grid grid min-h-screen place-items-center bg-[#050505] px-6 pt-20 text-center"><div><p className="mono text-xs uppercase tracking-[.18em] text-red-500">System / Recovery</p><h1 className="display mt-6 text-[clamp(4rem,12vw,10rem)] leading-[.78]">Something<br />broke.</h1><p className="mx-auto mt-8 max-w-md leading-7 text-white/50">The page could not complete this operation. Your next step is safe.</p><button type="button" onClick={unstable_retry} className="mt-8 bg-white px-6 py-4 text-xs font-bold uppercase tracking-[.12em] text-black hover:bg-red-500 hover:text-white">Try again</button></div></div>;
}
