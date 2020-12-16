import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import Resume from "../Resume";
import Contact from "../Contact";
import Projects from "../Projects";
import SingleProject from "../SingleProject";
import "./style.css";

const MainContent = ({ mainWidth }) => {
  return (
    <div className="mainContent" style={{ width: mainWidth }}>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/project" component={SingleProject} />
    </div>
  );
};

export default MainContent;
