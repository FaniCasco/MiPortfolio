// api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, lastname, email, message } = req.body;

    // Configura el transporter (usa Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: `"Formulario Contacto" <${process.env.GMAIL_USER}>`,
        to: process.env.TU_EMAIL,
        subject: `Nuevo mensaje de ${name}`,
        html: `
          <p>Nombre: ${name} ${lastname}</p>
          <p>Email: ${email}</p>
          <p>Mensaje: ${message}</p>
        `
      });
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}