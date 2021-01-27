import React from "react";
import { Col, Image } from "react-bootstrap";

import "./style.css";

const ProjectBlock = ({ image }) => {
  return (
    /*  <Col> */
    <div className="projectBlock">
      <Image
        /* width="200px" */
        height="150px"
        className
        src={image}
        alt="Project"
        rounded
      />
    </div>
    /* </Col> */
  );
};

export default ProjectBlock;
