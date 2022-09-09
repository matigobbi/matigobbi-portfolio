import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight2 } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Matias Gobbi </span>
            from <span className="purple"> Buenos Aires, Argentina</span>. But i´d say im from <span className="purple">the World.</span>
            <br />I am a junior Developer who start coding since 1 year ago.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight2 /> Play Computer Games
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Bike, bike, bike
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Inline Skate
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You can build things easily. I'll give you a hint: Click on the wallpaper to create."{" "}
          </p>
        </blockquote>
    </Card>
  );
}

export default AboutCard;
