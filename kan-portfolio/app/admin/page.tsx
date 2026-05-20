// // // // "use client";

// // // // import { useState } from "react";
// // // // import { supabase } from "@/lib/supabase";

// // // // export default function AdminPage() {
// // // //   const [form, setForm] = useState({
// // // //     slug: "",
// // // //     title: "",
// // // //     description: "",
// // // //     image: "",
// // // //     stack: "",
// // // //   });

// // // //   const addProject = async () => {
// // // //     await supabase.from("projects").insert([
// // // //       {
// // // //         ...form,
// // // //         stack: form.stack.split(","),
// // // //       },
// // // //     ]);

// // // //     alert("Project added");
// // // //   };

// // // //   return (
// // // //     <main className="p-10 text-white bg-black min-h-screen">
// // // //       <h1 className="text-3xl mb-6">Admin Panel</h1>

// // // //       <div className="flex flex-col gap-3 max-w-md">
// // // //         <input
// // // //           placeholder="slug"
// // // //           className="p-2 text-black"
// // // //           onChange={(e) => setForm({ ...form, slug: e.target.value })}
// // // //         />

// // // //         <input
// // // //           placeholder="title"
// // // //           className="p-2 text-black"
// // // //           onChange={(e) => setForm({ ...form, title: e.target.value })}
// // // //         />

// // // //         <input
// // // //           placeholder="description"
// // // //           className="p-2 text-black"
// // // //           onChange={(e) => setForm({ ...form, description: e.target.value })}
// // // //         />

// // // //         <input
// // // //           placeholder="image url"
// // // //           className="p-2 text-black"
// // // //           onChange={(e) => setForm({ ...form, image: e.target.value })}
// // // //         />

// // // //         <input
// // // //           placeholder="stack (react,go,tailwind)"
// // // //           className="p-2 text-black"
// // // //           onChange={(e) => setForm({ ...form, stack: e.target.value })}
// // // //         />

// // // //         <button
// // // //           onClick={addProject}
// // // //           className="bg-white text-black p-2"
// // // //         >
// // // //           Add Project
// // // //         </button>
// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }

// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { useRouter } from "next/navigation";
// // // import { supabase } from "@/lib/supabase";

// // // // =========================
// // // // TYPES
// // // // =========================
// // // type Project = {
// // //   id: string;
// // //   slug: string;
// // //   title: string;
// // //   description: string;
// // //   image: string;
// // //   stack: string[];
// // //   github?: string;
// // //   demo?: string;
// // // };

// // // export default function AdminPage() {
// // //   const router = useRouter();

// // //   // =========================
// // //   // STATES
// // //   // =========================
// // //   const [checkingAuth, setCheckingAuth] = useState(true);
// // //   const [projects, setProjects] = useState<Project[]>([]);

// // //   const [form, setForm] = useState({
// // //     slug: "",
// // //     title: "",
// // //     description: "",
// // //     image: "",
// // //     stack: "",
// // //     github: "",
// // //     demo: "",
// // //   });

// // //   const [loading, setLoading] = useState(false);

// // //   // =========================
// // //   // AUTH CHECK
// // //   // =========================
// // //   useEffect(() => {
// // //     const checkAuth = async () => {
// // //       setCheckingAuth(true);

// // //       const {
// // //         data: { session },
// // //       } = await supabase.auth.getSession();

// // //       if (!session) {
// // //         router.replace("/login");
// // //         return;
// // //       }

// // //       const { data: profile } = await supabase
// // //         .from("profiles")
// // //         .select("role")
// // //         .eq("id", session.user.id)
// // //         .single();

// // //       if (profile?.role !== "admin") {
// // //         router.replace("/");
// // //         return;
// // //       }

// // //       setCheckingAuth(false);
// // //     };

// // //     checkAuth();
// // //   }, [router]);

// // //   // =========================
// // //   // LOAD PROJECTS (FIXED)
// // //   // =========================
// // //   useEffect(() => {
// // //     if (checkingAuth) return;

