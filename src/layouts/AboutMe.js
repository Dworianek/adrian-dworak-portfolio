import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import "../styles/AboutMe.css";

import about from "../images/aboutMe.png";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [classNameImg, setClassNameImg] = useState("");
  const [classNameDesc, setClassNameDesc] = useState("");

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 992) {
      setClassNameImg("large-windowImg");
      setClassNameDesc("large-windowDesc");
    } else {
      setClassNameImg("small-windowImg");
      setClassNameDesc("small-windowDesc");
    }
  }, [windowWidth]);

  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };
  return (
    <>
      <div className="aboutMain" id="about">
        <Container>
          <Row className=" align-items-center">
            <Col className={classNameImg} lg={6}>
              <div className="aboutPhoto">
                <img src={about} alt="" />
              </div>
            </Col>
            <Col lg={6} className={classNameDesc}>
              <div className="aboutDescription ">
                <h1>{t("welcome")}</h1>
                <h3>{t("welcomeAdd")}</h3>
                <div className="aboutMeList">
                  <ul>
                    <li>
                      <span role="img" aria-label="Computer">
                        💻
                      </span>{" "}
                      {t("about1")}
                    </li>
                    <li>
                      <span role="img" aria-label="HeadPhones">
                        🎧
                      </span>{" "}
                      {t("about2")}
                    </li>
                    <li>
                      <span role="img" aria-label="Pizza">
                        🍕
                      </span>{" "}
                      {t("about3")}
                    </li>
                    <li>
                      <span role="img" aria-label="Squash">
                        🏸
                      </span>
                      {t("about4")}
                    </li>
                  </ul>
                </div>
                <a href="http://adriandworak.pl/wp-content/uploads/2023/12/Adrian-Dworak-CV-2023.pdf">
                  <button className="btn-cv-hover btn-cv">
                    {" "}
                    {t("cvText")}
                  </button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutMe;
