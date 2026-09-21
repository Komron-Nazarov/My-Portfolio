"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, type PointerEvent, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useLang, type Lang } from "@/src/hooks/useLang";
import type { Project } from "../types/project";
import CapabilityGraph from "./CapabilityGraph";

const copy = {
  en: {
    status: "AVAILABLE FOR SERIOUS BUILDS", over: "SOFTWARE ENGINEER / FULL-STACK BUILDER", title: "I BUILD THE WHOLE SYSTEM.",
    intro: "Interfaces, backend, data and delivery — engineered as one product.", explore: "EXPLORE VERIFIED WORK", github: "OPEN GITHUB",
    signal: "LIVE SYSTEM", city: "DUSHANBE / TJ", work: "SELECTED SYSTEMS", workTitle: "REAL PRODUCTS. LIVE PROOF.",
    workIntro: "No invented metrics and no decorative case studies. These projects link to the source and, where available, a working product.",
    open: "OPEN CASE", source: "SOURCE", live: "LIVE PRODUCT", allProjects: "ALL PROJECTS", visual: "PROJECT VISUAL", visualPending: "IMAGE / VIDEO — TO BE ADDED", about: "ENGINEERING POSITION", aboutTitle: "PRODUCT. ENGINEERING. MANAGEMENT.",
    aboutText: "I work where product decisions, implementation and delivery meet. The goal is not more screens or code — it is a system that solves the task and can be operated.",
    system: "SYSTEM MAP", systemTitle: "FROM INTENT TO PRODUCTION.", systemIntro: "Capabilities are shown as a connected delivery path, not fictional proficiency percentages.",
    contact: "CONTACT", contactTitle: "BRING THE HARD PROBLEM.", contactText: "Tell me what needs to exist, what is broken, or what has to scale. I will respond with questions that move it forward.",
    name: "YOUR NAME", email: "YOUR EMAIL", message: "THE PROBLEM / IDEA", send: "SEND MESSAGE", sending: "SENDING…", sent: "MESSAGE SENT", error: "COULD NOT SEND — TRY AGAIN", portrait: "Portrait of Komron Nazarov",
  },
  ru: {
    status: "ОТКРЫТ К СЕРЬЁЗНЫМ ПРОЕКТАМ", over: "SOFTWARE ENGINEER / FULL-STACK РАЗРАБОТЧИК", title: "Я СОЗДАЮ ВСЮ СИСТЕМУ.",
    intro: "Интерфейс, backend, данные и запуск — как единый продукт.", explore: "СМОТРЕТЬ РЕАЛЬНЫЕ ПРОЕКТЫ", github: "ОТКРЫТЬ GITHUB",
    signal: "СИСТЕМА В СЕТИ", city: "ДУШАНБЕ / TJ", work: "ИЗБРАННЫЕ СИСТЕМЫ", workTitle: "РЕАЛЬНЫЕ ПРОДУКТЫ. ЖИВЫЕ ДОКАЗАТЕЛЬСТВА.",
    workIntro: "Без выдуманных цифр и декоративных кейсов. У каждого проекта есть исходный код и, где возможно, рабочая версия.",
    open: "ОТКРЫТЬ КЕЙС", source: "ИСХОДНЫЙ КОД", live: "ЖИВОЙ ПРОДУКТ", allProjects: "ВСЕ ПРОЕКТЫ", visual: "ВИЗУАЛ ПРОЕКТА", visualPending: "ФОТО / ВИДЕО — БУДЕТ ДОБАВЛЕНО", about: "ИНЖЕНЕРНАЯ ПОЗИЦИЯ", aboutTitle: "ПРОДУКТ. ИНЖЕНЕРИЯ. УПРАВЛЕНИЕ.",
    aboutText: "Я работаю на стыке продуктовых решений, реализации и выпуска. Цель — не больше экранов или кода, а система, которая решает задачу и остаётся управляемой.",
    system: "КАРТА СИСТЕМЫ", systemTitle: "ОТ ЗАДАЧИ ДО PRODUCTION.", systemIntro: "Навыки показаны как связанный путь разработки, а не выдуманные проценты владения.",
    contact: "КОНТАКТ", contactTitle: "ПРИНЕСИТЕ СЛОЖНУЮ ЗАДАЧУ.", contactText: "Расскажите, что нужно создать, что не работает или что должно масштабироваться. Я отвечу вопросами, которые двигают задачу вперёд.",
    name: "ВАШЕ ИМЯ", email: "ВАШ EMAIL", message: "ЗАДАЧА / ИДЕЯ", send: "ОТПРАВИТЬ", sending: "ОТПРАВКА…", sent: "СООБЩЕНИЕ ОТПРАВЛЕНО", error: "ОШИБКА — ПОПРОБУЙТЕ ЕЩЁ", portrait: "Портрет Комрона Назарова",
  },
  tj: {
    status: "БАРОИ ЛОИҲАҲОИ ҶИДДӢ ОМОДААМ", over: "МУҲАНДИСИ БАРНОМА / FULL-STACK", title: "МАН ТАМОМИ СИСТЕМАРО МЕСОЗАМ.",
    intro: "Интерфейс, backend, додаҳо ва нашр — ҳамчун як маҳсулоти ягона.", explore: "ЛОИҲАҲОИ ВОҚЕИРО ДИДАН", github: "КУШОДАНИ GITHUB",
    signal: "СИСТЕМА ФАЪОЛ", city: "ДУШАНБЕ / TJ", work: "СИСТЕМАҲОИ БАРГӮЗИДА", workTitle: "МАҲСУЛОТИ ВОҚЕӢ. ДАЛЕЛИ ЗИНДА.",
    workIntro: "Бе рақамҳои сохта ва кейсҳои ороишӣ. Ҳар лоиҳа ба коди манбаъ ва, агар бошад, ба маҳсулоти корӣ мебарад.",
    open: "КУШОДАНИ КЕЙС", source: "КОДИ МАНБАЪ", live: "МАҲСУЛОТИ ЗИНДА", allProjects: "ҲАМАИ ЛОИҲАҲО", visual: "НАМОИ ЛОИҲА", visualPending: "АКС / ВИДЕО — ИЛОВА МЕШАВАД", about: "МАВҚЕИ МУҲАНДИСӢ", aboutTitle: "МАҲСУЛОТ. МУҲАНДИСӢ. ИДОРАКУНӢ.",
    aboutText: "Ман дар пайванди қарорҳои маҳсулотӣ, татбиқ ва нашр кор мекунам. Ҳадаф экран ё коди бештар нест — системаи ҳалкунандаи масъала ва идорашаванда аст.",
    system: "ХАРИТАИ СИСТЕМА", systemTitle: "АЗ НИЯТ ТО PRODUCTION.", systemIntro: "Қобилиятҳо ҳамчун роҳи пайвастаи таҳия нишон дода шудаанд, на фоизҳои сохта.",
    contact: "ТАМОС", contactTitle: "МАСЪАЛАИ ДУШВОРРО БИЁРЕД.", contactText: "Бигӯед, ки чӣ бояд сохта шавад, чӣ кор намекунад ё чӣ бояд васеъ гардад. Ман бо саволҳое ҷавоб медиҳам, ки корро пеш мебаранд.",
    name: "НОМИ ШУМО", email: "EMAIL-И ШУМО", message: "МАСЪАЛА / ҒОЯ", send: "ФИРИСТОДАН", sending: "ФИРИСТОДА ИСТОДААСТ…", sent: "ПАЁМ ФИРИСТОДА ШУД", error: "ХАТО — БОЗ КӮШИШ КУНЕД", portrait: "Акси Комрон Назаров",
  },
} as const;

