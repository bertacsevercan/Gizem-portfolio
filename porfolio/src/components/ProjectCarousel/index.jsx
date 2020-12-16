import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";

const ProjectCarousel = () => {
  //map this!
  return (
    <div className="projectCarousel">
      <Carousel>
        <Carousel.Item>
          <img
            height="500px"
            className="d-block w-100"
            src="https://image.freepik.com/free-vector/flat-design-house-collection_23-2148683215.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="500px"
            className="d-block w-100"
            src="https://image.freepik.com/free-vector/flat-design-house-collection_23-2148683215.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="500px"
            className="d-block w-100"
            src="https://image.freepik.com/free-vector/flat-design-house-collection_23-2148683215.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
