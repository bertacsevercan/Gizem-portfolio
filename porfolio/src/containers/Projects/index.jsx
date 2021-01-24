import React from "react";
import ProjectGallery from "../ProjectGallery";
import * as assets from "../../assets";

const projectProps = [];

for (let i = 0; i < assets.projectInfo.title.length; i++) {
  projectProps.push({
    color: assets.colors[i],
    title: assets.projectInfo.title[i],
  });
}

const Projects = () => {
  return (
    <div className="projects">
      {projectProps.map((project, index) => (
        <ProjectGallery
          title={project.title}
          color={project.color}
          key={index}
          projectId={index}
        />
      ))}
    </div>
  );
};

export default Projects;
