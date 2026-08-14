import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.error("Missing RESEND_API_KEY in environment.");
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    const payload = await req.json();

    // Verify it's an email.received event
    if (payload.type !== "email.received" || !payload.data) {
      return NextResponse.json({ message: "Ignored event type" }, { status: 200 });
    }

    const emailId = payload.data.email_id || payload.data.id;
    if (!emailId) {
      return NextResponse.json({ error: "No email ID in payload" }, { status: 400 });
    }

    const resend = new Resend(resendKey);

    // Fetch full email content from Resend Receiving API
    const response = await fetch(`https://api.resend.com/emails/receiving/${emailId}`, {
      headers: {
        Authorization: `Bearer ${resendKey}`,
      },
    });

    if (!response.ok) {
      console.error("Failed to fetch received email from Resend:", await response.text());
      return NextResponse.json({ error: "Could not fetch email details" }, { status: 502 });
    }

    const emailData = await response.json();
    const sender = emailData.from || payload.data.from || "Unknown Sender";
    const recipient = Array.isArray(emailData.to) ? emailData.to.join(", ") : emailData.to || "hello@corecv.app";
    const subject = emailData.subject || payload.data.subject || "No Subject";
    const textContent = emailData.text || "";
    const htmlContent = emailData.html || `<div style="white-space: pre-wrap;">${textContent}</div>`;

    // Forward to Isaiah's personal inboxes (Primary: adesinaisaiah100@gmail.com)
    await resend.emails.send({
      from: "CoreCV Inbound <hello@corecv.app>",
      to: ["adesinaisaiah100@gmail.com", "wigoh100@gmail.com"],
      replyTo: sender,
      subject: `[CoreCV Inbound] ${subject} (to ${recipient})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0D1117; padding: 20px 24px; color: #FFFFFF; border-bottom: 2px solid #10B981;">
            <p style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #10B981; font-weight: bold;">New Incoming Message</p>
            <h2 style="margin: 6px 0 0; font-size: 18px; color: #F1F5F9;">Recipient: ${recipient}</h2>
          </div>
          <div style="padding: 20px 24px; background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0; font-size: 14px; color: #475569;">
            <p style="margin: 0 0 6px;"><strong>From:</strong> ${sender}</p>
            <p style="margin: 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="padding: 24px; background-color: #FFFFFF; color: #1E293B; font-size: 15px; line-height: 1.6;">
            ${htmlContent}
          </div>
          <div style="padding: 16px 24px; background-color: #F1F5F9; font-size: 12px; color: #64748B; border-top: 1px solid #E2E8F0;">
            Tip: You can hit <strong>Reply</strong> in your email client to respond directly to ${sender}.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, forwarded_to: ["adesinaisaiah100@gmail.com", "wigoh100@gmail.com"] }, { status: 200 });
  } catch (error) {
    console.error("Inbound email webhook error:", error);
    return NextResponse.json({ error: "Internal processing error" }, { status: 500 });
  }
}
