import React from "react";
import { bottomContainerProps } from "./Onboarding.types";

const BottomContainer = ({
  onDone,
  onSkip,
  DoneButtonComponent,
  hideDone,
  hideSkip,
  SkipButtonComponent,
  done,
}: bottomContainerProps) => {
  const handleDone = () => {
    if (typeof onDone === "function") {
      onDone();
    }
  };
  const handleSkip = () => {
    if (typeof onSkip === "function") {
      onSkip();
    }
  };
  return (
    <div className="onboarding-bottom-container">
      {!hideDone && done && <DoneButtonComponent onClick={handleDone} />}
      {!hideSkip && !done && <SkipButtonComponent onClick={handleSkip} />}
    </div>
  );
};

export default BottomContainer;
