import React from "react";
import { pagesType } from "./Onboarding.types";

const SinglePage = ({ title, subtitle, color, image }: pagesType) => {
  let titleElement = title;
  if (typeof title === "string" || title instanceof String) {
    titleElement = <div className="onboarding-title">{title}</div>;
  }

  let subtitleElement = subtitle;
  if (
    typeof subtitleElement === "string" ||
    subtitleElement instanceof String
  ) {
    subtitleElement = <div className="onboarding-subtitle">{subtitle}</div>;
  }
  return (
    <div
      className={`onboarding-item ${
        color === "light" ? "onboarding-item-light" : "onboarding-item-dark"
      }`}
    >
      <div className="onboarding-image">{image}</div>
      <div className="onboarding-info">
        {titleElement}
        {subtitleElement}
      </div>
    </div>
  );
};

export default SinglePage;
