import "../styles/Projects.css";
import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Project from "../components/Project";

import project1_photo from "../images/test.jpg";

import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  const project_base = [
    {
      name: t("project1Header"),
      desc: t("project1Text"),
      link: t("projectButton"),
      photo: project1_photo,
    },
    {
      name: t("project2Header"),
      desc: t("project2Text"),
      link: t("projectButton"),
      photo: project1_photo,
    },
    {
      name: t("project3Header"),
      desc: t("project3Text"),
      link: t("projectButton"),
      photo: project1_photo,
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
