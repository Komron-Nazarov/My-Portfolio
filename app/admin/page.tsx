// // "use client";

// // import { useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { supabase } from "@/lib/supabase";

// // type Project = {
// //   id: number;
// //   slug: string;
// //   title: string;
// //   description: string;
// //   image: string;
// //   stack: string[];
// //   github?: string;
// //   demo?: string;
// // };

// // export default function AdminPage() {
// //   const router = useRouter();
// // type Toast = {
// //   id: number;
// //   message: string;
// //   type: "success" | "error" | "info";
// // };
// //   const [checkingAuth, setCheckingAuth] = useState(true);
// //   const [projects, setProjects] = useState<Project[]>([]);
// //   const [editingId, setEditingId] = useState<number | null>(null);
// //   const [loading, setLoading] = useState(false);
  

// // const [toasts, setToasts] = useState<Toast[]>([]);
// // function toast(message: string, type: Toast["type"] = "info") {
// //   const id = Date.now();

// //   setToasts((prev) => [...prev, { id, message, type }]);

// //   setTimeout(() => {
// //     setToasts((prev) => prev.filter((t) => t.id !== id));
// //   }, 3000);
// // }

// //   const [form, setForm] = useState({
// //     slug: "",
// //     title: "",
// //     description: "",
// //     image: "",
// //     stack: "",
// //     github: "",
// //     demo: "",
// //   });

// //   // AUTH
// // useEffect(() => {
// //   const check = async () => {
// //     const {
// //       data: { session },
// //     } = await supabase.auth.getSession();

// //     if (!session) {
// //       router.replace("/login");
// //       return;
// //     }

// //     const { data: profile } = await supabase
// //       .from("profiles")
// //       .select("role")
// //       .eq("id", session.user.id)
// //       .single();

// //     if (profile?.role !== "admin") {
// //       router.replace("/");
// //       return;
// //     }

// //     setCheckingAuth(false);
// //   };

// //   check();
// // }, [router]);

// //   // LOAD
// //   useEffect(() => {
// //     if (!checkingAuth) loadProjects();
// //   }, [checkingAuth]);

// //   async function loadProjects() {
// //     const { data } = await supabase
// //       .from("projects")
// //       .select("*")
// //       .order("id", { ascending: false });

// //     setProjects(data || []);
// //   }

// //   function resetForm() {
// //     setForm({
// //       slug: "",
// //       title: "",
// //       description: "",
// //       image: "",
// //       stack: "",
// //       github: "",
// //       demo: "",
// //     });
// //     setEditingId(null);
// //   }

// //   // UPLOAD
// //   // async function uploadImage(file: File) {
// //   //   const fileName = `${Date.now()}-${file.name}`;

// //   //   const { data, error } = await supabase.storage
// //   //     .from("images")
// //   //     .upload(fileName, file);

// //   //   if (error) {
// //   //     alert(error.message);
// //   //     return null;
// //   //   }

// //   //   const { data: urlData } = supabase.storage
// //   //     .from("images")
// //   //     .getPublicUrl(data.path);

// //   //   return urlData.publicUrl;
// //   // }


// // //   async function uploadImage(file: File) {
// // // try {

// // // setLoading(true);

// // // const ext =
// // // file.name.split(".").pop();

// // // const fileName =
// // // `${Date.now()}-${Math.random()
// // // .toString(36)
// // // .slice(2)}.${ext}`;

// // // const { data, error } =
// // // await supabase.storage
// // // .from("images")
// // // .upload(
// // // fileName,
// // // file,
// // // {
// // // cacheControl: "3600",
// // // upsert: true,
// // // }
// // // );

// // // if (error) {
// // // console.log(error);
// // // toast(error.message);

// // // return null;
// // // }

// // // const {
// // // data: { publicUrl },
// // // } =
// // // supabase.storage
// // // .from("images")
// // // .getPublicUrl(
// // // data.path
// // // );

// // // console.log(publicUrl);

// // // return publicUrl;

// // // }
// // // catch (e) {

// // // console.log(e);

// // // return null;

// // // }
// // // finally {

// // // setLoading(false);

// // // }
// // // }

// // // ОБНОВЛЕННАЯ ФУНКЦИЯ ЗАГРУЗКИ
// //   // async function uploadImage(file: File) {
// //   //   try {
// //   //     setLoading(true);
// //   //     const ext = file.name.split(".").pop();
// //   //     const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

// //   //     // Загружаем в бакет "images"
// //   //     const { data, error } = await supabase.storage
// //   //       .from("images")
// //   //       .upload(fileName, file, {
// //   //         cacheControl: "3600",
// //   //         upsert: true,
// //   //       });

// //   //     if (error) {
// //   //       console.error("Supabase Storage Error:", error);
// //   //       toast(error.message, "error");
// //   //       return null;
// //   //     }

// //   //     // Получаем публичную ссылку
// //   //     const { data: { publicUrl } } = supabase.storage
// //   //       .from("images")
// //   //       .getPublicUrl(data.path);

// //   //     return publicUrl;
// //   //   } catch (e) {
// //   //     console.error("Upload Catch Error:", e);
// //   //     toast("Ошибка при чтении файла", "error");
// //   //     return null;
// //   //   } finally {
// //   //     setLoading(false);
// //   //   }
// //   // }


// //   // ADD
// //   async function addProject() {
// //     setLoading(true);

// //     const { error } = await supabase.from("projects").insert([
// //       {
// //         slug: form.slug,
// //         title: form.title,
// //         description: form.description,
// //         image: form.image,
// //         stack: form.stack.split(",").map((s) => s.trim()),
// //         github: form.github,
// //         demo: form.demo,
// //       },
// //     ]);

// //     setLoading(false);

// //     if (error) return toast(error.message);

// //     await loadProjects();
// //     resetForm();
// //   }

// //   // DELETE
// //   async function deleteProject(id: number) {
// //     const ok = confirm("Delete project?");
// //     if (!ok) return;

// //     const { error } = await supabase
// //       .from("projects")
// //       .delete()
// //       .eq("id", id);

// //     if (error) return toast(error.message);

// //     setProjects((p) => p.filter((x) => x.id !== id));
// //   }

// //   // EDIT
// //   function startEdit(p: Project) {
// //     setEditingId(p.id);

// //     setForm({
// //       slug: p.slug,
// //       title: p.title,
// //       description: p.description,
// //       image: p.image,
// //       stack: p.stack.join(", "),
// //       github: p.github || "",
// //       demo: p.demo || "",
// //     });
// //   }

// //   // UPDATE
// //   async function updateProject() {
// //     if (!editingId) return;

// //     const { error } = await supabase
// //       .from("projects")
// //       .update({
// //         slug: form.slug,
// //         title: form.title,
// //         description: form.description,
// //         image: form.image,
// //         stack: form.stack.split(",").map((s) => s.trim()),
// //         github: form.github,
// //         demo: form.demo,
// //       })
// //       .eq("id", editingId);

// //     if (error) return toast(error.message);

// //     await loadProjects();
// //     resetForm();
// //   }

// //   if (checkingAuth) {
// //     return (
// //       <div className="min-h-screen bg-black text-white flex items-center justify-center">
// //         Loading...
// //       </div>
// //     );
// //   }

// //   return (
// //     <main className="min-h-screen text-white relative overflow-hidden bg-black">
// // <div className="fixed top-4 right-4 flex flex-col gap-2 z-50">
// //   {toasts.map((t) => (
// //     <div
// //       key={t.id}
// //       className={`
// //         px-4 py-2 rounded-xl text-sm border backdrop-blur-md
// //         ${
// //           t.type === "success"
// //             ? "bg-green-500/20 border-green-500"
// //             : t.type === "error"
// //             ? "bg-red-500/20 border-red-500"
// //             : "bg-white/10 border-white/20"
// //         }
// //       `}
// //     >
// //       {t.message}
// //     </div>
// //   ))}
// // </div>
// //       {/* BACKGROUND */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-red-950/10 via-black to-black" />
// //       <div className="absolute w-[600px] h-[600px] bg-red-600/10 blur-[140px] rounded-full top-1/3 left-1/2 -translate-x-1/2" />

// //       <div className="relative p-10 max-w-6xl mx-auto">

// //         {/* TITLE */}
// //         <h1 className="text-4xl font-bold mb-8 text-center">
// //           Admin
// //           <span className="text-red-500 drop-shadow-[0_0_12px_red]">.</span>
// //         </h1>

// //         {/* FORM */}
// //         <div className="max-w-xl mx-auto backdrop-blur-xl bg-black/40 border border-red-500/20 rounded-2xl p-6 shadow-[0_0_40px_rgba(255,0,0,0.12)] flex flex-col gap-3">

