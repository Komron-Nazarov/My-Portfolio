"use client";
import Link from "next/link";
import { useLang } from "@/src/hooks/useLang";
import type { Project } from "../types/project";

const c={en:{over:"WORK / PROJECT INDEX",title:"VERIFIED SYSTEMS.",open:"OPEN CASE",pending:"VISUAL WILL BE ADDED"},ru:{over:"ПРОЕКТЫ / КАТАЛОГ",title:"ПОДТВЕРЖДЁННЫЕ СИСТЕМЫ.",open:"ОТКРЫТЬ КЕЙС",pending:"ВИЗУАЛ БУДЕТ ДОБАВЛЕН"},tj:{over:"ЛОИҲАҲО / ФЕҲРИСТ",title:"СИСТЕМАҲОИ ТАСДИҚШУДА.",open:"КУШОДАНИ КЕЙС",pending:"НАМО ИЛОВА МЕШАВАД"}} as const;
export default function ProjectIndexClient({projects}:{projects:Project[]}){const{lang}=useLang();const t=c[lang];return <div className="project-index shell"><header className="page-hero"><p className="eyebrow">{t.over}</p><h1 className="page-title">{t.title}</h1></header><div className="index-list">{projects.map((p,i)=><article key={p.slug}><Link href={`/projects/${p.slug}`} className="index-copy"><span>0{i+1}</span><p>{p.kind}</p><h2>{p.title.toUpperCase()}</h2><i>{t.open} ↗</i></Link><Link href={`/projects/${p.slug}`} className="index-image index-placeholder"><span>{p.title}</span><small>{t.pending}</small></Link></article>)}</div></div>}
