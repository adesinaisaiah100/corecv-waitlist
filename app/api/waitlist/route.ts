import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const resendKey = process.env.RESEND_API_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase environment variables.");
      return NextResponse.json(
        { error: "Server misconfiguration. Please try again later." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const resend = resendKey ? new Resend(resendKey) : null;

    const { name, email, career_position } = await req.json();

    // Basic validation
    if (!name || !email || !career_position) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { error } = await supabase.from("waitlist_signups").insert([
      {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        career_position: career_position.trim(),
      },
    ]);

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "You're already on the waitlist! We'll be in touch." },
          { status: 409 }
        );
      }
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    // Send confirmation email via Resend
    if (resend) {
      try {
        await resend.emails.send({
          from: "CoreCV <hello@corecv.app>", // Update with your verified domain
          to: email.trim().toLowerCase(),
          subject: "You're on the list! Welcome to CoreCV",
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0D1117; color: #F1F5F9; border-radius: 12px; overflow: hidden; border: 1px solid #1E293B;">
              <div style="background-color: #1A2235; padding: 32px 24px; text-align: center; border-bottom: 2px solid #10B981;">
                <h1 style="margin: 0; color: #FFFFFF; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">Core<span style="color: #10B981;">CV</span></h1>
              </div>
              <div style="padding: 40px 32px;">
                <h2 style="color: #F8FAFC; margin-top: 0; font-size: 20px;">Hey ${name.trim().split(' ')[0]},</h2>
                <p style="font-size: 16px; line-height: 1.6; color: #94A3B8;">You're officially on the waitlist for CoreCV!</p>
                <p style="font-size: 16px; line-height: 1.6; color: #94A3B8;">We're building the ultimate AI career intelligence platform. As a <strong>${career_position.trim()}</strong>, you'll be among the first to get early access when we open the doors.</p>
                
                <div style="margin: 32px 0; padding: 24px; background-color: #0F172A; border: 1px solid #059669; border-radius: 8px; text-align: center;">
                  <p style="margin: 0; color: #10B981; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Status: Verified Early Access</p>
                </div>

                <p style="font-size: 16px; line-height: 1.6; color: #94A3B8;">In the meantime, keep an eye on your inbox. We'll be sending exclusive updates and inviting early access members soon.</p>
                <br/>
                <p style="font-size: 16px; color: #F8FAFC; margin-bottom: 4px;">Best,</p>
                <p style="font-size: 16px; color: #10B981; font-weight: bold; margin-top: 0;">The CoreCV Team</p>
              </div>
              <div style="padding: 24px; text-align: center; background-color: #0B0E14; border-top: 1px solid #1E293B;">
                <p style="margin: 0; font-size: 12px; color: #64748B;">© 2026 CoreCV. All rights reserved.</p>
                <p style="margin: 6px 0 0; font-size: 12px; color: #64748B;">Talent is universal. Opportunity should be too.</p>
              </div>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
        // We still return 200 success because the db insert worked
      }
    } else {
      console.warn("RESEND_API_KEY is not set. Skipping confirmation email.");
    }

    return NextResponse.json(
      { message: "You're on the list! We'll be in touch soon." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
