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
    text: "Hover over me!",
    margin: "10px",
    fontFamily: "Arial",
    fontSize: "16px",
    fontWeight: "bold",
    animation: "none",
    transition: "color 0.3s ease-in-out",
    color: "#333",
    hoverColor: "#ff0000",
  },
};
