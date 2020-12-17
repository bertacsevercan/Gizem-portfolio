import React from "react";
import { projectInfo } from "../../assets";

const ProjectInfo = ({ projectId }) => {
  return (
    <div className="projectInfo">
      <h4>{projectInfo.title[projectId]}</h4>
      <p>{projectInfo.text[projectId]}</p>
    </div>
  );
};

export default ProjectInfo;