const extraCopy = {
  en: {
    roadmap: "CAREER TRAJECTORY", roadmapTitle: "FROM PUBLIC SYSTEMS TO FINTECH.", roadmapIntro: "Verified employment and current product practice — no invented positions, forecasts or results.",
    evidence: "WHY TRUST THE WORK", evidenceTitle: "PROOF, NOT PROMISES.", evidenceIntro: "Trust comes from inspectable systems, working demos and engineering decisions that can be explained.",
    roles: "PROFESSIONAL DIRECTIONS", rolesTitle: "WHERE I CREATE VALUE.", rolesIntro: "Engagement areas grounded in the systems already built.",
    focus: "CURRENT FOCUS", focusTitle: "PRODUCT SYSTEMS THAT CONNECT EVERY LAYER.", focusText: "Current work centres on full-stack products, business workflows, backend reliability and interfaces that expose complex systems clearly.",
    available: "AVAILABLE FOR", estimate: "SCOPE AFTER DISCOVERY", how: "HOW I WORK", verified: "VERIFIED NOW",
  },
  ru: {
    roadmap: "КАРЬЕРНАЯ ТРАЕКТОРИЯ", roadmapTitle: "ОТ ГОССИСТЕМ К FINTECH.", roadmapIntro: "Подтверждённая работа и текущая продуктовая практика — без выдуманных должностей, прогнозов и результатов.",
    evidence: "ПОЧЕМУ МОЖНО ДОВЕРЯТЬ", evidenceTitle: "ДОКАЗАТЕЛЬСТВА, А НЕ ОБЕЩАНИЯ.", evidenceIntro: "Доверие создают системы, которые можно проверить, рабочие demo и инженерные решения, которые можно объяснить.",
    roles: "ПРОФЕССИОНАЛЬНЫЕ НАПРАВЛЕНИЯ", rolesTitle: "ГДЕ Я СОЗДАЮ ЦЕННОСТЬ.", rolesIntro: "Направления работы, подтверждённые уже созданными системами.",
    focus: "ТЕКУЩИЙ ФОКУС", focusTitle: "ПРОДУКТОВЫЕ СИСТЕМЫ, СВЯЗЫВАЮЩИЕ ВСЕ УРОВНИ.", focusText: "Сейчас фокус — full-stack продукты, бизнес-процессы, надёжный backend и интерфейсы, которые понятно раскрывают сложные системы.",
    available: "ДОСТУПЕН ДЛЯ", estimate: "ОЦЕНКА ПОСЛЕ ОБСУЖДЕНИЯ", how: "КАК Я РАБОТАЮ", verified: "ПОДТВЕРЖДЕНО",
  },
  tj: {
    roadmap: "МАСИРИ КАСБӢ", roadmapTitle: "АЗ СИСТЕМАҲОИ ДАВЛАТӢ БА FINTECH.", roadmapIntro: "Кори тасдиқшуда ва таҷрибаи ҷории маҳсулотӣ — бе вазифа, пешгӯӣ ва натиҷаҳои сохта.",
    evidence: "ЧАРО БОВАР КАРДАН МУМКИН", evidenceTitle: "ДАЛЕЛ, НА ВАЪДА.", evidenceIntro: "Эътимодро системаҳои санҷидашаванда, demo-и корӣ ва қарорҳои фаҳмондашаванда месозанд.",
    roles: "САМТҲОИ КАСБӢ", rolesTitle: "ДАР КУҶО МАН АРЗИШ МЕСОЗАМ.", rolesIntro: "Самтҳои кор, ки бо системаҳои сохташуда тасдиқ шудаанд.",
    focus: "ТАВАҶҶУҲИ ҲОЗИРА", focusTitle: "СИСТЕМАҲОИ МАҲСУЛОТӢ, КИ ҲАМАИ ҚАБАТҲОРО МЕПАЙВАНДАНД.", focusText: "Таваҷҷуҳи ҳозира — маҳсулоти full-stack, равандҳои тиҷоратӣ, backend-и боэътимод ва интерфейсҳои равшан.",
    available: "ОМОДА БАРОИ", estimate: "АРЗЁБӢ ПАС АЗ МУҲОКИМА", how: "ТАРЗИ КОР", verified: "ТАСДИҚШУДА",
  },
} as const;

