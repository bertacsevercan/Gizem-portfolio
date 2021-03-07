import React from "react";
import ProjectBlock from "../../components/ProjectBlock";
import * as images from "../../CarouselPictures";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { useTranslation } from "react-i18next";

const ProjectGallery = ({ color, projectId }) => {
  const { t } = useTranslation();

  return (
    <div className="projectGallery">
      <h4 className="projectTitle" style={{ backgroundColor: color }}>
        {t(`projects.heads.${projectId}`)}
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
