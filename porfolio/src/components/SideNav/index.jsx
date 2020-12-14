import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import i18next from "i18next";
import "./style.css";

const SideNav = ({ setMainWidth }) => {
  const { t } = useTranslation();
  const [navWidth, setNavWidth] = useState("20%");

  const toggleNav = () => {
    if (navWidth === 0) {
      setNavWidth("20%");
      setMainWidth("60%");
    } else {
      setNavWidth(0);
      setMainWidth("80%");
    }
  };

  return (
    <div className="sideNav" style={{ width: navWidth }}>
      <div className="buttonLogo">
        <button id="navToggler" onClick={toggleNav}>
          &#9776;
        </button>
        <div id="logo">
          <h4>LOGO</h4>
        </div>
      </div>
      <div className="navLinks">
        <h4>TR/EN</h4>
        <h4>
          {
            <NavLink activeStyle={{ color: "grey" }} exact to="/">
              {t("home.title")}
            </NavLink>
          }
        </h4>
        <h4>
          {
            <NavLink activeStyle={{ color: "grey" }} to="/resume">
              {t("resume.title")}
            </NavLink>
          }
        </h4>
        <h4>
          {
            <NavLink activeStyle={{ color: "grey" }} to="/projects">
              {t("projects.title")}
            </NavLink>
          }
        </h4>
        <h4>
          {
            <NavLink activeStyle={{ color: "grey" }} to="/contact">
              {t("contact.title")}
            </NavLink>
          }
        </h4>
      </div>
    </div>
  );
};

export default SideNav;

/*
<NavDropdown
              title={<MdLanguage style={{ transform: "scale(1.5)" }} />}
              drop="left"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                id="tr"
                onClick={() => {
                  i18next.changeLanguage("tr");
                  setExpanded(false);
                }}
                href="#action/3.1"
              >
                {t("navbar.languages.tr")}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                id="en"
                onClick={() => {
                  i18next.changeLanguage("en");
                  setExpanded(false);
                }}
                href="#action/3.2"
              >
                {t("navbar.languages.en")}
              </NavDropdown.Item>
            </NavDropdown>
            */
