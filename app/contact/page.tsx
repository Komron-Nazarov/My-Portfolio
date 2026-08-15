// // // export default function Contact() {
// // //   return (
// // //     <section className="mt-20 px-6 py-20 text-center">
      
// // //       <h2 className="text-4xl font-bold mb-6">
// // //         Contact Me
// // //       </h2>

// // //       <p className="text-gray-400 mb-6">
// // //         If you want to work with me or ask something — reach out.
// // //       </p>

// // //       <a
// // //         href="mailto:komron7nazarov@gmail.com"
// // //         className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-300 transition"
// // //       >
// // //         Send Email
// // //       </a>

// // //     </section>
// // //   );
// // // }
// // "use client";

// // import { useState } from "react";

// // export default function Contact() {
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });

// //   const [loading, setLoading] = useState(false);

// //   async function sendMessage() {
// //     setLoading(true);

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

// //     alert("Message sent!");

// //     setForm({
// //       name: "",
// //       email: "",
// //       message: "",
// //     });
// //   }

// //   return (
// //     <section id="contact" className="px-6 py-20 text-center mt-20">
// //       <h2 className="text-3xl mb-6">Contact Me</h2>

// //       <div className="flex flex-col gap-4 max-w-md">

// //         <input
// //           placeholder="Name"
// //           value={form.name}
// //           onChange={(e) =>
// //             setForm({ ...form, name: e.target.value })
// //           }
// //           className="p-3 bg-gray-900 rounded"
// //         />

// //         <input
// //           placeholder="Email"
// //           value={form.email}
// //           onChange={(e) =>
// //             setForm({ ...form, email: e.target.value })
// //           }
// //           className="p-3 bg-gray-900 rounded"
// //         />

// //         <textarea
// //           placeholder="Message"
// //           value={form.message}
// //           onChange={(e) =>
// //             setForm({ ...form, message: e.target.value })
// //           }
// //           className="p-3 bg-gray-900 rounded h-32"
// //         />

// //         <button
// //           onClick={sendMessage}
// //           disabled={loading}
// //           className="bg-white text-black p-3 rounded"
// //         >
// //           {loading ? "Sending..." : "Send Message"}
// //         </button>
// //       </div>
// //     </section>
// //   );
// // }

// // "use client";

// // import { useState } from "react";

// // export default function Contact() {
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });

// //   const [loading, setLoading] = useState(false);

// //   async function sendMessage() {
// //     setLoading(true);

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

// //     alert("Message sent!");

// //     setForm({
// //       name: "",
// //       email: "",
// //       message: "",
// //     });
// //   }

// //   return (
// //     <section
// //       id="contact"
// //       className="min-h-screen flex items-center justify-center px-6 py-20"
// //     >
// //       <div className="w-full max-w-md text-center">

// //         <h2 className="text-4xl font-bold mb-3">
// //           Contact Me
// //         </h2>

// //         <p className="text-gray-400 mb-8">
// //           If you want to work with me or ask something — reach out.
// //         </p>

// //         <div className="flex flex-col gap-4 text-left">

// //           <input
// //             placeholder="Name"
// //             value={form.name}
// //             onChange={(e) =>
// //               setForm({ ...form, name: e.target.value })
// //             }
// //             className="p-3 bg-gray-900 rounded outline-none focus:ring-2 focus:ring-blue-500"
// //           />

// //           <input
// //             placeholder="Email"
// //             value={form.email}
// //             onChange={(e) =>
// //               setForm({ ...form, email: e.target.value })
// //             }
// //             className="p-3 bg-gray-900 rounded outline-none focus:ring-2 focus:ring-blue-500"
// //           />

// //           <textarea
// //             placeholder="Message"
// //             value={form.message}
// //             onChange={(e) =>
// //               setForm({ ...form, message: e.target.value })
// //             }
// //             className="p-3 bg-gray-900 rounded h-32 outline-none focus:ring-2 focus:ring-blue-500"
// //           />

// //           <button
// //             onClick={sendMessage}
// //             disabled={loading}
// //             className="bg-white text-black p-3 rounded hover:bg-gray-300 transition"
// //           >
// //             {loading ? "Sending..." : "Send Message"}
// //           </button>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import TypingTitle from "../components/TypingTitle";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   async function sendMessage() {
//     setLoading(true);
//     setSuccess(false);

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

//     setSuccess(true);

//     setForm({
//       name: "",
//       email: "",
//       message: "",
//     });
//   }

//   return (
//     <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">

//       {/* RED GLOW */}
//       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-red-700/10 blur-[180px]" />

//       <div
//         className="
//         relative
//         w-full
//         max-w-2xl
//         rounded-[32px]
//         border
//         border-red-900/50
//         bg-black/30
//         backdrop-blur-2xl
//         p-10
//         overflow-hidden
//       "
//       >