const narrativeCopy = {
  en: {
    name: "KOMRON NAZAROV", current: "CURRENT ROLE", currentValue: "PROGRAMMER · FINTECH",
    path: "VERIFIED PATH", pathValue: "PUBLIC SYSTEMS → FINTECH", delivery: "DELIVERY SCOPE", deliveryValue: "INTERFACE → API → DATA → DEPLOY",
    route: "PORTFOLIO ROUTE", routeHint: "Four answers. One connected engineering story.",
    routeItems: [["VERIFIED WORK", "What has already been built"], ["SYSTEM THINKING", "How a product becomes a system"], ["CAREER PATH", "Where the experience comes from"], ["DIRECT CONTACT", "What we can build next"]],
    principles: [["PRODUCT LOGIC", "I define the task, user path, constraints and priority before implementation."], ["ENGINEERING DEPTH", "Web, native iOS, backend and data are connected as one technical system."], ["DELIVERY CONTROL", "Scope, verification, failure states and release remain part of the engineering work."]],
    layer: "RESPONSIBILITY LAYER", pathStart: "PROBLEM", pathEnd: "WORKING PRODUCT", inspect: "INSPECT PROOF",
  },
  ru: {
    name: "КОМРОН НАЗАРОВ", current: "ТЕКУЩАЯ РОЛЬ", currentValue: "ПРОГРАММИСТ · FINTECH",
    path: "ПОДТВЕРЖДЁННЫЙ ПУТЬ", pathValue: "ГОССИСТЕМЫ → FINTECH", delivery: "ЗОНА ПОСТАВКИ", deliveryValue: "ИНТЕРФЕЙС → API → ДАННЫЕ → DEPLOY",
    route: "МАРШРУТ ПОРТФОЛИО", routeHint: "Четыре ответа. Одна связная инженерная история.",
    routeItems: [["РЕАЛЬНАЯ РАБОТА", "Что уже было создано"], ["СИСТЕМНОЕ МЫШЛЕНИЕ", "Как продукт становится системой"], ["КАРЬЕРНЫЙ ПУТЬ", "Откуда берётся опыт"], ["ПРЯМОЙ КОНТАКТ", "Что можно создать дальше"]],
    principles: [["ПРОДУКТОВАЯ ЛОГИКА", "Определяю задачу, путь пользователя, ограничения и приоритет до реализации."], ["ИНЖЕНЕРНАЯ ГЛУБИНА", "Web, нативный iOS, backend и данные связываются в одну техническую систему."], ["КОНТРОЛЬ ПОСТАВКИ", "Scope, проверка, ошибки и выпуск остаются частью инженерной работы."]],
    layer: "СЛОЙ ОТВЕТСТВЕННОСТИ", pathStart: "ЗАДАЧА", pathEnd: "РАБОЧИЙ ПРОДУКТ", inspect: "ПРОВЕРИТЬ ДОКАЗАТЕЛЬСТВО",
  },
  tj: {
    name: "КОМРОН НАЗАРОВ", current: "НАҚШИ ҲОЗИРА", currentValue: "БАРНОМАСОЗ · FINTECH",
    path: "МАСИРИ ТАСДИҚШУДА", pathValue: "СИСТЕМАҲОИ ДАВЛАТӢ → FINTECH", delivery: "ДОИРАИ КОР", deliveryValue: "ИНТЕРФЕЙС → API → ДОДАҲО → DEPLOY",
    route: "МАСИРИ ПОРТФОЛИО", routeHint: "Чор ҷавоб. Як таърихи пайвастаи муҳандисӣ.",
    routeItems: [["КОРИ ВОҚЕӢ", "Чӣ аллакай сохта шудааст"], ["ТАФАККУРИ СИСТЕМАВӢ", "Чӣ гуна маҳсулот ба система табдил меёбад"], ["МАСИРИ КАСБӢ", "Таҷриба аз куҷо меояд"], ["ТАМОСИ МУСТАҚИМ", "Минбаъд чӣ сохтан мумкин аст"]],
    principles: [["МАНТИҚИ МАҲСУЛОТ", "Масъала, роҳи корбар, маҳдудият ва афзалиятро пеш аз татбиқ муайян мекунам."], ["АМИҚИИ МУҲАНДИСӢ", "Web, iOS-и нативӣ, backend ва додаҳо ба як системаи техникӣ пайваст мешаванд."], ["НАЗОРАТИ НАТИҶА", "Ҳаҷм, санҷиш, хатоҳо ва нашр қисми кори муҳандисӣ мемонанд."]],
    layer: "ҚАБАТИ МАСЪУЛИЯТ", pathStart: "МАСЪАЛА", pathEnd: "МАҲСУЛОТИ КОРӢ", inspect: "ДАЛЕЛРО САНҶИДАН",
  },
} as const;

