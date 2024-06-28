import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { KebabMenu } from "./index"; // Adjust the import path as necessary

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
    backgroundColor: "lightgray",
    fontSize: "16px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    optionBoxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    optionZIndex: 10,
    optionBackgroundColor: "red",
    optionRight: "0",
    optionTop: "50px",
    xxsOptionTop: "20px",
    optionBorderRadius: "8px",
    optionHoverColor: "blue",
    iconColor: "black",
    iconHoverColor: "blue",
    xxsWidth: "40px",
    xsWidth: "25px",
    sWidth: "30px",
    mWidth: "35px",
    lWidth: "40px",
    xxsHeight: "20px",
    xsHeight: "25px",
    sHeight: "30px",
    mHeight: "35px",
    lHeight: "40px",
    xxsFontSize: "10px",
    xsFontSize: "12px",
    sFontSize: "14px",
    mFontSize: "16px",
    lFontSize: "18px",
    onClickFunctions: [handleClick1, handleClick2, handleClick3],
  },
};
