import { createTransport } from "nodemailer";

// Create a Nodemailer transporter
const transporter = createTransport({
  service: "Gmail",
  auth: {
    user: "juniorworku@gmail.com", // Your email address
    pass: "11603160", // Your email password
  },
});

// Route handler for handling email submission
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  try {
    // Send email
    await transporter.sendMail({
      from: email,
      to: "juniorworku@gmail.com", // Recipient email address
      subject: "New message from your website",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Message: ${message}
      `,
    });

    // Email sent successfully
    res.status(200).json({ success: true });
  } catch (error) {
    // Error sending email
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Error sending email" });
  }
});
