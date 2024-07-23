import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./index";
import logo from "@/assets/etheric_ui.svg";

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

const responsiveSettings = {
  xxs: { width: "20px", height: "20px" },
  xs: { width: "30px", height: "30px" },
  s: { width: "40px", height: "40px" },
  m: { width: "50px", height: "50px" },
  sm: { width: "60px", height: "60px" },
  l: { width: "70px", height: "70px" },
  md: { width: "80px", height: "80px" },
  tablet: { width: "90px", height: "90px" },
  tabletSm: { width: "100px", height: "100px" },
  lg: { width: "110px", height: "110px" },
  xl: { width: "120px", height: "120px" },
  twoXl: { width: "130px", height: "130px" },
  threeXl: { width: "140px", height: "140px" },
  fourXl: { width: "150px", height: "150px" },
  fiveXl: { width: "160px", height: "160px" },
  sixXl: { width: "170px", height: "170px" },
};

export const Test: Story = {
  args: {
    logo: logo,
    responsive: responsiveSettings,
  },
};
