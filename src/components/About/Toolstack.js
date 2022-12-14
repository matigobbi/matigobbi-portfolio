import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiHeroku,
  SiPostman,
  SiNetlify
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiNetlify />
      </Col>
    </Row>
  );
}

export default Toolstack;
