import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./index";

const meta: Meta<typeof IconButton> = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon_Button: Story = {};

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

export const Testing: Story = {
  args: {
    icon: faCoffee,
    responsive: responsive,
    id: "coffee-button",
    onClick: () => alert("Button clicked!"),
    backgroundColor: "#007bff",
    hoverBackgroundColor: "#0056b3",
    borderRadius: "5px",
    hoverBorder: "2px solid #0056b3",
    border: "2px solid #007bff",
    transition: "all 0.3s ease",
    iconHoverColor: "red",
    iconColor: "#ffffff",
    color: "#ffffff",
  },
};
