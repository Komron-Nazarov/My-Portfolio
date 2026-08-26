// // "use client";

// // import { useState } from "react";
// // import TypingTitle from "../components/TypingTitle";

// // export default function Contact() {
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [success, setSuccess] = useState(false);

// //   async function sendMessage() {
// //     setLoading(true);
// //     setSuccess(false);

// //     const res = await fetch("/api/contact", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(form),
// //     });

// //     const data = await res.json();

// //     setLoading(false);

// //     if (!res.ok) {
// //       alert(data.error);
// //       return;
// //     }

// //     setSuccess(true);

// //     setForm({
// //       name: "",
// //       email: "",
// //       message: "",
// //     });
// //   }

// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">

// //       {/* RED GLOW */}
// //       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-red-700/10 blur-[180px]" />

// //       <div
// //         className="
// //         relative
// //         w-full
// //         max-w-2xl
// //         rounded-[32px]
// //         border
// //         border-red-900/50
// //         bg-black/30
// //         backdrop-blur-2xl
// //         p-10
// //         overflow-hidden
// //       "
// //       >

// //         {/* TOP LINE */}
// //         <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />

// //         <div className="text-center mb-10">

// //           <span
// //             className="
// //             px-4 py-1
// //             rounded-full
// //             border
// //             border-red-600/50
// //             text-red-400
// //             text-sm
// //           "
// //           >
// //             CONTACT
// //           </span>

// //           {/* <h2 className="mt-6 text-5xl font-black text-white">
// //             Send Signal
// //           </h2> */}

// //           <TypingTitle
// //   className="mt-6 text-5xl font-black text-white"
// //   parts={[
// //     {
// //       text: "Send ",
// //     },
// //     {
// //       text: "Signal",
// //     },
// //   ]}
// // />

// //           <p className="mt-4 text-gray-400 max-w-lg mx-auto">
// //             Reach out for collaboration, projects or ideas.
// //           </p>

// //         </div>

// //         <div className="flex flex-col gap-5">

// //           <input
// //             value={form.name}
// //             placeholder="Your Name"
// //             onChange={(e) =>
// //               setForm({ ...form, name: e.target.value })
// //             }
// //             className="
// //             h-14
// //             rounded-2xl
// //             bg-red-950/10
// //             border border-red-900/40
// //             px-5
// //             text-white
// //             placeholder:text-gray-500
// //             outline-none
// //             transition
// //             focus:border-red-500
// //             focus:shadow-[0_0_30px_rgba(255,0,0,.15)]
// //           "
// //           />

// //           <input
// //             value={form.email}
// //             placeholder="Your Email"
// //             onChange={(e) =>
// //               setForm({ ...form, email: e.target.value })
// //             }
// //             className="
// //             h-14
// //             rounded-2xl
// //             bg-red-950/10
// //             border border-red-900/40
// //             px-5
// //             text-white
// //             placeholder:text-gray-500
// //             outline-none
// //             transition
// //             focus:border-red-500
// //             focus:shadow-[0_0_30px_rgba(255,0,0,.15)]
// //           "
// //           />

// //           <textarea
// //             value={form.message}
// //             placeholder="Your Message"
// //             onChange={(e) =>
// //               setForm({ ...form, message: e.target.value })
// //             }
// //             className="
// //             h-[180px]
// //             rounded-2xl
// //             bg-red-950/10
// //             border border-red-900/40
// //             p-5
// //             text-white
// //             placeholder:text-gray-500
// //             outline-none
// //             resize-none
// //             transition
// //             focus:border-red-500
// //             focus:shadow-[0_0_30px_rgba(255,0,0,.15)]
// //           "
// //           />

// //           <button
// //             disabled={loading}
// //             onClick={sendMessage}
// //             className="
// //             relative
// //             overflow-hidden
// //             h-14
// //             rounded-2xl
// //             bg-gradient-to-r
// //             from-red-700
// //             to-red-500
// //             text-white
// //             font-semibold
// //             transition
// //             hover:scale-[1.02]
// //             hover:shadow-[0_0_40px_rgba(255,0,0,.4)]
// //             active:scale-[.98]
// //           "
// //           >
// //             {loading
// //               ? "Sending..."
// //               : success
// //               ? "Message Sent ✓"
// //               : "Transmit Message"}
// //           </button>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }





