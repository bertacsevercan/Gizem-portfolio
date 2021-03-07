import React from "react";
import ProjectGallery from "../ProjectGallery";
import * as assets from "../../assets";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const projectProps = [];

for (let i = 0; i < assets.colors.length -3; i++) {
  projectProps.push({
    color: assets.colors[i],
  });
}

const Projects = () => {
  return (
    <div className="projects">
      <Container>
        {projectProps.map((project, index) => (
          <ProjectGallery
            color={project.color}
            key={index}
            projectId={index}
          />
        ))}
      </Container>
    </div>
  );
};

export default Projects;