//         {/* TOP LINE */}
//         <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />

//         <div className="text-center mb-10">

//           <span
//             className="
//             px-4 py-1
//             rounded-full
//             border
//             border-red-600/50
//             text-red-400
//             text-sm
//           "
//           >
//             CONTACT
//           </span>

//           {/* <h2 className="mt-6 text-5xl font-black text-white">
//             Send Signal
//           </h2> */}

//           <TypingTitle
//   className="mt-6 text-5xl font-black text-white"
//   parts={[
//     {
//       text: "Send ",
//     },
//     {
//       text: "Signal",
//     },
//   ]}
// />

//           <p className="mt-4 text-gray-400 max-w-lg mx-auto">
//             Reach out for collaboration, projects or ideas.
//           </p>

//         </div>

//         <div className="flex flex-col gap-5">

//           <input
//             value={form.name}
//             placeholder="Your Name"
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//             className="
//             h-14
//             rounded-2xl
//             bg-red-950/10
//             border border-red-900/40
//             px-5
//             text-white
//             placeholder:text-gray-500
//             outline-none
//             transition
//             focus:border-red-500
//             focus:shadow-[0_0_30px_rgba(255,0,0,.15)]
//           "
//           />

//           <input
//             value={form.email}
//             placeholder="Your Email"
//             onChange={(e) =>
//               setForm({ ...form, email: e.target.value })
//             }
//             className="
//             h-14
//             rounded-2xl
//             bg-red-950/10
//             border border-red-900/40
//             px-5
//             text-white
//             placeholder:text-gray-500
//             outline-none
//             transition
//             focus:border-red-500
//             focus:shadow-[0_0_30px_rgba(255,0,0,.15)]
//           "
//           />

//           <textarea
//             value={form.message}
//             placeholder="Your Message"
//             onChange={(e) =>
//               setForm({ ...form, message: e.target.value })
//             }
//             className="
//             h-[180px]
//             rounded-2xl
//             bg-red-950/10
//             border border-red-900/40
//             p-5
//             text-white
//             placeholder:text-gray-500
//             outline-none
//             resize-none
//             transition
//             focus:border-red-500
//             focus:shadow-[0_0_30px_rgba(255,0,0,.15)]
//           "
//           />

//           <button
//             disabled={loading}
//             onClick={sendMessage}
//             className="
//             relative
//             overflow-hidden
//             h-14
//             rounded-2xl
//             bg-gradient-to-r
//             from-red-700
//             to-red-500
//             text-white
//             font-semibold
//             transition
//             hover:scale-[1.02]
//             hover:shadow-[0_0_40px_rgba(255,0,0,.4)]
//             active:scale-[.98]
//           "
//           >
//             {loading
//               ? "Sending..."
//               : success
//               ? "Message Sent ✓"
//               : "Transmit Message"}
//           </button>

//         </div>

//       </div>

//     </section>
//   );
// }





"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  // Github,
  LoaderCircle,
  Mail,
  Send,
} from "lucide-react";

