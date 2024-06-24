import type { Meta, StoryObj } from "@storybook/react";
import { DefaultInput } from "./index";

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

export const BorderTesting: Story = {
  args: {
    focusBorder: "2px solid green",
  },
};
