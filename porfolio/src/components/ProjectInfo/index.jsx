import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

const ProjectInfo = ({ projectId }) => {
  const { t } = useTranslation();

  return (
    <div className="projectInfo">
      <h4>{t(`projects.heads.${projectId}`)}</h4>
      <p>{t(`projects.texts.${projectId}`)}</p>
      <p>
        <b>{t(`projects.bolds.bold1`)}</b>{" "}
        {t(`projects.bolds.programs.${projectId}`)}
        {t(`projects.bolds.teams.${projectId}`) ? (
          <>
            {" "}
            &nbsp;&nbsp;
            <b>{t(`projects.bolds.bold0`)}</b>{" "}
            {t(`projects.bolds.teams.${projectId}`)}
          </>
        ) : null}
        {t(`projects.bolds.location.${projectId}`) ? (
          <>
            {" "}
            &nbsp;&nbsp;
            <b>{t(`projects.bolds.bold2`)}</b>{" "}
            {t(`projects.bolds.location.${projectId}`)}
          </>
        ) : null}
      </p>
    </div>
  );
};

export default ProjectInfo;
