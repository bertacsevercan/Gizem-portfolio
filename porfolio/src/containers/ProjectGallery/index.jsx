import React from "react";
import ProjectBlock from "../../components/ProjectBlock";
import * as images from "../../CarouselPictures";
import "./style.css";

const ProjectGallery = ({ color, title, projectId }) => {
  return (
    <div className="projectGallery">
      <h4 className="projectTitle" style={{ backgroundColor: color }}>
        {title}
      </h4>

      <div className="projectImage">
        {images.imageLinks[projectId].map((image) => (
          <ProjectBlock image={image} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
