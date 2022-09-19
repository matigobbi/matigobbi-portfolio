import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days i <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="matigobbi"
        blockSize={15}
        blockMargin={5}
        color="#c084f6"
        fontSize={13}
      />
    </Row>
  );
}

export default Github;
