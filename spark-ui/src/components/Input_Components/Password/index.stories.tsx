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
    border: "1px solid #ccc",
    focusBackgroundColor: "#ffffff",
    focusColor: "#000000",
    focusBorder: "1px solid #007bff",
    transition: "all 0.3s ease",
    iconFontSize: "18px",
    iconColor: "#007bff",
    bottom: "12px",
    right: "12px",
  },
};
