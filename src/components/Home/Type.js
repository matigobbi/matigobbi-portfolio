import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Teaching Assistant at Ironhack",
          "Full stack Developer",
          "Front-end Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        
      }}
    />
  );
}

export default Type;
