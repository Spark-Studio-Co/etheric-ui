import type { Meta, StoryObj } from "@storybook/react";
import logo from "../../Logo/logo-402d9f18.svg";
import { Popup } from "./index";

const meta: Meta<typeof Popup> = {
  title: "Popup_Components/Popup",
  component: Popup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const responsive = {};

export const Test: Story = {
  args: {
    logo: logo,
    popupBackgroundColor: "#fff",
    popupBorder: "1px solid #ccc",
    logoHref: "#",
    bigText: "Thank you for your request!",
    bigTextColor: "#333",
    bigTextFontWeight: "bold",
    bigTextFontFamily: "Arial",
    paragraph: "Our managers will contact you as soon as possible.",
    paragraphColor: "#666",
    paragraphFontFamily: "Arial",
    paragraphFontWeight: "normal",
    buttonText: "Close",
    buttonColor: "#FFFFFF",
    buttonBackgroundColor: "#007BFF",
    responsive: responsive,
    buttonBorder: "none",
    hoverButtonColor: "#FFFFFF",
    hoverButtonBackgroundColor: "#0056b3",
    hoverButtonBorder: "none",
  },
};
