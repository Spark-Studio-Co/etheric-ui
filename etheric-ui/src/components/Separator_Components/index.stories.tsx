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
  xxs: { width: "100%", height: "1px", margin: "10px 0" },
  xs: { width: "100%", height: "1.5px", margin: "15px 0" },
  s: { width: "100%", height: "2px", margin: "20px 0" },
  m: { width: "100%", height: "2.5px", margin: "25px 0" },
  sm: { width: "100%", height: "3px", margin: "30px 0" },
  l: { width: "100%", height: "3.5px", margin: "35px 0" },
  md: { width: "100%", height: "4px", margin: "40px 0" },
  tablet: { width: "100%", height: "4.5px", margin: "45px 0" },
  tabletSm: { width: "100%", height: "5px", margin: "50px 0" },
  lg: { width: "100px", height: "5.5px", margin: "55px 0" },
  xl: { width: "100px", height: "6px", margin: "60px 0" },
  twoXl: { width: "100px", height: "6.5px", margin: "65px 0" },
  threeXl: { width: "100px", height: "7px", margin: "70px 0" },
  fourXl: { width: "100px", height: "7.5px", margin: "75px 0" },
  fiveXl: { width: "100px", height: "8px", margin: "80px 0" },
  sixXl: { width: "100px", height: "8.5px", margin: "85px 0" },
};

export const Test: Story = {
  args: {
    responsive: responsiveSettings,
    background: "red",
  },
};
