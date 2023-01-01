import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Teaching Assistant at Ironhack",
          "Full stack Developer",
          "Enthusiastic, Dedicated, Problem solver.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        
      }}
    />
  );
}

export default Type;
