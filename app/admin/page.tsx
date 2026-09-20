"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const ADMIN_EMAIL = "komron7nazarov@gmail.com";

type Project = { id:number; slug:string; title:string; description:string; image:string; stack:string[]; github?:string|null; demo?:string|null; featured:boolean };
type Form = { slug:string; title:string; description:string; image:string; stack:string; github:string; demo:string; featured:boolean };
const blank: Form = { slug:"",title:"",description:"",image:"",stack:"",github:"",demo:"",featured:false };
const nav = ["Overview","Projects","Experience","Skills","AI Lab","Messages","Media","Settings"];

export default function AdminPage() {
  const router = useRouter();
  const [checking,setChecking]=useState(true); const [loading,setLoading]=useState(true); const [saving,setSaving]=useState(false);
  const [projects,setProjects]=useState<Project[]>([]); const [section,setSection]=useState("Overview"); const [editing,setEditing]=useState<number|null>(null); const [editorOpen,setEditorOpen]=useState(false); const [form,setForm]=useState<Form>(blank); const [notice,setNotice]=useState("");

  useEffect(()=>{ (async()=>{ const {data:{session}}=await supabase.auth.getSession(); if(!session){router.replace("/login");return;} if(session.user.email?.toLowerCase()!==ADMIN_EMAIL){await supabase.auth.signOut();router.replace("/login");return;} const {data}=await supabase.from("profiles").select("role").eq("id",session.user.id).single(); if(data?.role!=="admin"){router.replace("/");return;} setChecking(false); })(); },[router]);
  useEffect(()=>{ if(checking)return; void loadProjects(); },[checking]);
  async function loadProjects(){setLoading(true);const {data,error}=await supabase.from("projects").select("*").order("id",{ascending:false});if(error)setNotice(error.message);setProjects((data as Project[])||[]);setLoading(false)}
  function edit(project?:Project){setEditing(project?.id||null);setEditorOpen(true);setForm(project?{slug:project.slug,title:project.title,description:project.description,image:project.image,stack:project.stack.join(", "),github:project.github||"",demo:project.demo||"",featured:project.featured}:blank);setSection("Projects")}
  async function save(){if(!form.slug.trim()||!form.title.trim()||!form.description.trim()){setNotice("Slug, title and description are required.");return;}setSaving(true);const payload={slug:form.slug.trim(),title:form.title.trim(),description:form.description.trim(),image:form.image.trim(),stack:form.stack.split(",").map(v=>v.trim()).filter(Boolean),github:form.github.trim()||null,demo:form.demo.trim()||null,featured:form.featured};const query=editing?supabase.from("projects").update(payload).eq("id",editing):supabase.from("projects").insert([payload]);const {error}=await query;if(error)setNotice(error.message);else{setNotice(editing?"Project updated.":"Project created.");setEditing(null);setEditorOpen(false);setForm(blank);await loadProjects()}setSaving(false)}
  async function remove(project:Project){if(!window.confirm(`Delete “${project.title}”?`))return;const {error}=await supabase.from("projects").delete().eq("id",project.id);if(error)setNotice(error.message);else setProjects(v=>v.filter(p=>p.id!==project.id))}
  function upload(event:ChangeEvent<HTMLInputElement>){const file=event.target.files?.[0];if(!file)return;if(file.size>3*1024*1024){setNotice("Image must be smaller than 3 MB.");return;}const reader=new FileReader();reader.onload=()=>typeof reader.result==="string"&&setForm(v=>({...v,image:reader.result as string}));reader.readAsDataURL(file)}
  async function logout(){await supabase.auth.signOut();router.replace("/login")}
  if(checking)return <main className="admin-loading">CHECKING ACCESS…</main>;
  const mediaCount=new Set(projects.map(p=>p.image).filter(Boolean)).size; const draftCount=projects.filter(p=>!p.featured).length;

  return <main className="admin-shell">
    <aside className="admin-sidebar"><div className="admin-brand"><strong>KN</strong><span>ADMIN</span></div><nav>{nav.map((item,index)=><button key={item} className={section===item?"active":""} onClick={()=>setSection(item)}><i>0{index+1}</i>{item}</button>)}</nav><div className="admin-side-foot"><a href="/" target="_blank">VIEW LIVE SITE ↗</a><button onClick={logout}>LOG OUT</button></div></aside>
    <section className="admin-main"><header className="admin-top"><div><p>PORTFOLIO / CONTENT SYSTEM</p><h1>{section.toUpperCase()}</h1></div><button className="admin-primary" onClick={()=>edit()}>NEW PROJECT +</button></header>
      {notice&&<button className="admin-notice" onClick={()=>setNotice("")}>{notice}<span>×</span></button>}
      {section==="Overview"&&<>
        <div className="admin-metrics"><div><span>PROJECTS</span><strong>{projects.length.toString().padStart(2,"0")}</strong><p>Portfolio entries</p></div><div><span>FEATURED</span><strong>{projects.filter(p=>p.featured).length.toString().padStart(2,"0")}</strong><p>On home page</p></div><div><span>DRAFTS</span><strong>{draftCount.toString().padStart(2,"0")}</strong><p>Not featured</p></div><div><span>MEDIA</span><strong>{mediaCount.toString().padStart(2,"0")}</strong><p>Project visuals</p></div></div>
        <div className="admin-block"><div className="admin-block-title"><div><p>RECENT WORK</p><h2>PROJECTS</h2></div><button onClick={()=>setSection("Projects")}>VIEW ALL ↗</button></div><ProjectTable projects={projects.slice(0,4)} loading={loading} edit={edit} remove={remove}/></div>
      </>}
      {section==="Projects"&&<div className="admin-block"><div className="admin-block-title"><div><p>CONTENT / CASE STUDIES</p><h2>ALL PROJECTS</h2></div><button onClick={()=>edit()}>ADD PROJECT +</button></div><ProjectTable projects={projects} loading={loading} edit={edit} remove={remove}/></div>}
      {!["Overview","Projects"].includes(section)&&<div className="admin-empty"><span>{nav.indexOf(section)+1<10?`0${nav.indexOf(section)+1}`:nav.indexOf(section)+1}</span><h2>{section.toUpperCase()}</h2><p>This area is ready for real content. No placeholder records have been created.</p></div>}
    </section>
    {editorOpen&&<div className="admin-editor"><div className="editor-head"><div><p>PROJECT EDITOR</p><h2>{editing?"EDIT PROJECT":"NEW PROJECT"}</h2></div><button onClick={()=>{setEditing(null);setEditorOpen(false);setForm(blank)}}>CLOSE ×</button></div><div className="editor-tabs"><button className="active">CONTENT</button><button>MEDIA</button><button>CASE STUDY</button><button>SEO</button><button>PUBLISH</button></div><div className="editor-body"><div className="editor-fields"><Field label="TITLE" value={form.title} onChange={v=>setForm(f=>({...f,title:v}))}/><Field label="SLUG" value={form.slug} onChange={v=>setForm(f=>({...f,slug:v}))}/><label>DESCRIPTION<textarea value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))}/></label><Field label="STACK / COMMA SEPARATED" value={form.stack} onChange={v=>setForm(f=>({...f,stack:v}))}/><Field label="IMAGE URL / DATA" value={form.image} onChange={v=>setForm(f=>({...f,image:v}))}/><label className="editor-upload">UPLOAD IMAGE<input type="file" accept="image/*" onChange={upload}/></label><Field label="GITHUB" value={form.github} onChange={v=>setForm(f=>({...f,github:v}))}/><Field label="LIVE DEMO" value={form.demo} onChange={v=>setForm(f=>({...f,demo:v}))}/><label className="editor-check"><input type="checkbox" checked={form.featured} onChange={e=>setForm(f=>({...f,featured:e.target.checked}))}/> FEATURED ON HOME</label></div><div className="editor-preview"><p>LIVE PREVIEW</p><div style={{backgroundImage:form.image?`url(${form.image})`:undefined}}><span>{form.title||"PROJECT TITLE"}</span></div></div></div><div className="editor-save"><button onClick={save} disabled={saving}>{saving?"SAVING…":"SAVE PROJECT ↗"}</button></div></div>}
  </main>
}

function ProjectTable({projects,loading,edit,remove}:{projects:Project[];loading:boolean;edit:(p:Project)=>void;remove:(p:Project)=>void}){if(loading)return <p className="admin-table-state">LOADING PROJECTS…</p>;if(!projects.length)return <p className="admin-table-state">NO PROJECTS YET</p>;return <div className="admin-table"><div className="admin-table-row head"><span>PROJECT</span><span>STACK</span><span>STATUS</span><span>UPDATED</span><span /></div>{projects.map(p=><div className="admin-table-row" key={p.id}><span><strong>{p.title}</strong><small>/{p.slug}</small></span><span>{p.stack.slice(0,3).join(" · ")}</span><span><i className={p.featured?"live":"draft"}/>{p.featured?"FEATURED":"DRAFT"}</span><span>—</span><span><button onClick={()=>edit(p)}>EDIT</button><button onClick={()=>remove(p)}>DELETE</button></span></div>)}</div>}
function Field({label,value,onChange}:{label:string;value:string;onChange:(v:string)=>void}){return <label>{label}<input value={value} onChange={e=>onChange(e.target.value)}/></label>}