// "use client";

// import { FormEvent, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Check,
//   // Github,
//   LoaderCircle,
//   Mail,
//   Send,
// } from "lucide-react";

// import { useLang } from "@/src/hooks/useLang";

// type FormState = {
//   name: string;
//   email: string;
//   message: string;
// };

// type Status = "idle" | "loading" | "success" | "error";

// const initialForm: FormState = {
//   name: "",
//   email: "",
//   message: "",
// };

// export default function Contact() {
//   const { lang } = useLang();

//   const [form, setForm] = useState<FormState>(initialForm);
//   const [status, setStatus] = useState<Status>("idle");
//   const [errorMessage, setErrorMessage] = useState("");

//   const content =
//     lang === "ru"
//       ? {
//           eyebrow: "КОНТАКТ",
//           title: "Есть идея?",
//           titleAccent: "Давайте обсудим.",
//           description:
//             "Открыт к интересным проектам, сотрудничеству и новым идеям. Расскажите немного о задаче — я отвечу, как только смогу.",
//           direct: "Или напишите напрямую",
//           name: "Имя",
//           namePlaceholder: "Ваше имя",
//           email: "Email",
//           emailPlaceholder: "you@example.com",
//           message: "Сообщение",
//           messagePlaceholder:
//             "Расскажите о проекте, задаче или идее...",
//           send: "Отправить сообщение",
//           sending: "Отправка...",
//           sent: "Сообщение отправлено",
//           success:
//             "Спасибо. Я получил ваше сообщение и постараюсь ответить как можно скорее.",
//           error:
//             "Не удалось отправить сообщение. Попробуйте ещё раз или напишите мне напрямую.",
//           required: "Заполните все поля.",
//           invalidEmail: "Введите корректный email.",
//           github: "GitHub",
//         }
//       : {
//           eyebrow: "CONTACT",
//           title: "Have an idea?",
//           titleAccent: "Let’s talk.",
//           description:
//             "I’m open to interesting projects, collaborations and new ideas. Tell me a little about what you’re building and I’ll get back to you as soon as I can.",
//           direct: "Or reach me directly",
//           name: "Name",
//           namePlaceholder: "Your name",
//           email: "Email",
//           emailPlaceholder: "you@example.com",
//           message: "Message",
//           messagePlaceholder:
//             "Tell me about the project, problem or idea...",
//           send: "Send message",
//           sending: "Sending...",
//           sent: "Message sent",
//           success:
//             "Thanks. I received your message and will get back to you as soon as possible.",
//           error:
//             "Something went wrong. Try again or contact me directly.",
//           required: "Please complete all fields.",
//           invalidEmail: "Please enter a valid email.",
//           github: "GitHub",
//         };

//   function updateField(field: keyof FormState, value: string) {
//     setForm((current) => ({
//       ...current,
//       [field]: value,
//     }));

//     if (status === "error" || status === "success") {
//       setStatus("idle");
//       setErrorMessage("");
//     }
//   }

//   async function sendMessage(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     const name = form.name.trim();
//     const email = form.email.trim();
//     const message = form.message.trim();

//     if (!name || !email || !message) {
//       setStatus("error");
//       setErrorMessage(content.required);
//       return;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailPattern.test(email)) {
//       setStatus("error");
//       setErrorMessage(content.invalidEmail);
//       return;
//     }

//     try {
//       setStatus("loading");
//       setErrorMessage("");

//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           message,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           typeof data?.error === "string"
//             ? data.error
//             : content.error
//         );
//       }

//       setForm(initialForm);
//       setStatus("success");
//     } catch (error: unknown) {
//       console.error("Contact form error:", error);

//       setStatus("error");
//       setErrorMessage(content.error);
//     }
//   }

//   const inputClassName = `
//     w-full
//     rounded-2xl
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
//     hover:border-white/[0.13]
//     focus:border-white/[0.22]
//     focus:bg-white/[0.04]
//     focus:ring-4
//     focus:ring-white/[0.025]
//   `;