// //           <input
// //             placeholder="slug"
// //             className="p-3 bg-black/60 border border-red-500/20 rounded-xl outline-none focus:border-red-500 focus:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition"
// //             value={form.slug}
// //             onChange={(e) => setForm({ ...form, slug: e.target.value })}
// //           />

// //           <input
// //             placeholder="title"
// //             className="p-3 bg-black/60 border border-red-500/20 rounded-xl outline-none focus:border-red-500 focus:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition"
// //             value={form.title}
// //             onChange={(e) => setForm({ ...form, title: e.target.value })}
// //           />

// //           <textarea
// //             placeholder="description"
// //             className="p-3 bg-black/60 border border-red-500/20 rounded-xl outline-none focus:border-red-500 focus:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition"
// //             value={form.description}
// //             onChange={(e) =>
// //               setForm({ ...form, description: e.target.value })
// //             }
// //           />

// //           <input
// //             placeholder="image url"
// //             className="p-3 bg-black/60 border border-red-500/20 rounded-xl outline-none focus:border-red-500 focus:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition"
// //             value={form.image}
// //             onChange={(e) => setForm({ ...form, image: e.target.value })}
// //           />

// //           {/* <input
// //             type="file"
// //             className="p-3 bg-black/60 border border-red-500/20 rounded-xl cursor-pointer"
// //             onChange={async (e) => {
// //               const file = e.target.files?.[0];
// //               if (!file) return;

// //               const url = await uploadImage(file);
// //               if (url) setForm({ ...form, image: url });
// //             }}
// //           /> */}

// //           {/* <input
// //   type="file"
// //   accept="image/*"
// //   disabled={loading}
// //   className="
// //     p-3
// //     bg-black/60
// //     border border-red-500/20
// //     rounded-xl
// //     cursor-pointer
// //     file:bg-red-600
// //     file:border-0
// //     file:px-4
// //     file:py-2
// //     file:rounded-lg
// //     file:text-white
// //     file:mr-3
// //   "
// //   onChange={async (e) => {
// //     const file = e.target.files?.[0];

// //     if (!file) return;

// //     const url = await uploadImage(file);

// //     if (!url) {
// //      toast("Project added", "success");
// //       return;
// //     }

// //     setForm((prev) => ({
// //       ...prev,
// //       image: url,
// //     }));

// //     toast("Image uploaded");
// //   }}
  
// // /> */}


// // <input
// //             type="file"
// //             accept="image/*"
// //             disabled={loading}
// //             className="
// //               p-3
// //               bg-black/60
// //               border border-red-500/20
// //               rounded-xl
// //               cursor-pointer
// //               file:bg-red-600
// //               file:border-0
// //               file:px-4
// //               file:py-2
// //               file:rounded-lg
// //               file:text-white
// //               file:mr-3
// //             "
// //             // onChange={async (e) => {
// //             //   const file = e.target.files?.[0];
// //             //   if (!file) return;

// //             //   const url = await uploadImage(file);

// //             //   // Если загрузка не удалась, просто выходим (ошибка уже покажется внутри uploadImage)
// //             //   if (!url) return;

// //             //   setForm((prev) => ({
// //             //     ...prev,
// //             //     image: url,
// //             //   }));

// //             //   toast("Image uploaded successfully!", "success");
// //             // }}
// //             onChange={(e) => {
// //               const file = e.target.files?.[0];
// //               if (!file) return;

// //               setLoading(true);
// //               const reader = new FileReader();
              
// //               reader.onloadend = () => {
// //                 const base64String = reader.result as string;
                
// //                 // Записываем Base64 строку прямо в поле картинки формы
// //                 setForm((prev) => ({
// //                   ...prev,
// //                   image: base64String,
// //                 }));
                
// //                 setLoading(false);
// //                 toast("Картинка успешно прочитана с ПК!", "success");
// //               };

// //               reader.onerror = () => {
// //                 setLoading(false);
// //                 toast("Ошибка при чтении файла", "error");
// //               };

// //               reader.readAsDataURL(file);
// //             }}
// //           />


// //           <input
// //             placeholder="stack (react,next)"
// //             className="p-3 bg-black/60 border border-red-500/20 rounded-xl outline-none focus:border-red-500 focus:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition"
// //             value={form.stack}
// //             onChange={(e) => setForm({ ...form, stack: e.target.value })}
// //           />

// //           <input
// //             placeholder="github"
// //             className="p-3 bg-black/60 border border-red-500/20 rounded-xl outline-none focus:border-red-500 focus:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition"
// //             value={form.github}
// //             onChange={(e) => setForm({ ...form, github: e.target.value })}
// //           />

// //           <input
// //             placeholder="demo"
// //             className="p-3 bg-black/60 border border-red-500/20 rounded-xl outline-none focus:border-red-500 focus:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition"
// //             value={form.demo}
// //             onChange={(e) => setForm({ ...form, demo: e.target.value })}
// //           />

// //           {editingId ? (
// //             <button
// //               onClick={updateProject}
// //               className="
// //   relative
// //   px-4 py-1.5

// //   rounded-lg

// //   bg-white/10
// //   backdrop-blur-md

// //   border border-white/20

// //   text-white

// //   shadow-[0_0_10px_rgba(255,255,255,0.05)]

// //   overflow-hidden

// //   transition-all duration-300

// //   hover:scale-105
// //   hover:border-white/60
// //   hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]
// //   hover:bg-white/15
// // "  >
// //               Update Project
// //             </button>
// //           ) : (
// //             <button
// //               onClick={addProject}
// //               disabled={loading}
// //               className="bg-red-600 text-white p-3 rounded-xl shadow-[0_0_25px_rgba(255,0,0,0.35)] hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(255,0,0,0.6)] transition"
// //             >
// //               {loading ? "Loading..." : "Add Project"}
// //             </button>
// //           )}

// //         </div>

// //         {/* LIST */}
// //         <div className="mt-10 grid gap-4">
// //           {projects.map((p) => (
// //             <div
// //               key={p.id}
// //               className="p-4 bg-black/40 border border-red-500/20 rounded-xl backdrop-blur-md hover:border-red-500/50 transition"
// //             >
// //               <h3 className="text-lg font-semibold">{p.title}</h3>

// //               <div className="flex gap-2 mt-3">
// //                 <button
// //                   onClick={() => startEdit(p)}
// //                 className="
// //   relative
// //   px-4 py-1.5

// //   rounded-lg

// //   bg-white/10
// //   backdrop-blur-md

// //   border border-white/20

// //   text-white

// //   shadow-[0_0_10px_rgba(255,255,255,0.05)]

// //   overflow-hidden

// //   transition-all duration-300

// //   hover:scale-105
// //   hover:border-white/60
// //   hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]
// //   hover:bg-white/15
// // "
// //                 >
// //                   Edit
// //                 </button>

// //                 <button
// //                   onClick={() => deleteProject(p.id)}
// //                   className="bg-red-600 px-3 py-1 rounded-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] transition"
// //                 >
// //                   Delete
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //     </main>
// //   );
// // }








// "use client";

// import { ChangeEvent, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   ArrowLeft,
//   ExternalLink,
//   ImagePlus,
//   LoaderCircle,
//   LogOut,
//   Pencil,
//   Plus,
//   Save,
//   Trash2,
//   X,
// } from "lucide-react";

// import { supabase } from "@/lib/supabase";

// type Project = {
//   id: number;
//   slug: string;
//   title: string;
//   description: string;
//   image: string;
//   stack: string[];
//   github?: string | null;
//   demo?: string | null;
// };

// type ProjectForm = {
//   slug: string;
//   title: string;
//   description: string;
//   image: string;
//   stack: string;
//   github: string;
//   demo: string;
// };

// type Toast = {
//   id: number;
//   message: string;
//   type: "success" | "error" | "info";
// };

// const emptyForm: ProjectForm = {
//   slug: "",
//   title: "",
//   description: "",
//   image: "",
//   stack: "",
//   github: "",
//   demo: "",
// };

// export default function AdminPage() {
//   const router = useRouter();

//   const [checkingAuth, setCheckingAuth] = useState(true);
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [editingId, setEditingId] = useState<number | null>(null);

//   const [loading, setLoading] = useState(false);
//   const [loadingProjects, setLoadingProjects] = useState(true);

//   const [form, setForm] = useState<ProjectForm>(emptyForm);
//   const [toasts, setToasts] = useState<Toast[]>([]);

//   function showToast(
//     message: string,
//     type: Toast["type"] = "info"
//   ) {
//     const id = Date.now();

//     setToasts((current) => [
//       ...current,
//       {
//         id,
//         message,
//         type,
//       },
//     ]);

//     window.setTimeout(() => {
//       setToasts((current) =>
//         current.filter((toast) => toast.id !== id)
//       );
//     }, 3200);
//   }

//   useEffect(() => {
//     async function checkAuth() {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();

//       if (!session) {
//         router.replace("/login");
//         return;
//       }

