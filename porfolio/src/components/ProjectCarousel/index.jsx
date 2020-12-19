import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselPictures from "../../CarouselPictures";
import "./style.css";

const ProjectCarousel = ({ projectId }) => {
  return (
    <div className="projectCarousel">
      <Carousel>
        {CarouselPictures[projectId].map((asset, index) => (
          <Carousel.Item key={index}>{asset}</Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
