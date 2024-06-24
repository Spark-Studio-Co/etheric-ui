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
    placeholder: "text\n",
    padding: "4px",
    backgroundColor: "#fceeee",
    fontSize: "16px",
    fontWeight: "400",
    width: "100%",
    height: "100%",
    borderRadius: "5px",
    border: "2px solid red",
    color: "#100f0f",
    focusBackgroundColor: "#5e4646",
    focusColor: "#db0b0b",
    transition: "0.3s ease-in-out",
    placeholderColor: "#000000",
    focusPlaceholderColor: "#fddfdf"
  },
};
