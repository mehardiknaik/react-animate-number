import React, { memo, useEffect, useState } from "react";
import usePrevious from "./usePrevious";
import { AnimatedNumbersProps } from "./AnimatedNumbers.types";
import "./style.css";

const formatForDisplay = (number: number, decimal: number) => {
  return Math.max(number)
    .toLocaleString("en-IN", {
      minimumFractionDigits: decimal,
      maximumFractionDigits: decimal,
    })
    .split("")
    .reverse();
};

const DecimalColumn: React.FC<{ digit: string }> = ({ digit }) => {
  return (
    <div>
      <span>{digit}</span>
    </div>
  );
};
const NumberColumn = memo(({ digit, delta }: any) => {
  const [position, setPosition] = useState<string>("0%");
  const [animationClass, setAnimationClass] = useState<string>("");
  const previousDigit = usePrevious(digit);
  const setColumnToNumber = (number: number) => {
    setPosition(`${number * 10}%`);
  };
  useEffect(() => {
    console.log(digit, previousDigit);
    if (previousDigit != undefined)
      setAnimationClass(previousDigit !== digit ? delta : "");
  }, [digit]);
  useEffect(() => setColumnToNumber(digit), [digit]);

  return (
    <div className="number-animate-column-container">
      <div
        className={`number-animate-column ${animationClass}`}
        style={{ transform: `translateY(${position})` }}
        onTransitionEnd={() => setAnimationClass("")}
      >
        {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
          <div key={num} className="number-animate-digit">
            <span>{num}</span>
          </div>
        ))}
      </div>
      <span className="number-placeholder">0</span>
    </div>
  );
});

const AnimatedNumbers = ({
  number,
  className = "",
  style,
  decimal = 0,
}: AnimatedNumbersProps) => {
  const numArray = formatForDisplay(number, decimal);
  const previousNumber: any = usePrevious(number);

  let delta: string = "";
  if (number > previousNumber) delta = "increase";
  if (number < previousNumber) delta = "decrease";
  return (
    <div className={`number-animate-view ${className}`} style={style}>
      {numArray.map((number: any, index) =>
        !isNaN(number) ? (
          <NumberColumn key={index} digit={parseFloat(number)} delta={delta} />
        ) : (
          <DecimalColumn key={index} digit={number} />
        )
      )}
    </div>
  );
};

export default AnimatedNumbers;