// // //     const loadProjects = async () => {
// // //       const { data, error } = await supabase
// // //         .from("projects")
// // //         .select("*")
// // //         .order("created_at", { ascending: false });

// // //       if (!error) {
// // //         setProjects(data || []);
// // //       }
// // //     };

// // //     loadProjects();
// // //   }, [checkingAuth]);

// // //   // =========================
// // //   // ADD PROJECT
// // //   // =========================
// // //   async function addProject() {
// // //     setLoading(true);

// // //     const { error } = await supabase.from("projects").insert([
// // //       {
// // //         slug: form.slug,
// // //         title: form.title,
// // //         description: form.description,
// // //         image: form.image,
// // //         stack: form.stack.split(",").map((s) => s.trim()),
// // //         github: form.github,
// // //         demo: form.demo,
// // //       },
// // //     ]);

// // //     setLoading(false);

// // //     if (error) {
// // //       alert(error.message);
// // //       return;
// // //     }

// // //     // reset form
// // //     setForm({
// // //       slug: "",
// // //       title: "",
// // //       description: "",
// // //       image: "",
// // //       stack: "",
// // //       github: "",
// // //       demo: "",
// // //     });

// // //     // reload projects
// // //     const { data } = await supabase
// // //       .from("projects")
// // //       .select("*")
// // //       .order("created_at", { ascending: false });

// // //     setProjects(data || []);
// // //   }

// // //   // =========================
// // // // DELETE PROJECT
// // // // =========================
// // // async function deleteProject(id: number) {

// // //   const confirmDelete = confirm(
// // //     "Delete this project?"
// // //   );

// // //   if (!confirmDelete) return;

// // //   const { error } = await supabase
// // //     .from("projects")
// // //     .delete()
// // //     .eq("id", id);

// // //   if (error) {
// // //     alert(error.message);
// // //     return;
// // //   }

// // //   // удаляем из state
// // //   setProjects((prev: any) =>
// // //     prev.filter((p: any) => p.id !== id)
// // //   );
// // // }

// // //   // =========================
// // //   // LOADING
// // //   // =========================
// // //   if (checkingAuth) {
// // //     return (
// // //       <main className="min-h-screen bg-black text-white flex items-center justify-center">
// // //         Loading...
// // //       </main>
// // //     );
// // //   }

// // //   // =========================
// // //   // UI
// // //   // =========================
// // //   return (
// // //     <main className="min-h-screen bg-black text-white p-10">
// // //       <div className="max-w-xl mx-auto">

// // //         <h1 className="text-4xl font-bold mb-8">
// // //           Admin Panel
// // //         </h1>

// // //         {/* FORM */}
// // //         <div className="flex flex-col gap-4">

// // //           <input
// // //             placeholder="slug"
// // //             value={form.slug}
// // //             onChange={(e) =>
// // //               setForm({ ...form, slug: e.target.value })
// // //             }
// // //             className="p-3 bg-gray-900 rounded  rounded"
// // //           />

// // //           <input
// // //             placeholder="title"
// // //             value={form.title}
// // //             onChange={(e) =>
// // //               setForm({ ...form, title: e.target.value })
// // //             }
// // //             className="p-3 bg-gray-900 rounded"
// // //           />

// // //           <textarea
// // //             placeholder="description"
// // //             value={form.description}
// // //             onChange={(e) =>
// // //               setForm({
// // //                 ...form,
// // //                 description: e.target.value,
// // //               })
// // //             }
// // //             className="p-3 bg-gray-900 rounded h-32"
// // //           />

// // //           <input
// // //             placeholder="image"
// // //             value={form.image}
// // //             onChange={(e) =>
// // //               setForm({ ...form, image: e.target.value })
// // //             }
// // //             className="p-3 bg-gray-900 rounded"
// // //           />

// // //           <input
// // //             placeholder="stack (React,Next.js)"
// // //             value={form.stack}
// // //             onChange={(e) =>
// // //               setForm({ ...form, stack: e.target.value })
// // //             }
// // //             className="p-3 bg-gray-900 rounded"
// // //           />

