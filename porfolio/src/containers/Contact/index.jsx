import React from "react";
import ContactForm from "../../components/ContactForm";
import ContactInfo from "../../components/ContactInfo";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <Row id="rowForm">
          <Col>
            <ContactForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <ContactInfo />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
