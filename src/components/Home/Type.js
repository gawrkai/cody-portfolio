import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-end Developer",
          "Angular Lover",
          "PHP/Laravel Developer",
          "Growing Smart Contract Developer and Auditor",
          "React, Vue enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
