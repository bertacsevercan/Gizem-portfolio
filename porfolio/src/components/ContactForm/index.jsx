import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { FaLevelDownAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./style.css";

const ContactForm = () => {
  const { t } = useTranslation();
  const [alertSuccessVisible, setAlertSuccessVisible] = useState(false);
  const [alertDangerVisible, setAlertDangerVisible] = useState(false);

  const alertSuccess = () => {
    return (
      <>
        <Alert
          className="alert"
          onClose={() => setAlertSuccessVisible(false)}
          dismissible={true}
          variant="success"
        >
          Your message has been sent successfully!
        </Alert>
      </>
    );
  };
  const alertDanger = () => {
    return (
      <>
        <Alert
          className="alert"
          onClose={() => setAlertDangerVisible(false)}
          dismissible={true}
          variant="danger"
        >
          Oops! Something went wrong...
        </Alert>
      </>
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "bertac_gmail_service",
        "gizem_template",
        e.target,
        "user_icsRtRZUExukm03DQEvYf"
      )
      .then((response) => {
        setAlertSuccessVisible(true);
        console.log(response.text);
      })
      .catch((err) => {
        setAlertDangerVisible(true);
        console.log(err.text);
      });
    e.target.reset();
  };

  return (
    <div className="contact">
      {alertSuccessVisible ? alertSuccess() : null}
      {alertDangerVisible ? alertDanger() : null}
      <h1>
        {t("contact.titles.title0")}
        <FaLevelDownAlt />{" "}
      </h1>
      <Form name="contact" onSubmit={sendEmail}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t("contact.labels.label0")}</Form.Label>
          <Form.Control
            name="sender_mail"
            type="email"
            required={true}
            placeholder={t("contact.placeholders.holder0")}
          />
        </Form.Group>
        <Form.Group controlId="formInputName">
          <Form.Label>{t("contact.labels.label1")}</Form.Label>
          <Form.Control
            name="sender_name"
            placeholder={t("contact.placeholders.holder1")}
            required={true}
          />
        </Form.Group>
        <Form.Group controlId="formInputSubject">
          <Form.Label>{t("contact.labels.label2")}</Form.Label>
          <Form.Control
            name="subject"
            placeholder={t("contact.placeholders.holder2")}
            required={true}
          />
        </Form.Group>
        <Form.Group controlId="form.ControlTextarea">
          <Form.Label>{t("contact.labels.label3")}</Form.Label>
          <Form.Control
            name="message"
            required={true}
            placeholder={t("contact.placeholders.holder3")}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button variant="danger" type="submit" block>
          {t("contact.button")}
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
