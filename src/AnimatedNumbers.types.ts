import { CSSProperties } from "react";

export interface AnimatedNumbersProps {
  number: number;
  className?: string;
  style?: CSSProperties;
  decimal?: number;
  comma?: Boolean;
}
