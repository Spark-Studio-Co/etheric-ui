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

const menuOptions = ["Option 1", "Option 2", "Option 3"];

export const KebabMenuTest: Story = {
  args: {
    items: menuOptions,
    icon: faEllipsisVertical,
    size: "2x",
    text: "Menu",
    padding: "10px",
    top: "50px",
    right: "80px",
    backgroundColor: "#007bff",
    color: "red",
    hoverBackgroundColor: "#0056b3",
    hoverColor: "#ffffff",
    border: "1px solid #007bff",
    hoverBorder: "1px solid #0056b3",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    iconFontSize: "18px",
    iconColor: "#ffffff",
    iconHoverColor: "#ffcc00",
    optionBoxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    optionZIndex: 1000,
    optionBackgroundColor: "#ffffff",
    optionRight: "30px", // Positioned directly under the button
    optionTop: "100px", // Adjust the gap between button and menu
    optionBorderRadius: "4px",
    optionPaddingLeft: "10px",
    optionPaddingRight: "10px",
    optionHoverColor: "#007bff",
    optionMarginTop: "5px",
    optionMarginBottom: "5px",
  },
};
