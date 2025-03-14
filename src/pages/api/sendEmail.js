import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Configura CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { name, lastname, email, message } = req.body;

    // Validación básica
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Formulario Contacto" <${process.env.GMAIL_USER}>`,
      to: process.env.TU_EMAIL,
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error en API:', error);
    res.status(500).json({ error: error.message || 'Error interno del servidor' });
  }
}