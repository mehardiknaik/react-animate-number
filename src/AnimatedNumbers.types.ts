import { CSSProperties } from "react";

export interface AnimatedNumbersProps {
  number: number;
  className?: string;
  style?: CSSProperties;
  decimal?: number;
  comma?: boolean;
  reverse?: boolean
}

export type DeltaType="increase" | "decrease" | ""


export interface NumberColumnProps { digit: number; delta: DeltaType; reverse: boolean }