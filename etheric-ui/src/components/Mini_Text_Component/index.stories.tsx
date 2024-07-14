import type { Meta, StoryObj } from "@storybook/react";
import { MiniText } from "./index";

const meta: Meta<typeof MiniText> = {
  title: "MiniText/MiniText",
  component: MiniText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Mini_Text: Story = {};

const responsiveSettings = {
  xxs: { fontSize: "8px", margin: "2px" },
  xs: { fontSize: "10px", margin: "3px" },
  s: { fontSize: "12px", margin: "4px" },
  m: { fontSize: "14px", margin: "5px" },
  sm: { fontSize: "16px", margin: "6px" },
  l: { fontSize: "18px", margin: "7px" },
  md: { fontSize: "20px", margin: "8px" },
  tablet: { fontSize: "22px", margin: "9px" },
  tabletSm: { fontSize: "24px", margin: "10px" },
  lg: { fontSize: "26px", margin: "11px" },
  xl: { fontSize: "28px", margin: "12px" },
  twoXl: { fontSize: "30px", margin: "13px" },
  threeXl: { fontSize: "32px", margin: "14px" },
  fourXl: { fontSize: "34px", margin: "15px" },
  fiveXl: { fontSize: "36px", margin: "16px" },
  sixXl: { fontSize: "38px", margin: "17px" },
};

export const Testing: Story = {
  args: {
    text: "Responsive Text",
    fontFamily: "Arial, sans-serif",
    color: "black",
    hoverColor: "blue",
    fontWeight: "bold",
    transition: "color 0.3s ease",
    responsive: responsiveSettings,
  },
};