const roadmap = {
  en: [
    ["02 JUN 2025 — 09 JUN 2026", "INFORMATION SYSTEMS SPECIALIST", "Medical and Social Expert Commission under the Ministry of Health of the Republic of Tajikistan. Information systems, data entry and processing; first professional experience in a government institution.", "EMPLOYMENT RECORD: INSPECTOR-REFERENT"],
    ["09 JUN 2026 — PRESENT", "PROGRAMMER · INNOVATSIYA CAPITAL CJSC MDO", "Transitioned into FinTech and currently works as a programmer in a financial organisation.", "CURRENT EMPLOYMENT"],
    ["CURRENT PRACTICE", "FULL-STACK PRODUCT SYSTEMS", "Public projects connect interface, application logic, backend and data into complete working systems.", "PUBLIC REPOSITORIES & DEMOS"],
  ],
  ru: [
    ["02.06.2025 — 09.06.2026", "СПЕЦИАЛИСТ ИНФОРМАЦИОННЫХ СИСТЕМ", "Медико-социальная экспертная комиссия при Министерстве здравоохранения Республики Таджикистан. Работа с информационными системами, ввод и обработка данных; первый профессиональный опыт в госструктуре.", "ПО ТРУДОВОЙ: ИНСПЕКТОР-РЕФЕРЕНТ"],
    ["09.06.2026 — НАСТОЯЩЕЕ ВРЕМЯ", "ПРОГРАММИСТ · ЗАО МДО «ИННОВАЦИЯ КАПИТАЛ»", "Переход в FinTech и текущая работа программистом в финансовой организации.", "ТЕКУЩЕЕ МЕСТО РАБОТЫ"],
    ["ТЕКУЩАЯ ПРАКТИКА", "FULL-STACK ПРОДУКТОВЫЕ СИСТЕМЫ", "Публичные проекты связывают интерфейс, прикладную логику, backend и данные в цельные работающие системы.", "РЕПОЗИТОРИИ И DEMO"],
  ],
  tj: [
    ["02.06.2025 — 09.06.2026", "МУТАХАССИСИ СИСТЕМАҲОИ ИТТИЛООТӢ", "Комиссияи экспертизаи тиббию иҷтимоӣ дар назди Вазорати тандурустии Ҷумҳурии Тоҷикистон. Кор бо системаҳои иттилоотӣ, ворид ва коркарди додаҳо; таҷрибаи аввалини касбӣ дар сохтори давлатӣ.", "ДАР ДАФТАРЧАИ МЕҲНАТӢ: НОЗИР-РЕФЕРЕНТ"],
    ["09.06.2026 — ТО ҲОЛ", "БАРНОМАСОЗ · ҶСП ТАҚХ «ИННОВАТСИЯ КАПИТАЛ»", "Гузариш ба FinTech ва кори ҷорӣ ҳамчун барномасоз дар ташкилоти молиявӣ.", "ҶОЙИ КОРИ ҲОЗИРА"],
    ["АМАЛИЯИ ҲОЗИРА", "СИСТЕМАҲОИ МАҲСУЛОТИ FULL-STACK", "Лоиҳаҳои кушода интерфейс, мантиқи барнома, backend ва додаҳоро ба системаҳои ягонаи корӣ мепайванданд.", "РЕПОЗИТОРИЯҲО ВА DEMO"],
  ],
} as const;

