import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");
  const { name, email, what, memory } = await req.json();

  if (!name || !email || !what) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Simpático Records <hello@simpaticorecords.com>",
    to: "hello@simpaticorecords.com",
    replyTo: email,
    subject: `Tape submission from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      ``,
      `What they have:`,
      what,
      ``,
      memory ? `A memory:\n${memory}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
