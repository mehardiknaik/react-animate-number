import { CSSProperties } from "react";

export interface OnboardingProps extends Omit<bottomContainerProps, "done"> {
  pages: [pagesType, pagesType, ...pagesType[]];
  hideScroll?: boolean;
}

export interface pagesType {
  backgroundColor: string;
  image: JSX.Element;
  title: string | JSX.Element;
  subtitle: string | JSX.Element;
  color: "light" | "dark";
}

export interface bottomContainerProps {
  onDone: () => void;
  onSkip: () => void;
  DoneButtonComponent: (
    props: React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  ) => JSX.Element;
  SkipButtonComponent: (
    props: React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  ) => JSX.Element;
  hideDone: boolean;
  hideSkip: boolean;
  done: boolean;
}
