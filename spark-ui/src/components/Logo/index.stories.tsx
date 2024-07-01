import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./index";
import logo from "./logo-402d9f18.svg";

const meta: Meta<typeof Logo> = {
  title: "Logo/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    logo: logo,
    xxsWidth: "20px",
    xxsHeight: "20px",
    xsWidth: "20px",
    xsHeight: "20px",
    threeXlWidth: "20px",
    fourXlWidth: "20px",
  },
};
