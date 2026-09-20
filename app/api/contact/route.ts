import { Resend } from "resend";

const requests = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") || "";
  const contentLength = Number(req.headers.get("content-length") || 0);
  const origin = req.headers.get("origin");
  const requestOrigin = new URL(req.url).origin;
  if (!contentType.includes("application/json")) return Response.json({ error: "Unsupported content type." }, { status: 415 });
  if (contentLength > 12_000) return Response.json({ error: "Request is too large." }, { status: 413 });
  if (origin && origin !== requestOrigin) return Response.json({ error: "Origin is not allowed." }, { status: 403 });

  const clientKey = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const record = requests.get(clientKey);
  if (record && record.resetAt > now && record.count >= MAX_REQUESTS) {
    return Response.json({ error: "Too many requests. Try again later." }, { status: 429 });
  }
  requests.set(clientKey, record && record.resetAt > now ? { ...record, count: record.count + 1 } : { count: 1, resetAt: now + WINDOW_MS });

  try {
    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const website = typeof body.website === "string" ? body.website.trim() : "";

    if (website) return Response.json({ success: true }, { status: 200 });
    if (!name || !email || !message) return Response.json({ error: "Missing fields" }, { status: 400 });
    if (name.length > 100 || email.length > 254 || message.length > 4000) return Response.json({ error: "Field is too long" }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(email)) return Response.json({ error: "Invalid email" }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const destination = process.env.CONTACT_TO_EMAIL;
    if (!apiKey || !destination) return Response.json({ error: "Email service is not configured." }, { status: 503 });

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Komron Portfolio <onboarding@resend.dev>",
      to: [destination],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;color:#111"><h2>New portfolio message</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Message:</strong></p><p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</p></div>`,
    });
    if (error) return Response.json({ error: "Email could not be sent." }, { status: 502 });
    return Response.json({ success: true }, { status: 200, headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
}

function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
