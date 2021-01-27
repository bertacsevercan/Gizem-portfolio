import React from "react";
import ProjectBlock from "../../components/ProjectBlock";
import * as images from "../../CarouselPictures";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const ProjectGallery = ({ color, title, projectId }) => {
  return (
    <div className="projectGallery">
      <h4 className="projectTitle" style={{ backgroundColor: color }}>
        {title}
      </h4>

      <div className="projectImage">
        <Container>
          <Row>
            {images.imageLinks[projectId].map((image, index) => (
              <Col key={index}>
                <ProjectBlock image={image} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProjectGallery;
