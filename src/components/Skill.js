import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";

import React from "react";

const Skill = (props) => {
  return (
    <>
      <Col className="mt-4">
        <div className="skillsElement">
          <img src={props.icon} alt="" style={{ height: "60px" }} />
          <h5>{props.name}</h5>
        </div>
      </Col>
    </>
  );
};

export default Skill;
