import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             <span className="purple"> INTRODUCING </span> MYSELF 
            </h1>
            <p className="home-about-body">
              From argentina based in Berlin ✨. Degree in <b className="purple">Tourism and Hotelery.</b>
              <br />
              I decided to look for a new challenge, become a <b className="purple">Web Developer</b> specialized in JS. Now learning everything about <b className="purple"> React, Node.js, MongoDb,</b> and others.
              <br />
              <br />
              Working for Ironhack Campus in Berlin, as <b className="purple"> Teacher Assistant </b> on Web Development Class. Helping about <b className="purple">15 students </b>
              who are doing a course of fulltime 10 weeks .
              <br />
              <br />
              In my <b className="purple">freetime</b>: Outdoor lover. Running 🏃‍♂️, Table tennis🏓, Frisbee🥏, Yoga 🧘‍♀️, are my main activities.
              <br />
              <br />
              Interested in new technologies, like<b className="purple"> TypeScript , Angular, Vue.js </b>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/matigobbi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/matigobbi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/matigobbi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Home2;
