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

export const Icon_Text_Button: Story = {};

export const Testing: Story = {
  args: {
    icon: faCoffee,
    text: "Click Me",
    backgroundColor: "#007bff",
    color: "#ffffff",
    hoverBackgroundColor: "#0056b3",
    hoverColor: "#ffffff",
    border: "1px solid #007bff",
    hoverBorder: "1px solid #0056b3",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px 20px",
    transition: "all 0.3s ease",
    gap: "10px",
    iconColor: "#ffffff",
    iconHoverColor: "#ffcc00",
  },
};
