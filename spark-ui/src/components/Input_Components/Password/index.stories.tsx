import type { Meta, StoryObj } from "@storybook/react";
import { PasswordInput } from "./index";

const meta: Meta<typeof PasswordInput> = {
  title: "Inputs/PasswordInput",
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Password_Input: Story = {};

export const BorderTesting: Story = {
  args: {
    placeholder: "Enter your password",
    id: "password",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    fontSize: "16px",
    fontWeight: "bold",
    width: "100%",
    height: "40px",
    borderRadius: "4px",
    border: "none\n",
    focusBackgroundColor: "#ffffff",
    focusBorder: "none\n",
    transition: "all 0.3s ease",
    iconFontSize: "18px",
    iconColor: "#007bff",
    iconHoverColor: "#ff0000",
    color: "red",
    bottom: "12px",
    right: "12px",
    borderBottomColor: "none",
    placeholderColor: "#cc0000",
    focusPlaceholderColor: "#12b322",
  },
};
