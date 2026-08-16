// "use client";

// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";
// import { useLang } from "@/src/hooks/useLang";

// export default function Footer() {
//   const { lang } = useLang();

//   const content =
//     lang === "ru"
//       ? {
//           role: "Software Developer",
//           subtitle: "Web · Backend · Bots · Mobile",
//           privacy: "Политика конфиденциальности",
//           terms: "Условия использования",
//           rights: "Все права защищены.",
//         }
//       : {
//           role: "Software Developer",
//           subtitle: "Web · Backend · Bots · Mobile",
//           privacy: "Privacy Policy",
//           terms: "Terms of Use",
//           rights: "All rights reserved.",
//         };

//   const year = new Date().getFullYear();

//   return (
//     <footer
//       className="
//         border-t
//         border-white/[0.06]
//         bg-[#050505]
//         px-6
//         py-8
//       "
//     >
//       <div className="container-main">
//         <div
//           className="
//             flex
//             flex-col
//             gap-10
//             md:flex-row
//             md:items-end
//             md:justify-between
//           "
//         >
//           <div>
//             <p className="text-base font-medium text-white">
//               Komron Nazarov
//             </p>

//             <p className="mt-1 text-sm text-white/50 hover:text-white">
//               {content.role}
//             </p>

//             <p className="mt-1 text-xs text-white/20">
//               {content.subtitle}
//             </p>
//           </div>

//           <div className="flex flex-col gap-4 md:items-end">
//             <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
//               <a
//                 href="https://github.com/Komron-Nazarov"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   gap-1.5
//                   text-white/50
//                   transition-colors
//                   hover:text-white/70
//                 "
//               >
//                 GitHub

//                 <ArrowUpRight
//                   size={12}
//                   className="
//                     transition-transform
//                     group-hover:-translate-y-0.5
//                     group-hover:translate-x-0.5
//                   "
//                 />
//               </a>

//               <a
//                 href="mailto:komron7nazarov@gmail.com"
//                 className="
//                   text-white/50
//                   transition-colors
//                   hover:text-white/70
//                 "
//               >
//                 Email
//               </a>

//               <Link
//                 href="/privacy"
//                 className="
//                   text-white/50
//                   transition-colors
//                   hover:text-white/70
//                 "
//               >
//                 {content.privacy}
//               </Link>

//               <Link
//                 href="/terms"
//                 className="
//                   text-white/50
//                   transition-colors
//                   hover:text-white/70
//                 "
//               >
//                 {content.terms}
//               </Link>
//             </div>

//             <p className="text-xs text-white/20">
//               © {year} Komron Nazarov. {content.rights}
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client";

import Link from "next/link";

import {
  ArrowUp,
  ArrowUpRight,
  Mail,
} from "lucide-react";

import { motion } from "framer-motion";

import { useLang } from "@/src/hooks/useLang";

