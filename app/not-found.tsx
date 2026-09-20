import Link from "next/link";

export default function NotFound() {
  return <div className="signal-grid grid min-h-screen place-items-center bg-[#050505] px-6 pt-20 text-center"><div><p className="mono text-xs uppercase tracking-[.18em] text-red-500">Error / Route not found</p><h1 className="display mt-6 text-[clamp(7rem,22vw,20rem)] leading-[.72]">404</h1><p className="mx-auto mt-8 max-w-md leading-7 text-white/50">The requested route is outside this system.</p><Link href="/" className="mt-8 inline-flex bg-white px-6 py-4 text-xs font-bold uppercase tracking-[.12em] text-black hover:bg-red-500 hover:text-white">Return home</Link></div></div>;
}
