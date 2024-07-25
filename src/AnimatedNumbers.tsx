import React, { memo, useEffect, useMemo, useState } from "react";
import usePrevious from "./usePrevious";
import { AnimatedNumbersProps, DeltaType, NumberColumnProps } from "./AnimatedNumbers.types";
import "./style.css";

const formatForDisplay = (number: number, decimal: number, comma: Boolean) => {
  decimal = Math.abs(decimal);
  const strNum: String = comma
    ? Math.max(number).toLocaleString("en-IN", {
      minimumFractionDigits: decimal,
      maximumFractionDigits: decimal,
    })
    : Math.max(number).toFixed(decimal);
  return strNum.split(""); //.reverse();
};
const DecimalColumn: React.FC<{ digit: string }> = ({ digit }) => {
  return (
    <div>
      <span>{digit}</span>
    </div>
  );
};
const NumberColumn = memo(({ digit, delta, reverse }: NumberColumnProps) => {
  const [position, setPosition] = useState<string>("0%");
  const [animationClass, setAnimationClass] = useState<string>("");
  const numCol = useMemo(() => {
    const num=[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    return reverse ? num : num.reverse()
  }, [reverse])
  const previousDigit = usePrevious<number>(digit);
  const setColumnToNumber = (number: number) => {
    setPosition(`${reverse?'':'-'}${number * 10}%`);
  };
  useEffect(() => {
    if (previousDigit != undefined)
      setAnimationClass(previousDigit !== digit ? delta : "");
    setColumnToNumber(digit);
  }, [digit, reverse]);

  return (
    <div className="number-animate-column-container">
      <div
        className={`number-animate-column ${animationClass}`}
        style={{ transform: `translateY(${position})` }}
        onTransitionEnd={() => setAnimationClass("")}
      >
        {numCol.map((num) => (
          <div key={num} className="number-animate-digit">
            <span>{num}</span>
          </div>
        ))}
      </div>
      <span className="number-animate-placeholder">0</span>
    </div>
  );
});

const AnimatedNumbers = ({
  number,
  className = "",
  style,
  decimal = 0,
  comma = false,
  reverse = false
}: AnimatedNumbersProps) => {
  const numArray = formatForDisplay(number, decimal, comma);
  const previousNumber = usePrevious<number>(number);

  let delta: DeltaType = "";
  if (number > previousNumber) delta = "increase";
  if (number < previousNumber) delta = "decrease";

  return (
    <div className={`number-animate-view ${reverse?'number-animate-view-reverse':''} ${className}`} style={style}>
      {numArray.map((digit: any, index: number) =>
        !isNaN(digit) ? (
          <NumberColumn key={index} digit={digit} delta={delta} reverse={reverse} />
        ) : (
          <DecimalColumn key={index} digit={digit} />
        )
      )}
    </div>
  );
};

export default AnimatedNumbers;
