import type { Meta, StoryObj } from "@storybook/react";
import { HorizontalSeparator } from "./index";

const meta: Meta<typeof HorizontalSeparator> = {
  title: "Separators/HorizontalSeparator",
  component: HorizontalSeparator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal_Separator: Story = {};

export const Test: Story = {
  args: {
    width: "clamp(180px,18.7488vw,720px)",
    height: "clamp(1px, 0.10416vw, 4px)",
    background: "green",
  },
};