// // //           <input
// // //             placeholder="github"
// // //             value={form.github}
// // //             onChange={(e) =>
// // //               setForm({ ...form, github: e.target.value })
// // //             }
// // //             className="p-3 bg-gray-900 rounded"
// // //           />

// // //           <input
// // //             placeholder="demo"
// // //             value={form.demo}
// // //             onChange={(e) =>
// // //               setForm({ ...form, demo: e.target.value })
// // //             }
// // //             className="p-3 bg-gray-900 rounded"
// // //           />

// // //           <button
// // //             onClick={addProject}
// // //             disabled={loading}
// // //             className="bg-white text-black p-3 rounded"
// // //           >
// // //             {loading ? "Adding..." : "Add Project"}
// // //           </button>

// // //           <button
// // //             onClick={async () => {
// // //               await supabase.auth.signOut();
// // //               router.replace("/login");
// // //             }}
// // //             className="bg-red-500 p-3 rounded"
// // //           >
// // //             Logout
// // //           </button>
// // //         </div>

// // //         {/* PROJECT LIST */}
// // //         <div className="mt-10">
// // //           {projects.map((p) => (
// // //             <div
// // //               key={p.id}
// // //               className="p-4 bg-gray-900 mt-4 rounded"
// // //             >
// // //               <h3 className="text-lg font-bold">
// // //                 {p.title}
// // //               </h3>

// // //               <button
// // //                 onClick={async () => {
// // //                   await supabase
// // //                     .from("projects")
// // //                     .delete()
// // //                     .eq("id", p.id);

// // //                   setProjects((prev) =>
// // //                     prev.filter((x) => x.id !== p.id)
// // //                   );
// // //                 }}
// // //                 className="text-red-500 mt-2"
// // //               >
// // //                 Delete
// // //               </button>
// // //             </div>
// // //           ))}
// // //         </div>

// // //       </div>
// // //     </main>
// // //   );
// // // }





// // "use client";

// // import { useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { supabase } from "@/lib/supabase";

// // // =========================
// // // TYPES
// // // =========================
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

// //   // =========================
// //   // STATES
// //   // =========================
// //   const [checkingAuth, setCheckingAuth] = useState(true);
// //   const [projects, setProjects] = useState<Project[]>([]);

// //   const [form, setForm] = useState({
// //     slug: "",
// //     title: "",
// //     description: "",
// //     image: "",
// //     stack: "",
// //     github: "",
// //     demo: "",
// //   });

// //   const [loading, setLoading] = useState(false);

// //   // =========================
// //   // AUTH CHECK
// //   // =========================
// //   useEffect(() => {
// //     const checkAuth = async () => {
// //       setCheckingAuth(true);

// //       const {
// //         data: { session },
// //       } = await supabase.auth.getSession();

// //       if (!session) {
// //         router.replace("/login");
// //         return;
// //       }

// //       const { data: profile } = await supabase
// //         .from("profiles")
// //         .select("role")
// //         .eq("id", session.user.id)
// //         .single();

// //       if (profile?.role !== "admin") {
// //         router.replace("/");
// //         return;
// //       }

// //       setCheckingAuth(false);
// //     };

// //     checkAuth();
// //   }, [router]);

// //   // =========================
// //   // LOAD PROJECTS
// //   // =========================
// //   useEffect(() => {
// //     if (checkingAuth) return;

// //     const loadProjects = async () => {
// //       const { data, error } = await supabase
// //         .from("projects")
// //         .select("*")
// //         .order("created_at", { ascending: false });

// //       if (!error) {
// //         setProjects(data || []);
// //       }
// //     };

// //     loadProjects();
// //   }, [checkingAuth]);

// //   // =========================
// //   // ADD PROJECT
// //   // =========================
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

// //     if (error) {
// //       alert(error.message);
// //       return;
// //     }

// //     alert("Project added!");

// //     // reset form
// //     setForm({
// //       slug: "",
// //       title: "",
// //       description: "",
// //       image: "",
// //       stack: "",
// //       github: "",
// //       demo: "",
// //     });

