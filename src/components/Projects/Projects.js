import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fahrrad from "../../Assets/Projects/fahrrad.jpg";
import architrap from "../../Assets/Projects/architrap.JPG";
import goalkeeper from "../../Assets/Projects/goalkeeper.JPG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fahrrad}
              title="Fahrrad Market"
              description="Application to be able to publish and search for bikes. my first application using react, Mongo DB, and Node.js. It has: User log in, My profile, Like buttons, filters, search bar, etc."
              ghLink="https://github.com/matigobbi/fahrradmarket"
              demoLink="https://fahrradmarket.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Architrap"
              imgPath={architrap}
              description="website for architects immersed in the job market to leave reviews about their former employers and share comments."
              ghLink="https://github.com/tkyngw/architrap"
              demoLink="http://architrap.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              imgPath={goalkeeper}
              title="The goalkeeper || Game"
              description="Soccer penalty game, which has a history behind it. Javascript, canva, p5 are the resources used to build it."
              ghLink="https://github.com/matigobbi/my-Futgame"
              demoLink="https://matigobbi.github.io/my-Futgame/index1.html"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
