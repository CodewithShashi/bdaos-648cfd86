import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(40).optional().default(""),
  company: z.string().trim().max(150).optional().default(""),
  interest: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

const RECIPIENT = "codewithshashi9@gmail.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const lovableApiKey = process.env["LOVABLE_API_KEY"];
    const resendApiKey = process.env["RESEND_API_KEY"];

    if (!lovableApiKey || !resendApiKey) {
      return { ok: false as const, error: "Email service is not configured yet." };
    }

    const rows: [string, string][] = [
      ["Name", data.name],
      ["Email", data.email],
      ["Phone", data.phone || "—"],
      ["Company", data.company || "—"],
      ["Interest", data.interest || "—"],
    ];

    const html = `
      <div style="font-family:Arial,sans-serif;font-size:14px;color:#111">
        <h2 style="margin:0 0 16px">New contact form submission</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          ${rows
            .map(
              ([label, value]) =>
                `<tr><td style="color:#666">${label}</td><td><strong>${escapeHtml(value)}</strong></td></tr>`,
            )
            .join("")}
        </table>
        <p style="margin-top:20px;color:#666">Message</p>
        <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
      </div>`;

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableApiKey}`,
        "X-Connection-Api-Key": resendApiKey,
      },
      body: JSON.stringify({
        from: "BDA Website <onboarding@resend.dev>",
        to: [RECIPIENT],
        reply_to: data.email,
        subject: `New enquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
        html,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`Resend request failed [${response.status}]: ${body}`);
      return { ok: false as const, error: "Could not send your message. Please try again." };
    }

    return { ok: true as const };
  });
