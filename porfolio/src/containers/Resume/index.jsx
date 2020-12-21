import React from "react";
import Image from "react-bootstrap/Image";
import TimelinePopover from "../../components/TimelinePopover";
import { useTranslation } from "react-i18next";
import "./style.css";

const Resume = () => {
  const { t } = useTranslation();

  const overlayProps = [
    {
      direction: ["left", "left", "right", "right", "right", "right"],
      classNames: ["first", "second", "third", "fourth", "fifth", "sixth"],
      title: [
        "University",
        "University",
        "Internship",
        "Internship",
        "Internship",
        "Internship",
      ],
      content: [
        "And here's some amazing content. It's very engaging right?",
        "And here's some amazing content. It's very engaging right?",
        "And here's some amazing content. It's very engaging right?",
        "And here's some amazing content. It's very engaging right?",
        "And here's some amazing content. It's very engaging right?",
        "And here's some amazing content. It's very engaging right?",
      ],
    },
  ];
  const popContent = [];

  for (let i = 0; i < overlayProps[0].direction.length; i++) {
    popContent.push({
      direction: overlayProps[0].direction[i],
      className: overlayProps[0].classNames[i],
      title: overlayProps[0].title[i],
      content: overlayProps[0].content[i],
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
