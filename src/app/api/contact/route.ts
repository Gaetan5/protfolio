import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    // Validation
    if (!email || !message) {
      return NextResponse.json({ error: 'Email et message requis' }, { status: 400 });
    }

    // Validation email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Format email invalide' }, { status: 400 });
    }

    // Validation longueur
    if (message.length > 5000) {
      return NextResponse.json({ error: 'Message trop long' }, { status: 400 });
    }

    // Vérifier si Resend est configuré
    if (!resend) {
      return NextResponse.json(
        {
          error:
            'Service email non configuré. Veuillez contacter directement à gaetan.ekoro@gmail.com',
        },
        { status: 503 },
      );
    }

    // Envoi de l'email
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Remplacer par votre domaine vérifié
      to: ['gaetan.ekoro@gmail.com'],
      replyTo: email,
      subject: `Nouveau message de ${email} via Portfolio`,
      html: `
        <h2>Nouveau message depuis votre portfolio</h2>
        <p><strong>De:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email envoyé avec succès', data },
      { status: 200 },
    );
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email", details: error },
      { status: 500 },
    );
  }
}
