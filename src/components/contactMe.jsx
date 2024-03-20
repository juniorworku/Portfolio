import { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import check from "../images/check-mark.png";

function ContactMeSection() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    message: Yup.string().required("Message is Required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        resetForm();
        setTimeout(() => {
          setSubmissionStatus(null);
        }, 5000);
      } else {
        setSubmissionStatus("error");
        setTimeout(() => {
          setSubmissionStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      setSubmissionStatus("error");
    }
  };

  return (
    <div id="contact" className="container mx-auto px-4 text-center">
      <Typography variant="h3" color="blue-gray" className="mb-4">
        Contact me
      </Typography>
      <Typography className="mb-10 font-normal text-lg mx-auto max-w-3xl">
        Please don't hesitate to get in touch with me for any inquiries or
        potential collaborations
      </Typography>
      <div className="grid grid-cols-1 gap-6">
        <div className=" w-300 flex flex-col gap-4 m-auto">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <form>
              <Typography
                variant="h4"
                className="text-left font-semibold mb-4"
              >
                Get in touch
              </Typography>
              <div className="grid grid-cols-2 gap-4 text-black">
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium"
                  >
                    First Name
                  </Typography>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    as={Input}
                    className="focus:border-blacked"
                  />
                  <ErrorMessage name="firstName" className="text-red-500 font-normal" />
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium"
                  >
                    Last Name
                  </Typography>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    as={Input}
                    className="focus:border-blacked"
                  />
                  <ErrorMessage name="lastName" className="text-red-500 font-normal" />
                </div>
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium"
                >
                  Your Email
                </Typography>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  as={Input}
                  className="focus:border-blacked"
                />
                <ErrorMessage name="email" className="text-red-500 font-normal" />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium"
                >
                  Your Message
                </Typography>
                <Field
                  as={Textarea}
                  rows={6}
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="focus:border-blacked"
                />
                <ErrorMessage name="message" className="text-red-500 font-normal" />
              </div>
                <Button className="bg-indigo-300 rounded-full px-4 md:w-[12rem]" type="submit">
                  Send message
                </Button>
            </form>
          </Formik>
        </div>
        <div>
          {submissionStatus === "success" && (
            <div className="success-message">
              <div className="success-body">
                <img src={check} alt="success icon" className="success-icon" />
                Email sent successfully! I will get back to you as soon as possible
              </div>
              <div className="success-progress"></div>
            </div>
          )}
          {submissionStatus === "error" && (
            <div className="error-message">
              Error sending email. Please try again later.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactMeSection;
