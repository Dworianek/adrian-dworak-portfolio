import "../styles/Projects.css";
import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Project from "../components/Project";

import project1_photo from "../images/projects/Projekt1.JPG";
import project2_photo from "../images/projects/Projekt2.JPG";
import project3_photo from "../images/projects/Projekt3.JPG";
import project4_photo from "../images/projects/Projekt4.JPG";
import project5_photo from "../images/projects/Projekt5.JPG";
import project6_photo from "../images/projects/Projekt6.JPG";

import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  const project_base = [
    {
      name: t("project5Header"),
      desc: t("project5Text"),
      linkGithub: "https://github.com/Dworianek/pokedex",
      linkPage: "https://dworianek.github.io/pokedex/",
      photo: project5_photo,
    },
    {
      name: t("project1Header"),
      desc: t("project1Text"),
      linkGithub: "https://github.com/Dworianek/grafik-pracowniczy",
      linkPage: "https://dworianek.github.io/grafik-pracowniczy/",
      photo: project1_photo,
    },
    {
      name: t("project4Header"),
      desc: t("project4Text"),
      linkGithub: "https://github.com/Dworianek/weather-app",
      linkPage: "https://dworianek.github.io/weather-app/",
      photo: project4_photo,
    },
    {
      name: t("project6Header"),
      desc: t("project6Text"),
      linkGithub: "https://github.com/Dworianek/mood-app",
      linkPage: "https://dworianek.github.io/mood-app/",
      photo: project6_photo,
    },
    {
      name: t("project2Header"),
      desc: t("project2Text"),
      linkGithub: "https://github.com/Dworianek/password_generator",
      linkPage: "https://dworianek.github.io/password_generator/",
      photo: project3_photo,
    },
    {
      name: t("project3Header"),
      desc: t("project3Text"),
      linkGithub: "https://github.com/Dworianek/rgb-guessr",
      linkPage: "https://dworianek.github.io/rgb-guessr/",
      photo: project2_photo,
    },
  ];

  const projects = project_base.map((project) => (
    <Project key={project.name} {...project} />
  ));

  return (
    <div className="projectsList" id="project">
      <Container>
        <h2>{t("projectHeader")}</h2>
        <p>{t("projectText")}</p>
        <Row xl={3} md={2} sm={1} xs={1}>
          {projects}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
