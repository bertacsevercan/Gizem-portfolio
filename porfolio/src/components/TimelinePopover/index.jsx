import React from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "./style.css";

const TimelinePopover = ({ title, className, direction, content }) => {
  return (
    <>
      <OverlayTrigger
        trigger="hover"
        key={className}
        placement={direction}
        // defaultShow
        overlay={
          <Popover id={`popover-positioned-${direction}`}>
            <Popover.Title as="h3">{title}</Popover.Title>
            <Popover.Content>{content}</Popover.Content>
          </Popover>
        }
      >
        <span className={`milestone ${className}`} />
      </OverlayTrigger>
    </>
  );
};

export default TimelinePopover;
