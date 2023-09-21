import React from "react";
export const DoneButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => (
  <button className="onboarding-button" {...props}>
    Lets Go <span className="first" />
    <span className="second" /> <span className="third" />
    <span className="fourth" />
  </button>
);
export const SkipButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => (
  <button className="onboarding-button" {...props}>
    Skip <span className="first" />
    <span className="second" /> <span className="third" />
    <span className="fourth" />
  </button>
);
