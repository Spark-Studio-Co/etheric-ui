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

export const Testing: Story = {
  args: {
    text: "Responsive Text",
    fontFamily: "Arial, sans-serif",
    color: "black",
    hoverColor: "blue",
    fontWeight: "bold",
    transition: "color 0.3s ease",
    margin: "10px",
    // Responsive font sizes
    xxsFontSize: "10px",
    xsFontSize: "12px",
    sFontSize: "14px",
    mFontSize: "16px",
    smFontSize: "18px",
    lFontSize: "20px",
    mdFontSize: "22px",
    tabletFontSize: "24px",
    tabletSmFontSize: "26px",
    lgFontSize: "28px",
    xlFontSize: "30px",
    twoXlFontSize: "32px",
    threeXlFontSize: "34px",
    fourXlFontSize: "36px",
    fiveXlFontSize: "38px",
    sixXlFontSize: "40px",
    // Responsive margins
    xxsMargin: "5px",
    xsMargin: "6px",
    sMargin: "7px",
    mMargin: "8px",
    smMargin: "9px",
    lMargin: "10px",
    mdMargin: "11px",
    tabletMargin: "12px",
    tabletSmMargin: "13px",
    lgMargin: "14px",
    xlMargin: "15px",
    twoXlMargin: "16px",
    threeXlMargin: "17px",
    fourXlMargin: "18px",
    fiveXlMargin: "19px",
    sixXlMargin: "20px",
  },
};
