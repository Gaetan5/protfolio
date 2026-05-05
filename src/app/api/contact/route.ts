import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    // Validation
    if (!email) {
      return NextResponse.json({ error: "L'adresse email est manquante" }, { status: 400 });
    }
    if (!message) {
      return NextResponse.json({ error: 'Le message est vide' }, { status: 400 });
    }

    // Validation email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Format email invalide' }, { status: 400 });
    }

    // Configuration du transporteur (Gmail) en forçant IPv4 pour éviter ENETUNREACH
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER?.trim(),
        pass: process.env.EMAIL_PASS?.trim(),
      },
      // Force IPv4 (important pour Render)
      // @ts-ignore
      family: 4,
    });

    // Vérification de la connexion avant l'envoi
    try {
      await transporter.verify();
    } catch (verifyError: any) {
      console.error('Erreur de vérification SMTP:', verifyError);
      return NextResponse.json({ error: `Erreur Gmail: ${verifyError.message}` }, { status: 500 });
    }

    // Envoi de l'email à vous-même
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🚀 Nouveau message de ${email}`,
      text: `Nouveau message depuis votre portfolio\n\nDe: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #06b6d4;">Nouveau message depuis votre portfolio</h2>
          <p><strong>De:</strong> ${email}</p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin-top: 10px;">
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email envoyé avec succès' },
      { status: 200 },
    );
  } catch (error: any) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email", details: error.message },
      { status: 500 },
    );
  }
}