//       const { data: profile, error } = await supabase
//         .from("profiles")
//         .select("role")
//         .eq("id", session.user.id)
//         .single();

//       if (error || profile?.role !== "admin") {
//         router.replace("/");
//         return;
//       }

//       setCheckingAuth(false);
//     }

//     checkAuth();
//   }, [router]);

//   useEffect(() => {
//     if (checkingAuth) return;

//     async function fetchProjects() {
//       setLoadingProjects(true);

//       const { data, error } = await supabase
//         .from("projects")
//         .select("*")
//         .order("id", {
//           ascending: false,
//         });

//       if (error) {
//         showToast(error.message, "error");
//         setLoadingProjects(false);
//         return;
//       }

//       setProjects(data ?? []);
//       setLoadingProjects(false);
//     }

//     fetchProjects();
//   }, [checkingAuth]);

//   async function loadProjects() {
//     const { data, error } = await supabase
//       .from("projects")
//       .select("*")
//       .order("id", {
//         ascending: false,
//       });

//     if (error) {
//       showToast(error.message, "error");
//       return;
//     }

//     setProjects(data ?? []);
//   }

//   function updateField(
//     field: keyof ProjectForm,
//     value: string
//   ) {
//     setForm((current) => ({
//       ...current,
//       [field]: value,
//     }));
//   }

//   function resetForm() {
//     setForm(emptyForm);
//     setEditingId(null);
//   }

//   function validateForm() {
//     if (!form.slug.trim()) {
//       showToast("Slug is required.", "error");
//       return false;
//     }

//     if (!form.title.trim()) {
//       showToast("Title is required.", "error");
//       return false;
//     }

//     if (!form.description.trim()) {
//       showToast("Description is required.", "error");
//       return false;
//     }

//     if (!form.image.trim()) {
//       showToast("Project image is required.", "error");
//       return false;
//     }

//     return true;
//   }

//   function getStack() {
//     return form.stack
//       .split(",")
//       .map((item) => item.trim())
//       .filter(Boolean);
//   }

//   async function addProject() {
//     if (!validateForm()) return;

//     try {
//       setLoading(true);

//       const { error } = await supabase
//         .from("projects")
//         .insert([
//           {
//             slug: form.slug.trim(),
//             title: form.title.trim(),
//             description: form.description.trim(),
//             image: form.image.trim(),
//             stack: getStack(),
//             github: form.github.trim() || null,
//             demo: form.demo.trim() || null,
//           },
//         ]);

//       if (error) {
//         showToast(error.message, "error");
//         return;
//       }

//       await loadProjects();
//       resetForm();