const evidence = {
  en: [["OPEN SOURCE","Public repositories make the implementation inspectable."],["WORKING DEMOS","Deployed products can be opened and tested directly."],["SYSTEM DEPTH","Projects cover interface, backend, data, roles and operational states."],["HONEST SCOPE","Experimental, private and unfinished work is labelled instead of exaggerated."]],
  ru: [["ОТКРЫТЫЙ КОД","Публичные репозитории позволяют проверить реализацию."],["РАБОЧИЕ DEMO","Развёрнутые продукты можно открыть и проверить напрямую."],["ГЛУБИНА СИСТЕМ","Проекты охватывают интерфейс, backend, данные, роли и состояния."],["ЧЕСТНЫЙ МАСШТАБ","Экспериментальная, приватная и незавершённая работа обозначается честно."]],
  tj: [["КОДИ КУШОДА","Репозиторияҳои кушода имкон медиҳанд татбиқ санҷида шавад."],["DEMO-И КОРӢ","Маҳсулоти нашршударо мустақим кушода ва санҷидан мумкин аст."],["АМИҚИИ СИСТЕМА","Лоиҳаҳо интерфейс, backend, додаҳо, нақшҳо ва ҳолатҳоро фаро мегиранд."],["ҲАҶМИ РОСТҚАВЛОНА","Кори таҷрибавӣ, хусусӣ ва нотамом бе муболиға нишон дода мешавад."]],
} as const;

const projectText = (project: Project, lang: Lang) => lang === "ru" ? project.ruDescription || project.description : lang === "tj" ? project.tjDescription || project.description : project.description;

function ProjectPreview({ project, label, pending }: { project: Project; label:string; pending:string }) {
  const hasMedia = Boolean(project.image && !/\.svg(?:\?|$)/i.test(project.image));
  return <div className={`project-visual-placeholder ${hasMedia ? "has-media" : ""}`} role="img" aria-label={hasMedia ? `${label}: ${project.title}` : `${project.title}: ${pending}`} style={hasMedia ? { backgroundImage: `linear-gradient(180deg, transparent 40%, rgba(5,5,6,.92)), url(${JSON.stringify(project.image)})` } : undefined}><span>{label}</span><strong>{project.title}</strong><p>{hasMedia ? project.kind : pending}</p><i aria-hidden="true" /></div>;
}

