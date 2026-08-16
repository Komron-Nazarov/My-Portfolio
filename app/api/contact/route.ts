// // import { Resend } from "resend";

// // const resend = new Resend(process.env.RESEND_API_KEY);

// // export async function POST(req: Request) {
// //   try {
// //     const body = await req.json();

// //     const { name, email, message } = body;

// //     if (!name || !email || !message) {
// //       return Response.json(
// //         { error: "Missing fields" },
// //         { status: 400 }
// //       );
// //     }

// //     const data = await resend.emails.send({
// //       from: "Portfolio <onboarding@resend.dev>",
// //       to: ["komron7nazarov@gmail.com"], // <-- здесь мой email
// //       subject: `New message from ${name}`,
// //       html: `
// //         <h2>New Contact Message</h2>
// //         <p><b>Name:</b> ${name}</p>
// //         <p><b>Email:</b> ${email}</p>
// //         <p><b>Message:</b><br/> ${message}</p>
// //       `,
// //     });

// //     return Response.json({ success: true, data });
// //   } catch (error: any) {
// //     return Response.json(
// //       { error: error.message },
// //       { status: 500 }
// //     );
// //   }
// // }


// import { Resend } from "resend";

// export async function POST(req: Request) {
//   try {
//     // Инициализируем Resend внутри запроса, когда переменные окружения точно доступны
//     const apiKey = process.env.RESEND_API_KEY || "re_mock_key_for_build";
//     const resend = new Resend(apiKey);

//     const body = await req.json();
//     const { name, email, message } = body;

//     if (!name || !email || !message) {
//       return Response.json(
//         { error: "Missing fields" },
//         { status: 400 }
//       );
//     }

//     const data = await resend.emails.send({
//       from: "Portfolio <onboarding@resend.dev>",
//       to: ["komron7nazarov@gmail.com"],
//       subject: `New message from ${name}`,
//       html: `
//         <h2>New Contact Message</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Message:</b><br/> ${message}</p>
//       `,
//     });

//     return Response.json({ success: true, data });
//   // } catch (error: any) {
//   //   return Response.json(
//   //     { error: error.message },
//   //     { status: 500 }
//   //   );
//   // }
//   } catch (error: unknown) {
//   const message =
//     error instanceof Error
//       ? error.message
//       : "Something went wrong";

//   return Response.json(
//     { error: message },
//     { status: 500 }
//   );
// }
// }

import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");

      return Response.json(
        {
          error: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const name =
      typeof body.name === "string"
        ? body.name.trim()
        : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim()
        : "";

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    if (!name || !email || !message) {
      return Response.json(
        {
          error: "Missing fields",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } =
      await resend.emails.send({
        from:
          "Komron Portfolio <onboarding@resend.dev>",

        to: [
          "komron7nazarov@gmail.com",
        ],

        replyTo: email,

        subject: `Portfolio message from ${name}`,

        html: `
          <div style="
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            color: #111;
          ">
            <h2>
              New portfolio message
            </h2>

            <p>
              <strong>Name:</strong>
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(email)}
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <p style="
              white-space: pre-wrap;
              line-height: 1.6;
            ">
              ${escapeHtml(message)}
            </p>
          </div>
        `,
      });

    /*
     * IMPORTANT:
     * Resend may RETURN an error instead
     * of throwing it.
     */
    if (error) {
      console.error(
        "Resend error:",
        error
      );

      return Response.json(
        {
          error:
            error.message ||
            "Email could not be sent.",
        },
        {
          status: 500,
        }
      );
    }

    console.log(
      "Contact email sent:",
      data
    );

    return Response.json(
      {
        success: true,
        id: data?.id,
      },
      {
        status: 200,
      }
    );
  } catch (error: unknown) {
    console.error(
      "Contact API error:",
      error
    );

    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong";

    return Response.json(
      {
        error: message,
      },
      {
        status: 500,
      }
    );
  }
}

function escapeHtml(
  value: string
) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}