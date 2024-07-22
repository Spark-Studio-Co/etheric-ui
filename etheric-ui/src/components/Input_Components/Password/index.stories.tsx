import type { Meta, StoryObj } from "@storybook/react";
import { PasswordInput } from "./index";
import { passwordInputResponsive } from "@/components/defaultStyles/InputStyles/Password/responsive";
import { passwordInputStyles } from "@/components/defaultStyles/InputStyles/Password/styles";

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

export const BorderTesting: Story = {
  args: {
    responsive: { ...passwordInputResponsive },
    ...passwordInputStyles,
    // inputType: "borderBottom",
  },
};
