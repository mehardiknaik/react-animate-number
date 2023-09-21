import type { Meta, StoryObj } from "@storybook/react";
import Onboarding, { OnboardingProps } from "./index";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<OnboardingProps> = {
  title: "Example/Onboarding",
  component: Onboarding,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<OnboardingProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    pages: [
      {
        title: "Lorem ipsum dolor",
        backgroundColor: "rgb(0 27 255)",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maiores in dolor quisquam quod quam! Doloribus autem exercitationem debitis odio, provident accusantium dolor reiciendis ipsa dignissimos sapiente necessitatibus obcaecati aspernatur!",
        color: "light",
        image: React.createElement("img", {
          src: "https://www.pngmart.com/files/10/Glossy-Apple-Logo-PNG-Clipart.png",
          height: "60%",
        }),
      },
      {
        title: "Lorem ipsum dolor",
        backgroundColor: "#b2f8b2",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maiores in dolor quisquam quod quam! Doloribus autem exercitationem debitis odio, provident accusantium dolor reiciendis ipsa dignissimos sapiente necessitatibus obcaecati aspernatur!",
        color: "dark",
        image: React.createElement("img", {
          src: "https://www.pngmart.com/files/10/Glossy-Apple-Logo-PNG-Clipart.png",
          height: "60%",
        }),
      },
      {
        title: "Lorem ipsum dolor",
        backgroundColor: "rgb(255 0 19)",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maiores in dolor quisquam quod quam! Doloribus autem exercitationem debitis odio, provident accusantium dolor reiciendis ipsa dignissimos sapiente necessitatibus obcaecati aspernatur!",
        color: "light",
        image: React.createElement("img", {
          src: "https://www.pngmart.com/files/10/Glossy-Apple-Logo-PNG-Clipart.png",
          height: "60%",
        }),
      },
      {
        title: "Lorem ipsum dolor",
        backgroundColor: "rgb(183 0 219)",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maiores in dolor quisquam quod quam! Doloribus autem exercitationem debitis odio, provident accusantium dolor reiciendis ipsa dignissimos sapiente necessitatibus obcaecati aspernatur!",
        color: "light",
        image: React.createElement("img", {
          src: "https://www.pngmart.com/files/10/Glossy-Apple-Logo-PNG-Clipart.png",
          height: "60%",
        }),
      },
    ],
    hideScroll: true,
    onDone: () => {
      alert("Done");
    },
    onSkip: () => {
      alert("onSkip");
    },

    // DoneButtonComponent: (props) =>
    //   React.createElement("button", props, "hello"),
  },
};