//       showToast("Project added.", "success");
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function updateProject() {
//     if (!editingId || !validateForm()) return;

//     try {
//       setLoading(true);

//       const { error } = await supabase
//         .from("projects")
//         .update({
//           slug: form.slug.trim(),
//           title: form.title.trim(),
//           description: form.description.trim(),
//           image: form.image.trim(),
//           stack: getStack(),
//           github: form.github.trim() || null,
//           demo: form.demo.trim() || null,
//         })
//         .eq("id", editingId);

//       if (error) {
//         showToast(error.message, "error");
//         return;
//       }

//       await loadProjects();
//       resetForm();

//       showToast("Project updated.", "success");
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function deleteProject(project: Project) {
//     const confirmed = window.confirm(
//       `Delete "${project.title}"? This cannot be undone.`
//     );

//     if (!confirmed) return;

//     const { error } = await supabase
//       .from("projects")
//       .delete()
//       .eq("id", project.id);

//     if (error) {
//       showToast(error.message, "error");
//       return;
//     }

//     setProjects((current) =>
//       current.filter((item) => item.id !== project.id)
//     );

//     if (editingId === project.id) {
//       resetForm();
//     }

//     showToast("Project deleted.", "success");
//   }

//   function startEdit(project: Project) {
//     setEditingId(project.id);

//     setForm({
//       slug: project.slug,
//       title: project.title,
//       description: project.description,
//       image: project.image,
//       stack: project.stack.join(", "),
//       github: project.github ?? "",
//       demo: project.demo ?? "",
//     });

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }

//   function handleImageUpload(
//     event: ChangeEvent<HTMLInputElement>
//   ) {
//     const file = event.target.files?.[0];

//     if (!file) return;

//     if (!file.type.startsWith("image/")) {
//       showToast("Please choose an image file.", "error");
//       return;
//     }

//     const maxSize = 3 * 1024 * 1024;

//     if (file.size > maxSize) {
//       showToast(
//         "Image is too large. Maximum size is 3 MB.",
//         "error"
//       );
//       return;
//     }

//     setLoading(true);

//     const reader = new FileReader();

//     reader.onloadend = () => {
//       if (typeof reader.result !== "string") {
//         setLoading(false);
//         showToast("Could not read image.", "error");
//         return;
//       }

//       setForm((current) => ({
//         ...current,
//         image: reader.result as string,
//       }));

//       setLoading(false);
//       showToast("Image loaded.", "success");
//     };

//     reader.onerror = () => {
//       setLoading(false);
//       showToast("Could not read image.", "error");
//     };

//     reader.readAsDataURL(file);
//   }

//   async function logout() {
//     const { error } = await supabase.auth.signOut();

//     if (error) {
//       showToast(error.message, "error");
//       return;
//     }

//     router.replace("/login");
//     router.refresh();
//   }

//   if (checkingAuth) {
//     return (
//       <main
//         className="
//           flex
//           min-h-screen
//           items-center
//           justify-center
//           bg-[#050505]
//           text-white
//         "
//       >
//         <div className="flex items-center gap-3 text-sm text-white/40">
//           <LoaderCircle
//             size={17}
//             className="animate-spin"
//           />

//           Checking access...
//         </div>
//       </main>
//     );
//   }

//   const inputClassName = `
//     w-full
//     rounded-xl
//     border
//     border-white/[0.08]
//     bg-white/[0.025]
//     px-4
//     text-sm
//     text-white
//     outline-none
//     transition-all
//     duration-300
//     placeholder:text-white/20
//     hover:border-white/[0.14]
//     focus:border-white/[0.22]
//     focus:bg-white/[0.04]
//   `;

//   return (
//     <main
//       className="
//         relative
//         min-h-screen
//         overflow-hidden
//         bg-[#050505]
//         px-5
//         pb-20
//         pt-28
//         text-white
//         md:px-8
//       "
//     >
//       {/* background */}

//       <div className="pointer-events-none absolute inset-0">
//         <div
//           className="
//             absolute
//             right-[-10%]
//             top-[10%]
//             h-[500px]
//             w-[500px]
//             rounded-full
//             bg-indigo-500/[0.025]
//             blur-[170px]
//           "
//         />

//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.018]
//           "
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
//             backgroundSize: "84px 84px",
//           }}
//         />
//       </div>

//       {/* toast */}

//       <div
//         className="
//           fixed
//           right-5
//           top-24
//           z-[100]
//           flex
//           w-[calc(100%-2.5rem)]
//           max-w-sm
//           flex-col
//           gap-2
//         "
//       >
//         {toasts.map((toast) => (
//           <div
//             key={toast.id}
//             className={`
//               rounded-xl
//               border
//               px-4
//               py-3
//               text-sm
//               shadow-2xl
//               backdrop-blur-xl

//               ${
//                 toast.type === "success"
//                   ? "border-emerald-400/15 bg-emerald-400/[0.07] text-emerald-100"
//                   : toast.type === "error"
//                   ? "border-red-400/15 bg-red-400/[0.07] text-red-100"
//                   : "border-white/[0.1] bg-[#111]/95 text-white/70"
//               }
//             `}
//           >
//             {toast.message}
//           </div>
//         ))}
//       </div>

//       <div className="container-main relative z-10">
//         {/* header */}

//         <header
//           className="
//             mb-10
//             flex
//             flex-col
//             gap-6
//             border-b
//             border-white/[0.07]
//             pb-8
//             md:flex-row
//             md:items-end
//             md:justify-between
//           "
//         >
//           <div>
//             <button
//               type="button"
//               onClick={() => router.push("/")}
//               className="
//                 mb-6
//                 inline-flex
//                 items-center
//                 gap-2
//                 text-xs
//                 text-white/30
//                 transition-colors
//                 hover:text-white/70
//               "
//             >
//               <ArrowLeft size={14} />
//               Portfolio
//             </button>

//             <p
//               className="
//                 text-xs
//                 uppercase
//                 tracking-[0.22em]
//                 text-white/25
//               "
//             >
//               Administration
//             </p>

//             <h1
//               className="
//                 mt-3
//                 text-4xl
//                 font-semibold
//                 tracking-[-0.045em]
//                 md:text-5xl
//               "
//             >
//               Project dashboard
//             </h1>

//             <p className="mt-3 text-sm text-white/35">
//               Manage projects displayed on your portfolio.
//             </p>
//           </div>

//           <button
//             type="button"
//             onClick={logout}
//             className="
//               inline-flex
//               h-11
//               items-center
//               justify-center
//               gap-2
//               rounded-xl
//               border
//               border-white/[0.09]
//               bg-white/[0.025]
//               px-4
//               text-sm
//               text-white/50
//               transition-all
//               hover:border-white/[0.16]
//               hover:bg-white/[0.05]
//               hover:text-white
//             "
//           >
//             <LogOut size={15} />
//             Logout
//           </button>
//         </header>

//         {/* stats */}

//         <div
//           className="
//             mb-8
//             grid
//             gap-3
//             sm:grid-cols-3
//           "
//         >
//           <div
//             className="
//               rounded-2xl
//               border
//               border-white/[0.07]
//               bg-white/[0.02]
//               p-5
//             "
//           >
//             <p className="text-xs text-white/25">
//               Projects
//             </p>

//             <p className="mt-2 text-2xl font-medium">
//               {projects.length}
//             </p>
//           </div>

//           <div
//             className="
//               rounded-2xl
//               border
//               border-white/[0.07]
//               bg-white/[0.02]
//               p-5
//             "
//           >
//             <p className="text-xs text-white/25">
//               Live demos
//             </p>

//             <p className="mt-2 text-2xl font-medium">
//               {
//                 projects.filter((project) =>
//                   Boolean(project.demo)
//                 ).length
//               }
//             </p>
//           </div>

//           <div
//             className="
//               rounded-2xl
//               border
//               border-white/[0.07]
//               bg-white/[0.02]
//               p-5
//             "
//           >
//             <p className="text-xs text-white/25">
//               Public source
//             </p>

//             <p className="mt-2 text-2xl font-medium">
//               {
//                 projects.filter((project) =>
//                   Boolean(project.github)
//                 ).length
//               }
//             </p>
//           </div>
//         </div>

//         <div
//           className="
//             grid
//             gap-8
//             xl:grid-cols-[420px_1fr]
//           "
//         >
//           {/* FORM */}

//           <section
//             className="
//               h-fit
//               rounded-[26px]
//               border
//               border-white/[0.08]
//               bg-white/[0.02]
//               p-5
//               backdrop-blur-xl
//               md:p-6
//             "
//           >
//             <div className="mb-6 flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-white/80">
//                   {editingId ? "Edit project" : "New project"}
//                 </p>

//                 <p className="mt-1 text-xs text-white/25">
//                   {editingId
//                     ? `Editing project #${editingId}`
//                     : "Create a portfolio case study"}
//                 </p>
//               </div>

//               {editingId ? (
//                 <button
//                   type="button"
//                   onClick={resetForm}
//                   aria-label="Cancel editing"
//                   className="
//                     flex
//                     h-9
//                     w-9
//                     items-center
//                     justify-center
//                     rounded-lg
//                     border
//                     border-white/[0.08]
//                     text-white/35
//                     transition
//                     hover:text-white
//                   "
//                 >
//                   <X size={15} />
//                 </button>
//               ) : (
//                 <div
//                   className="
//                     flex
//                     h-9
//                     w-9
//                     items-center
//                     justify-center
//                     rounded-lg
//                     border
//                     border-white/[0.08]
//                     text-white/30
//                   "
//                 >
//                   <Plus size={15} />
//                 </div>
//               )}
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="project-title"
//                   className="mb-2 block text-xs text-white/35"
//                 >
//                   Title
//                 </label>

//                 <input
//                   id="project-title"
//                   value={form.title}
//                   onChange={(event) =>
//                     updateField(
//                       "title",
//                       event.target.value
//                     )
//                   }
//                   placeholder="Career AI"
//                   className={`${inputClassName} h-12`}
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="project-slug"
//                   className="mb-2 block text-xs text-white/35"
//                 >
//                   Slug
//                 </label>

//                 <input
//                   id="project-slug"
//                   value={form.slug}
//                   onChange={(event) =>
//                     updateField(
//                       "slug",
//                       event.target.value
//                     )
//                   }
//                   placeholder="career-ai"
//                   className={`${inputClassName} h-12`}
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="project-description"
//                   className="mb-2 block text-xs text-white/35"
//                 >
//                   Description
//                 </label>

//                 <textarea
//                   id="project-description"
//                   value={form.description}
//                   onChange={(event) =>
//                     updateField(
//                       "description",
//                       event.target.value
//                     )
//                   }
//                   placeholder="Describe the project, problem and solution..."
//                   className={`
//                     ${inputClassName}
//                     min-h-[130px]
//                     resize-y
//                     py-3
//                     leading-6
//                   `}
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="project-stack"
//                   className="mb-2 block text-xs text-white/35"
//                 >
//                   Technologies
//                 </label>

//                 <input
//                   id="project-stack"
//                   value={form.stack}
//                   onChange={(event) =>
//                     updateField(
//                       "stack",
//                       event.target.value
//                     )
//                   }
//                   placeholder="Next.js, Go, PostgreSQL"
//                   className={`${inputClassName} h-12`}
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="project-image"
//                   className="mb-2 block text-xs text-white/35"
//                 >
//                   Image URL / Base64
//                 </label>

//                 <input
//                   id="project-image"
//                   value={form.image}
//                   onChange={(event) =>
//                     updateField(
//                       "image",
//                       event.target.value
//                     )
//                   }
//                   placeholder="/projects/example.png"
//                   className={`${inputClassName} h-12`}
//                 />

//                 <label
//                   className="
//                     mt-3
//                     flex
//                     cursor-pointer
//                     items-center
//                     justify-center
//                     gap-2
//                     rounded-xl
//                     border
//                     border-dashed
//                     border-white/[0.1]
//                     bg-white/[0.015]
//                     px-4
//                     py-4
//                     text-xs
//                     text-white/35
//                     transition-all
//                     hover:border-white/[0.18]
//                     hover:bg-white/[0.03]
//                     hover:text-white/60
//                   "
//                 >
//                   <ImagePlus size={15} />

//                   Upload image from computer

//                   <input
//                     type="file"
//                     accept="image/*"
//                     disabled={loading}
//                     onChange={handleImageUpload}
//                     className="hidden"
//                   />
//                 </label>

//                 {form.image && (
//                   <p
//                     className="
//                       mt-2
//                       truncate
//                       text-[10px]
//                       text-emerald-300/45
//                     "
//                   >
//                     Image selected
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="project-github"
//                   className="mb-2 block text-xs text-white/35"
//                 >
//                   GitHub
//                 </label>

//                 <input
//                   id="project-github"
//                   value={form.github}
//                   onChange={(event) =>
//                     updateField(
//                       "github",
//                       event.target.value
//                     )
//                   }
//                   placeholder="https://github.com/..."
//                   className={`${inputClassName} h-12`}
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="project-demo"
//                   className="mb-2 block text-xs text-white/35"
//                 >
//                   Live demo
//                 </label>

//                 <input
//                   id="project-demo"
//                   value={form.demo}
//                   onChange={(event) =>
//                     updateField(
//                       "demo",
//                       event.target.value
//                     )
//                   }
//                   placeholder="https://..."
//                   className={`${inputClassName} h-12`}
//                 />
//               </div>

//               <button
//                 type="button"
//                 disabled={loading}
//                 onClick={
//                   editingId
//                     ? updateProject
//                     : addProject
//                 }
//                 className="
//                   mt-2
//                   flex
//                   h-12
//                   w-full
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-xl
//                   bg-white
//                   text-sm
//                   font-medium
//                   !text-black
//                   transition-all
//                   hover:bg-white/90
//                   disabled:cursor-not-allowed
//                   disabled:opacity-50
//                 "
//               >
//                 {loading ? (
//                   <>
//                     <LoaderCircle
//                       size={15}
//                       className="animate-spin"
//                     />

//                     Saving...
//                   </>
//                 ) : editingId ? (
//                   <>
//                     <Save size={15} />
//                     Save changes
//                   </>
//                 ) : (
//                   <>
//                     <Plus size={15} />
//                     Add project
//                   </>
//                 )}
//               </button>
//             </div>
//           </section>

//           {/* PROJECT LIST */}

//           <section>
//             <div
//               className="
//                 mb-5
//                 flex
//                 items-end
//                 justify-between
//               "
//             >
//               <div>
//                 <p className="text-sm font-medium text-white/80">
//                   Projects
//                 </p>

//                 <p className="mt-1 text-xs text-white/25">
//                   Published portfolio projects
//                 </p>
//               </div>

//               <span
//                 className="
//                   rounded-full
//                   border
//                   border-white/[0.07]
//                   px-3
//                   py-1
//                   text-[10px]
//                   text-white/30
//                 "
//               >
//                 {projects.length}
//               </span>
//             </div>

//             {loadingProjects ? (
//               <div
//                 className="
//                   flex
//                   min-h-[220px]
//                   items-center
//                   justify-center
//                   rounded-[24px]
//                   border
//                   border-white/[0.07]
//                   bg-white/[0.015]
//                 "
//               >
//                 <LoaderCircle
//                   size={18}
//                   className="animate-spin text-white/30"
//                 />
//               </div>
//             ) : projects.length === 0 ? (
//               <div
//                 className="
//                   flex
//                   min-h-[220px]
//                   flex-col
//                   items-center
//                   justify-center
//                   rounded-[24px]
//                   border
//                   border-dashed
//                   border-white/[0.08]
//                   bg-white/[0.015]
//                   text-center
//                 "
//               >
//                 <p className="text-sm text-white/40">
//                   No projects yet.
//                 </p>

//                 <p className="mt-1 text-xs text-white/20">
//                   Add your first project from the form.
//                 </p>
//               </div>
//             ) : (
//               <div className="space-y-3">
//                 {projects.map((project, index) => (
//                   <article
//                     key={project.id}
//                     className="
//                       group
//                       rounded-[20px]
//                       border
//                       border-white/[0.07]
//                       bg-white/[0.018]
//                       p-5
//                       transition-all
//                       duration-300
//                       hover:border-white/[0.13]
//                       hover:bg-white/[0.028]
//                     "
//                   >
//                     <div
//                       className="
//                         flex
//                         flex-col
//                         gap-5
//                         sm:flex-row
//                         sm:items-start
//                         sm:justify-between
//                       "
//                     >
//                       <div className="min-w-0">
//                         <div className="flex items-center gap-3">
//                           <span
//                             className="
//                               text-[10px]
//                               tabular-nums
//                               text-white/20
//                             "
//                           >
//                             {String(index + 1).padStart(
//                               2,
//                               "0"
//                             )}
//                           </span>

//                           <h2
//                             className="
//                               truncate
//                               text-base
//                               font-medium
//                               text-white/85
//                             "
//                           >
//                             {project.title}
//                           </h2>
//                         </div>

//                         <p
//                           className="
//                             ml-7
//                             mt-2
//                             line-clamp-2
//                             max-w-2xl
//                             text-sm
//                             leading-6
//                             text-white/35
//                           "
//                         >
//                           {project.description}
//                         </p>

//                         <div
//                           className="
//                             ml-7
//                             mt-3
//                             flex
//                             flex-wrap
//                             gap-x-3
//                             gap-y-1.5
//                           "
//                         >
//                           {project.stack.map((tech) => (
//                             <span
//                               key={tech}
//                               className="
//                                 text-[10px]
//                                 text-white/25
//                               "
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="flex shrink-0 gap-2">
//                         <button
//                           type="button"
//                           onClick={() =>
//                             startEdit(project)
//                           }
//                           aria-label={`Edit ${project.title}`}
//                           className="
//                             flex
//                             h-9
//                             items-center
//                             gap-2
//                             rounded-lg
//                             border
//                             border-white/[0.08]
//                             px-3
//                             text-xs
//                             text-white/40
//                             transition
//                             hover:border-white/[0.16]
//                             hover:text-white
//                           "
//                         >
//                           <Pencil size={13} />
//                           Edit
//                         </button>

//                         <a
//                           href={`/projects/${project.slug}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           aria-label={`Open ${project.title}`}
//                           className="
//                             flex
//                             h-9
//                             w-9
//                             items-center
//                             justify-center
//                             rounded-lg
//                             border
//                             border-white/[0.08]
//                             text-white/35
//                             transition
//                             hover:border-white/[0.16]
//                             hover:text-white
//                           "
//                         >
//                           <ExternalLink size={13} />
//                         </a>

//                         <button
//                           type="button"
//                           onClick={() =>
//                             deleteProject(project)
//                           }
//                           aria-label={`Delete ${project.title}`}
//                           className="
//                             flex
//                             h-9
//                             w-9
//                             items-center
//                             justify-center
//                             rounded-lg
//                             border
//                             border-red-400/[0.08]
//                             text-red-300/35
//                             transition
//                             hover:border-red-400/20
//                             hover:bg-red-400/[0.04]
//                             hover:text-red-300
//                           "
//                         >
//                           <Trash2 size={13} />
//                         </button>
//                       </div>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             )}
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// }












"use client";

import {
  ChangeEvent,
  useEffect,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ExternalLink,
  ImagePlus,
  LoaderCircle,
  LogOut,
  Pencil,
  Plus,
  Save,
  Trash2,
  X,
} from "lucide-react";

import { supabase } from "@/lib/supabase";
import { useLang } from "@/src/hooks/useLang";

/* =========================================================
   TYPES
========================================================= */

type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  github?: string | null;
  demo?: string | null;
};

