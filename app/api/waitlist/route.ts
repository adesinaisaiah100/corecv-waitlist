import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
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
        // Unique constraint violation — email already exists
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

    // TODO: Send confirmation email here (you'll guide on provider)
    // await sendConfirmationEmail({ name, email });

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