import { useLang } from "@/src/hooks/useLang";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const { lang } = useLang();

  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const content =
    lang === "ru"
      ? {
          eyebrow: "КОНТАКТ",
          title: "Есть идея?",
          titleAccent: "Давайте обсудим.",
          description:
            "Открыт к интересным проектам, сотрудничеству и новым идеям. Расскажите немного о задаче — я отвечу, как только смогу.",
          direct: "Или напишите напрямую",
          name: "Имя",
          namePlaceholder: "Ваше имя",
          email: "Email",
          emailPlaceholder: "you@example.com",
          message: "Сообщение",
          messagePlaceholder:
            "Расскажите о проекте, задаче или идее...",
          send: "Отправить сообщение",
          sending: "Отправка...",
          sent: "Сообщение отправлено",
          success:
            "Спасибо. Я получил ваше сообщение и постараюсь ответить как можно скорее.",
          error:
            "Не удалось отправить сообщение. Попробуйте ещё раз или напишите мне напрямую.",
          required: "Заполните все поля.",
          invalidEmail: "Введите корректный email.",
          github: "GitHub",
        }
      : {
          eyebrow: "CONTACT",
          title: "Have an idea?",
          titleAccent: "Let’s talk.",
          description:
            "I’m open to interesting projects, collaborations and new ideas. Tell me a little about what you’re building and I’ll get back to you as soon as I can.",
          direct: "Or reach me directly",
          name: "Name",
          namePlaceholder: "Your name",
          email: "Email",
          emailPlaceholder: "you@example.com",
          message: "Message",
          messagePlaceholder:
            "Tell me about the project, problem or idea...",
          send: "Send message",
          sending: "Sending...",
          sent: "Message sent",
          success:
            "Thanks. I received your message and will get back to you as soon as possible.",
          error:
            "Something went wrong. Try again or contact me directly.",
          required: "Please complete all fields.",
          invalidEmail: "Please enter a valid email.",
          github: "GitHub",
        };

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (status === "error" || status === "success") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage(content.required);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setStatus("error");
      setErrorMessage(content.invalidEmail);
      return;
    }

    try {
      setStatus("loading");
      setErrorMessage("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : content.error
        );
      }

      setForm(initialForm);
      setStatus("success");
    } catch (error: unknown) {
      console.error("Contact form error:", error);

      setStatus("error");
      setErrorMessage(content.error);
    }
  }

  const inputClassName = `
    w-full
    rounded-2xl
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
    hover:border-white/[0.13]
    focus:border-white/[0.22]
    focus:bg-white/[0.04]
    focus:ring-4
    focus:ring-white/[0.025]
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
      {/* subtle ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            bottom-[-15%]
            right-[-8%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-indigo-500/[0.025]
            blur-[170px]
          "
        />
      </div>

      <div className="container-main relative z-10">
        <div
          className="
            grid
            grid-cols-1
            gap-16
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-24
          "
        >
          {/* LEFT */}

          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                mb-6
                text-xs
                font-medium
                uppercase
                tracking-[0.24em]
                text-white/35
              "
            >
              {content.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                text-4xl
                font-semibold
                leading-[1.02]
                tracking-[-0.045em]
                text-white
                md:text-6xl
              "
            >
              {content.title}

              <span className="mt-2 block text-white/35">
                {content.titleAccent}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="
                mt-8
                max-w-lg
                text-base
                leading-8
                text-white/40
                md:text-lg
              "
            >
              {content.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                mt-12
                border-t
                border-white/[0.08]
                pt-6
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-white/25
                "
              >
                {content.direct}
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="mailto:komron7nazarov@gmail.com"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-1
                    py-2
                    text-sm
                    text-white/55
                    transition-colors
                    hover:text-white
                  "
                >
                  <span className="flex items-center gap-3">
                    <Mail
                      size={16}
                      strokeWidth={1.7}
                      className="text-white/30"
                    />

                    komron7nazarov@gmail.com
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="
                      text-white/25
                      transition-transform
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>

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
                    px-1
                    py-2
                    text-sm
                    text-white/55
                    transition-colors
                    hover:text-white
                  "
                >
                  <span className="flex items-center gap-3">
                    {/* <Github
                      size={16}
                      strokeWidth={1.7}
                      className="text-white/30"
                    /> */}
                    <svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
  className="text-white/30"
>
  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
</svg>

                    {content.github}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="
                      text-white/25
                      transition-transform
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>
              </div>
            </motion.div>
          </div>

          {/* FORM */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={sendMessage}
              noValidate
              className="
                rounded-[28px]
                border
                border-white/[0.08]
                bg-white/[0.02]
                p-6
                backdrop-blur-xl
                md:p-8
              "
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="
                      mb-2.5
                      block
                      text-xs
                      font-medium
                      text-white/45
                    "
                  >
                    {content.name}
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    placeholder={content.namePlaceholder}
                    className={`${inputClassName} h-13`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="
                      mb-2.5
                      block
                      text-xs
                      font-medium
                      text-white/45
                    "
                  >
                    {content.email}
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    placeholder={content.emailPlaceholder}
                    className={`${inputClassName} h-13`}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="contact-message"
                  className="
                    mb-2.5
                    block
                    text-xs
                    font-medium
                    text-white/45
                  "
                >
                  {content.message}
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  placeholder={content.messagePlaceholder}
                  className={`
                    ${inputClassName}
                    min-h-[180px]
                    resize-none
                    py-4
                    leading-7
                  `}
                />
              </div>

              <div className="mt-6">
                {status === "success" && (
                  <div
                    role="status"
                    className="
                      mb-5
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      border
                      border-emerald-400/10
                      bg-emerald-400/[0.035]
                      p-4
                    "
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-emerald-300/70"
                    />

                    <div>
                      <p className="text-sm text-white/70">
                        {content.sent}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/35">
                        {content.success}
                      </p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div
                    role="alert"
                    className="
                      mb-5
                      rounded-xl
                      border
                      border-red-400/10
                      bg-red-400/[0.035]
                      p-4
                      text-xs
                      leading-5
                      text-white/45
                    "
                  >
                    {errorMessage || content.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="
                    group
                    flex
                    h-13
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-5
                    text-sm
                    font-medium
                    text-black
                    transition-all
                    duration-300
                    hover:bg-white/90
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {status === "loading" ? (
                    <>
                      <LoaderCircle
                        size={15}
                        className="animate-spin"
                      />
                      {content.sending}
                    </>
                  ) : (
                    <>
                      {content.send}

                      <Send
                        size={14}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
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