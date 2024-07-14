import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./index";

const meta: Meta<typeof TextArea> = {
  title: "TextArea/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text_Area: Story = {};

const responsiveSettings = {
  xxs: {
    width: "90%",
    height: "80px",
    fontSize: "14px",
    margin: "5px",
    padding: "5px",
    borderRadius: "2px",
  },
  lg: {
    width: "50%",
    height: "130px",
    fontSize: "21px",
    margin: "40px",
    padding: "40px",
    borderRadius: "9px",
  },
  xl: {
    width: "45%",
    height: "140px",
    fontSize: "22px",
    margin: "45px",
    padding: "45px",
    borderRadius: "10px",
  },
  twoXl: {
    width: "40%",
    height: "150px",
    fontSize: "23px",
    margin: "50px",
    padding: "50px",
    borderRadius: "11px",
  },
  threeXl: {
    width: "35%",
    height: "160px",
    fontSize: "24px",
    margin: "55px",
    padding: "55px",
    borderRadius: "12px",
  },
  fourXl: {
    width: "30%",
    height: "170px",
    fontSize: "25px",
    margin: "60px",
    padding: "60px",
    borderRadius: "13px",
  },
  fiveXl: {
    width: "25%",
    height: "180px",
    fontSize: "26px",
    margin: "65px",
    padding: "65px",
    borderRadius: "14px",
  },
  sixXl: {
    width: "20%",
    height: "190px",
    fontSize: "27px",
    margin: "70px",
    padding: "70px",
    borderRadius: "15px",
  },
};

export const ResponsiveText_Area: Story = {
  args: {
    responsive: responsiveSettings,
    placeholder: "Enter your message...",
    fontFamily: "Arial, sans-serif",
    textAlign: "left",
    background: "white",
    border: "1px solid #ccc",
    focusBorder: "2px solid blue",
    placeholderColor: "#888888",
    focusPlaceholderColor: "#00f",
  },
};
