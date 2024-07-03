import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const responsive = {
  xxs: {
    width: "50px",
    height: "30px",
    fontSize: "12px",
  },
  xs: {
    width: "60px",
    height: "35px",
    fontSize: "14px",
  },
  s: {
    width: "70px",
    height: "40px",
    fontSize: "16px",
  },
  m: {
    width: "80px",
    height: "45px",
    fontSize: "18px",
  },
  sm: {
    width: "90px",
    height: "50px",
    fontSize: "20px",
  },
  l: {
    width: "100px",
    height: "55px",
    fontSize: "22px",
  },
  md: {
    width: "110px",
    height: "60px",
    fontSize: "24px",
  },
  tablet: {
    width: "120px",
    height: "65px",
    fontSize: "26px",
  },
  tabletSm: {
    width: "130px",
    height: "70px",
    fontSize: "28px",
  },
  lg: {
    width: "140px",
    height: "75px",
    fontSize: "30px",
  },
  xl: {
    width: "150px",
    height: "80px",
    fontSize: "32px",
  },
  twoXl: {
    width: "160px",
    height: "85px",
    fontSize: "34px",
  },
  threeXl: {
    width: "50px",
    height: "30px",
    fontSize: "36px",
  },
  fourXl: {
    width: "180px",
    height: "95px",
    fontSize: "38px",
  },
  fiveXl: {
    width: "190px",
    height: "100px",
    fontSize: "40px",
  },
  sixXl: {
    width: "200px",
    height: "105px",
    fontSize: "42px",
  },
};

export const Default_Button: Story = {
  args: {
    text: "Default Button",
    responsive: responsive,
    backgroundColor: "#0cefef",
    fontSize: "20px",
    fontWeight: "700",
    fontFamily: "Helvetica",
    textDecoration: "underline",
    border: "4px solid red",
    color: "#3d9a26",
    hoverBackgroundColor: "#f71515",
    hoverColor: "#2b79d3",
    hoverBorder: "8px solid grey",
    transition: "0.3s ease-in-out",
    onClick: () => console.log("Button clicked!"),
  },
};
