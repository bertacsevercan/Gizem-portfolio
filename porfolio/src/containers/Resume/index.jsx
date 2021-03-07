import React from "react";
import Image from "react-bootstrap/Image";
import TimelinePopover from "../../components/TimelinePopover";
import { useTranslation } from "react-i18next";
import { overlayProps } from "../../assets";
import pp from "../../images/ge_pp.jpeg";
import "./style.css";

const Resume = () => {
  const { t } = useTranslation();

  const popContent = [];

  for (let i = 0; i < overlayProps.direction.length; i++) {
    popContent.push({
      direction: overlayProps.direction[i],
      className: overlayProps.classNames[i],
      title: t(`resume.experiences.titles.${i}`),
      content: t(`resume.experiences.texts.${i}`),
    });
  }

  return (
    <div className="resume">
      <div className="timeline-wrapper">
        <div className="employment">
          <p>
            <b>{t("resume.heads.head0")}</b>
          </p>
        </div>
        <span id="lineVert"></span>
        {popContent.map((el, index) => (
          <TimelinePopover
            key={index}
            direction={el.direction}
            title={el.title}
            content={el.content}
            className={el.className}
          />
        ))}
        <div className="education">
          <p>
            <b>{t("resume.heads.head1")}</b>
          </p>
        </div>
      </div>
      <div className="img-text-wrapper">
        <Image id="profilePic" width="70%" src={pp} thumbnail />
        <p>
          <b>{t("resume.heads.head2")}</b>
        </p>
        <ul className="list">
          <li>AutoCAD</li>
          <li>SketchUp</li>
          <li>PhotoShop</li>
          <li>Lumion</li>
          <li>Revit</li>
          <li>Rhino (Grasshopper)</li>
          <li>Excel</li>
          <li>Primavera P6</li>
          <li>SAP2000</li>
          <li>Robot Structure</li>
        </ul>
        <p>
          <b>{t("resume.heads.head3")}</b>
        </p>
        <ul className="list">
          <li>{t("resume.langs.tr")}</li>
          <li>{t("resume.langs.en")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
