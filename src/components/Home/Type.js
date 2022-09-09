import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Teacher Assistant from Ironhack",
          "Ironhack WebDev",
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
