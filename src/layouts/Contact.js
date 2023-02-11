import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import "../styles/Contact.css";

import { useTranslation } from "react-i18next";

import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

function Contact() {
  const { t, i18n } = useTranslation();
  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <>
      <div className="contactMain" id="contact">
        <Container>
          <hr></hr>
          <h2> {t("contactHeader")}</h2>
          <p>{t("contactText")}</p>
          <Row>
            <Col sm={12} md={6}>
              <div className="contactElement">
                <AiFillPhone
                  style={{
                    color: "#1f1f1f",
                    fontSize: "40px",
                  }}
                />
                <h3>{t("phone")}</h3>
                <p> +514-045-755</p>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="contactElement">
                <AiFillMail
                  style={{
                    color: "#1f1f1f",
                    fontSize: "40px",
                  }}
                />
                <h3>{t("email")}</h3>
                <p> adrian.dworak97@gmail.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Contact;
