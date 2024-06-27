import type { Meta, StoryObj } from "@storybook/react";
import { ErrorDisplay } from "./index";

const meta: Meta<typeof ErrorDisplay> = {
  title: "Error/ErrorDisplay",
  component: ErrorDisplay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Error_Display: Story = {
  args: {
    message: "Invalid password",
    color: "red",
    fontWeight: "500",
    fontSize: "32px",
    animation: "fadeIn 0.5s ease-out",
  },
};
