import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

export async function POST(req: NextRequest) {
  try {
    const { email, locale } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Configuration du transporteur (Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Mot de passe d'application Google
      },
    });

    const cvPath = path.join(process.cwd(), 'public', 'Gaetan Ekoro CV 1.pdf');
    
    // Vérifier si le fichier existe
    if (!fs.existsSync(cvPath)) {
      console.error('CV file not found at:', cvPath);
      return NextResponse.json({ error: 'CV file not found' }, { status: 500 });
    }

    const messages = {
      fr: {
        subject: 'Mon CV - Gaëtan Ekoro',
        text: 'Bonjour,\n\nMerci d\'avoir consulté mon portfolio et d\'avoir téléchargé mon CV. Vous le trouverez en pièce jointe de cet e-mail.\n\nN\'hésitez pas à me recontacter pour toute opportunité.\n\nCordialement,\n\nGaëtan Ekoro',
      },
      en: {
        subject: 'My CV - Gaëtan Ekoro',
        text: 'Hello,\n\nThank you for visiting my portfolio and downloading my CV. You will find it attached to this email.\n\nFeel free to contact me for any opportunities.\n\nBest regards,\n\nGaëtan Ekoro',
      }
    };

    const currentMessage = messages[locale as keyof typeof messages] || messages.fr;

    // Envoi de l'email
    await transporter.sendMail({
      from: `"Gaëtan Ekoro" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: currentMessage.subject,
      text: currentMessage.text,
      attachments: [
        {
          filename: 'Gaëtan Ekoro CV.pdf',
          path: cvPath,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
