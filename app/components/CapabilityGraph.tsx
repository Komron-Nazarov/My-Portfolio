"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Lang } from "@/src/hooks/useLang";

type NodeId = "fullstack" | "backend" | "data" | "ios" | "product" | "management" | "fintech" | "automation" | "delivery";

const graphCopy = {
  ru: {
    centerTop: "TECH × MANAGEMENT", center: "PRODUCT\nSYSTEMS", centerBottom: "КОМРОН НАЗАРОВ",
    select: "ВЫБРАННЫЙ КОНТУР", stack: "ИНСТРУМЕНТЫ / ПРАКТИКА", responsibility: "ЗОНА ОТВЕТСТВЕННОСТИ",
    proof: "СВЯЗЬ С РЕАЛЬНОЙ РАБОТОЙ", verified: "ПОДТВЕРЖДЁННОЕ НАПРАВЛЕНИЕ", hint: "НАЖМИТЕ НА УЗЕЛ — СИСТЕМА ПЕРЕСТРОИТСЯ",
    nodes: {
      fullstack: ["FULL-STACK", "Собираю продукт целиком: интерфейс, прикладную логику, API и данные.", "Next.js · React · TypeScript", "От пользовательского сценария до работающей версии", "Публичные проекты и рабочие demo"],
      backend: ["BACKEND", "Проектирую сервисы, интеграции и предсказуемую серверную логику.", "Go · Python · REST API", "Контракты, ошибки, роли, бизнес-правила", "Backend-слой продуктовых систем"],
      data: ["DATA", "Строю модели данных под реальные процессы, статусы и права доступа.", "PostgreSQL · Supabase · local-first", "Целостность, транзакции и жизненный цикл данных", "Системы с ролями и операционными состояниями"],
      ios: ["iOS", "Разрабатываю нативные мобильные интерфейсы и приложения для экосистемы Apple.", "Swift · SwiftUI · UIKit", "Архитектура приложения, интерфейс и системные API", "Подтверждённое направление мобильной разработки"],
      product: ["PRODUCT", "Перевожу бизнес-задачу в понятный сценарий и техническую систему.", "Discovery · UX logic · architecture", "Приоритеты, структура, ценность и выпуск", "Связка инженерии и продуктового мышления"],
      management: ["MANAGEMENT", "Организую работу вокруг результата, ограничений и ясной зоны ответственности.", "Scope · planning · verification", "Декомпозиция, согласование и контроль поставки", "Позиционирование Tech & Management"],
      fintech: ["FINTECH", "Текущий профессиональный контекст — программирование в финансовой организации.", "Financial workflows · reliability", "Корректность процессов и эксплуатационная дисциплина", "Программист в «Инновация Капитал»"],
      automation: ["AUTOMATION", "Оцифровываю повторяемые операции и связываю людей, статусы и данные.", "Telegram · internal tools · workflows", "Сокращение ручных переходов и прозрачность процесса", "Боты, внутренние инструменты и бизнес-процессы"],
      delivery: ["DELIVERY", "Довожу систему до среды, где её можно открыть, проверить и использовать.", "Docker · Vercel · Railway · Git", "Deployment, состояния ошибок и проверка результата", "Опубликованные версии и исходный код"],
    },
  },
  en: {
    centerTop: "TECH × MANAGEMENT", center: "PRODUCT\nSYSTEMS", centerBottom: "KOMRON NAZAROV",
    select: "SELECTED CIRCUIT", stack: "TOOLS / PRACTICE", responsibility: "RESPONSIBILITY", proof: "CONNECTION TO REAL WORK", verified: "VERIFIED DIRECTION", hint: "SELECT A NODE — THE SYSTEM WILL RECONFIGURE",
    nodes: {
      fullstack: ["FULL-STACK", "I assemble the complete product: interface, application logic, API and data.", "Next.js · React · TypeScript", "From user flow to a working release", "Public projects and working demos"],
      backend: ["BACKEND", "I design services, integrations and predictable server-side logic.", "Go · Python · REST API", "Contracts, errors, roles and business rules", "Backend layers of product systems"],
      data: ["DATA", "I model data around real processes, states and access rules.", "PostgreSQL · Supabase · local-first", "Integrity, transactions and data lifecycle", "Systems with roles and operational states"],
      ios: ["iOS", "I build native mobile interfaces and applications for the Apple ecosystem.", "Swift · SwiftUI · UIKit", "Application architecture, interface and platform APIs", "Verified mobile development direction"],
      product: ["PRODUCT", "I translate a business problem into a clear flow and technical system.", "Discovery · UX logic · architecture", "Priorities, structure, value and release", "Engineering connected to product thinking"],
      management: ["MANAGEMENT", "I organise work around outcomes, constraints and clear ownership.", "Scope · planning · verification", "Decomposition, alignment and delivery control", "Tech & Management positioning"],
      fintech: ["FINTECH", "My current professional context is software development in a financial organisation.", "Financial workflows · reliability", "Process correctness and operational discipline", "Programmer at Innovatsiya Capital"],
      automation: ["AUTOMATION", "I digitise repeatable operations and connect people, states and data.", "Telegram · internal tools · workflows", "Fewer manual transitions and clearer processes", "Bots, internal tools and business workflows"],
      delivery: ["DELIVERY", "I take systems into an environment where they can be opened, tested and used.", "Docker · Vercel · Railway · Git", "Deployment, failure states and verification", "Published versions and source code"],
    },
  },
  tj: {
    centerTop: "TECH × MANAGEMENT", center: "PRODUCT\nSYSTEMS", centerBottom: "КОМРОН НАЗАРОВ",
    select: "КОНТУРИ ИНТИХОБШУДА", stack: "АБЗОР / АМАЛИЯ", responsibility: "ДОИРАИ МАСЪУЛИЯТ", proof: "ПАЙВАНД БО КОРИ ВОҚЕӢ", verified: "САМТИ ТАСДИҚШУДА", hint: "ГИРЕҲРО ИНТИХОБ КУНЕД — СИСТЕМА ТАҒЙИР МЕЁБАД",
    nodes: {
      fullstack: ["FULL-STACK", "Маҳсулотро пурра месозам: интерфейс, мантиқ, API ва додаҳо.", "Next.js · React · TypeScript", "Аз ҷараёни корбар то версияи корӣ", "Лоиҳаҳои кушода ва demo"],
      backend: ["BACKEND", "Хидматҳо, ҳамгироӣ ва мантиқи устувори сервериро тарҳрезӣ мекунам.", "Go · Python · REST API", "Шартномаҳо, хатоҳо, нақшҳо ва қоидаҳо", "Қабати backend-и системаҳо"],
      data: ["DATA", "Моделҳои додаҳоро барои равандҳо, ҳолатҳо ва ҳуқуқҳо месозам.", "PostgreSQL · Supabase · local-first", "Якпорчагӣ, транзаксия ва давраи ҳаёти додаҳо", "Системаҳои дорои нақш ва ҳолатҳо"],
      ios: ["iOS", "Интерфейс ва барномаҳои нативиро барои экосистемаи Apple месозам.", "Swift · SwiftUI · UIKit", "Меъмории барнома, интерфейс ва API-и система", "Самти тасдиқшудаи таҳияи мобилӣ"],
      product: ["PRODUCT", "Масъалаи тиҷоратиро ба ҷараёни равшан ва системаи техникӣ табдил медиҳам.", "Discovery · UX logic · architecture", "Афзалият, сохтор, арзиш ва нашр", "Пайванди муҳандисӣ ва тафаккури маҳсулотӣ"],
      management: ["MANAGEMENT", "Корро дар атрофи натиҷа, маҳдудият ва масъулияти равшан ташкил мекунам.", "Scope · planning · verification", "Тақсимот, мувофиқа ва назорати натиҷа", "Мавқеи Tech & Management"],
      fintech: ["FINTECH", "Муҳити касбии ҳозира — барномасозӣ дар ташкилоти молиявӣ.", "Financial workflows · reliability", "Дурустии раванд ва интизоми амалиётӣ", "Барномасоз дар «Инноватсия Капитал»"],
      automation: ["AUTOMATION", "Амалиёти такрориро рақамӣ карда, одамон, ҳолатҳо ва додаҳоро мепайвандам.", "Telegram · internal tools · workflows", "Кам кардани кори дастӣ ва равшании раванд", "Ботҳо ва абзорҳои дохилӣ"],
      delivery: ["DELIVERY", "Системаро то муҳите мерасонам, ки дар он санҷида ва истифода шавад.", "Docker · Vercel · Railway · Git", "Нашр, ҳолатҳои хато ва санҷиш", "Версияҳои нашршуда ва коди манбаъ"],
    },
  },
} as const;

