import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { OnboardingProps } from "./Onboarding.types";
import SinglePage from "./SinglePage";
import BottomContainer from "./BottomContainer";
import {
  DoneButton as DoneButtonDefault,
  SkipButton as SkipButtonDefault,
} from "./Buttons";

const Onboarding = ({
  pages,
  hideScroll = false,
  onDone,
  onSkip,
  DoneButtonComponent = DoneButtonDefault,
  SkipButtonComponent = SkipButtonDefault,
  hideDone = false,
  hideSkip = false,
}: OnboardingProps) => {
  const [done, setDone] = useState(false);
  const ref = useRef<null | any>(null);

  const grad = pages
    .map((x, i, v) => `${x.backgroundColor} ${(i / (v.length - 1)) * 100}%`)
    .join(",");

  const handleScroll = (e: any) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setDone(true);
    }
  };

  useEffect(() => {
    if (ref && ref.current)
      ref.current?.addEventListener("scroll", handleScroll);
    return () => {
      if (ref && ref.current)
        ref.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`onboarding-container ${
        hideScroll ? "onboarding-hidescroll" : ""
      }`}
      ref={ref}
    >
      <div
        className="onboarding-item-container"
        style={{
          background: `linear-gradient(180deg,${grad})`,
        }}
      >
        {pages.map((item, i) => (
          <SinglePage {...item} key={i} />
        ))}
        <BottomContainer
          onDone={onDone}
          onSkip={onSkip}
          DoneButtonComponent={DoneButtonComponent}
          SkipButtonComponent={SkipButtonComponent}
          hideDone={hideDone}
          hideSkip={hideSkip}
          done={done}
        />
      </div>
    </div>
  );
};

export default Onboarding;
