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

const responsiveSettings = {
  xxs: { width: "50px", height: "1px" },
  xs: { width: "100px", height: "1px" },
  s: { width: "100px", height: "1px" },
  m: { width: "100px", height: "1px" },
  sm: { width: "100px", height: "1px" },
  l: { width: "100px", height: "1px" },
  md: { width: "100px", height: "1px" },
  tablet: { width: "100px", height: "1px" },
  tablet_sm: { width: "100px", height: "1px" },
  lg: { width: "100px", height: "1px" },
  xl: { width: "100px", height: "1px" },
  twoXl: { width: "100px", height: "1px" },
  threeXl: { width: "100px", height: "1px" },
  fourXl: { width: "100px", height: "1px" },
  fiveXl: { width: "100px", height: "1px" },
  sixXl: { width: "100px", height: "1px" },
};

export const Test: Story = {
  args: {
    responsive: responsiveSettings,
    background: "#845EC2",
  },
};
