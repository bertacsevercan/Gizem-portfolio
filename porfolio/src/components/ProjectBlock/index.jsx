import React from "react";
import "./style.css";

const ProjectBlock = ({ image }) => {
  return (
    <div className="projectBlock" style={{ width: "200px" }}>
      <img
        height="150px"
        className="d-block w-100"
        src={image}
        alt="First slide"
      />
    </div>
  );
};

export default ProjectBlock;