//   return (
//     <section
//       id="contact"
//       className="
//         relative
//         overflow-hidden
//         border-t
//         border-white/[0.06]
//         bg-[#070707]
//         px-6
//         py-28
//         md:py-36
//       "
//     >
//       {/* subtle ambient background */}
//       <div className="pointer-events-none absolute inset-0">
//         <div
//           className="
//             absolute
//             bottom-[-15%]
//             right-[-8%]
//             h-[500px]
//             w-[500px]
//             rounded-full
//             bg-indigo-500/[0.025]
//             blur-[170px]
//           "
//         />
//       </div>

//       <div className="container-main relative z-10">
//         <div
//           className="
//             grid
//             grid-cols-1
//             gap-16
//             lg:grid-cols-[0.85fr_1.15fr]
//             lg:gap-24
//           "
//         >
//           {/* LEFT */}

//           <div>
//             <motion.p
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="
//                 mb-6
//                 text-xs
//                 font-medium
//                 uppercase
//                 tracking-[0.24em]
//                 text-white/35
//               "
//             >
//               {content.eyebrow}
//             </motion.p>

//             <motion.h2
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="
//                 text-4xl
//                 font-semibold
//                 leading-[1.02]
//                 tracking-[-0.045em]
//                 text-white
//                 md:text-6xl
//               "
//             >
//               {content.title}

//               <span className="mt-2 block text-white/35">
//                 {content.titleAccent}
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.65, delay: 0.1 }}
//               className="
//                 mt-8
//                 max-w-lg
//                 text-base
//                 leading-8
//                 text-white/40
//                 md:text-lg
//               "
//             >
//               {content.description}
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="
//                 mt-12
//                 border-t
//                 border-white/[0.08]
//                 pt-6
//               "
//             >
//               <p
//                 className="
//                   text-xs
//                   uppercase
//                   tracking-[0.18em]
//                   text-white/25
//                 "
//               >
//                 {content.direct}
//               </p>

//               <div className="mt-5 flex flex-col gap-3">
//                 <a
//                   href="mailto:komron7nazarov@gmail.com"
//                   className="
//                     group
//                     flex
//                     items-center
//                     justify-between
//                     rounded-xl
//                     px-1
//                     py-2
//                     text-sm
//                     text-white/55
//                     transition-colors
//                     hover:text-white
//                   "
//                 >
//                   <span className="flex items-center gap-3">
//                     <Mail
//                       size={16}
//                       strokeWidth={1.7}
//                       className="text-white/30"
//                     />

//                     komron7nazarov@gmail.com
//                   </span>

//                   <ArrowUpRight
//                     size={15}
//                     className="
//                       text-white/25
//                       transition-transform
//                       group-hover:-translate-y-0.5
//                       group-hover:translate-x-0.5
//                     "
//                   />
//                 </a>

//                 <a
//                   href="https://github.com/Komron-Nazarov"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="
//                     group
//                     flex
//                     items-center
//                     justify-between
//                     rounded-xl
//                     px-1
//                     py-2
//                     text-sm
//                     text-white/55
//                     transition-colors
//                     hover:text-white
//                   "
//                 >
//                   <span className="flex items-center gap-3">
//                     {/* <Github
//                       size={16}
//                       strokeWidth={1.7}
//                       className="text-white/30"
//                     /> */}
//                     <svg
//   width="16"
//   height="16"
//   viewBox="0 0 24 24"
//   fill="currentColor"
//   aria-hidden="true"
//   className="text-white/30"
// >
//   <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
// </svg>

//                     {content.github}
//                   </span>

//                   <ArrowUpRight
//                     size={15}
//                     className="
//                       text-white/25
//                       transition-transform
//                       group-hover:-translate-y-0.5
//                       group-hover:translate-x-0.5
//                     "
//                   />
//                 </a>
//               </div>
//             </motion.div>
//           </div>

//           {/* FORM */}

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             <form
//               onSubmit={sendMessage}
//               noValidate
//               className="
//                 rounded-[28px]
//                 border
//                 border-white/[0.08]
//                 bg-white/[0.02]
//                 p-6
//                 backdrop-blur-xl
//                 md:p-8
//               "
//             >
//               <div className="grid gap-6 md:grid-cols-2">
//                 <div>
//                   <label
//                     htmlFor="contact-name"
//                     className="
//                       mb-2.5
//                       block
//                       text-xs
//                       font-medium
//                       text-white/45
//                     "
//                   >
//                     {content.name}
//                   </label>