type ProjectForm = {
  slug: string;
  title: string;
  description: string;
  image: string;
  stack: string;
  github: string;
  demo: string;
};

type Toast = {
  id: number;
  message: string;
  type: "success" | "error" | "info";
};

const emptyForm: ProjectForm = {
  slug: "",
  title: "",
  description: "",
  image: "",
  stack: "",
  github: "",
  demo: "",
};

/* =========================================================
   PAGE
========================================================= */

export default function AdminPage() {
  const router = useRouter();
  const { lang } = useLang();

  const content =
    lang === "ru"
      ? {
          checking: "Проверка доступа...",

          portfolio: "Портфолио",
          eyebrow: "АДМИНИСТРИРОВАНИЕ",
          dashboard: "Управление проектами",
          dashboardDescription:
            "Управляйте проектами, отображаемыми в портфолио.",

          logout: "Выйти",

          projects: "Проекты",
          liveDemos: "Демо",
          publicSource: "Открытый код",

          editProject: "Редактирование проекта",
          newProject: "Новый проект",
          editing: "Редактируется проект",
          createCase: "Создать новый кейс для портфолио",
          cancelEditing: "Отменить редактирование",

          title: "Название",
          slug: "Slug",
          description: "Описание",
          technologies: "Технологии",
          image: "Изображение URL / Base64",
          github: "GitHub",
          liveDemo: "Демо",

          titlePlaceholder: "Career AI",
          slugPlaceholder: "career-ai",
          descriptionPlaceholder:
            "Опишите проект, задачу и решение...",
          stackPlaceholder: "Next.js, Go, PostgreSQL",
          imagePlaceholder: "/projects/example.png",
          githubPlaceholder: "https://github.com/...",
          demoPlaceholder: "https://...",

          uploadImage: "Загрузить изображение с компьютера",
          imageSelected: "Изображение выбрано",

          saving: "Сохранение...",
          saveChanges: "Сохранить изменения",
          addProject: "Добавить проект",

          publishedProjects: "Опубликованные проекты",
          noProjects: "Проектов пока нет.",
          addFirst:
            "Добавьте первый проект через форму.",

          edit: "Изменить",

          slugRequired: "Slug обязателен.",
          titleRequired: "Название обязательно.",
          descriptionRequired: "Описание обязательно.",
          imageRequired: "Изображение проекта обязательно.",

          imageFileRequired:
            "Выберите файл изображения.",
          imageTooLarge:
            "Изображение слишком большое. Максимальный размер — 3 МБ.",
          imageReadError:
            "Не удалось прочитать изображение.",
          imageLoaded: "Изображение загружено.",

          projectAdded: "Проект добавлен.",
          projectUpdated: "Проект обновлён.",
          projectDeleted: "Проект удалён.",

          deleteQuestion: "Удалить",
          deleteWarning:
            "Это действие нельзя отменить.",
        }
      : {
          checking: "Checking access...",

          portfolio: "Portfolio",
          eyebrow: "ADMINISTRATION",
          dashboard: "Project dashboard",
          dashboardDescription:
            "Manage projects displayed on your portfolio.",

          logout: "Logout",

          projects: "Projects",
          liveDemos: "Live demos",
          publicSource: "Public source",

          editProject: "Edit project",
          newProject: "New project",
          editing: "Editing project",
          createCase: "Create a portfolio case study",
          cancelEditing: "Cancel editing",

          title: "Title",
          slug: "Slug",
          description: "Description",
          technologies: "Technologies",
          image: "Image URL / Base64",
          github: "GitHub",
          liveDemo: "Live demo",

          titlePlaceholder: "Career AI",
          slugPlaceholder: "career-ai",
          descriptionPlaceholder:
            "Describe the project, problem and solution...",
          stackPlaceholder: "Next.js, Go, PostgreSQL",
          imagePlaceholder: "/projects/example.png",
          githubPlaceholder: "https://github.com/...",
          demoPlaceholder: "https://...",

          uploadImage: "Upload image from computer",
          imageSelected: "Image selected",

          saving: "Saving...",
          saveChanges: "Save changes",
          addProject: "Add project",

          publishedProjects: "Published portfolio projects",
          noProjects: "No projects yet.",
          addFirst:
            "Add your first project from the form.",

          edit: "Edit",

          slugRequired: "Slug is required.",
          titleRequired: "Title is required.",
          descriptionRequired: "Description is required.",
          imageRequired: "Project image is required.",

          imageFileRequired:
            "Please choose an image file.",
          imageTooLarge:
            "Image is too large. Maximum size is 3 MB.",
          imageReadError:
            "Could not read image.",
          imageLoaded: "Image loaded.",

          projectAdded: "Project added.",
          projectUpdated: "Project updated.",
          projectDeleted: "Project deleted.",

          deleteQuestion: "Delete",
          deleteWarning:
            "This cannot be undone.",
        };

  /* =========================================================
     STATE
  ========================================================= */

  const [checkingAuth, setCheckingAuth] =
    useState(true);

  const [projects, setProjects] =
    useState<Project[]>([]);

  const [editingId, setEditingId] =
    useState<number | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [loadingProjects, setLoadingProjects] =
    useState(true);

  const [form, setForm] =
    useState<ProjectForm>(emptyForm);

  const [toasts, setToasts] =
    useState<Toast[]>([]);

  /* =========================================================
     TOAST
  ========================================================= */

  function showToast(
    message: string,
    type: Toast["type"] = "info"
  ) {
    const id =
      Date.now() + Math.random();

    setToasts((current) => [
      ...current,
      {
        id,
        message,
        type,
      },
    ]);

    window.setTimeout(() => {
      setToasts((current) =>
        current.filter(
          (toast) => toast.id !== id
        )
      );
    }, 3200);
  }

  /* =========================================================
     AUTH
  ========================================================= */

  useEffect(() => {
    async function checkAuth() {
      const {
        data: { session },
      } =
        await supabase.auth.getSession();

      if (!session) {
        router.replace("/login");
        return;
      }

      const {
        data: profile,
        error,
      } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single();

      if (
        error ||
        profile?.role !== "admin"
      ) {
        router.replace("/");
        return;
      }

      setCheckingAuth(false);
    }

    checkAuth();
  }, [router]);

  /* =========================================================
     INITIAL PROJECT LOAD
  ========================================================= */

  useEffect(() => {
    if (checkingAuth) {
      return;
    }

    async function fetchProjects() {
      setLoadingProjects(true);

      const {
        data,
        error,
      } = await supabase
        .from("projects")
        .select("*")
        .order("id", {
          ascending: false,
        });

      if (error) {
        showToast(
          error.message,
          "error"
        );

        setLoadingProjects(false);
        return;
      }

      setProjects(data ?? []);
      setLoadingProjects(false);
    }

    fetchProjects();
  }, [checkingAuth]);

  /* =========================================================
     LOAD PROJECTS
  ========================================================= */

  async function loadProjects() {
    const {
      data,
      error,
    } = await supabase
      .from("projects")
      .select("*")
      .order("id", {
        ascending: false,
      });

    if (error) {
      showToast(
        error.message,
        "error"
      );

      return;
    }

    setProjects(data ?? []);
  }

  /* =========================================================
     FORM
  ========================================================= */

  function updateField(
    field: keyof ProjectForm,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  function validateForm() {
    if (!form.slug.trim()) {
      showToast(
        content.slugRequired,
        "error"
      );

      return false;
    }

    if (!form.title.trim()) {
      showToast(
        content.titleRequired,
        "error"
      );

      return false;
    }

    if (!form.description.trim()) {
      showToast(
        content.descriptionRequired,
        "error"
      );

      return false;
    }

    if (!form.image.trim()) {
      showToast(
        content.imageRequired,
        "error"
      );

      return false;
    }

    return true;
  }

  function getStack() {
    return form.stack
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  /* =========================================================
     ADD PROJECT
  ========================================================= */

  async function addProject() {
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const { error } =
        await supabase
          .from("projects")
          .insert([
            {
              slug: form.slug.trim(),

              title:
                form.title.trim(),

              description:
                form.description.trim(),

              image:
                form.image.trim(),

              stack: getStack(),

              github:
                form.github.trim() ||
                null,

              demo:
                form.demo.trim() ||
                null,
            },
          ]);

      if (error) {
        showToast(
          error.message,
          "error"
        );

        return;
      }

      await loadProjects();

      resetForm();

      showToast(
        content.projectAdded,
        "success"
      );
    } catch {
      showToast(
        "Unexpected error.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  }

  /* =========================================================
     UPDATE PROJECT
  ========================================================= */

  async function updateProject() {
    if (
      !editingId ||
      !validateForm()
    ) {
      return;
    }

    try {
      setLoading(true);

      const { error } =
        await supabase
          .from("projects")
          .update({
            slug: form.slug.trim(),

            title:
              form.title.trim(),

            description:
              form.description.trim(),

            image:
              form.image.trim(),

            stack: getStack(),

            github:
              form.github.trim() ||
              null,

            demo:
              form.demo.trim() ||
              null,
          })
          .eq("id", editingId);

      if (error) {
        showToast(
          error.message,
          "error"
        );

        return;
      }

      await loadProjects();

      resetForm();

      showToast(
        content.projectUpdated,
        "success"
      );
    } catch {
      showToast(
        "Unexpected error.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  }

  /* =========================================================
     DELETE PROJECT
  ========================================================= */

  async function deleteProject(
    project: Project
  ) {
    const confirmed =
      window.confirm(
        `${content.deleteQuestion} "${project.title}"? ${content.deleteWarning}`
      );

    if (!confirmed) {
      return;
    }

    const { error } =
      await supabase
        .from("projects")
        .delete()
        .eq("id", project.id);

    if (error) {
      showToast(
        error.message,
        "error"
      );

      return;
    }

    setProjects((current) =>
      current.filter(
        (item) =>
          item.id !== project.id
      )
    );

    if (
      editingId === project.id
    ) {
      resetForm();
    }

    showToast(
      content.projectDeleted,
      "success"
    );
  }

  /* =========================================================
     START EDIT
  ========================================================= */

  function startEdit(
    project: Project
  ) {
    setEditingId(project.id);

    setForm({
      slug: project.slug,

      title: project.title,

      description:
        project.description,

      image: project.image,

      stack:
        project.stack.join(", "),

      github:
        project.github ?? "",

      demo:
        project.demo ?? "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /* =========================================================
     IMAGE
  ========================================================= */

  function handleImageUpload(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }

    if (
      !file.type.startsWith(
        "image/"
      )
    ) {
      showToast(
        content.imageFileRequired,
        "error"
      );

      return;
    }

    const maxSize =
      3 * 1024 * 1024;

    if (file.size > maxSize) {
      showToast(
        content.imageTooLarge,
        "error"
      );

      return;
    }

    setLoading(true);

    const reader =
      new FileReader();

    reader.onloadend = () => {
      if (
        typeof reader.result !==
        "string"
      ) {
        setLoading(false);

        showToast(
          content.imageReadError,
          "error"
        );

        return;
      }

      setForm((current) => ({
        ...current,
        image: reader.result as string,
      }));

      setLoading(false);

      showToast(
        content.imageLoaded,
        "success"
      );
    };

    reader.onerror = () => {
      setLoading(false);

      showToast(
        content.imageReadError,
        "error"
      );
    };

    reader.readAsDataURL(file);
  }

  /* =========================================================
     LOGOUT
  ========================================================= */

  async function logout() {
    const { error } =
      await supabase.auth.signOut();

    if (error) {
      showToast(
        error.message,
        "error"
      );

      return;
    }

    router.replace("/login");
    router.refresh();
  }

  /* =========================================================
     AUTH LOADING
  ========================================================= */

  if (checkingAuth) {
    return (
      <main
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#050505]
          text-white
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            text-sm
            text-white/40
          "
        >
          <LoaderCircle
            size={17}
            className="animate-spin"
          />

          {content.checking}
        </div>
      </main>
    );
  }

  /* =========================================================
     CLASSES
  ========================================================= */

  const inputClassName = `
    w-full

    rounded-xl

    border
    border-white/[0.08]

    bg-white/[0.025]

    px-4

    text-sm
    text-white

    outline-none

    transition-all
    duration-300

    placeholder:text-white/20

    hover:border-white/[0.14]

    focus:border-red-600/55
    focus:bg-white/[0.04]

    focus:ring-4
    focus:ring-red-600/[0.035]
  `;

  /* =========================================================
     UI
  ========================================================= */

  return (
    <main
      className="
        relative

        min-h-screen

        overflow-hidden

        bg-[#050505]

        px-5
        pb-20
        pt-28

        text-white

        md:px-8
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        <div
          className="
            absolute

            right-[-10%]
            top-[10%]

            h-[500px]
            w-[500px]

            rounded-full

            bg-red-600/[0.018]

            blur-[170px]
          "
        />

        <div
          className="
            absolute
            inset-0

            opacity-[0.015]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",

            backgroundSize:
              "84px 84px",
          }}
        />
      </div>

      {/* =====================================================
          TOASTS
      ===================================================== */}

      <div
        className="
          fixed

          right-5
          top-24

          z-[100]

          flex

          w-[calc(100%-2.5rem)]
          max-w-sm

          flex-col

          gap-2
        "
      >
        {toasts.map(
          (toast) => (
            <div
              key={toast.id}
              className={`
                relative

                overflow-hidden

                rounded-xl

                border

                px-4
                py-3

                text-sm

                shadow-2xl

                backdrop-blur-xl

                ${
                  toast.type ===
                  "error"
                    ? `
                      border-red-600/25
                      bg-[#120707]/95
                      text-white/70
                    `
                    : toast.type ===
                      "success"
                    ? `
                      border-white/[0.1]
                      bg-[#111]/95
                      text-white/70
                    `
                    : `
                      border-white/[0.1]
                      bg-[#111]/95
                      text-white/70
                    `
                }
              `}
            >
              <span
                className={`
                  absolute

                  bottom-0
                  left-0
                  top-0

                  w-[2px]

                  ${
                    toast.type ===
                    "error"
                      ? "bg-red-600"
                      : "bg-white/50"
                  }
                `}
              />

              {toast.message}
            </div>
          )
        )}
      </div>

      <div
        className="
          container-main
          relative
          z-10
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <header
          className="
            relative

            mb-10

            flex
            flex-col

            gap-6

            border-b
            border-white/[0.07]

            pb-8

            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div
            className="
              absolute

              bottom-[-1px]
              left-0

              h-[2px]
              w-20

              bg-red-600
            "
          />

          <div>
            <button
              type="button"
              onClick={() =>
                router.push("/")
              }
              className="
                group

                mb-6

                inline-flex
                items-center

                gap-2

                text-xs

                text-white/30

                transition-colors

                hover:text-white/70
              "
            >
              <ArrowLeft
                size={14}
                className="
                  transition-transform
                  duration-300

                  group-hover:-translate-x-1
                "
              />

              {content.portfolio}
            </button>

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-3
                  w-[2px]

                  bg-red-600
                "
              />

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase

                  tracking-[0.22em]

                  text-white/30
                "
              >
                {content.eyebrow}
              </p>
            </div>

            <h1
              className="
                mt-4

                text-4xl
                font-semibold

                tracking-[-0.045em]

                md:text-5xl
              "
            >
              {content.dashboard}
              <span className="text-red-600">
                .
              </span>
            </h1>

            <p
              className="
                mt-3

                text-sm

                text-white/38
              "
            >
              {
                content.dashboardDescription
              }
            </p>
          </div>

          <button
            type="button"
            onClick={logout}
            className="
              group

              inline-flex
              h-11

              items-center
              justify-center

              gap-2

              rounded-xl

              border
              border-white/[0.09]

              bg-white/[0.025]

              px-4

              text-sm

              text-white/50

              transition-all
              duration-300

              hover:border-red-600/35
              hover:bg-red-600/[0.035]
              hover:text-white
            "
          >
            <LogOut
              size={15}
              className="
                transition-colors

                group-hover:text-red-500
              "
            />

            {content.logout}
          </button>
        </header>

        {/* ===================================================
            STATS
        =================================================== */}

        <div
          className="
            mb-8

            grid

            gap-3

            sm:grid-cols-3
          "
        >
          <StatCard
            label={
              content.projects
            }
            value={projects.length}
          />

          <StatCard
            label={
              content.liveDemos
            }
            value={
              projects.filter(
                (project) =>
                  Boolean(
                    project.demo
                  )
              ).length
            }
          />

          <StatCard
            label={
              content.publicSource
            }
            value={
              projects.filter(
                (project) =>
                  Boolean(
                    project.github
                  )
              ).length
            }
          />
        </div>

        {/* ===================================================
            GRID
        =================================================== */}

        <div
          className="
            grid

            gap-8

            xl:grid-cols-[420px_1fr]
          "
        >
          {/* =================================================
              FORM
          ================================================= */}

          <section
            className="
              relative

              h-fit

              overflow-hidden

              rounded-[26px]

              border
              border-white/[0.08]

              bg-white/[0.02]

              p-5

              backdrop-blur-xl

              md:p-6
            "
          >
            <div
              className="
                absolute

                left-6
                top-0

                h-[2px]
                w-12

                bg-red-600
              "
            />

            <div
              className="
                mb-6

                flex
                items-center
                justify-between
              "
            >
              <div>
                <p
                  className="
                    text-sm
                    font-medium

                    text-white/85
                  "
                >
                  {editingId
                    ? content.editProject
                    : content.newProject}
                </p>

                <p
                  className="
                    mt-1

                    text-xs

                    text-white/25
                  "
                >
                  {editingId
                    ? `${content.editing} #${editingId}`
                    : content.createCase}
                </p>
              </div>

              {editingId ? (
                <button
                  type="button"
                  onClick={
                    resetForm
                  }
                  aria-label={
                    content.cancelEditing
                  }
                  className="
                    flex
                    h-9
                    w-9

                    items-center
                    justify-center

                    rounded-lg

                    border
                    border-white/[0.08]

                    text-white/35

                    transition-all

                    hover:border-red-600/30
                    hover:text-red-500
                  "
                >
                  <X size={15} />
                </button>
              ) : (
                <div
                  className="
                    flex
                    h-9
                    w-9

                    items-center
                    justify-center

                    rounded-lg

                    border
                    border-white/[0.08]

                    text-red-500
                  "
                >
                  <Plus
                    size={15}
                  />
                </div>
              )}
            </div>

            <div className="space-y-4">
              {/* TITLE */}

              <Field
                label={
                  content.title
                }
                htmlFor="project-title"
              >
                <input
                  id="project-title"
                  value={form.title}
                  onChange={(
                    event
                  ) =>
                    updateField(
                      "title",
                      event.target
                        .value
                    )
                  }
                  placeholder={
                    content.titlePlaceholder
                  }
                  className={`${inputClassName} h-12`}
                />
              </Field>

              {/* SLUG */}

              <Field
                label={
                  content.slug
                }
                htmlFor="project-slug"
              >
                <input
                  id="project-slug"
                  value={form.slug}
                  onChange={(
                    event
                  ) =>
                    updateField(
                      "slug",
                      event.target
                        .value
                    )
                  }
                  placeholder={
                    content.slugPlaceholder
                  }
                  className={`${inputClassName} h-12`}
                />
              </Field>

              {/* DESCRIPTION */}

              <Field
                label={
                  content.description
                }
                htmlFor="project-description"
              >
                <textarea
                  id="project-description"
                  value={
                    form.description
                  }
                  onChange={(
                    event
                  ) =>
                    updateField(
                      "description",
                      event.target
                        .value
                    )
                  }
                  placeholder={
                    content.descriptionPlaceholder
                  }
                  className={`
                    ${inputClassName}

                    min-h-[130px]

                    resize-y

                    py-3

                    leading-6
                  `}
                />
              </Field>

              {/* STACK */}

              <Field
                label={
                  content.technologies
                }
                htmlFor="project-stack"
              >
                <input
                  id="project-stack"
                  value={form.stack}
                  onChange={(
                    event
                  ) =>
                    updateField(
                      "stack",
                      event.target
                        .value
                    )
                  }
                  placeholder={
                    content.stackPlaceholder
                  }
                  className={`${inputClassName} h-12`}
                />
              </Field>

              {/* IMAGE */}

              <Field
                label={
                  content.image
                }
                htmlFor="project-image"
              >
                <input
                  id="project-image"
                  value={form.image}
                  onChange={(
                    event
                  ) =>
                    updateField(
                      "image",
                      event.target
                        .value
                    )
                  }
                  placeholder={
                    content.imagePlaceholder
                  }
                  className={`${inputClassName} h-12`}
                />

                <label
                  className="
                    group

                    mt-3

                    flex

                    cursor-pointer

                    items-center
                    justify-center

                    gap-2

                    rounded-xl

                    border
                    border-dashed
                    border-white/[0.1]

                    bg-white/[0.015]

                    px-4
                    py-4

                    text-xs

                    text-white/35

                    transition-all
                    duration-300

                    hover:border-red-600/35
                    hover:bg-red-600/[0.025]
                    hover:text-white/65
                  "
                >
                  <ImagePlus
                    size={15}
                    className="
                      transition-colors

                      group-hover:text-red-500
                    "
                  />

                  {
                    content.uploadImage
                  }

                  <input
                    type="file"
                    accept="image/*"
                    disabled={loading}
                    onChange={
                      handleImageUpload
                    }
                    className="hidden"
                  />
                </label>

                {form.image && (
                  <div
                    className="
                      mt-2

                      flex
                      items-center

                      gap-2

                      text-[10px]

                      text-white/30
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5

                        bg-red-600
                      "
                    />

                    {
                      content.imageSelected
                    }
                  </div>
                )}
              </Field>

              {/* GITHUB */}

              <Field
                label={
                  content.github
                }
                htmlFor="project-github"
              >
                <input
                  id="project-github"
                  value={
                    form.github
                  }
                  onChange={(
                    event
                  ) =>
                    updateField(
                      "github",
                      event.target
                        .value
                    )
                  }
                  placeholder={
                    content.githubPlaceholder
                  }
                  className={`${inputClassName} h-12`}
                />
              </Field>

              {/* DEMO */}

              <Field
                label={
                  content.liveDemo
                }
                htmlFor="project-demo"
              >
                <input
                  id="project-demo"
                  value={form.demo}
                  onChange={(
                    event
                  ) =>
                    updateField(
                      "demo",
                      event.target
                        .value
                    )
                  }
                  placeholder={
                    content.demoPlaceholder
                  }
                  className={`${inputClassName} h-12`}
                />
              </Field>

              {/* SAVE */}

              <button
                type="button"
                disabled={loading}
                onClick={
                  editingId
                    ? updateProject
                    : addProject
                }
                className="
                  group

                  relative

                  mt-2

                  flex
                  h-12
                  w-full

                  items-center
                  justify-center

                  gap-2

                  overflow-hidden

                  rounded-xl

                  bg-white

                  text-sm
                  font-semibold

                  !text-black

                  transition-all
                  duration-300

                  hover:scale-[1.01]
                  hover:bg-white/90

                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                <span
                  className="
                    absolute

                    bottom-0
                    left-0

                    h-[2px]
                    w-0

                    bg-red-600

                    transition-all
                    duration-500

                    group-hover:w-full
                  "
                />

                {loading ? (
                  <>
                    <LoaderCircle
                      size={15}
                      className="animate-spin"
                    />

                    {
                      content.saving
                    }
                  </>
                ) : editingId ? (
                  <>
                    <Save
                      size={15}
                    />

                    {
                      content.saveChanges
                    }
                  </>
                ) : (
                  <>
                    <Plus
                      size={15}
                    />

                    {
                      content.addProject
                    }
                  </>
                )}
              </button>
            </div>
          </section>

          {/* =================================================
              PROJECT LIST
          ================================================= */}

          <section>
            <div
              className="
                mb-5

                flex
                items-end
                justify-between
              "
            >
              <div>
                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      h-[10px]
                      w-[2px]

                      bg-red-600
                    "
                  />

                  <p
                    className="
                      text-sm
                      font-medium

                      text-white/80
                    "
                  >
                    {
                      content.projects
                    }
                  </p>
                </div>

                <p
                  className="
                    mt-1

                    text-xs

                    text-white/25
                  "
                >
                  {
                    content.publishedProjects
                  }
                </p>
              </div>

              <span
                className="
                  rounded-full

                  border
                  border-white/[0.07]

                  px-3
                  py-1

                  text-[10px]

                  text-white/30
                "
              >
                {projects.length}
              </span>
            </div>

            {loadingProjects ? (
              <div
                className="
                  flex

                  min-h-[220px]

                  items-center
                  justify-center

                  rounded-[24px]

                  border
                  border-white/[0.07]

                  bg-white/[0.015]
                "
              >
                <LoaderCircle
                  size={18}
                  className="
                    animate-spin
                    text-red-500/60
                  "
                />
              </div>
            ) : projects.length ===
              0 ? (
              <div
                className="
                  flex

                  min-h-[220px]

                  flex-col

                  items-center
                  justify-center

                  rounded-[24px]

                  border
                  border-dashed
                  border-white/[0.08]

                  bg-white/[0.015]

                  text-center
                "
              >
                <p
                  className="
                    text-sm
                    text-white/40
                  "
                >
                  {
                    content.noProjects
                  }
                </p>

                <p
                  className="
                    mt-1

                    text-xs

                    text-white/20
                  "
                >
                  {content.addFirst}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {projects.map(
                  (
                    project,
                    index
                  ) => (
                    <article
                      key={
                        project.id
                      }
                      className={`
                        group

                        relative

                        overflow-hidden

                        rounded-[20px]

                        border

                        p-5

                        transition-all
                        duration-300

                        ${
                          editingId ===
                          project.id
                            ? `
                              border-red-600/30
                              bg-red-600/[0.025]
                            `
                            : `
                              border-white/[0.07]
                              bg-white/[0.018]

                              hover:border-white/[0.13]
                              hover:bg-white/[0.028]
                            `
                        }
                      `}
                    >
                      {editingId ===
                        project.id && (
                        <span
                          className="
                            absolute

                            bottom-0
                            left-0
                            top-0

                            w-[2px]

                            bg-red-600
                          "
                        />
                      )}

                      <div
                        className="
                          flex
                          flex-col

                          gap-5

                          sm:flex-row
                          sm:items-start
                          sm:justify-between
                        "
                      >
                        <div className="min-w-0">
                          <div
                            className="
                              flex
                              items-center

                              gap-3
                            "
                          >
                            <span
                              className="
                                text-[10px]

                                tabular-nums

                                text-white/20
                              "
                            >
                              {String(
                                index +
                                  1
                              ).padStart(
                                2,
                                "0"
                              )}
                            </span>

                            <h2
                              className="
                                truncate

                                text-base
                                font-medium

                                text-white/85
                              "
                            >
                              {
                                project.title
                              }
                            </h2>
                          </div>

                          <p
                            className="
                              ml-7
                              mt-2

                              line-clamp-2

                              max-w-2xl

                              text-sm

                              leading-6

                              text-white/35
                            "
                          >
                            {
                              project.description
                            }
                          </p>

                          <div
                            className="
                              ml-7
                              mt-3

                              flex
                              flex-wrap

                              gap-x-3
                              gap-y-1.5
                            "
                          >
                            {project.stack.map(
                              (
                                tech
                              ) => (
                                <span
                                  key={
                                    tech
                                  }
                                  className="
                                    text-[10px]

                                    text-white/25

                                    transition-colors

                                    group-hover:text-white/35
                                  "
                                >
                                  {
                                    tech
                                  }
                                </span>
                              )
                            )}
                          </div>
                        </div>

                        {/* ACTIONS */}

                        <div
                          className="
                            flex
                            shrink-0

                            gap-2
                          "
                        >
                          <button
                            type="button"
                            onClick={() =>
                              startEdit(
                                project
                              )
                            }
                            aria-label={`${content.edit} ${project.title}`}
                            className="
                              flex
                              h-9

                              items-center

                              gap-2

                              rounded-lg

                              border
                              border-white/[0.08]

                              px-3

                              text-xs

                              text-white/40

                              transition-all

                              hover:border-red-600/30
                              hover:text-white
                            "
                          >
                            <Pencil
                              size={
                                13
                              }
                            />

                            {
                              content.edit
                            }
                          </button>

                          <a
                            href={`/projects/${project.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title}`}
                            className="
                              flex
                              h-9
                              w-9

                              items-center
                              justify-center

                              rounded-lg

                              border
                              border-white/[0.08]

                              text-white/35

                              transition-all

                              hover:border-white/[0.16]
                              hover:text-white
                            "
                          >
                            <ExternalLink
                              size={
                                13
                              }
                            />
                          </a>

                          <button
                            type="button"
                            onClick={() =>
                              deleteProject(
                                project
                              )
                            }
                            aria-label={`${content.deleteQuestion} ${project.title}`}
                            className="
                              flex
                              h-9
                              w-9

                              items-center
                              justify-center

                              rounded-lg

                              border
                              border-red-600/15

                              text-red-500/50

                              transition-all

                              hover:border-red-600/45
                              hover:bg-red-600/[0.07]
                              hover:text-red-500
                            "
                          >
                            <Trash2
                              size={
                                13
                              }
                            />
                          </button>
                        </div>
                      </div>
                    </article>
                  )
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div
      className="
        group

        relative

        overflow-hidden

        rounded-2xl

        border
        border-white/[0.07]

        bg-white/[0.02]

        p-5

        transition-all
        duration-300

        hover:border-white/[0.12]
        hover:bg-white/[0.027]
      "
    >
      <span
        className="
          absolute

          bottom-0
          left-0

          h-[2px]
          w-0

          bg-red-600

          transition-all
          duration-500

          group-hover:w-10
        "
      />

      <p
        className="
          text-xs
          text-white/25
        "
      >
        {label}
      </p>

      <p
        className="
          mt-2

          text-2xl
          font-medium

          tracking-[-0.03em]
        "
      >
        {value}
      </p>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="
          mb-2
          block

          text-xs

          text-white/35
        "
      >
        {label}
      </label>

      {children}
    </div>
  );
}