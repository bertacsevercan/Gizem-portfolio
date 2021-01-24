import React from "react";
import Carousel from "react-bootstrap/Carousel";
import * as images from "../../CarouselPictures";
import "./style.css";

const ProjectCarousel = ({ projectId }) => {
  return (
    <div className="projectCarousel">
      <Carousel>
        {images.imageLinks[projectId].map((asset, index) => (
          <Carousel.Item key={index}>
            <img
              height="550px"
              className="d-block w-100"
              src={asset}
              alt="Project"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
