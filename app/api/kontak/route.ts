import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    
    const { name, email, subject, message } = await request.json();

    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nama, email, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, 
      to: "hilmimithwa@gmail.com",               
      replyTo: email,                              
      subject: `[Website Message] ${subject || "Pesan Baru"}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #990011;">Pesan Baru dari PT Trisentosa Raya Esolusi</h2>
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email Pengirim:</strong> ${email}</p>
          <p><strong>Subjek:</strong> ${subject || "-"}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Pesan:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Pesan berhasil terkirim!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json(
      { error: "Gagal mengirim email, silakan coba lagi." },
      { status: 500 }
    );
  }
}