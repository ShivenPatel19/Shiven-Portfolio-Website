import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { name, email, subject, message, recipient } = await req.json();

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service (e.g., Gmail)
      auth: {
        user: process.env.EMAIL_USER, // Environment variable for sender email
        pass: process.env.EMAIL_PASS, // Environment variable for sender password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender email (your Gmail)
      to: recipient || "shivenpatel1963@gmail.com", // Recipient email (default to this if not provided)
      subject: subject || "New Inquery Form Submission", // Subject from form or default
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `, // Email body with form data
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}