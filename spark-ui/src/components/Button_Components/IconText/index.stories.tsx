import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { IconTextButton } from "./index";

const meta: Meta<typeof IconTextButton> = {
  title: "Buttons/IconTextButton",
  component: IconTextButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const responsive = {
  xxs: {
    width: "clamp(125px, 250 / 390 * 100vw, 500px)",
    height: "clamp(25px, 50 / 390 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 390 * 100vw, 24px)",
    borderRadius: "0px",
  },
  xs: {
    width: "clamp(125px, 250 / 480 * 100vw, 500px)",
    height: "clamp(25px, 50 / 480 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 480 * 100vw, 24px)",
    borderRadius: "0px",
  },
  s: {
    width: "clamp(125px, 250 / 575 * 100vw, 500px)",
    height: "clamp(25px, 50 / 575 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 575 * 100vw, 24px)",
    borderRadius: "0px",
  },
  m: {
    width: "clamp(125px, 250 / 720 * 100vw, 500px)",
    height: "clamp(25px, 50 / 720 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 720 * 100vw, 24px)",
    borderRadius: "0px",
  },
  sm: {
    width: "clamp(125px, 250 / 860 * 100vw, 500px)",
    height: "clamp(25px, 50 / 860 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 860 * 100vw, 24px)",
    borderRadius: "0px",
  },
  l: {
    width: "clamp(125px, 250 / 992 * 100vw, 500px)",
    height: "clamp(25px, 50 / 992 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 992 * 100vw, 24px)",
    borderRadius: "0px",
  },
  md: {
    width: "clamp(125px, 250 / 1100 * 100vw, 500px)",
    height: "clamp(25px, 50 / 1100 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 1100 * 100vw, 24px)",
    borderRadius: "0px",
  },
  tablet: {
    width: "clamp(125px, 250 / 1024 * 100vw, 500px)",
    height: "clamp(25px, 50 / 1024 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 1024 * 100vw, 24px)",
    borderRadius: "0px",
  },
  tablet_sm: {
    width: "clamp(125px, 250 / 1200 * 100vw, 500px)",
    height: "clamp(25px, 50 / 1200 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 1200 * 100vw, 24px)",
    borderRadius: "0px",
  },
  lg: {
    width: "clamp(125px, 250 / 1360 * 100vw, 500px)",
    height: "clamp(25px, 50 / 1360 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 1360 * 100vw, 24px)",
    borderRadius: "0px",
  },
  xl: {
    width: "clamp(125px, 250 / 1520 * 100vw, 500px)",
    height: "clamp(25px, 50 / 1520 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 1520 * 100vw, 24px)",
    borderRadius: "0px",
  },
  twoXl: {
    width: "clamp(125px, 250 / 1680 * 100vw, 500px)",
    height: "clamp(25px, 50 / 1680 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 1680 * 100vw, 24px)",
    borderRadius: "0px",
  },
  threeXl: {
    width: "clamp(125px, 250 / 1920 * 100vw, 500px)",
    height: "clamp(25px, 50 / 1920 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 1920 * 100vw, 24px)",
    borderRadius: "0px",
  },
  fourXl: {
    width: "clamp(125px, 250 / 2560 * 100vw, 500px)",
    height: "clamp(25px, 50 / 2560 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 2560 * 100vw, 24px)",
    borderRadius: "0px",
  },
  fiveXl: {
    width: "clamp(125px, 250 / 3840 * 100vw, 500px)",
    height: "clamp(25px, 50 / 3840 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 3840 * 100vw, 24px)",
    borderRadius: "0px",
  },
  sixXl: {
    width: "clamp(125px, 250 / 5120 * 100vw, 500px)",
    height: "clamp(25px, 50 / 5120 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 5120 * 100vw, 24px)",
    borderRadius: "0px",
  },
};

export const Icon_Text_Button: Story = {
  args: {
    icon: faCoffee,
    text: "Click Me",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#845EC2",
    color: "#ffffff",
    hoverBackgroundColor: "#4B4453",
    hoverColor: "#ffffff",
    border: "none",
    hoverBorder: "none",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    iconColor: "white",
    iconHoverColor: "white",
    responsive: responsive,
  },
};
