import React, { memo, useEffect, useState } from "react";
import usePrevious from "./usePrevious";
import { AnimatedNumbersProps } from "./AnimatedNumbers.types";
import "./style.css";
import numberList from "./numberList";

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
const NumberColumn = memo(({ digit, delta }: any) => {
  const [position, setPosition] = useState<string>("0%");
  const [animationClass, setAnimationClass] = useState<string>("");
  const previousDigit = usePrevious(digit);
  const setColumnToNumber = (number: any) => {
    //@ts-ignore
    setPosition(`-${numberList?.[number] || 0}%`);
  };
  useEffect(() => {
    if (previousDigit != undefined)
      setAnimationClass(previousDigit !== digit ? delta : "");
    setColumnToNumber(digit);
  }, [digit]);

  return (
    <div className="number-animate-column-container">
      <div
        className={`number-animate-column ${animationClass}`}
        style={{ transform: `translateY(${position})` }}
        onTransitionEnd={() => setAnimationClass("")}
      >
        {Object.keys(numberList).map((num) => (
          <div key={num} className="number-animate-digit">
            <span>{num}</span>
          </div>
        ))}
      </div>
      <span className="number-placeholder">{digit}</span>
    </div>
  );
});

const AnimatedNumbers = ({
  number,
  className = "",
  style,
  decimal = 0,
  comma = false,
}: AnimatedNumbersProps) => {
  const numArray = formatForDisplay(number, decimal, comma);
  const previousNumber: any = usePrevious(number);

  let delta: string = "";
  if (number > previousNumber) delta = "increase";
  if (number < previousNumber) delta = "decrease";

  return (
    <div className={`number-animate-view ${className}`} style={style}>
      {numArray.map((digit: any, index: number) =>
        //@ts-ignore
        !isNaN(numberList[digit]) ? (
          <NumberColumn key={index} digit={digit} delta={delta} />
        ) : (
          <DecimalColumn key={index} digit={digit} />
        )
      )}
    </div>
  );
};

export default AnimatedNumbers;
