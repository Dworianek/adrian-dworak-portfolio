import "../styles/Experience.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t, i18n } = useTranslation();
  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <>
      <div className="experienceMain" id="experience">
        <Container>
          <Row className=" align-items-center">
            <Col xl={5}>
              <h2>{t("experienceHeader")}</h2>
              <p>{t("experienceText")}</p>
            </Col>
            <Col xl={7}>
              <Row className="align-items-center jobElement mt-3 pt-2 pb-2 ms-1 me-1">
                <Col md={3} sm={12} className="companyElement ps-3">
                  Bis-Biznes
                </Col>
                <Col md={6} sm={12}>
                  <Row className="positionElement ms-2">
                    {t("experienceWork1Header")}
                  </Row>
                  <Row className="ms-2">
                    <ul>
                      <li>{t("experienceWork1Li1")}</li>
                      <li>{t("experienceWork1Li2")}</li>
                      <li>{t("experienceWork1Li3")}</li>
                      <li>{t("experienceWork1Li4")}</li>
                      <li>{t("experienceWork1Li5")}</li>
                    </ul>
                  </Row>
                </Col>
                <Col md={3} sm={12} className="dateElementRed">
                  {t("experienceWork1Date")}
                </Col>
              </Row>
              <Row className="align-items-center jobElement mt-3 pt-2 pb-2 ms-1 me-1">
                <Col md={3} className="companyElement ps-3">
                  Serix
                </Col>
                <Col md={6}>
                  <Row className="positionElement ms-2">
                    {t("experienceWork2Header")}
                  </Row>
                  <Row className="ms-2">
                    <ul>
                      <li>{t("experienceWork2Li1")}</li>
                      <li>{t("experienceWork2Li2")}</li>
                      <li>{t("experienceWork2Li3")}</li>
                    </ul>
                  </Row>
                </Col>
                <Col md={3} className="dateElementBlue">
                  {t("experienceWork2Date")}
                </Col>
              </Row>
              <Row className="align-items-center jobElement mt-3 pt-2 pb-2 ms-1 me-1">
                <Col md={3} className="companyElement ps-3">
                  Freelancer
                </Col>
                <Col md={6}>
                  <Row className="positionElement ms-2">
                    {t("experienceWork3Header")}
                  </Row>
                  <Row className="ms-2">
                    <ul>
                      <li>{t("experienceWork3Li1")}</li>
                      <li>{t("experienceWork3Li2")}</li>
                      <li>{t("experienceWork3Li3")}</li>
                      <li>{t("experienceWork3Li4")}</li>
                    </ul>
                  </Row>
                </Col>
                <Col md={3} className="dateElementGreen">
                  {t("experienceWork3Date")}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Experience;
