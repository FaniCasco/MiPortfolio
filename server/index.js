require('dotenv').config();
console.log('Usuario de Gmail:', process.env.GMAIL_USER); // Debe imprimir tu correo en la consola
console.log('Contraseña de Gmail:', process.env.GMAIL_PASS); // No debería ser undefinedcd 
console.log("Usuario SMTP:", `"${process.env.GMAIL_USER}"`);
console.log("Contraseña SMTP:", `"${process.env.GMAIL_PASS}"`);
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', methods: ['POST'] }));

const transporter = nodemailer.createTransport({
  
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false // Necesario para desarrollo
  },
  logger: true});

transporter.verify((error, success) => {
  if (error) {
    console.error('Error al conectar con el servidor SMTP:', error);
  } else {
    console.log('Servidor SMTP listo para enviar correos:', success);
  }
});

// Ruta para enviar emails (¡FALTABA ESTO!)
app.post('/api/sendEmail', async (req, res) => {
  try {
    const { name, lastname, email, message } = req.body;

    // Validación básica
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    // Configuración del correo
    const mailOptions = {
      from: `Formulario de Contacto <${process.env.GMAIL_USER}>`,
      to: process.env.TU_EMAIL,
      replyTo: `${name} ${lastname} <${email}>`,
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });

  } catch (error) {
    console.error('Error al enviar:', error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));