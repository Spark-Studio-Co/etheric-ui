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

const responsiveSettings = {
  xxs: {
    buttonWidth: "20px",
    buttonHeight: "20px",
    buttonFontSize: "10px",
    buttonPadding: "5px",
    margin: "2px",
    buttonBorderRadius: "2px",
    containerTop: "30px",
    containerWidth: "100px",
  },
  xs: {
    buttonWidth: "25px",
    buttonHeight: "25px",
    buttonFontSize: "12px",
    buttonPadding: "6px",
    margin: "3px",
    buttonBorderRadius: "3px",
    containerTop: "35px",
    containerWidth: "110px",
  },
  s: {
    buttonWidth: "30px",
    buttonHeight: "30px",
    buttonFontSize: "14px",
    buttonPadding: "7px",
    margin: "4px",
    buttonBorderRadius: "4px",
    containerTop: "40px",
    containerWidth: "120px",
  },
  m: {
    buttonWidth: "35px",
    buttonHeight: "35px",
    buttonFontSize: "16px",
    buttonPadding: "8px",
    margin: "5px",
    buttonBorderRadius: "5px",
    containerTop: "45px",
    containerWidth: "130px",
  },
  l: {
    buttonWidth: "40px",
    buttonHeight: "40px",
    buttonFontSize: "18px",
    buttonPadding: "9px",
    margin: "6px",
    buttonBorderRadius: "6px",
    containerTop: "50px",
    containerWidth: "140px",
  },
  xl: {
    buttonWidth: "45px",
    buttonHeight: "45px",
    buttonFontSize: "20px",
    buttonPadding: "10px",
    margin: "7px",
    buttonBorderRadius: "7px",
    containerTop: "55px",
    containerWidth: "150px",
  },
  twoXl: {
    buttonWidth: "50px",
    buttonHeight: "50px",
    buttonFontSize: "22px",
    buttonPadding: "11px",
    margin: "8px",
    buttonBorderRadius: "8px",
    containerTop: "60px",
    containerWidth: "160px",
  },
  threeXl: {
    buttonWidth: "55px",
    buttonHeight: "55px",
    buttonFontSize: "24px",
    buttonPadding: "12px",
    margin: "9px",
    optionFontSize: "14px",
    buttonBorderRadius: "9px",
    containerTop: "65px",
    containerWidth: "170px",
    containerHeight: "180px",
  },
  fourXl: {
    buttonWidth: "60px",
    buttonHeight: "60px",
    buttonFontSize: "26px",
    buttonPadding: "13px",
    margin: "10px",
    buttonBorderRadius: "10px",
    containerTop: "70px",
    containerWidth: "180px",
  },
  fiveXl: {
    buttonWidth: "65px",
    buttonHeight: "65px",
    buttonFontSize: "28px",
    buttonPadding: "14px",
    margin: "11px",
    buttonBorderRadius: "11px",
    containerTop: "75px",
    containerWidth: "190px",
  },
  sixXl: {
    buttonWidth: "70px",
    buttonHeight: "70px",
    buttonFontSize: "30px",
    buttonPadding: "15px",
    margin: "12px",
    buttonBorderRadius: "12px",
    containerTop: "80px",
    containerWidth: "200px",
  },
};

export const KebabMenuTest: Story = {
  args: {
    items: ["Option 1", "Option 2", "Option 3"],
    icon: faEllipsisVertical,
    text: "Menu",
    buttonBackgroundColor: "lightgray",
    buttonColor: "black",
    buttonBorder: "1px solid gray",
    hoverBackgroundColor: "lightblue",
    hoverColor: "blue",
    transition: "all 0.3s ease",
    iconColor: "black",
    iconHoverColor: "blue",
    optionZIndex: 10,
    containerBackgroundColor: "white",
    optionHoverColor: "blue",
    optionFontWeight: "bold",
    optionFontFamily: "Arial, sans-serif",
    optionTextDecoration: "none",
    onClickFunctions: [handleClick1, handleClick2, handleClick3],
    responsive: responsiveSettings,
  },
};
