require("dotenv").config();
const { Router } = require("express");
const { createTransport } = require("nodemailer");

const router = Router();

router.post("/api/v1/servicemail", async (req, res) => {
  /*
    #swagger.tags = ['Mailer']
    #swagger.security = [{"bearerAuth": []}]
  */
  try {
    const { recipient, subject, message } = await req.body;

    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"FBC Kosofe" <${process.env.SMTP_USER}>`,
      to: [recipient, process.env.SMTP_USER],
      subject,
      html: message,
    };
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error", error });
  }
});

router.post("/api/v1/supportmail", async (req, res) => {
  // #swagger.tags = ['Mailer']
  try {
    const { subject, full_name, email, message } = await req.body;

    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.SMTP_USER,
      subject: `${subject}: ${full_name || email}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error", error });
  }
});

module.exports = router;