// //     // reload
// //     const { data } = await supabase
// //       .from("projects")
// //       .select("*")
// //       .order("created_at", { ascending: false });

// //     setProjects(data || []);
// //   }

// //   // =========================
// //   // DELETE PROJECT
// //   // =========================
// //   async function deleteProject(id: number) {
// //     const confirmDelete = confirm(
// //       "Delete this project?"
// //     );

// //     if (!confirmDelete) return;

// //     const { error } = await supabase
// //       .from("projects")
// //       .delete()
// //       .eq("id", id);

// //     if (error) {
// //       alert(error.message);
// //       return;
// //     }

// //     setProjects((prev) =>
// //       prev.filter((p) => p.id !== id)
// //     );
// //   }

// //   await supabase
// //   .from("projects")
// //   .update({
// //     slug: form.slug,
// //     title: form.title,
// //     description: form.description,
// //     image: form.image,
// //     stack: form.stack.split(","),
// //     github: form.github,
// //     demo: form.demo,
// //   })
// //   .eq("id", editingId);

// //   // =========================
// //   // LOADING
// //   // =========================
// //   if (checkingAuth) {
// //     return (
// //       <main className="min-h-screen bg-black text-white flex items-center justify-center">
// //         Loading...
// //       </main>
// //     );
// //   }

// //   // =========================
// //   // UI
// //   // =========================
// //   return (
// //     <main className="min-h-screen bg-black text-white p-10">
// //       <div className="max-w-xl mx-auto">

// //         <h1 className="text-4xl font-bold mb-8">
// //           Admin Panel
// //         </h1>

// //         {/* FORM */}
// //         <div className="flex flex-col gap-4">

// //           <input
// //             placeholder="slug"
// //             value={form.slug}
// //             onChange={(e) =>
// //               setForm({ ...form, slug: e.target.value })
// //             }
// //             className="p-3 bg-gray-900 rounded"
// //           />

// //           <input
// //             placeholder="title"
// //             value={form.title}
// //             onChange={(e) =>
// //               setForm({ ...form, title: e.target.value })
// //             }
// //             className="p-3 bg-gray-900 rounded"
// //           />

// //           <textarea
// //             placeholder="description"
// //             value={form.description}
// //             onChange={(e) =>
// //               setForm({
// //                 ...form,
// //                 description: e.target.value,
// //               })
// //             }
// //             className="p-3 bg-gray-900 rounded h-32"
// //           />

// //           <input
// //             placeholder="image"
// //             value={form.image}
// //             onChange={(e) =>
// //               setForm({ ...form, image: e.target.value })
// //             }
// //             className="p-3 bg-gray-900 rounded"
// //           />

// //           <input
// //             placeholder="stack (React,Next.js)"
// //             value={form.stack}
// //             onChange={(e) =>
// //               setForm({ ...form, stack: e.target.value })
// //             }
// //             className="p-3 bg-gray-900 rounded"
// //           />

// //           <input
// //             placeholder="github"
// //             value={form.github}
// //             onChange={(e) =>
// //               setForm({ ...form, github: e.target.value })
// //             }
// //             className="p-3 bg-gray-900 rounded"
// //           />

// //           <input
// //             placeholder="demo"
// //             value={form.demo}
// //             onChange={(e) =>
// //               setForm({ ...form, demo: e.target.value })
// //             }
// //             className="p-3 bg-gray-900 rounded"
// //           />

// //           <button
// //             onClick={addProject}
// //             disabled={loading}
// //             className="bg-white text-black p-3 rounded cursor-pointer"
// //           >
// //             {loading ? "Adding..." : "Add Project"}
// //           </button>

// //           <button
// //             onClick={async () => {
// //               await supabase.auth.signOut();
// //               router.replace("/login");
// //             }}
// //             className="bg-red-500 p-3 rounded cursor-pointer"
// //           >
// //             Logout
// //           </button>
// //         </div>

