require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');

app.use(cors());
app.use(express.json());

app.post('/api/sendEmail', async (req, res) => {
  try {
    const { name, lastname, email, message } = req.body;
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
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
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));