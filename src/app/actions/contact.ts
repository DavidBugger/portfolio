"use server";

import { createClient } from "../../lib/supabase/server";
import { Resend } from "resend";
import { Database } from "../../lib/supabase/types";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  try {
    // Save to Supabase
    const supabase = await createClient();
    const { error } = await (await supabase)
      .from("contact_submissions")
      .insert([{ name, email, subject, message }]);

    if (error) throw error;

    // Send email notification
    await resend.emails.send({
      from: "Portfolio Contact <noreply@devdavesolutions.com>",
      to: "devdavesolutions@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: \n${message}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return { success: false, message: "Failed to send message. Please try again." };
  }
}