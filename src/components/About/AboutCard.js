import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight2 } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, I am <span className="purple">Matías Gobbi </span>
            from <span className="purple"> Buenos Aires, Argentina</span>. But I´d say im from <span className="purple">the World.</span>
            <br />
            <br />
            I am a junior Developer who start coding since<span className="purple"> 1 year ago</span> . 
            <br />
            <br />
            I completed a bootcamp in <span className="purple">Ironhack</span> in May as student, and then, and after that I <span className="purple"> became </span> teacher assistant of it.
            <br />
            In the process of helping the student,i´m going trougth the course several times, thats helps me to <span className="purple">go deeper </span>in every topic, and improve my debugger skills. 
            <br />
            <br />
            Since I started to code, Im improving these skills:
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight2 /> <span className="purple">Language acquisition</span>
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> <span className="purple">Innovative thinking</span>: In an industry that evolves quickly, i should be able to keep current with the latest changes and updates in technology.
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> <span className="purple">Communication</span>: The ability to have positive and productive personal interactions
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> <span className="purple">Patience</span>: remain calm and focused even when i encounter a challenge.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You can build things easily. Click on the wallpaper to create ;) ."{" "}
          </p>
        </blockquote>
    </Card>
  );
}

export default AboutCard;
