import * as Yup from "yup";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Formik } from "formik";

import "./Contact.css";
const Contact = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <div className="contact section" id="contact">
      <div className="contact-form">
        <div className="contact-form-title text-center">
          <h1>Contact Us</h1>
          <p> we are here to help you</p>
        </div>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            subject: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            if (values) {
              alert(
                "Thank you for contacting us. We will get back to you soon."
              );
            }
            setSubmitting(false);
          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form noValidate onSubmit={handleSubmit} className="form">
              <Row className="mb-15">
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="formBasicFullName"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={values.fullName}
                    onChange={handleChange}
                    isInvalid={!!errors.fullName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.fullName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mt-8">
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="formBasicSubject"
                  className="mb-3 custom-class"
                >
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={values.subject}
                    onChange={handleChange}
                    isInvalid={!!errors.subject}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.subject}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="formBasicMessage">
                  <Form.Control
                    as="textarea"
                    rows="3"
                    name="message"
                    placeholder="Write Message Here"
                    value={values.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="formBasicSubmit">
                  <Button
                    className="btn btn-main animated fadeInUp btn-round-full"
                    type="submit"
                    style={{ outline: "none", border: "none" }}
                  >
                    Submit
                  </Button>
                </Form.Group>
              </Row>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Contact;
