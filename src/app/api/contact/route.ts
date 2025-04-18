import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message, recipient } = await req.json();

    // Validierung der Eingabedaten
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Bitte fülle alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // E-Mail-Transporter erstellen
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: false, // true für 465, false für andere Ports
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com', // Falls keine Umgebungsvariable gesetzt ist
        pass: process.env.EMAIL_PASSWORD || 'your-password', // Falls keine Umgebungsvariable gesetzt ist
      },
    });

    // E-Mail konfigurieren
    const mailOptions = {
      from: `"Coffely Website" <${process.env.EMAIL_USER || 'your-email@gmail.com'}>`,
      to: recipient || 'manuel@worlitzer.de',
      subject: `Neue Nachricht von ${name} über Coffely Website`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #B45309;">Neue Nachricht über Coffely Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #B45309;">
            <p><strong>Nachricht:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    };

    // E-Mail senden
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Nachricht erfolgreich gesendet!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('E-Mail konnte nicht gesendet werden:', error);
    return NextResponse.json(
      { message: 'Beim Senden der Nachricht ist ein Fehler aufgetreten.' },
      { status: 500 }
    );
  }
} 