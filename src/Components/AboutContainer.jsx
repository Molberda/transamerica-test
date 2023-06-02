import { ExpandMore } from "@mui/icons-material";
import React from "react";

const AboutContainer = () => {
  return (
    <div className="about__container">
      <p className="about__text">
        Your <span className="highlight">Financial Advisor</span> and{" "}
        <span className="highlight">Life Insurance Agent</span>. <br /> I'm eager to
        help new families manage their economic life aswell as provide guidance
        and safe financial vehicles to <span className="highlight">create</span>{" "}
        and <span className="highlight">protect</span> your life's work and
        effort
      </p>
      <ExpandMore />
    </div>
  );
};

export default AboutContainer;
