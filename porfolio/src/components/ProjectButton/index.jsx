import React from "react";
import "./style.css";

const ProjectButton = ({ color }) => {
  return (
    <div className="projectButton" style={{ backgroundColor: color }}>
      <h1 id="arrow">&#10095;</h1>
    </div>
  );
};

export default ProjectButton;
