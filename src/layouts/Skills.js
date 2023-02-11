import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";

import Skill from "../components/Skill";

import { useTranslation } from "react-i18next";

import "../styles/Skills.css";

import ReactI from "../images/icons skills/react-icon.svg";
import ReactRouter from "../images/icons skills/react-router-icon.svg";
import Html from "../images/icons skills/html-icon.svg";
import Css from "../images/icons skills/css-icon.svg";
import Javascript from "../images/icons skills/javascript-icon.svg";
import Bootstrap from "../images/icons skills/bootstrap-icon.svg";
import Git from "../images/icons skills/git-icon.svg";
import GitHub from "../images/icons skills/github-icon.svg";
import vsCode from "../images/icons skills/vscode-icon.svg";
import Wordpress from "../images/icons skills/wordpress-icon.svg";
import Photoshop from "../images/icons skills/photoshop-icon.svg";
import SEO from "../images/icons skills/seo-icon.svg";

const skills_list = [
  { name: "React", icon: ReactI },
  { name: "React Router", icon: ReactRouter },
  { name: "HTML", icon: Html },
  { name: "CSS", icon: Css },
  { name: "JavaScript", icon: Javascript },
  { name: "Bootstrap", icon: Bootstrap },
  { name: "Git", icon: Git },
  { name: "GitHub", icon: GitHub },
  { name: "vs Code", icon: vsCode },
  { name: "Wordpress", icon: Wordpress },
  { name: "Photoshop", icon: Photoshop },
  { name: "SEO", icon: SEO },
];

const Skills = () => {
  const skills = skills_list.map((skill) => (
    <Skill key={skill.name} {...skill} />
  ));

  const { t, i18n } = useTranslation();
  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <>
      <div className="skillsMain" id="skills">
        <Container>
          <h2> {t("skillsHeader")}</h2>
          <p> {t("skillsText")}</p>
          <div>
            <Row xl={6} md={4} sm={3} xs={3}>
              {skills}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Skills;
