import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Backend Developer",
          "PHP/Laravel Developer",
          "Smart Contract Auditor",
          "Python Developer",
          "MEAN/MERN Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
