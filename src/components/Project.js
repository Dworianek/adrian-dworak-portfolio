import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

import "../styles/Projects.css";

import Col from "react-bootstrap/Col";

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
              <Button variant="dark">{props.link}</Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default Project;
