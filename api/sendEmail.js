import { createTransport } from "nodemailer";

const transporter = createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "juniorworku@gmail.com", // Your email address
        pass: "vwvt xfoc wqkd ljes", // Your email password
    },
  });

const mailOptions = {
    from: "juniortheadvocate@gmail.com",
    to: "juniorworku@gmail.com", // Recipient email address
    subject: "New message from your website",
    text: `
        Name: "Dagmawi Worku"
        Email: "juniortheadvocate@gmail.com"
        Message: "Hello from Nodemailer, This is a test email sent using Nodemailer."
    `,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });