import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, business, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const subject = business
      ? `New inquiry from ${name} — ${business}`
      : `New inquiry from ${name}`;

    const text = [
      `Name: ${name}`,
      business ? `Business: ${business}` : null,
      `Email: ${email}`,
      ``,
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    await resend.emails.send({
      from: "Aurentis <contact@aurentis.ca>",
      to: "aurentis.agency@gmail.com",
      replyTo: email,
      subject,
      text,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
