import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default_Button: Story = {
  args: {
    text: "Default Button",
    margin: "50px",
    backgroundColor: "#0cefef",
    fontSize: "20px",
    fontWeight: "700",
    fontFamily: "Helvetica",
    width: "400px",
    height: "200px\n",
    textDecoration: "underline",
    borderRadius: "20px",
    border: "4px solid red",
    color: "#3d9a26",
    hoverBackgroundColor: "#f71515",
    hoverColor: "#2b79d3",
    hoverBorder: "red",
    transition: "0.3s ease-in-out"
  },
};