function ProjectStage({ project, lang, labels, reduce, mobile = false }: { project: Project; lang: Lang; labels: { visual: string; visualPending: string; open: string; source: string; live: string }; reduce: boolean | null; mobile?: boolean }) {
  return <motion.div id={`project-detail-${project.slug}${mobile ? "-mobile" : ""}`} className={`project-stage ${mobile ? "project-stage-mobile" : "project-stage-desktop"}`} key={`${project.slug}-${mobile ? "mobile" : "desktop"}`} initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45, ease: [.16, 1, .3, 1] }}><ProjectPreview project={project} label={labels.visual} pending={labels.visualPending}/><div className="stage-info"><div><p>{projectText(project, lang)}</p><div>{project.stack.map(item => <span key={item}>{item}</span>)}</div></div><nav><Link href={`/projects/${project.slug}`}>{labels.open} ↗</Link>{project.github && <a href={project.github} target="_blank" rel="noreferrer">{labels.source} ↗</a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">{labels.live} ↗</a>}</nav></div></motion.div>;
}

function HeroPortrait({alt}:{alt:string}) {
  return <div className="hero-person"><Image className="hero-photo" src="/images/KN777-master.png" alt={alt} width={1254} height={1254} loading="eager" fetchPriority="high" sizes="(max-width: 640px) 100vw, (max-width: 900px) 90vw, 68vw" /></div>;
}

