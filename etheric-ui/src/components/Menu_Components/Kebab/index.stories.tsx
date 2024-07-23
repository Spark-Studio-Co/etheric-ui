import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { KebabMenu } from "./index";
import { responsiveKebab } from "@/components/defaultStyles/KebabStyles/responsive";

const meta: Meta<typeof KebabMenu> = {
  title: "Menu/KebabMenu",
  component: KebabMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Kebab_Menu: Story = {};

const handleClick1 = (index: number) => {
  console.log(`Option ${index + 1} clicked: Function 1`);
};

const handleClick2 = (index: number) => {
  console.log(`Option ${index + 1} clicked: Function 2`);
};

const handleClick3 = (index: number) => {
  console.log(`Option ${index + 1} clicked: Function 3`);
};

export const KebabMenuTest: Story = {
  args: {
    items: ["Option 1", "Option 2", "Option 3"],
    icon: faEllipsisVertical,
    text: "Menu",
    transition: "all 0.3s ease",
    iconColor: "#4B4453",
    iconHoverColor: "#845EC2",
    containerBoxShadow: " rgba(0, 0, 0, 0.25)",
    hoverColor: "blue",
    containerBackgroundColor: "orange",
    optionZIndex: 10,
    onClickFunctions: [handleClick1, handleClick2, handleClick3],
    responsive: { ...responsiveKebab },
  },
};
