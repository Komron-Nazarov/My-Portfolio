export default function About() {
  return (
    <section
      className="
      relative
      min-h-screen

      flex
      items-center

      px-6
      py-32

      overflow-hidden
    "
    >
      {/* LIGHT */}
      <div
        className="
        absolute
        top-[20%]
        left-[20%]

        w-[500px]
        h-[500px]

        rounded-full

        bg-red-600/10

        blur-[180px]
      "
      />

      <div
        className="
        relative

        max-w-6xl
        mx-auto

        grid
        md:grid-cols-2

        gap-16

        items-center
      "
      >
        {/* LEFT */}

        <div>

          <div
            className="
            inline-block

            px-4
            py-2

            mb-6

            rounded-full

            border
            border-red-500/30

            text-red-300
            text-sm

            bg-red-900/10
          "
          >
            ● ABOUT ME
          </div>

          <h1
            className="
            text-5xl
            md:text-7xl

            font-black

            leading-tight

            text-white
          "
          >
            Building
            <br />

            <span
              className="
              text-red-500

              drop-shadow-[0_0_30px_red]
            "
            >
              Digital
            </span>

            <br />

            Systems
          </h1>

          <div
            className="
            mt-10

            w-[140px]
            h-[2px]

            bg-gradient-to-r
            from-red-500
            to-transparent
          "
          />

          <p
            className="
            mt-8

            text-gray-300

            text-lg

            leading-9
          "
          >
            I create scalable web applications
            and modern interfaces.

            Working with Next.js,
            Go, PostgreSQL and
            frontend technologies.

            Also experienced with
            economics and accounting
            systems (1C).
          </p>
        </div>

        {/* RIGHT */}

        <div
          className="
          relative

          rounded-[30px]

          p-10

          bg-black/30

          border
          border-red-900/40

          backdrop-blur-xl

          shadow-[0_0_80px_rgba(255,0,0,.08)]
        "
        >
          <div
            className="
            absolute
            top-0
            left-0

            w-full
            h-[2px]

            bg-gradient-to-r
            from-transparent
            via-red-500
            to-transparent
          "
          />

          <div className="space-y-10">

            <div>
              <div className="text-red-500 text-sm mb-2">
                EXPERIENCE
              </div>

              <div className="text-white text-4xl font-black">
                2+
              </div>

              <div className="text-gray-500">
                Years Learning Development
              </div>
            </div>

            <div>
              <div className="text-red-500 text-sm mb-2">
                STACK
              </div>

              <div className="flex flex-wrap gap-3">

                {[
                  "JavaScript / Typescript",
                  "Next.js",
                  "React",
                  "Go",
                  "PostgreSQL",
                  "Supabase",
                  "Tailwind CSS",
                  "Python",
                ].map((i) => (
                  <span
                    key={i}
                    className="
                    px-4
                    py-2

                    rounded-full

                    border
                    border-red-800

                    text-gray-200

                    hover:border-red-500
                    hover:text-white

                    transition
                  "
                  >
                    {i}
                  </span>
                ))}

              </div>
            </div>

            <div>
              <div className="text-red-500 text-sm mb-2">
                STATUS
              </div>

              <div className="text-white">
                Open for projects
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}