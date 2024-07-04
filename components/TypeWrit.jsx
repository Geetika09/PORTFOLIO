import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => (
  <Typewriter
    options={{
      strings: [
        "Software Developer",
        "MERN Stack Developer",
        "Open Source Contributor",
        "Full Stack Developer",
        "Cyber Security Enthusiast",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 30,
    }}
  />
);

export default Type;
