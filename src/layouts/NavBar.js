import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Navbar.css";

import logo from "../images/logo.png";

import Poland from "../images/poland.svg";
import GB from "../images/gb.svg";

import { useTranslation } from "react-i18next";

const lngs = [
  { code: "pl", native: Poland },
  { code: "eng", native: GB },
];

const Navs = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <Navbar
      expand="lg"
      className={
        scrolled ? "nav-size fixed-top navScroll" : "nav-size fixed-top navScroll"
      }
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            className="logo"
            src={logo}
            alt="adrian-dworak-react-developer"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#about" path="/about">
              {t("navAbout")}
            </Nav.Link>
            <Nav.Link href="#project"> {t("navProject")}</Nav.Link>
            <Nav.Link href="#skills"> {t("navSkills")}</Nav.Link>
            <Nav.Link href="#experience"> {t("navExperience")}</Nav.Link>
            <Nav.Link href="#contact"> {t("navContact")}</Nav.Link>
            {lngs.map((lng, i) => {
              const { code, native } = lng;
              return (
                <img
                  src={native}
                  style={{ paddingLeft: "5px", maxWidth: "25px" }}
                  onClick={() => handleTrans(code)}
                ></img>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
