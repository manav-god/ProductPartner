import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function fieldRow(label: string, value: string, href?: string) {
  const safeLabel = escapeHtml(label);
  const safeValue = escapeHtml(value);
  const content = href
    ? `<a href="${escapeHtml(href)}" style="color:#ff5900;text-decoration:none">${safeValue}</a>`
    : safeValue;

  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #ececec;width:140px;vertical-align:top;font-size:13px;font-weight:600;color:#6b6b6b;text-transform:uppercase;letter-spacing:0.04em">
        ${safeLabel}
      </td>
      <td style="padding:14px 0;border-bottom:1px solid #ececec;vertical-align:top;font-size:15px;color:#111111;font-weight:500">
        ${content}
      </td>
    </tr>
  `;
}

function buildLeadEmailHtml(input: {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  submittedAt: string;
}) {
  const company = input.company || "Not provided";
  const phone = input.phone || "Not provided";
  const message = input.message || "No message provided.";
  const phoneHref =
    input.phone && input.phone !== "Not provided"
      ? `tel:${input.phone.replace(/[^\d+]/g, "")}`
      : undefined;

  return `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e8e8e8">
            <tr>
              <td style="background:#0a0a0a;padding:28px 32px">
                <p style="margin:0;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#ff5900;font-weight:700">
                  Product Partner
                </p>
                <h1 style="margin:10px 0 0;font-size:24px;line-height:1.3;color:#ffffff;font-weight:700">
                  New contact form inquiry
                </h1>
                <p style="margin:10px 0 0;font-size:14px;color:rgba(255,255,255,0.65)">
                  Submitted ${escapeHtml(input.submittedAt)}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px">
                <p style="margin:0 0 18px;font-size:15px;line-height:1.6;color:#444">
                  A new lead came in from the website contact form. Reply directly to this email to respond to them.
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${fieldRow("Name", input.fullName)}
                  ${fieldRow("Email", input.email, `mailto:${input.email}`)}
                  ${fieldRow("Phone", phone, phoneHref)}
                  ${fieldRow("Company", company)}
                </table>
                <div style="margin-top:24px;padding:18px 20px;background:#fafafa;border:1px solid #ececec;border-radius:12px">
                  <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#6b6b6b;text-transform:uppercase;letter-spacing:0.04em">
                    Message
                  </p>
                  <p style="margin:0;font-size:15px;line-height:1.7;color:#111111;white-space:pre-wrap">
                    ${escapeHtml(message)}
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px 28px;border-top:1px solid #ececec">
                <p style="margin:0;font-size:12px;line-height:1.6;color:#8a8a8a">
                  This email was sent automatically from productpartner.net. You can reply to reach ${escapeHtml(input.fullName)} at ${escapeHtml(input.email)}.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}

function buildThankYouEmailHtml(input: {
  firstName: string;
  fullName: string;
}) {
  const firstName = escapeHtml(input.firstName);

  return `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e8e8e8">
            <tr>
              <td style="background:#0a0a0a;padding:28px 32px">
                <p style="margin:0;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#ff5900;font-weight:700">
                  Product Partner
                </p>
                <h1 style="margin:10px 0 0;font-size:24px;line-height:1.3;color:#ffffff;font-weight:700">
                  Thanks for reaching out, ${firstName}
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px">
                <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#444">
                  We’ve received your message and our team will get back to you shortly.
                </p>
                <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#444">
                  In the meantime, feel free to reply to this email if you want to share more context about your product, timeline, or goals.
                </p>
                <div style="margin:24px 0;padding:18px 20px;background:#fafafa;border:1px solid #ececec;border-radius:12px">
                  <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#6b6b6b;text-transform:uppercase;letter-spacing:0.04em">
                    What happens next
                  </p>
                  <p style="margin:0;font-size:15px;line-height:1.7;color:#111111">
                    1. We review your inquiry<br />
                    2. A product partner follows up by email<br />
                    3. We schedule a quick intro call if it’s a fit
                  </p>
                </div>
                <p style="margin:0;font-size:15px;line-height:1.7;color:#444">
                  Talk soon,<br />
                  <strong style="color:#111">The Product Partner team</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px 28px;border-top:1px solid #ececec">
                <p style="margin:0;font-size:12px;line-height:1.6;color:#8a8a8a">
                  You’re receiving this because you submitted the contact form on productpartner.net.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ?? "Product Partner <onboarding@resend.dev>";
    // const replyToTeam = process.env.CONTACT_REPLY_TO_EMAIL ?? toEmail;

    if (!apiKey || !toEmail) {
      return NextResponse.json(
        { error: "Contact email is not configured yet." },
        { status: 500 },
      );
    }

    const body = (await request.json()) as ContactPayload;
    const firstName = body.firstName?.trim() ?? "";
    const lastName = body.lastName?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "First name, last name, and email are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
    }

    const fullName = `${firstName} ${lastName}`.trim();
    const submittedAt = new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    }).format(new Date());

    const resend = new Resend(apiKey);

    const { error: leadError } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New lead: ${fullName}${company ? ` · ${company}` : ""}`,
      text: [
        "New contact form inquiry — Product Partner",
        `Submitted: ${submittedAt}`,
        "",
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Company: ${company || "Not provided"}`,
        "",
        "Message:",
        message || "No message provided.",
      ].join("\n"),
      html: buildLeadEmailHtml({
        fullName,
        email,
        company,
        phone,
        message,
        submittedAt,
      }),
    });

    if (leadError) {
      console.error("Resend lead error:", leadError);
      return NextResponse.json(
        { error: "Could not send your message. Try again." },
        { status: 502 },
      );
    }

    // Thank-you auto-reply disabled for now
    // const { error: thankYouError } = await resend.emails.send({
    //   from: fromEmail,
    //   to: [email],
    //   replyTo: replyToTeam || undefined,
    //   subject: "Thanks for contacting Product Partner",
    //   text: [
    //     `Hi ${firstName},`,
    //     "",
    //     "Thanks for reaching out to Product Partner — we’ve received your message and will get back to you shortly.",
    //     "",
    //     "What happens next:",
    //     "1. We review your inquiry",
    //     "2. A product partner follows up by email",
    //     "3. We schedule a quick intro call if it’s a fit",
    //     "",
    //     "Talk soon,",
    //     "The Product Partner team",
    //   ].join("\n"),
    //   html: buildThankYouEmailHtml({ firstName, fullName }),
    // });
    //
    // if (thankYouError) {
    //   // Lead already delivered — don't fail the form on auto-reply issues
    //   console.error("Resend thank-you error:", thankYouError);
    // }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Try again." },
      { status: 500 },
    );
  }
}
