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
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1E293B;">
              <h2 style="color: #0D1117;">Hey ${name.trim().split(' ')[0]},</h2>
              <p>You're officially on the waitlist for CoreCV!</p>
              <p>We're building the ultimate AI career intelligence platform, and as a <strong>${career_position.trim()}</strong>, you'll be among the first to get access when we open the doors.</p>
              <p>In the meantime, keep an eye on your inbox. We'll be sending exclusive updates and inviting early access members soon.</p>
              <br/>
              <p>Best,</p>
              <p><strong>The CoreCV Team</strong></p>
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
