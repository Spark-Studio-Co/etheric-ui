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

export const Testing: Story = {
  args: {
    focusBorder: "2px solid green",
    placeholder: "Enter your text here...",
    padding: "10px",
    background: "#fceeee",
    fontSize: "16px",
    fontFamily: "Arial",
    width: "300px",
    height: "100px",
    borderRadius: "5px",
    border: "2px solid red",
    color: "#100f0f",
    placeholderColor: "#000000",
  },
};
