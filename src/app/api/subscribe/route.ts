import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");
  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";
  const { email, tag } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  const { error } = await resend.contacts.create({
    audienceId: AUDIENCE_ID,
    email,
    unsubscribed: false,
  });

  if (error) {
    console.error("Resend contacts error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }

  // Tag via a notification email so we know the source
  await resend.emails.send({
    from: "Simpático Records <onboarding@resend.dev>",
    to: "mjvalmar70@gmail.com",
    subject: `New subscriber [${tag}]: ${email}`,
    text: `New email signup.\n\nEmail: ${email}\nSource: ${tag}`,
  });

  return NextResponse.json({ ok: true });
}