// //         {/* PROJECT LIST */}
// //         <div className="mt-10">
// //           {projects.map((p) => (
// //             <div
// //               key={p.id}
// //               className="p-4 bg-gray-900 mt-4 rounded"
// //             >
// //               <h3 className="text-lg font-bold">
// //                 {p.title}
// //               </h3>

// //               <button
// //                 onClick={() => deleteProject(p.id)}
// //                 className="bg-red-500 p-3 rounded mt-2 cursor-pointer"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //     </main>
// //   );
// // }





// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/lib/supabase";

// type Project = {
//   id: number;
//   slug: string;
//   title: string;
//   description: string;
//   image: string;
//   stack: string[];
//   github?: string;
//   demo?: string;
// };

// export default function AdminPage() {
//   const router = useRouter();

//   const [checkingAuth, setCheckingAuth] = useState(true);
//   const [projects, setProjects] = useState<Project[]>([]);

//   const [editingId, setEditingId] = useState<number | null>(null);

//   const [form, setForm] = useState({
//     slug: "",
//     title: "",
//     description: "",
//     image: "",
//     stack: "",
//     github: "",
//     demo: "",
//   });

//   const [loading, setLoading] = useState(false);

//   // AUTH
//   useEffect(() => {
//     const checkAuth = async () => {
//       const { data: { session } } = await supabase.auth.getSession();

//       if (!session) {
//         router.replace("/login");
//         return;
//       }

//       const { data: profile } = await supabase
//         .from("profiles")
//         .select("role")
//         .eq("id", session.user.id)
//         .single();

//       if (profile?.role !== "admin") {
//         router.replace("/");
//         return;
//       }

//       setCheckingAuth(false);
//     };

//     checkAuth();
//   }, [router]);

//   // LOAD
//   useEffect(() => {
//     if (checkingAuth) return;

//     const load = async () => {
//       const { data } = await supabase
//         .from("projects")
//         .select("*")
//         .order("created_at", { ascending: false });

//       setProjects(data || []);
//     };

//     load();
//   }, [checkingAuth]);

//   // ADD
//   async function addProject() {
//     setLoading(true);

//     const { error } = await supabase.from("projects").insert([
//       {
//         slug: form.slug,
//         title: form.title,
//         description: form.description,
//         image: form.image,
//         stack: form.stack.split(",").map(s => s.trim()),
//         github: form.github,
//         demo: form.demo,
//       },
//     ]);

//     setLoading(false);

//     if (error) return alert(error.message);

//     await reload();
//     resetForm();
//   }

//   // DELETE
//   async function deleteProject(id: number) {
//     const ok = confirm("Delete this project?");
//     if (!ok) return;

//     const { error } = await supabase
//       .from("projects")
//       .delete()
//       .eq("id", id);

//     if (error) return alert(error.message);

//     setProjects(prev => prev.filter(p => p.id !== id));
//   }

//   // START EDIT
//   function startEdit(p: Project) {
//     setEditingId(p.id);
//     setForm({
//       slug: p.slug,
//       title: p.title,
//       description: p.description,
//       image: p.image,
//       stack: p.stack.join(", "),
//       github: p.github || "",
//       demo: p.demo || "",
//     });
//   }

//   // UPDATE
//   async function updateProject() {
//     if (!editingId) return;

//     const { error } = await supabase
//       .from("projects")
//       .update({
//         slug: form.slug,
//         title: form.title,
//         description: form.description,
//         image: form.image,
//         stack: form.stack.split(",").map(s => s.trim()),
//         github: form.github,
//         demo: form.demo,
//       })
//       .eq("id", editingId);

//     if (error) return alert(error.message);

//     setEditingId(null);
//     await reload();
//     resetForm();
//   }

//   // HELPERS
//   async function reload() {
//     const { data } = await supabase
//       .from("projects")
//       .select("*")
//       .order("created_at", { ascending: false });

//     setProjects(data || []);
//   }

// async function uploadImage(file: File) {
//   const fileName = `${Date.now()}-${file.name}`;

