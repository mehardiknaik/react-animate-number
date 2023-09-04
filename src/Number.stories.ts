import type { Meta, StoryObj } from "@storybook/react";
import AnimatedNumbers, { AnimatedNumbersProps } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<AnimatedNumbersProps> = {
  title: "Example/Number",
  component: AnimatedNumbers,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // number: { control: "number" },
    // decimal: { control: "number" },
    // style: {
    //   fontSize: "number",
    // },
    // className: {
    // control: "string",
    // },
  },
};

export default meta;
type Story = StoryObj<typeof AnimatedNumbers>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    number: 123,
    style: {
      fontSize: 20,
      // ["--duration" as string]: "1000ms",
    },
    decimal: 2,
  },
};
