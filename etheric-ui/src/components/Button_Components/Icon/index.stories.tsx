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

const responsive = {
  xxs: {
    width: "64px",
    height: "64x",
    fontSize: "20px",
    borderRadius: "0px",
  },
  xs: {
    width: "64px",
    height: "64x",
    fontSize: "20px",
    borderRadius: "0px",
  },
  s: {
    width: "64px",
    height: "64x",
    fontSize: "20px",
    borderRadius: "0px",
  },
  m: {
    width: "64px",
    height: "64x",
    fontSize: "20px",
    borderRadius: "0px",
  },
  sm: {
    width: "64px",
    height: "64x",
    fontSize: "20px",
    borderRadius: "0px",
  },
  l: {
    width: "64px",
    height: "64x",
    fontSize: "20px",
    borderRadius: "0px",
  },
  md: {
    width: "64px",
    height: "64x",
    fontSize: "20px",
    borderRadius: "0px",
  },
  tablet: {
    width: "64px",
    height: "64x",
    fontSize: "20px",
    borderRadius: "0px",
  },
  tabletSm: {
    width: "64px",
    height: "64x",
    fontSize: "20px",
    borderRadius: "0px",
  },
  lg: {
    width: "64px",
    height: "64x",
    fontSize: "20px",
    borderRadius: "0px",
  },
  xl: {
    width: "64px",
    height: "64x",
    fontSize: "20px",
    borderRadius: "0px",
  },
  twoXl: {
    width: "64px",
    height: "64x",
    fontSize: "20px",
    borderRadius: "0px",
  },
  threeXl: {
    width: "64px",
    height: "64x",
    fontSize: "20px",
    borderRadius: "0px",
  },
  fourXl: {
    width: "64px",
    height: "64x",
    fontSize: "20px",
    borderRadius: "0px",
  },
  fiveXl: {
    width: "64px",
    height: "64x",
    fontSize: "20px",
    borderRadius: "0px",
  },
  sixXl: {
    width: "64px",
    height: "64x",
    fontSize: "20px",
    borderRadius: "0px",
  },
};

export const Icon_Button: Story = {
  args: {
    icon: faCoffee,
    responsive: responsive,
    id: "coffee-button",
    onClick: () => alert("Button clicked!"),
    backgroundColor: "#845EC2",
    hoverBackgroundColor: "#4B4453",
    borderRadius: "0px",
    cursor: "pointer",
    hoverBorder: "none",
    border: "none",
    transition: "all 0.3s ease",
    iconHoverColor: "white",
    iconColor: "#ffffff",
    color: "#ffffff",
  },
};
