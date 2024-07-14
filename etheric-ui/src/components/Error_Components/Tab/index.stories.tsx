import { Meta, StoryObj } from "@storybook/react";
import { ErrorTab } from "./index";

const meta: Meta<typeof ErrorTab> = {
  title: "Error_Components/ErrorTab",
  component: ErrorTab,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ErrorTab>;

const responsiveSettings = {
  xxs: {
    fontSize: "12px",
    padding: "8px",
  },
  xs: {
    fontSize: "14px",
    padding: "10px",
  },
  s: {
    fontSize: "16px",
    padding: "12px",
  },
  m: {
    fontSize: "18px",
    padding: "14px",
  },
  l: {
    fontSize: "20px",
    padding: "16px",
  },
  xl: {
    fontSize: "22px",
    padding: "18px",
  },
  twoXl: {
    fontSize: "24px",
    padding: "20px",
  },
  threeXl: {
    fontSize: "26px",
    padding: "22px",
  },
};

// Default story to render the ErrorTab with responsiveness
export const Default: Story = {
  args: {
    text: "User with such email already exists.",
    responsive: responsiveSettings,
  },
};
