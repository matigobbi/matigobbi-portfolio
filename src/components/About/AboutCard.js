import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight2 } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, I am <span className="purple">Matías Gobbi </span>
            from <span className="purple"> Buenos Aires, Argentina</span>. Now living in<span className="purple"> Berlin, Germany.</span>
            <br />
            <br />
            I am a junior Developer who start coding since<span className="purple"> 1 year ago</span> . I worked in Hotels for 7 years, in diferent positions, and doing different tasks. 
            <br />
            <br />
            I decided to challenge myself, since I was tired of the routine and of jobs that did not contribute much to my professional development. 
            <br />
            I discovered that I have the ability to see different <span className="purple">solutions for the same problem,</span> to understand the complexity of the <span className="purple">flow of information within an application </span>, and to see the <span className="purple">big picture</span> to later understand the small steps.            <br />
            <br />
            I completed a bootcamp in <span className="purple">Ironhack</span> in May as student, and then, and after that I <span className="purple"> became </span> teacher assistant of it.
            <br />
            In the process of helping the student,i´m going trougth the course several times, thats helps me to <span className="purple">go deeper </span>in every topic, <span className="purple">improve my debugger skills</span> ,develop my <span className="purple">patience</span> and improve my <span className="purple">listening </span>when students explain to me their problems in the applications so that I can provide them with solutions.
            <br />
            <br />
            Since I started to code, Im improving these skills:
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight2 /> <span className="purple">Language acquisition</span>.
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> <span className="purple">Innovative thinking</span>.
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> <span className="purple">Communication</span>.
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> <span className="purple">Patience</span>.
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> <span className="purple">Complex problem solving</span>.
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> <span className="purple">Listening</span>.
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> <span className="purple">Face the Unkown</span>.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", paddingTop:"50px"}}>
            "You can build things easily. Click on the wallpaper to create ;) ."{" "}
          </p>
        </blockquote>
    </Card>
  );
}

export default AboutCard;