//                   <input
//                     id="contact-name"
//                     name="name"
//                     type="text"
//                     autoComplete="name"
//                     value={form.name}
//                     onChange={(event) =>
//                       updateField("name", event.target.value)
//                     }
//                     placeholder={content.namePlaceholder}
//                     className={`${inputClassName} h-13`}
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="contact-email"
//                     className="
//                       mb-2.5
//                       block
//                       text-xs
//                       font-medium
//                       text-white/45
//                     "
//                   >
//                     {content.email}
//                   </label>

//                   <input
//                     id="contact-email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     value={form.email}
//                     onChange={(event) =>
//                       updateField("email", event.target.value)
//                     }
//                     placeholder={content.emailPlaceholder}
//                     className={`${inputClassName} h-13`}
//                   />
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <label
//                   htmlFor="contact-message"
//                   className="
//                     mb-2.5
//                     block
//                     text-xs
//                     font-medium
//                     text-white/45
//                   "
//                 >
//                   {content.message}
//                 </label>

//                 <textarea
//                   id="contact-message"
//                   name="message"
//                   value={form.message}
//                   onChange={(event) =>
//                     updateField("message", event.target.value)
//                   }
//                   placeholder={content.messagePlaceholder}
//                   className={`
//                     ${inputClassName}
//                     min-h-[180px]
//                     resize-none
//                     py-4
//                     leading-7
//                   `}
//                 />
//               </div>

//               <div className="mt-6">
//                 {status === "success" && (
//                   <div
//                     role="status"
//                     className="
//                       mb-5
//                       flex
//                       items-start
//                       gap-3
//                       rounded-xl
//                       border
//                       border-emerald-400/10
//                       bg-emerald-400/[0.035]
//                       p-4
//                     "
//                   >
//                     <Check
//                       size={16}
//                       className="mt-0.5 shrink-0 text-emerald-300/70"
//                     />

//                     <div>
//                       <p className="text-sm text-white/70">
//                         {content.sent}
//                       </p>

//                       <p className="mt-1 text-xs leading-5 text-white/35">
//                         {content.success}
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 {status === "error" && (
//                   <div
//                     role="alert"
//                     className="
//                       mb-5
//                       rounded-xl
//                       border
//                       border-red-400/10
//                       bg-red-400/[0.035]
//                       p-4
//                       text-xs
//                       leading-5
//                       text-white/45
//                     "
//                   >
//                     {errorMessage || content.error}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={status === "loading"}
//                   className="
//                     group
//                     flex
//                     h-13
//                     w-full
//                     items-center
//                     justify-center
//                     gap-2
//                     rounded-xl
//                     bg-white
//                     px-5
//                     text-sm
//                     font-medium
//                     text-black
//                     transition-all
//                     duration-300
//                     hover:bg-white/90
//                     disabled:cursor-not-allowed
//                     disabled:opacity-60
//                   "
//                 >
//                   {status === "loading" ? (
//                     <>
//                       <LoaderCircle
//                         size={15}
//                         className="animate-spin"
//                       />
//                       {content.sending}
//                     </>
//                   ) : (
//                     <>
//                       {content.send}

//                       <Send
//                         size={14}
//                         className="
//                           transition-transform
//                           duration-300
//                           group-hover:translate-x-0.5
//                           group-hover:-translate-y-0.5
//                         "
//                       />
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  FormEvent,
  useState,
} from "react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowUpRight,
  Check,
  LoaderCircle,
  Mail,
  Send,
} from "lucide-react";

import { useLang } from "@/src/hooks/useLang";

/* =========================================================
   TYPES
========================================================= */

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";

/* =========================================================
   INITIAL STATE
========================================================= */

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

/* =========================================================
   CONTACT
========================================================= */

