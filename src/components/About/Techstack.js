import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiBootstrap,
  DiNpm
} from "react-icons/di";
import { SiTailwindcss, SiExpress } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiNpm />
      </Col>
    </Row>
  );
}

export default Techstack;
