import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import Resume from "../Resume";
import Contact from "../Contact";
import Projects from "../Projects";
import "./style.css";

const MainContent = () => {
  return (
    <div className="mainContent">
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </div>
  );
};

export default MainContent;
