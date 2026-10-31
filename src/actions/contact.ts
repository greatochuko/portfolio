"use server";

import { Resend } from "resend";

const TO_EMAIL = "greatochuko123@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  // Returned on error so the form keeps what the visitor typed
  values?: { name: string; email: string; message: string };
};

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot filled: pretend success so bots move on
  if (formData.get("website")) return { status: "success" };

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const values = { name, email, message };

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in every field.", values };
  }
  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return {
      status: "error",
      message: "One of your entries is too long.",
      values,
    };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
      values,
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Portfolio <contact@greatochuko.com>",
      to: TO_EMAIL,
      replyTo: email,
      // Strip newlines so the name can't inject extra headers
      subject: `New message from ${name.replace(/[\r\n]+/g, " ")}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    if (error) throw new Error(error.message);

    return { status: "success", message: "Thanks! I'll get back to you soon." };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      status: "error",
      message: "Something went wrong. Please try again or email me directly.",
      values,
    };
  }
}
