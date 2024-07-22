import type { Meta, StoryObj } from "@storybook/react";
import { DefaultInput } from "./index";
import { defaultInputStyles } from "@/components/defaultStyles/InputStyles/Default/styles";
import { defaultInputResponsive } from "@/components/defaultStyles/InputStyles/Default/responsive";

const meta: Meta<typeof DefaultInput> = {
  title: "Inputs/DefaultInput",
  component: DefaultInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default_Input: Story = {};

export const ResponsiveInput: Story = {
  args: {
    ...defaultInputStyles,
    responsive: { ...defaultInputResponsive },
  },
};
