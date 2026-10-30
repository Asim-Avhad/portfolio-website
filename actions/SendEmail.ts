"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";
import { getErrorMessage, isEmail, validateString } from "@/lib/utils";
import { site } from "@/lib/data";
import type { ContactState } from "@/lib/types";

/**
 * Server action behind the contact form.
 * Needs RESEND_API_KEY in .env.local (and in your hosting provider's env vars).
 */
export async function sendEmail(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real people never fill this hidden field.
  if (formData.get("company")) return { ok: true, message: "Thanks! I'll be in touch soon." };

  const name = formData.get("name");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(name, 120)) return { ok: false, message: "Please tell me your name." };
  if (!validateString(senderEmail, 320) || !isEmail(senderEmail)) return { ok: false, message: "That email address doesn't look right." };
  if (!validateString(message, 5000)) return { ok: false, message: "Your message is empty or too long (5,000 characters max)." };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { ok: false, message: `The form isn't configured yet. Please email ${site.email} directly.` };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: site.email,
      subject: `New message from ${name.trim()}`,
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, { name: name.trim(), message, senderEmail }),
    });
    if (error) return { ok: false, message: error.message };
  } catch (error: unknown) {
    return { ok: false, message: getErrorMessage(error) };
  }

  return { ok: true, message: "Message sent, thank you! I'll get back to you soon." };
}
