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

    const body = await req.json();
    const {
      name,
      email,
      role_type = "candidate",
      ref,
    } = body;

    // Common validations
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
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

    let positionToStore = "";

    if (role_type === "recruiter") {
      const { company_name, company_role, hiring_needs, phone } = body;
      if (!company_name || !company_role || !hiring_needs) {
        return NextResponse.json(
          { error: "Company name, role, and hiring requirements are required." },
          { status: 400 }
        );
      }
      positionToStore = `Recruiter: ${company_role} @ ${company_name} | Hiring: ${hiring_needs}${phone ? ` | Phone: ${phone}` : ""}`;
    } else {
      const { career_position, phone } = body;
      if (!career_position) {
        return NextResponse.json(
          { error: "Career profession is required." },
          { status: 400 }
        );
      }
      positionToStore = phone ? `${career_position.trim()} | Phone: ${phone.trim()}` : career_position.trim();
    }

    // Generate unique referral code (e.g., isaiah-4x9a)
    const firstName = name.trim().split(" ")[0].toLowerCase().replace(/[^a-z0-9]/g, "");
    const randomSuffix = Math.random().toString(36).substring(2, 6);
    const referralCode = `${firstName}-${randomSuffix}`;

    // Insert into Supabase
    const { error } = await supabase.from("waitlist_signups").insert([
      {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        career_position: positionToStore,
        referral_code: referralCode,
        referred_by: ref || null,
      },
    ]);

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "You're already registered! We'll be in touch soon." },
          { status: 409 }
        );
      }
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    // Process Referral Increment if applicable
    if (ref && role_type === "candidate") {
      const { data: inviter } = await supabase
        .from("waitlist_signups")
        .select("referral_count")
        .eq("referral_code", ref)
        .single();
      
      if (inviter) {
        await supabase
          .from("waitlist_signups")
          .update({ referral_count: (inviter.referral_count || 0) + 1 })
          .eq("referral_code", ref);
      }
    }

    // Get current total count for Rank
    const { count: totalWaitlist } = await supabase
      .from("waitlist_signups")
      .select("*", { count: "exact", head: true });

    // Send confirmation email via Resend
    if (resend) {
      try {
        if (role_type === "recruiter") {
          const { company_name, company_role, hiring_needs } = body;
          await resend.emails.send({
            from: "CoreCV <hello@corecv.app>",
            to: email.trim().toLowerCase(),
            subject: "Welcome to the CoreCV Founding Recruiter Network",
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0D1117; color: #F1F5F9; border-radius: 12px; overflow: hidden; border: 1px solid #1E293B;">
                <div style="background-color: #1A2235; padding: 32px 24px; text-align: center; border-bottom: 2px solid #10B981;">
                  <h1 style="margin: 0; color: #FFFFFF; font-size: 26px; font-weight: 800; letter-spacing: -0.5px;">CoreCV <span style="font-size: 14px; color: #10B981; font-weight: 600; text-transform: uppercase; margin-left: 8px;">For Recruiters</span></h1>
                </div>
                <div style="padding: 40px 32px;">
                  <h2 style="color: #F8FAFC; margin-top: 0; font-size: 20px;">Hello ${name.trim().split(' ')[0]},</h2>
                  <p style="font-size: 15px; line-height: 1.6; color: #94A3B8;">Thank you for registering <strong>${company_name}</strong> for early recruiter access to CoreCV.</p>
                  <p style="font-size: 15px; line-height: 1.6; color: #94A3B8;">CoreCV is designed to help hiring teams evaluate candidate proof—verifiable deployments, architectural contributions, and measurable metrics—instead of relying on keyword-stuffed resumes.</p>
                  
                  <div style="margin: 28px 0; padding: 20px; background-color: #0F172A; border: 1px solid #10B981; border-radius: 8px;">
                    <p style="margin: 0 0 6px 0; color: #10B981; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Access Tier: Priority Partner</p>
                    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Role: ${company_role} &bull; Hiring: ${hiring_needs}</p>
                  </div>

                  <p style="font-size: 15px; line-height: 1.6; color: #94A3B8;">A member of our team will reach out directly to schedule a private walkthrough and configure initial evidence matching for your active hiring pipeline.</p>
                  <br/>
                  <p style="font-size: 15px; color: #F8FAFC; margin-bottom: 4px;">Warm regards,</p>
                  <p style="font-size: 15px; color: #10B981; font-weight: bold; margin-top: 0;">The CoreCV Talent Team</p>
                </div>
                <div style="padding: 24px; text-align: center; background-color: #0B0E14; border-top: 1px solid #1E293B;">
                  <p style="margin: 0; font-size: 12px; color: #64748B;">© 2026 CoreCV Technologies. All rights reserved.</p>
                </div>
              </div>
            `,
          });
        } else {
          const { career_position } = body;
          await resend.emails.send({
            from: "CoreCV <hello@corecv.app>",
            to: email.trim().toLowerCase(),
            subject: "You're on the list! Welcome to CoreCV",
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0D1117; color: #F1F5F9; border-radius: 12px; overflow: hidden; border: 1px solid #1E293B;">
                <div style="background-color: #1A2235; padding: 32px 24px; text-align: center; border-bottom: 2px solid #10B981;">
                  <h1 style="margin: 0; color: #FFFFFF; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">CoreCV</h1>
                </div>
                <div style="padding: 40px 32px;">
                  <h2 style="color: #F8FAFC; margin-top: 0; font-size: 20px;">Hey ${name.trim().split(' ')[0]},</h2>
                  <p style="font-size: 16px; line-height: 1.6; color: #94A3B8;">You're officially on the waitlist for CoreCV!</p>
                  <p style="font-size: 16px; line-height: 1.6; color: #94A3B8;">We're building your professional record based on what you've actually done. As a <strong>${career_position}</strong>, you'll be among the first to get early access when we open the doors.</p>
                  
                  <div style="margin: 32px 0; padding: 24px; background-color: #0F172A; border: 1px solid #059669; border-radius: 8px; text-align: center;">
                    <p style="margin: 0; color: #10B981; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Status: Verified Early Access</p>
                  </div>

                  <p style="font-size: 16px; line-height: 1.6; color: #94A3B8;">Want to guarantee your Founding User spot and skip the line? Grab your unique invite link from your dashboard and refer 3 friends.</p>
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
        }
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
      }
    }

    return NextResponse.json(
      { 
        message: role_type === "recruiter"
          ? "Your recruiter access request has been received. We'll be in touch shortly."
          : "You're on the list! We'll be in touch soon.",
        referral_code: referralCode,
        rank: totalWaitlist || 1
      },
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
