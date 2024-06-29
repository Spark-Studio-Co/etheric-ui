import type { Meta, StoryObj } from "@storybook/react";
import { HorizontalSeparator } from "./index";

const meta: Meta<typeof HorizontalSeparator> = {
  title: "Separators/HorizontalSeparator",
  component: HorizontalSeparator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal_Separator: Story = {};

export const Test: Story = {
  args: {
    width: "100px",
    height: "2px", // Default height
    background: "red",
    margin: "20px 0",
    xxsMargin: "10px 0",
    xsMargin: "15px 0",
    smMargin: "20px 0",
    mdMargin: "25px 0",
    lgMargin: "30px 0",
    xlMargin: "35px 0",
    xxsHeight: "1px",  // Smallest screens
    xsHeight: "1.5px", // Slightly larger screens
    smHeight: "2px",   // Small devices
    mdHeight: "2.5px", // Medium devices
    lgHeight: "3px",   // Large devices
    xlHeight: "3.5px", // Extra-large devices
    twoXlHeight: "4px", // 2X large devices
    threeXlHeight: "4.5px", // 3X large devices
    fourXlHeight: "5px", // 4X large devices
    fiveXlHeight: "5.5px", // 5X large devices
    sixXlHeight: "6px" // 6X large devices
  },
};