//   const { data, error } = await supabase.storage
//     .from("images")
//     .upload(fileName, file);

//   if (error) {
//     alert(error.message);
//     return null;
//   }

//   const { data: publicUrl } = supabase.storage
//     .from("images")
//     .getPublicUrl(data.path);

//   return publicUrl.publicUrl;
// }

//   function resetForm() {
//     setForm({
//       slug: "",
//       title: "",
//       description: "",
//       image: "",
//       stack: "",
//       github: "",
//       demo: "",
//     });
//   }

//   if (checkingAuth) {
//     return (
//       <div className="text-white bg-black min-h-screen flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-black text-white p-10">
//       <div className="max-w-xl mx-auto">

//         <h1 className="text-3xl mb-6">Admin Panel</h1>

//         {/* FORM */}
//         <div className="flex flex-col gap-3">

//           <input value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} placeholder="slug" className="p-2 bg-gray-900 rounded-xl" />
//           <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="title" className="p-2 bg-gray-900 rounded-xl" />
//           <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="description" className="p-2 bg-gray-900 rounded-xl" />
//           <input value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} placeholder="image" className="p-2 bg-gray-900 rounded-xl" />
//          <input
//   type="file"
//   onChange={async (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const url = await uploadImage(file);
//     if (url) {
//       setForm({ ...form, image: url });
//     }
//   }}
// />
//           <input value={form.stack} onChange={e => setForm({ ...form, stack: e.target.value })} placeholder="stack" className="p-2 bg-gray-900 rounded-xl" />
//           <input value={form.github} onChange={e => setForm({ ...form, github: e.target.value })} placeholder="github" className="p-2 bg-gray-900 rounded-xl" />
//           <input value={form.demo} onChange={e => setForm({ ...form, demo: e.target.value })} placeholder="demo" className="p-2 bg-gray-900 rounded-xl" />


//           {editingId ? (
//             <button onClick={updateProject} className="bg-yellow-500 text-black p-2 rounded-xl">
//               Update Project
//             </button>
//           ) : (
//             <button onClick={addProject} className="bg-white text-black p-2 rounded-xl">
//               Add Project
//             </button>
//           )}

//         </div>

//         {/* LIST */}
//         <div className="mt-10">
//           {projects.map(p => (
//             <div key={p.id} className="p-4 bg-gray-900 mt-4 rounded-xl">

//               <h3>{p.title}</h3>

//               <div className="flex gap-2 mt-2">

//                 <button
//                   onClick={() => startEdit(p)}
//                   className="bg-yellow-500 text-black px-3 py-1 rounded-xl"
//                 >
//                   Edit
//                 </button>

//                 <button
//                   onClick={() => deleteProject(p.id)}
//                   className="bg-red-500 px-3 py-1 rounded-xl"
//                 >
//                   Delete
//                 </button>

//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </main>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  github?: string;
  demo?: string;
};

