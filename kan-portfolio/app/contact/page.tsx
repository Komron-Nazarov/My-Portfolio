// // export default function Contact() {
// //   return (
// //     <section className="mt-20 px-6 py-20 text-center">
      
// //       <h2 className="text-4xl font-bold mb-6">
// //         Contact Me
// //       </h2>

// //       <p className="text-gray-400 mb-6">
// //         If you want to work with me or ask something — reach out.
// //       </p>

// //       <a
// //         href="mailto:komron7nazarov@gmail.com"
// //         className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-300 transition"
// //       >
// //         Send Email
// //       </a>

// //     </section>
// //   );
// // }
// "use client";

// import { useState } from "react";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   async function sendMessage() {
//     setLoading(true);

//     const res = await fetch("/api/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();

//     setLoading(false);

//     if (!res.ok) {
//       alert(data.error);
//       return;
//     }

//     alert("Message sent!");

//     setForm({
//       name: "",
//       email: "",
//       message: "",
//     });
//   }

//   return (
//     <section id="contact" className="px-6 py-20 text-center mt-20">
//       <h2 className="text-3xl mb-6">Contact Me</h2>

//       <div className="flex flex-col gap-4 max-w-md">

//         <input
//           placeholder="Name"
//           value={form.name}
//           onChange={(e) =>
//             setForm({ ...form, name: e.target.value })
//           }
//           className="p-3 bg-gray-900 rounded"
//         />

//         <input
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) =>
//             setForm({ ...form, email: e.target.value })
//           }
//           className="p-3 bg-gray-900 rounded"
//         />

//         <textarea
//           placeholder="Message"
//           value={form.message}
//           onChange={(e) =>
//             setForm({ ...form, message: e.target.value })
//           }
//           className="p-3 bg-gray-900 rounded h-32"
//         />

//         <button
//           onClick={sendMessage}
//           disabled={loading}
//           className="bg-white text-black p-3 rounded"
//         >
//           {loading ? "Sending..." : "Send Message"}
//         </button>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    setLoading(false);

    if (!res.ok) {
      alert(data.error);
      return;
    }

    alert("Message sent!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-md text-center">

        <h2 className="text-4xl font-bold mb-3">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-8">
          If you want to work with me or ask something — reach out.
        </p>

        <div className="flex flex-col gap-4 text-left">

          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="p-3 bg-gray-900 rounded outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="p-3 bg-gray-900 rounded outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="p-3 bg-gray-900 rounded h-32 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-white text-black p-3 rounded hover:bg-gray-300 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </div>
      </div>
    </section>
  );
}