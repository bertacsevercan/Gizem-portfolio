import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const SideNav = () => {
  const [navWidth, setNavWidth] = useState("20%");
  const [leftMargin, setLeftMargin] = useState("0");

  const toggleNav = () => {
    if (navWidth === 0) {
      setNavWidth("20%");
      setLeftMargin(0);
    } else {
      setNavWidth(0);
      setLeftMargin("20%");
    }
  };

  return (
    <div
      className="sideNav"
      style={{ width: navWidth, marginLeft: leftMargin }}
    >
      <div id="logo">
        <h1>LOGO</h1>
      </div>
      <div className="navLinks">
        <h1>TR/EN</h1>
        <h1>
          {
            <NavLink activeStyle={{ color: "grey" }} exact to="/">
              Home
            </NavLink>
          }
        </h1>
        <h1>
          {
            <NavLink activeStyle={{ color: "grey" }} to="/resume">
              Resume
            </NavLink>
          }
        </h1>
        <h1>
          {
            <NavLink activeStyle={{ color: "grey" }} to="/projects">
              Projects
            </NavLink>
          }
        </h1>
        <h1>
          {
            <NavLink activeStyle={{ color: "grey" }} to="/contact">
              Contact
            </NavLink>
          }
        </h1>
      </div>
      <button id="navToggler" onClick={toggleNav} />
    </div>
  );
};

export default SideNav;
