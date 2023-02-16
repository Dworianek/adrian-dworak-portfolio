import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

import "../styles/Projects.css";

import Col from "react-bootstrap/Col";

import { FiGithub } from "react-icons/fi";
import { BiLink } from "react-icons/bi";

import React from "react";

const Project = (props) => {
  return (
    <>
      <div className="projectsElement">
        <Col className="mt-4">
          <Card>
            <Card.Img variant="top" src={props.photo} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>{props.desc}</Card.Text>
              <div className="d-flex justify-content-evenly">
              <Button href={props.linkGithub} target="_blank" variant="dark"><FiGithub
                  style={{
                    color: "white",
                    fontSize: "18px",
                  }}
                />Link do Github</Button>
              <Button href={props.linkPage} target="_blank" variant="dark"><BiLink
                  style={{
                    color: "white",
                    fontSize: "18px",
                  }}
                />Link do Projektu </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default Project;
