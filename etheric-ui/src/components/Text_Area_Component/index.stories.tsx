import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./index";
import { defaultTextAreaStyles } from "../defaultStyles/TextAreaStyles/styles";
import { defaultTextAreaResponsive } from "../defaultStyles/TextAreaStyles/responsive";

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

export const ResponsiveText_Area: Story = {
  args: {
    responsive: { ...defaultTextAreaResponsive },
    ...defaultTextAreaStyles,
  },
};
