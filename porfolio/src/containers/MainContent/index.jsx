import React from "react";
import Route from "react-router-dom";
import Home from "./containers/Home";
import Resume from "./containers/Resume";
import Contact from "./containers/Contact";
import Projects from "./containers/Projects";

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
