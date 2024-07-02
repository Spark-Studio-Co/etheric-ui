import type { Meta, StoryObj } from "@storybook/react";
import { DefaultInput } from "./index";

const meta: Meta<typeof DefaultInput> = {
  title: "Inputs/DefaultInput",
  component: DefaultInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default_Input: Story = {};

const responsiveSettings = {
  xxs: {
    fontSize: "10px",
    margin: "2px",
    padding: "4px",
    width: "100px",
    height: "20px",
    borderRadius: "3px",
  },
  xs: {
    fontSize: "12px",
    margin: "3px",
    padding: "6px",
    width: "120px",
    height: "22px",
    borderRadius: "4px",
  },
  s: {
    fontSize: "14px",
    margin: "4px",
    padding: "8px",
    width: "140px",
    height: "24px",
    borderRadius: "5px",
  },
  m: {
    fontSize: "16px",
    margin: "5px",
    padding: "10px",
    width: "160px",
    height: "26px",
    borderRadius: "6px",
  },
  sm: {
    fontSize: "18px",
    margin: "6px",
    padding: "12px",
    width: "180px",
    height: "28px",
    borderRadius: "7px",
  },
  l: {
    fontSize: "20px",
    margin: "7px",
    padding: "14px",
    width: "200px",
    height: "30px",
    borderRadius: "8px",
  },
  md: {
    fontSize: "22px",
    margin: "8px",
    padding: "16px",
    width: "220px",
    height: "32px",
    borderRadius: "9px",
  },
  tablet: {
    fontSize: "24px",
    margin: "9px",
    padding: "18px",
    width: "240px",
    height: "34px",
    borderRadius: "10px",
  },
  tabletSm: {
    fontSize: "26px",
    margin: "10px",
    padding: "20px",
    width: "260px",
    height: "36px",
    borderRadius: "11px",
  },
  lg: {
    fontSize: "28px",
    margin: "11px",
    padding: "22px",
    width: "280px",
    height: "38px",
    borderRadius: "12px",
  },
  xl: {
    fontSize: "30px",
    margin: "12px",
    padding: "24px",
    width: "300px",
    height: "40px",
    borderRadius: "13px",
  },
  twoXl: {
    fontSize: "32px",
    margin: "13px",
    padding: "26px",
    width: "320px",
    height: "42px",
    borderRadius: "14px",
  },
  threeXl: {
    fontSize: "34px",
    margin: "14px",
    padding: "28px",
    width: "340px",
    height: "44px",
    borderRadius: "15px",
  },
  fourXl: {
    fontSize: "36px",
    margin: "15px",
    padding: "30px",
    width: "360px",
    height: "46px",
    borderRadius: "16px",
  },
  fiveXl: {
    fontSize: "38px",
    margin: "16px",
    padding: "32px",
    width: "380px",
    height: "48px",
    borderRadius: "17px",
  },
  sixXl: {
    fontSize: "40px",
    margin: "17px",
    padding: "34px",
    width: "400px",
    height: "50px",
    borderRadius: "18px",
  },
};

export const ResponsiveInput: Story = {
  args: {
    placeholder: "Enter text",
    backgroundColor: "#ffffff",
    fontWeight: "500",
    color: "#333333",
    border: "1px solid #cccccc",
    focusBorder: "1px solid blue",
    transition: "all 0.3s ease",
    focusBackgroundColor: "#e6f7ff",
    focusColor: "#0057b7",
    placeholderColor: "#aaaaaa",
    focusPlaceholderColor: "#0057b7",
    borderBottomColor: "#cccccc",
    focusBorderBottomColor: "blue",
    responsive: responsiveSettings,
  },
};
