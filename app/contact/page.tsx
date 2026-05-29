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
//     <section
//       id="contact"
//       className="min-h-screen flex items-center justify-center px-6 py-20"
//     >
//       <div className="w-full max-w-md text-center">

//         <h2 className="text-4xl font-bold mb-3">
//           Contact Me
//         </h2>

//         <p className="text-gray-400 mb-8">
//           If you want to work with me or ask something — reach out.
//         </p>

//         <div className="flex flex-col gap-4 text-left">

//           <input
//             placeholder="Name"
//             value={form.name}
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//             className="p-3 bg-gray-900 rounded outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             placeholder="Email"
//             value={form.email}
//             onChange={(e) =>
//               setForm({ ...form, email: e.target.value })
//             }
//             className="p-3 bg-gray-900 rounded outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <textarea
//             placeholder="Message"
//             value={form.message}
//             onChange={(e) =>
//               setForm({ ...form, message: e.target.value })
//             }
//             className="p-3 bg-gray-900 rounded h-32 outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             onClick={sendMessage}
//             disabled={loading}
//             className="bg-white text-black p-3 rounded hover:bg-gray-300 transition"
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import TypingTitle from "../components/TypingTitle";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function sendMessage() {
    setLoading(true);
    setSuccess(false);

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

    setSuccess(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">

      {/* RED GLOW */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-red-700/10 blur-[180px]" />

      <div
        className="
        relative
        w-full
        max-w-2xl
        rounded-[32px]
        border
        border-red-900/50
        bg-black/30
        backdrop-blur-2xl
        p-10
        overflow-hidden
      "
      >

        {/* TOP LINE */}
        <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />

        <div className="text-center mb-10">

          <span
            className="
            px-4 py-1
            rounded-full
            border
            border-red-600/50
            text-red-400
            text-sm
          "
          >
            CONTACT
          </span>

          {/* <h2 className="mt-6 text-5xl font-black text-white">
            Send Signal
          </h2> */}

          <TypingTitle
  className="mt-6 text-5xl font-black text-white"
  parts={[
    {
      text: "Send ",
    },
    {
      text: "Signal",
    },
  ]}
/>

          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Reach out for collaboration, projects or ideas.
          </p>

        </div>

        <div className="flex flex-col gap-5">

          <input
            value={form.name}
            placeholder="Your Name"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="
            h-14
            rounded-2xl
            bg-red-950/10
            border border-red-900/40
            px-5
            text-white
            placeholder:text-gray-500
            outline-none
            transition
            focus:border-red-500
            focus:shadow-[0_0_30px_rgba(255,0,0,.15)]
          "
          />

          <input
            value={form.email}
            placeholder="Your Email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="
            h-14
            rounded-2xl
            bg-red-950/10
            border border-red-900/40
            px-5
            text-white
            placeholder:text-gray-500
            outline-none
            transition
            focus:border-red-500
            focus:shadow-[0_0_30px_rgba(255,0,0,.15)]
          "
          />

          <textarea
            value={form.message}
            placeholder="Your Message"
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="
            h-[180px]
            rounded-2xl
            bg-red-950/10
            border border-red-900/40
            p-5
            text-white
            placeholder:text-gray-500
            outline-none
            resize-none
            transition
            focus:border-red-500
            focus:shadow-[0_0_30px_rgba(255,0,0,.15)]
          "
          />

          <button
            disabled={loading}
            onClick={sendMessage}
            className="
            relative
            overflow-hidden
            h-14
            rounded-2xl
            bg-gradient-to-r
            from-red-700
            to-red-500
            text-white
            font-semibold
            transition
            hover:scale-[1.02]
            hover:shadow-[0_0_40px_rgba(255,0,0,.4)]
            active:scale-[.98]
          "
          >
            {loading
              ? "Sending..."
              : success
              ? "Message Sent ✓"
              : "Transmit Message"}
          </button>

        </div>

      </div>

    </section>
  );
}