export default function AdminPage() {
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    slug: "",
    title: "",
    description: "",
    image: "",
    stack: "",
    github: "",
    demo: "",
  });

  // =========================
  // AUTH
  // =========================
  useEffect(() => {
    const check = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/login");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single();

      if (profile?.role !== "admin") {
        router.replace("/");
        return;
      }

      setCheckingAuth(false);
    };

    check();
  }, []);

  // =========================
  // LOAD PROJECTS
  // =========================
  useEffect(() => {
    if (checkingAuth) return;
    loadProjects();
  }, [checkingAuth]);

  async function loadProjects() {
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("id", { ascending: false });

    setProjects(data || []);
  }

  // =========================
  // RESET FORM
  // =========================
  function resetForm() {
    setForm({
      slug: "",
      title: "",
      description: "",
      image: "",
      stack: "",
      github: "",
      demo: "",
    });
    setEditingId(null);
  }

  // =========================
  // UPLOAD IMAGE
  // =========================
  async function uploadImage(file: File) {
    const fileName = `${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("images")
      .upload(fileName, file);

    if (error) {
      alert(error.message);
      return null;
    }

    const { data: urlData } = supabase.storage
      .from("images")
      .getPublicUrl(data.path);

    return urlData.publicUrl;
  }

  // =========================
  // ADD PROJECT
  // =========================
  async function addProject() {
    setLoading(true);

    const { error } = await supabase.from("projects").insert([
      {
        slug: form.slug,
        title: form.title,
        description: form.description,
        image: form.image,
        stack: form.stack.split(",").map(s => s.trim()),
        github: form.github,
        demo: form.demo,
      },
    ]);

    setLoading(false);

    if (error) return alert(error.message);

    await loadProjects();
    resetForm();
  }

  // =========================
  // DELETE
  // =========================
  async function deleteProject(id: number) {
    const ok = confirm("Delete project?");
    if (!ok) return;

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (error) return alert(error.message);

    setProjects(prev => prev.filter(p => p.id !== id));
  }

  // =========================
  // EDIT MODE
  // =========================
  function startEdit(p: Project) {
    setEditingId(p.id);

    setForm({
      slug: p.slug,
      title: p.title,
      description: p.description,
      image: p.image,
      stack: p.stack.join(", "),
      github: p.github || "",
      demo: p.demo || "",
    });
  }

  // =========================
  // UPDATE
  // =========================
  async function updateProject() {
    if (!editingId) return;

    const { error } = await supabase
      .from("projects")
      .update({
        slug: form.slug,
        title: form.title,
        description: form.description,
        image: form.image,
        stack: form.stack.split(",").map(s => s.trim()),
        github: form.github,
        demo: form.demo,
      })
      .eq("id", editingId);

    if (error) return alert(error.message);

    await loadProjects();
    resetForm();
  }

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen text-white p-10">
      <div className="max-w-xl mx-auto">

        <h1 className="text-3xl mb-6">Admin Panel</h1>

        {/* FORM */}
        <div className="flex flex-col gap-3">

          <input className="p-2 bg-gray-900 rounded" 
            placeholder="slug"
            value={form.slug}
            onChange={e => setForm({ ...form, slug: e.target.value })}
          />

          <input className="p-2 bg-gray-900 rounded" 
            placeholder="title"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
          />

          <textarea className="p-2 bg-gray-900 rounded" 
            placeholder="description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />

          <input className="p-2 bg-gray-900 rounded" 
            placeholder="image url"
            value={form.image}
            onChange={e => setForm({ ...form, image: e.target.value })}
          />

          {/* UPLOAD */}
          <input className="p-2 bg-gray-900 rounded cursor-pointer"
            type="file"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              const url = await uploadImage(file);
              if (url) setForm({ ...form, image: url });
            }}
          />

          <input className="p-2 bg-gray-900 rounded" 
            placeholder="stack (react,next)"
            value={form.stack}
            onChange={e => setForm({ ...form, stack: e.target.value })}
          />

          <input className="p-2 bg-gray-900 rounded" 
            placeholder="github"
            value={form.github}
            onChange={e => setForm({ ...form, github: e.target.value })}
          />

          <input className="p-2 bg-gray-900 rounded" 
            placeholder="demo"
            value={form.demo}
            onChange={e => setForm({ ...form, demo: e.target.value })}
          />

          {/* BUTTONS */}
          {editingId ? (
            <button
              onClick={updateProject}
              className="bg-yellow-500 text-black p-2 rounded"
            >
              Update Project
            </button>
          ) : (
            <button
              onClick={addProject}
              className="bg-white text-black p-2 rounded"
            >
              Add Project
            </button>
          )}

        </div>

        {/* LIST */}
        <div className="mt-10">
          {projects.map(p => (
            <div key={p.id} className="p-4 bg-gray-900 rounded mt-3">

              <h3>{p.title}</h3>

              <div className="flex gap-2 mt-2">

                <button
                  onClick={() => startEdit(p)}
                  className="bg-yellow-500 text-black px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteProject(p.id)}
                  className="bg-red-500 px-3 py-1 rounded"
                >
                  Delete
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}