export default function Footer() {
  const { t } = useLang();

  const content = t.footerSection;

  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer
      className="
        relative
        overflow-hidden

        border-t
        border-white/[0.06]

        bg-[#050505]

        px-6
        pb-8
        pt-16
      "
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute

            bottom-[-180px]
            left-1/2

            h-[380px]
            w-[600px]

            -translate-x-1/2

            rounded-full

            bg-red-600/[0.018]

            blur-[170px]
          "
        />
      </div>

      <div className="container-main relative z-10">
        {/* =================================================
            MAIN FOOTER
        ================================================= */}

        <div
          className="
            grid

            gap-12

            border-b
            border-white/[0.06]

            pb-12

            md:grid-cols-[1.2fr_0.8fr_0.8fr]
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href="/"
              className="
                group
                inline-block
              "
            >
              <div className="inline-block">
                <p
                  className="
                    text-xl
                    font-semibold

                    tracking-[-0.025em]

                    text-white
                  "
                >
                  Komron Nazarov
                </p>

                {/* BRAND LINE */}

                <span
                  className="
                    mt-2.5
                    block

                    h-[3px]
                    w-12

                    bg-red-600

                    transition-all
                    duration-500

                    group-hover:w-24
                  "
                />
              </div>
            </Link>

            <p
              className="
                mt-5

                text-sm
                font-medium

                text-white/60
              "
            >
              {content.role}
            </p>

            <p
              className="
                mt-2

                max-w-xs

                text-xs
                leading-6

                text-white/30
              "
            >
              {content.subtitle}
            </p>
          </motion.div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.06,
            }}
          >
            <div
              className="
                mb-5

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
                  text-[10px]

                  font-semibold
                  uppercase

                  tracking-[0.18em]

                  text-white/30
                "
              >
                {content.navigation}
              </p>
            </div>

            <nav
              className="
                flex
                flex-col
                items-start

                gap-3
              "
            >
              <FooterLink href="/">
                {content.home}
              </FooterLink>

              <FooterLink href="/about">
                {content.about}
              </FooterLink>

              <FooterLink href="/projects">
                {content.projects}
              </FooterLink>

              <FooterLink href="/contact">
                {content.contact}
              </FooterLink>
            </nav>
          </motion.div>

          {/* =================================================
              CONNECT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.12,
            }}
          >
            <div
              className="
                mb-5

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
                  text-[10px]

                  font-semibold
                  uppercase

                  tracking-[0.18em]

                  text-white/30
                "
              >
                {content.connect}
              </p>
            </div>

            <div
              className="
                flex
                flex-col
                items-start

                gap-3
              "
            >
              {/* TELEGRAM */}

              <a
                href="https://t.me/KNazarov_7"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group

                  inline-flex
                  items-center
                  gap-2

                  text-sm
                  text-white/50

                  transition-colors
                  duration-300

                  hover:text-white
                "
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="
                    text-white/25

                    transition-all
                    duration-300

                    group-hover:-translate-y-0.5
                    group-hover:text-red-500
                  "
                >
                  <path d="M21.944 4.66c.232-1.089-.395-1.516-1.102-1.254L2.704 10.4c-1.239.483-1.22 1.176-.211 1.487l4.654 1.452 10.79-6.807c.51-.31.976-.144.593.196l-8.742 7.89-.322 4.728c.472 0 .68-.216.945-.472l2.268-2.204 4.717 3.484c.87.48 1.494.233 1.71-.805L21.944 4.66Z" />
                </svg>

                <span>
                  {content.telegram}
                </span>

                <span
                  className="
                    text-white/25

                    transition-colors

                    group-hover:text-white/50
                  "
                >
                  @KNazarov_7
                </span>

                <ArrowUpRight
                  size={12}
                  className="
                    text-white/20

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

                  inline-flex
                  items-center
                  gap-2

                  text-sm
                  text-white/50

                  transition-colors
                  duration-300

                  hover:text-white
                "
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="
                    text-white/25

                    transition-colors
                    duration-300

                    group-hover:text-red-500
                  "
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
                </svg>

                {content.github}

                <ArrowUpRight
                  size={12}
                  className="
                    text-white/20

                    transition-all
                    duration-300

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5

                    group-hover:text-red-500
                  "
                />
              </a>

              {/* EMAIL */}

              <a
                href="mailto:komron7nazarov@gmail.com"
                className="
                  group

                  inline-flex
                  items-center
                  gap-2

                  text-sm
                  text-white/50

                  transition-colors
                  duration-300

                  hover:text-white
                "
              >
                <Mail
                  size={14}
                  strokeWidth={1.7}
                  className="
                    text-white/25

                    transition-colors

                    group-hover:text-red-500
                  "
                />

                {content.email}
              </a>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div
          className="
            flex
            flex-col

            gap-5

            pt-7

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* COPYRIGHT */}

          <p
            className="
              text-xs
              text-white/22
            "
          >
            © {year} Komron Nazarov.{" "}
            {content.rights}
          </p>

          {/* RIGHT */}

          <div
            className="
              flex
              flex-wrap
              items-center

              gap-x-5
              gap-y-3
            "
          >
            <Link
              href="/privacy"
              className="
                text-xs
                text-white/30

                transition-colors

                hover:text-white/65
              "
            >
              {content.privacy}
            </Link>

            <Link
              href="/terms"
              className="
                text-xs
                text-white/30

                transition-colors

                hover:text-white/65
              "
            >
              {content.terms}
            </Link>

            {/* BACK TO TOP */}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label={content.backToTop}
              className="
                group

                ml-1

                flex
                h-9
                w-9

                items-center
                justify-center

                rounded-full

                border
                border-white/[0.08]

                bg-white/[0.02]

                text-white/35

                transition-all
                duration-300

                hover:-translate-y-1

                hover:border-red-600/50

                hover:text-red-500
              "
            >
              <ArrowUp
                size={14}
                className="
                  transition-transform
                  duration-300

                  group-hover:-translate-y-0.5
                "
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   INTERNAL FOOTER LINK
========================================================= */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        group

        relative

        inline-flex
        items-center

        text-sm
        text-white/50

        transition-colors
        duration-300

        hover:text-white
      "
    >
      <span
        className="
          mr-0

          h-[2px]
          w-0

          bg-red-600

          transition-all
          duration-300

          group-hover:mr-2
          group-hover:w-3
        "
      />

      {children}
    </Link>
  );
}

