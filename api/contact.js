import { createTransport } from "nodemailer";

const emailPassword = process.env.EMAIL_PASS

const sendEmail= async(req, res) =>{
  const {firstName, lastName, email, message} = req.body;

  if(req.method === "POST"){
    try{
      const transporter =createTransport({  
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "juniorworku@gmail.com", // Your email address
          pass: emailPassword, // Your email password
        },
      });

      const mailOptions = {
        from: email,
        to: "juniorworku@gmail.com", // Recipient email address
        subject: "New message from your website",
        text: `
          Name: ${firstName} ${lastName},
          Email: ${email},
          Message: ${message}
        `,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email: ", error);
          res.status(500).json({ message: "Error sending email" });
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).json({ message: "Email sent successfully" });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error processing the form" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default sendEmail;
      