export default function PortfolioExperience({ projectItems }: { projectItems: Project[] }) {
  const projects = projectItems.length ? projectItems : [];
  const [active, setActive] = useState(0); const [projectExpanded, setProjectExpanded] = useState(false); const [formState,setFormState]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const [activeRoadmap, setActiveRoadmap] = useState(0);
  const { lang } = useLang(); const t = copy[lang]; const x = extraCopy[lang]; const n = narrativeCopy[lang]; const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll(); const progress = useSpring(scrollYProgress,{stiffness:130,damping:30,mass:.2});
  const reveal = reduce ? {} : { initial:{opacity:0,y:54},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.18},transition:{duration:.75,ease:[.16,1,.3,1] as [number,number,number,number]} };
  function moveSculpture(e:PointerEvent<HTMLDivElement>){const r=e.currentTarget.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;e.currentTarget.style.setProperty("--scene-rx",`${-y*20}deg`);e.currentTarget.style.setProperty("--scene-ry",`${x*26}deg`);e.currentTarget.style.setProperty("--scene-x",`${x*26}px`);e.currentTarget.style.setProperty("--scene-y",`${y*18}px`)}
  function resetSculpture(e:PointerEvent<HTMLDivElement>){e.currentTarget.style.setProperty("--scene-rx","0deg");e.currentTarget.style.setProperty("--scene-ry","0deg");e.currentTarget.style.setProperty("--scene-x","0px");e.currentTarget.style.setProperty("--scene-y","0px")}
  async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setFormState("sending");const body=Object.fromEntries(new FormData(e.currentTarget));try{const r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});if(!r.ok)throw new Error();setFormState("sent");e.currentTarget.reset()}catch{setFormState("error")}}
  return <div className="portfolio-next">
    <motion.div className="scroll-progress" style={{scaleX:progress}} />
    <section className="hero-next shell" aria-labelledby="hero-title">
      <div className="hero-next-copy">
        <div className="hero-kicker"><p className="hero-availability">{t.status}</p><p className="hero-specialty">{t.over}</p></div>
        <h1 id="hero-title" aria-label={t.title}>{(lang === "ru" ? ["Я СОЗДАЮ", "ВСЮ", "СИСТЕМУ."] : lang === "tj" ? ["МАН ТАМОМИ", "СИСТЕМАРО", "МЕСОЗАМ."] : ["I BUILD", "THE WHOLE", "SYSTEM."]).map((line,i)=><span className={`hero-line hero-line-${i+1}`} aria-hidden="true" key={line} style={{animationDelay:`${.2+i*.16}s`}}>{line}</span>)}</h1><p className="hero-next-lead">{t.intro}</p>
        <div className="button-row"><a className="button button-light" href="#work">{t.explore} <span>↓</span></a><a className="button button-dark" href="https://github.com/Komron-Nazarov" target="_blank" rel="noreferrer">{t.github} <span>↗</span></a></div>
        <div className="hero-proofline" aria-label={n.name}><div><span>{n.current}</span><strong>{n.currentValue}</strong></div><div><span>{n.path}</span><strong>{n.pathValue}</strong></div><div><span>{n.delivery}</span><strong>{n.deliveryValue}</strong></div></div>
      </div>
      <HeroPortrait alt={t.portrait}/>
    </section>

    <section id="work" className="section-next shell" data-index="01">
      <motion.div className="section-intro" {...reveal}><p className="eyebrow">01 / {t.work}</p><h2>{t.workTitle}</h2><p>{t.workIntro}</p></motion.div>
      <div className="projects-console projects-console-peek">
        <div className="projects-rail">{projects.map((project,i) => {
          const hasImage = Boolean(project.image && !/\.svg(?:\?|$)/i.test(project.image));
          return <div className="project-peek-item" key={project.slug}><button className={`project-peek ${active === i ? "active" : ""}`} aria-pressed={active === i} aria-expanded={projectExpanded && active === i} aria-controls={projectExpanded && active === i ? `project-detail-${project.slug}-mobile` : undefined} onClick={() => { setActive(i); setProjectExpanded(true); }}><span className="project-peek-top"><b>{String(i + 1).padStart(2, "0")}</b><small>{project.kind}</small></span><span className={`project-peek-media ${hasImage ? "has-image" : ""}`} style={hasImage ? { backgroundImage: `url(${JSON.stringify(project.image)})` } : undefined} aria-hidden="true">{!hasImage && <em>{t.visualPending}</em>}</span><strong>{project.title}</strong><span className="project-peek-description">{projectText(project, lang)}</span><span className="project-peek-foot"><span>{project.stack.slice(0, 2).join(" / ")}</span><i aria-hidden="true">↗</i></span></button>{projectExpanded && active === i && <ProjectStage project={project} lang={lang} labels={t} reduce={reduce} mobile/>}</div>;
        })}<Link className="all-projects-link" href="/projects">{t.allProjects}<span>↗</span></Link></div>
        {projects[active] && <ProjectStage project={projects[active]} lang={lang} labels={t} reduce={reduce}/>}
      </div>
    </section>

    <section id="about" className="section-next statement shell" data-index="02">
      <motion.div {...reveal}><p className="eyebrow">02 / {t.about}</p><h2>{t.aboutTitle}</h2></motion.div>
      <motion.p {...reveal}>{t.aboutText}</motion.p>
      <div className="position-sculpture" aria-hidden="true" onPointerDown={moveSculpture} onPointerMove={moveSculpture} onPointerUp={resetSculpture} onPointerCancel={resetSculpture} onPointerLeave={resetSculpture}><div className="sculpture-axis axis-x"/><div className="sculpture-axis axis-y"/><div className="sculpture-scene"><div className="sculpture-orbit orbit-a"/><div className="sculpture-orbit orbit-b"/><i data-layer="PRODUCT"/><i data-layer="ENGINEERING"/><i data-layer="MANAGEMENT"/><div className="sculpture-core"><span>P</span><span>E</span><span>M</span></div></div><b>PRODUCT<br/>× ENGINEERING<br/>× MANAGEMENT</b><small>MOVE / TILT / ASSEMBLE</small></div>
      <div className="position-principles">{n.principles.map(([title,text],i)=><motion.article key={title} {...reveal} transition={{duration:.65,delay:i*.08}}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></motion.article>)}</div>
      <div className="statement-line" aria-hidden="true"><span>INTERFACE</span><i>→</i><span>LOGIC</span><i>→</i><span>DATA</span><i>→</i><span>DELIVERY</span></div>
    </section>

    <section id="system" className="section-next shell system-section" data-index="03">
      <motion.div className="section-intro" {...reveal}><p className="eyebrow">03 / {t.system}</p><h2>{t.systemTitle}</h2><p>{t.systemIntro}</p></motion.div>
      <CapabilityGraph lang={lang}/>
    </section>

    <section id="journey" className="section-next shell roadmap-section" data-index="04">
      <motion.div className="section-intro" {...reveal}><p className="eyebrow">04 / {x.roadmap}</p><h2>{x.roadmapTitle}</h2><p>{x.roadmapIntro}</p></motion.div>
      <div className="career-map">
        <div className="career-graph" aria-label={x.roadmap}>
          <svg viewBox="0 0 1000 360" preserveAspectRatio="none" aria-hidden="true"><path className="career-track" d="M75 275 C250 275 245 82 500 82 S745 275 925 275"/><path className="career-progress" pathLength="2" strokeDasharray={`${activeRoadmap} 2`} d="M75 275 C250 275 245 82 500 82 S745 275 925 275"/></svg>
          {roadmap[lang].map(([time,title],i)=><motion.button key={title} className={`career-node node-${i+1} ${activeRoadmap===i?"active":""}`} aria-pressed={activeRoadmap===i} onClick={()=>setActiveRoadmap(i)} {...reveal}><i>0{i+1}</i><span>{time}</span><strong>{title}</strong></motion.button>)}
        </div>
        <motion.div className="career-detail" key={`${lang}-${activeRoadmap}`} initial={reduce?false:{opacity:0,y:18}} animate={{opacity:1,y:0}}>
          <div className={`career-mark stage-${activeRoadmap}`} aria-hidden="true"><em>KN / CAREER ASSEMBLY</em><div className={`logo-assembly step-${activeRoadmap}`}><Image src="/logo-kn.jpg" alt="" width={737} height={726} style={{width:170,height:"auto"}} /></div><div className="career-segments"><i/><i/><i/></div><span>0{activeRoadmap+1} / 03</span></div>
          <div><small>{x.verified}</small><h3>{roadmap[lang][activeRoadmap][1]}</h3><p>{roadmap[lang][activeRoadmap][2]}</p><b>{roadmap[lang][activeRoadmap][3]}</b></div>
        </motion.div>
      </div>
    </section>

    <section id="evidence" className="section-next shell evidence-section" data-index="05">
      <motion.div className="section-intro" {...reveal}><p className="eyebrow">05 / {x.evidence}</p><h2>{x.evidenceTitle}</h2><p>{x.evidenceIntro}</p></motion.div>
      <div className="evidence-grid">{evidence[lang].map(([title,text],i)=>{const href=["https://github.com/Komron-Nazarov","/projects","#system","#journey"][i];return <motion.article key={title} data-proof={String(i+1).padStart(2,"0")} {...reveal} transition={{duration:.65,delay:i*.07}}><div className="evidence-head"><span>0{i+1}</span><b>{x.verified}</b></div><h3>{title}</h3><p>{text}</p><div className="evidence-trace" aria-hidden="true"><i/><i/><i/><i/></div><a className="evidence-link" href={href} target={href.startsWith("http")?"_blank":undefined} rel={href.startsWith("http")?"noreferrer":undefined}>{n.inspect} <i aria-hidden="true">↗</i></a></motion.article>})}</div>
      <div className="method-strip"><span>{x.how}</span>{["DISCOVER","DESIGN","BUILD","VERIFY","SHIP"].map((item,i)=><div key={item}><b>0{i+1}</b>{item}</div>)}</div>
    </section>

    <section id="contact" className="section-next shell contact-next">
      <motion.div {...reveal}><p className="eyebrow">06 / {t.contact}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="contact-direct"><a className="github-contact" href="mailto:komron7nazarov@gmail.com">EMAIL ↗</a><a className="github-contact" href="https://github.com/Komron-Nazarov" target="_blank" rel="noreferrer">GITHUB ↗</a><a className="github-contact" href="https://t.me/KNazarov_7" target="_blank" rel="noreferrer">TELEGRAM ↗</a><a className="github-contact" href="https://t.me/KN7_Life" target="_blank" rel="noreferrer">KN7 LIFE ↗</a><a className="github-contact" href="https://www.instagram.com/komron.n7/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a><a className="github-contact" href="https://www.linkedin.com/in/komron-nazarov-0aa193361/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></motion.div>
      <motion.form onSubmit={submit} className={formState==="sent"?"form-success":""} {...reveal}><input className="contact-honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"/><label><span>{t.name}</span><input name="name" required maxLength={80} /></label><label><span>{t.email}</span><input name="email" type="email" required maxLength={120} /></label><label><span>{t.message}</span><textarea name="message" required maxLength={3000} /></label><button disabled={formState==="sending"}>{formState==="sending"?t.sending:t.send} <span>↗</span></button>{formState!=="idle"&&formState!=="sending"&&<p className={formState}>{formState==="sent"?t.sent:t.error}</p>}{formState==="sent"&&<div className="success-mark" aria-hidden="true"><Image src="/logo-kn.jpg" alt="" width={82} height={82} style={{width:82,height:82}}/></div>}</motion.form>
    </section>
  </div>;
}
