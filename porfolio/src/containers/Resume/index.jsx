import React from "react";
import Image from "react-bootstrap/Image";
import TimelinePopover from "../../components/TimelinePopover";
import { useTranslation } from "react-i18next";
import { overlayProps } from "../../assets";
import "./style.css";

const Resume = () => {
  const { t } = useTranslation();

  const popContent = [];

  for (let i = 0; i < overlayProps.direction.length; i++) {
    popContent.push({
      direction: overlayProps.direction[i],
      className: overlayProps.classNames[i],
      title: overlayProps.title[i],
      content: overlayProps.content[i],
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
        {popContent.map((el) => (
          <TimelinePopover
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
        <Image
          id="profilePic"
          width="30%"
          src="https://image.freepik.com/free-vector/architect-concept-illustration_114360-3042.jpg"
          thumbnail
        />
        <p>
          <b>{t("resume.heads.head2")}</b>
        </p>
        <p>
          <b>{t("resume.heads.head3")}</b>
        </p>
      </div>
    </div>
  );
};

export default Resume;