export default function Contact() {
  const { t } = useLang();

  const content =
    t.contactSection;

  const reduceMotion =
    useReducedMotion();

  const [form, setForm] =
    useState<FormState>(
      initialForm
    );

  const [status, setStatus] =
    useState<Status>("idle");

  const [
    errorMessage,
    setErrorMessage,
  ] = useState("");

  /* =======================================================
     FIELD UPDATE
  ======================================================= */

  function updateField(
    field: keyof FormState,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (
      status === "error" ||
      status === "success"
    ) {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  /* =======================================================
     SEND MESSAGE
  ======================================================= */

  async function sendMessage(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const name =
      form.name.trim();

    const email =
      form.email.trim();

    const message =
      form.message.trim();

    /* VALIDATION */

    if (
      !name ||
      !email ||
      !message
    ) {
      setStatus("error");

      setErrorMessage(
        content.required
      );

      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailPattern.test(email)
    ) {
      setStatus("error");

      setErrorMessage(
        content.invalidEmail
      );

      return;
    }

    /* REQUEST */

    try {
      setStatus("loading");

      setErrorMessage("");

      const response =
        await fetch(
          "/api/contact",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              name,
              email,
              message,
            }),
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          typeof data?.error ===
            "string"
            ? data.error
            : content.error
        );
      }

      setForm(initialForm);

      setStatus("success");
    } catch (error: unknown) {
      console.error(
        "Contact form error:",
        error
      );

      setStatus("error");

      setErrorMessage(
        content.error
      );
    }
  }

  /* =======================================================
     INPUT STYLE
  ======================================================= */

  const inputClassName = `
    w-full

    rounded-2xl

    border
    border-white/[0.09]

    bg-white/[0.025]

    px-4

    text-sm
    text-white

    outline-none

    transition-all
    duration-300

    placeholder:text-white/20

    hover:border-white/[0.15]

    focus:border-red-600/60
    focus:bg-white/[0.04]

    focus:ring-4
    focus:ring-red-600/[0.045]
  `;

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden

        border-t
        border-white/[0.06]

        bg-[#070707]

        px-6
        py-28

        md:py-36
      "
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {/* RED AMBIENT */}

        <div
          className="
            absolute

            bottom-[-15%]
            right-[-8%]

            h-[500px]
            w-[500px]

            rounded-full

            bg-red-600/[0.02]

            blur-[170px]
          "
        />

        {/* WHITE AMBIENT */}

        <div
          className="
            absolute

            left-[-10%]
            top-[8%]

            h-[420px]
            w-[420px]

            rounded-full

            bg-white/[0.015]

            blur-[160px]
          "
        />

        {/* GRID */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.01]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",

            backgroundSize:
              "84px 84px",
          }}
        />
      </div>

      {/* ===================================================
          CONTENT
      =================================================== */}

      <div
        className="
          container-main
          relative
          z-10
        "
      >
        <div
          className="
            grid
            grid-cols-1

            gap-16

            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-24
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div>
            {/* EYEBROW */}

            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : -64,
                rotateY: reduceMotion
                  ? 0
                  : 8,
                clipPath: reduceMotion
                  ? "inset(0 0 0 0)"
                  : "inset(0 100% 0 0)",
                filter: reduceMotion
                  ? "blur(0px)"
                  : "blur(9px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotateY: 0,
                clipPath: "inset(0 0 0 0)",
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                mb-6

                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-[12px]
                  w-[2px]

                  bg-red-600
                "
              />

              <p
                className="
                  text-xs
                  font-medium
                  uppercase

                  tracking-[0.24em]

                  text-white/40
                "
              >
                {
                  content.eyebrow
                }
              </p>
            </motion.div>

            {/* =================================================
                TITLE
            ================================================= */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 24,
                filter:
                  "blur(6px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter:
                  "blur(0px)",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,

                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                text-4xl

                font-semibold

                leading-[1.02]

                tracking-[-0.045em]

                text-white

                md:text-6xl
              "
            >
              <span
                className="
                  block
                "
              >
                {
                  content.title
                }
              </span>

              {/* BRAND PHRASE */}

              <motion.span
                initial={{
                  color:
                    "rgba(255,255,255,0.35)",
                }}
                whileInView={{
                  color:
                    "#dc2626",
                }}
                viewport={{
                  once: true,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -6,
                        scale: 1.03,

                        textShadow:
                          "0 12px 30px rgba(220,38,38,0.18)",
                      }
                }
                transition={{
                  duration: 0.65,

                  delay: 0.35,

                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="
                  mt-2

                  block
                  w-fit

                  cursor-default

                  origin-bottom
                "
              >
                {
                  content.titleAccent
                }
              </motion.span>
            </motion.h2>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,

                delay: 0.1,

                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                mt-8

                max-w-lg

                text-base

                leading-8

                text-white/50

                md:text-lg
              "
            >
              {
                content.description
              }
            </motion.p>

            {/* =================================================
                DIRECT CONTACT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion
                  ? 0.01
                  : 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transformPerspective: 1000,
              }}
              className="
                mt-12

                border-t
                border-white/[0.08]

                pt-6
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
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
                    text-xs

                    uppercase

                    tracking-[0.18em]

                    text-white/30
                  "
                >
                  {
                    content.direct
                  }
                </p>
              </div>

              <div
                className="
                  mt-5

                  flex
                  flex-col

                  gap-2
                "
              >
                {/* EMAIL */}

                <a
                  href="mailto:komron7nazarov@gmail.com"
                  className="
                    group

                    flex
                    items-center
                    justify-between

                    rounded-xl

                    border
                    border-transparent

                    px-3
                    py-3

                    text-sm

                    text-white/60

                    transition-all
                    duration-300

                    hover:border-white/[0.07]

                    hover:bg-white/[0.025]

                    hover:text-white
                  "
                >
                  <span
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <Mail
                      size={16}
                      strokeWidth={
                        1.7
                      }
                      className="
                        text-white/35

                        transition-colors

                        group-hover:text-red-500
                      "
                    />

                    <span>
                      komron7nazarov@gmail.com
                    </span>
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="
                      text-white/25

                      transition-all
                      duration-300

                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5

                      group-hover:text-red-500
                    "
                  />
                </a>

                      {/* TELEGRAM */}

<a
  href="https://t.me/KNazarov_7"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group

    flex
    items-center
    justify-between

    rounded-xl

    border
    border-transparent

    px-3
    py-3

    text-sm

    text-white/60

    transition-all
    duration-300

    hover:border-white/[0.07]
    hover:bg-white/[0.025]
    hover:text-white
  "
>
  <span
    className="
      flex
      items-center
      gap-3
    "
  >
    {/* TELEGRAM ICON */}

    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="
        text-white/35

        transition-all
        duration-300

        group-hover:-translate-y-0.5
        group-hover:text-red-500
      "
    >
      <path d="M21.944 4.66c.232-1.089-.395-1.516-1.102-1.254L2.704 10.4c-1.239.483-1.22 1.176-.211 1.487l4.654 1.452 10.79-6.807c.51-.31.976-.144.593.196l-8.742 7.89-.322 4.728c.472 0 .68-.216.945-.472l2.268-2.204 4.717 3.484c.87.48 1.494.233 1.71-.805L21.944 4.66Z" />
    </svg>

    <span className="flex items-center gap-2">
      <span>
        {content.telegram}
      </span>

      <span
        className="
          text-white/30
          transition-colors
          duration-300
          group-hover:text-white/55
        "
      >
        @KNazarov_7
      </span>
    </span>
  </span>

  <ArrowUpRight
    size={15}
    className="
      text-white/25

      transition-all
      duration-300

      group-hover:-translate-y-0.5
      group-hover:translate-x-0.5

      group-hover:text-red-500
    "
  />
</a>

                {/* GITHUB */}

                <a
                  href="https://github.com/Komron-Nazarov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group

                    flex
                    items-center
                    justify-between

                    rounded-xl

                    border
                    border-transparent

                    px-3
                    py-3

                    text-sm

                    text-white/60

                    transition-all
                    duration-300

                    hover:border-white/[0.07]

                    hover:bg-white/[0.025]

                    hover:text-white
                  "
                >
                  <span
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="
                        text-white/35

                        transition-colors

                        group-hover:text-red-500
                      "
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
                    </svg>

                    <span>
                      {
                        content.github
                      }
                    </span>
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="
                      text-white/25

                      transition-all
                      duration-300

                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5

                      group-hover:text-red-500
                    "
                  />
                </a>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,

              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <form
              onSubmit={
                sendMessage
              }
              noValidate
              className="
                relative

                overflow-hidden

                rounded-[28px]

                border
                border-white/[0.08]

                bg-white/[0.02]

                p-6

                backdrop-blur-xl

                md:p-8
              "
            >
              {/* TOP ACCENT */}

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,

                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="
                  absolute

                  left-8
                  top-0

                  h-[2px]
                  w-20

                  origin-left

                  bg-red-600
                "
              />

              {/* NAME + EMAIL */}

              <div
                className="
                  grid
                  gap-6

                  md:grid-cols-2
                "
              >
                {/* NAME */}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="
                      mb-2.5
                      block

                      text-xs
                      font-medium

                      text-white/50
                    "
                  >
                    {
                      content.name
                    }
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={
                      form.name
                    }
                    onChange={(
                      event
                    ) =>
                      updateField(
                        "name",
                        event
                          .target
                          .value
                      )
                    }
                    placeholder={
                      content.namePlaceholder
                    }
                    className={`
                      ${inputClassName}
                      h-13
                    `}
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="contact-email"
                    className="
                      mb-2.5
                      block

                      text-xs
                      font-medium

                      text-white/50
                    "
                  >
                    {
                      content.email
                    }
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={
                      form.email
                    }
                    onChange={(
                      event
                    ) =>
                      updateField(
                        "email",
                        event
                          .target
                          .value
                      )
                    }
                    placeholder={
                      content.emailPlaceholder
                    }
                    className={`
                      ${inputClassName}
                      h-13
                    `}
                  />
                </div>
              </div>

              {/* MESSAGE */}

              <div className="mt-6">
                <label
                  htmlFor="contact-message"
                  className="
                    mb-2.5
                    block

                    text-xs
                    font-medium

                    text-white/50
                  "
                >
                  {
                    content.message
                  }
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={
                    form.message
                  }
                  onChange={(
                    event
                  ) =>
                    updateField(
                      "message",
                      event
                        .target
                        .value
                    )
                  }
                  placeholder={
                    content.messagePlaceholder
                  }
                  className={`
                    ${inputClassName}

                    min-h-[180px]

                    resize-none

                    py-4

                    leading-7
                  `}
                />
              </div>

              {/* =================================================
                  STATUS + SUBMIT
              ================================================= */}

              <div className="mt-6">
                {/* SUCCESS */}

                {status ===
                  "success" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    role="status"
                    className="
                      relative

                      mb-5

                      flex
                      items-start
                      gap-3

                      overflow-hidden

                      rounded-xl

                      border
                      border-white/[0.08]

                      bg-white/[0.025]

                      p-4
                    "
                  >
                    {/* BRAND MARK */}

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

                    <Check
                      size={16}
                      className="
                        mt-0.5

                        shrink-0

                        text-white/60
                      "
                    />

                    <div>
                      <p
                        className="
                          text-sm

                          text-white/75
                        "
                      >
                        {
                          content.sent
                        }
                      </p>

                      <p
                        className="
                          mt-1

                          text-xs
                          leading-5

                          text-white/40
                        "
                      >
                        {
                          content.success
                        }
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* ERROR */}

                {status ===
                  "error" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    role="alert"
                    className="
                      relative

                      mb-5

                      overflow-hidden

                      rounded-xl

                      border
                      border-red-600/20

                      bg-red-600/[0.035]

                      p-4

                      text-xs
                      leading-5

                      text-white/55
                    "
                  >
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

                    {errorMessage ||
                      content.error}
                  </motion.div>
                )}

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={
                    status ===
                    "loading"
                  }
                  className="
                    group

                    relative

                    flex
                    h-13
                    w-full

                    items-center
                    justify-center

                    gap-2

                    overflow-hidden

                    rounded-xl

                    bg-white

                    px-5

                    text-sm
                    font-semibold

                    !text-black

                    transition-all
                    duration-300

                    hover:scale-[1.01]

                    hover:bg-white/90

                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {/* RED BOTTOM HIT */}

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

                  {status ===
                  "loading" ? (
                    <>
                      <LoaderCircle
                        size={15}
                        className="
                          animate-spin
                        "
                      />

                      {
                        content.sending
                      }
                    </>
                  ) : (
                    <>
                      {
                        content.send
                      }

                      <Send
                        size={14}
                        className="
                          transition-all
                          duration-300

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-1

                          group-hover:text-red-600
                        "
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

