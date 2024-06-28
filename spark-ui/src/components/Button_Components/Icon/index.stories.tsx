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

export const Testing: Story = {
  args: {
    icon: faCoffee,
    id: "coffee-button",
    onClick: () => alert("Button clicked!"),
    margin: "10px",
    backgroundColor: "#007bff",
    hoverBackgroundColor: "#0056b3",
    borderRadius: "5px",
    height: "50px",
    hoverBorder: "2px solid #0056b3",
    border: "2px solid #007bff",
    gap: "10px",
    padding: "10px",
    transition: "all 0.3s ease",
    width: "150px",
    size: "2x",
    iconHoverColor: "#ffffff",
    iconColor: "#ffffff",
    color: "#ffffff",
    iconFontSize: "24px",
    fontSize: "18px",
  },
};