const positions: Record<NodeId, { x:number; y:number; group:string }> = {
  fullstack:{x:18,y:20,group:"ENGINEERING"}, backend:{x:7,y:47,group:"ENGINEERING"}, data:{x:18,y:75,group:"ENGINEERING"}, ios:{x:42,y:91,group:"MOBILE"},
  product:{x:76,y:18,group:"PRODUCT"}, management:{x:91,y:44,group:"MANAGEMENT"}, fintech:{x:81,y:76,group:"BUSINESS"},
  automation:{x:54,y:90,group:"OPERATIONS"}, delivery:{x:50,y:8,group:"DELIVERY"},
};

const links: Array<[NodeId,NodeId]> = [["fullstack","backend"],["backend","data"],["data","ios"],["ios","automation"],["automation","fintech"],["fintech","management"],["management","product"],["product","delivery"],["delivery","fullstack"],["fullstack","product"],["backend","automation"],["data","fintech"],["ios","product"]];

export default function CapabilityGraph({lang}:{lang:Lang}) {
  const [active,setActive] = useState<NodeId>("product");
  const reduce = useReducedMotion();
  const graphRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Partial<Record<NodeId, HTMLButtonElement>>>({});
  const spokeRefs = useRef<Partial<Record<NodeId, SVGLineElement>>>({});
  const c = graphCopy[lang];
  const activeLinks = useMemo(()=>new Set(links.filter(pair=>pair.includes(active)).flat()),[active]);
  const detail = c.nodes[active];
  useEffect(() => {
    let frame = 0;
    let last = 0;
    const update = (time = 0) => {
      if (time - last > 32 || !last) {
        last = time;
        const graph = graphRef.current?.getBoundingClientRect();
        if (graph?.width && graph.height) {
          (Object.keys(positions) as NodeId[]).forEach((id) => {
            const node = nodeRefs.current[id]?.getBoundingClientRect();
            const line = spokeRefs.current[id];
            if (!node || !line) return;
            line.setAttribute("x2", String(((node.left + node.width / 2 - graph.left) / graph.width) * 100));
            line.setAttribute("y2", String(((node.top + node.height / 2 - graph.top) / graph.height) * 100));
          });
        }
      }
      if (!reduce) frame = requestAnimationFrame(update);
    };
    const onResize = () => update(performance.now());
    update();
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", onResize); };
  }, [reduce]);
  return <div className="capability-system">
    <div ref={graphRef} className="capability-graph" aria-label={c.hint}>
      <div className="capability-grid" aria-hidden="true" />
      <svg className="capability-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs><marker id="cap-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L8 4L0 8Z" /></marker><marker id="cap-arrow-active" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L8 4L0 8Z" /></marker></defs>
        {(Object.keys(positions) as NodeId[]).map(id=><line ref={element=>{spokeRefs.current[id]=element ?? undefined}} key={id} x1="50" y1="50" x2={positions[id].x} y2={positions[id].y} className={`capability-spoke ${id===active?"active":""}`} markerEnd={id===active?"url(#cap-arrow-active)":"url(#cap-arrow)"}/>) }
      </svg>
      <motion.div className="capability-core" initial={reduce?false:{scale:.86,opacity:0}} whileInView={{scale:1,opacity:1}} viewport={{once:true,amount:.4}}>
        <span>{c.centerTop}</span><strong>{c.center.split("\n").map(v=><i key={v}>{v}</i>)}</strong><b>{c.centerBottom}</b>
        <div className="core-radar" aria-hidden="true" />
      </motion.div>
      {(Object.keys(positions) as NodeId[]).map((id,i)=>{const pos=positions[id];return <button ref={element=>{nodeRefs.current[id]=element ?? undefined}} key={id} className={`capability-node node-${id} ${active===id?"active":""} ${activeLinks.has(id)?"linked":""}`} style={{left:`${pos.x}%`,top:`${pos.y}%`}} onClick={()=>setActive(id)} aria-pressed={active===id}>
        <small>{pos.group}</small><strong>{c.nodes[id][0]}</strong><span>0{i+1}</span>
      </button>})}
      <p className="capability-hint">{c.hint}</p>
    </div>
    <motion.aside className="capability-readout" key={`${lang}-${active}`} initial={reduce?false:{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{duration:.38,ease:[.16,1,.3,1]}}>
      <div className="capability-readout-index"><span>{c.select}</span><b>{String((Object.keys(positions) as NodeId[]).indexOf(active)+1).padStart(2,"0")} / 09</b></div>
      <p className="capability-verified">{c.verified}</p><h3>{detail[0]}</h3><p className="capability-description">{detail[1]}</p>
      <dl><div><dt>{c.stack}</dt><dd>{detail[2]}</dd></div><div><dt>{c.responsibility}</dt><dd>{detail[3]}</dd></div><div><dt>{c.proof}</dt><dd>{detail[4]}</dd></div></dl>
      <div className="capability-code" aria-hidden="true"><span>KN/{active.toUpperCase()}</span><i/><i/><i/><b>ACTIVE</b></div>
    </motion.aside>
  </div>;
}
