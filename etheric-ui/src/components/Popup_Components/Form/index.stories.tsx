import type { Meta, StoryObj } from "@storybook/react";
import logo from "@/assets/etheric_ui.svg";
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

const responsive = {
  xxs: {
    popupHeight: "clamp(130px, 260 / 390 * 100vw, 520px)",
    popupWidth: "clamp(175px, 350 / 390 * 100vw, 700px)",
    popupBorderRadius: "clamp(2.5px, 5 / 390 * 100vw, 10px)",
    logoWidth: "clamp(30px, 60 / 390 * 100vw, 120px)",
    logoHeight: "clamp(30px, 60 / 390 * 100vw, 120px)",
    bigTextMargin: "clamp(8px, 16 / 390 * 100vw, 32px) 0 0 0",
    bigTextFontSize: "clamp(9px, 18 / 390 * 100vw, 36px)",
    paragraphFontSize: "clamp(8px, 16 / 390 * 100vw, 32px)",
    paragraphWidth: "80%",
    buttonFontSize: "clamp(8px, 16 / 390 * 100vw, 32px)",
    buttonBorderRadius: "clamp(2.5px, 5 / 390 * 100vw, 10px)",
    buttonPadding:
      "clamp(3px, 6 / 390 * 100vw, 12px)  clamp(5px, 10 / 390 * 100vw, 20px)  ",
    buttonMargin:
      "clamp(4px, 8 / 390 * 100vw, 16px) 0 clamp(5px, 10 / 390 * 100vw, 20px) 0",
  },
  xs: {
    popupHeight: "clamp(130px, 260 / 480 * 100vw, 520px)",
    popupWidth: "clamp(175px, 350 / 480 * 100vw, 700px)",
    popupBorderRadius: "clamp(2.5px, 5 / 480 * 100vw, 10px)",
    logoWidth: "clamp(30px, 60 / 480 * 100vw, 120px)",
    logoHeight: "clamp(30px, 60 / 480 * 100vw, 120px)",
    bigTextMargin: "clamp(8px, 16 / 480 * 100vw, 32px) 0 0 0",
    bigTextFontSize: "clamp(9px, 18 / 480 * 100vw, 36px)",
    paragraphFontSize: "clamp(8px, 16 / 480 * 100vw, 32px)",
    paragraphWidth: "80%",
    buttonFontSize: "clamp(8px, 16 / 480 * 100vw, 32px)",
    buttonBorderRadius: "clamp(2.5px, 5 / 480 * 100vw, 10px)",
    buttonPadding:
      "clamp(3px, 6 / 480 * 100vw, 12px)  clamp(5px, 10 / 480 * 100vw, 20px)  ",
    buttonMargin:
      "clamp(4px, 8 / 480 * 100vw, 16px) 0 clamp(5px, 10 / 480 * 100vw, 20px) 0",
  },
  s: {
    popupHeight: "clamp(130px, 260 / 575 * 100vw, 520px)",
    popupWidth: "clamp(175px, 350 / 575 * 100vw, 700px)",
    popupBorderRadius: "clamp(2.5px, 5 / 575 * 100vw, 10px)",
    logoWidth: "clamp(30px, 60 / 575 * 100vw, 120px)",
    logoHeight: "clamp(30px, 60 / 575 * 100vw, 120px)",
    bigTextMargin: "clamp(8px, 16 / 575 * 100vw, 32px) 0 0 0",
    bigTextFontSize: "clamp(9px, 18 / 575 * 100vw, 36px)",
    paragraphFontSize: "clamp(8px, 16 / 575 * 100vw, 32px)",
    paragraphWidth: "80%",
    buttonFontSize: "clamp(8px, 16 / 575 * 100vw, 32px)",
    buttonBorderRadius: "clamp(2.5px, 5 / 575 * 100vw, 10px)",
    buttonPadding:
      "clamp(3px, 6 / 575 * 100vw, 12px)  clamp(5px, 10 / 575 * 100vw, 20px)  ",
    buttonMargin:
      "clamp(4px, 8 / 575 * 100vw, 16px) 0 clamp(5px, 10 / 575 * 100vw, 20px) 0",
  },
  m: {
    popupHeight: "clamp(130px, 260 / 720 * 100vw, 520px)",
    popupWidth: "clamp(175px, 350 / 720 * 100vw, 700px)",
    popupBorderRadius: "clamp(2.5px, 5 / 720 * 100vw, 10px)",
    logoWidth: "clamp(30px, 60 / 720 * 100vw, 120px)",
    logoHeight: "clamp(30px, 60 / 720 * 100vw, 120px)",
    bigTextMargin: "clamp(8px, 16 / 720 * 100vw, 32px) 0 0 0",
    bigTextFontSize: "clamp(9px, 18 / 720 * 100vw, 36px)",
    paragraphFontSize: "clamp(8px, 16 / 720 * 100vw, 32px)",
    paragraphWidth: "80%",
    buttonFontSize: "clamp(8px, 16 / 720 * 100vw, 32px)",
    buttonBorderRadius: "clamp(2.5px, 5 / 720 * 100vw, 10px)",
    buttonPadding:
      "clamp(3px, 6 / 720 * 100vw, 12px)  clamp(5px, 10 / 720 * 100vw, 20px)  ",
    buttonMargin:
      "clamp(4px, 8 / 720 * 100vw, 16px) 0 clamp(5px, 10 / 720 * 100vw, 20px) 0",
  },
  sm: {
    popupHeight: "clamp(130px, 260 / 860 * 100vw, 520px)",
    popupWidth: "clamp(175px, 350 / 860 * 100vw, 700px)",
    popupBorderRadius: "clamp(2.5px, 5 / 860 * 100vw, 10px)",
    logoWidth: "clamp(30px, 60 / 860 * 100vw, 120px)",
    logoHeight: "clamp(30px, 60 / 860 * 100vw, 120px)",
    bigTextMargin: "clamp(8px, 16 / 860 * 100vw, 32px) 0 0 0",
    bigTextFontSize: "clamp(9px, 18 / 860 * 100vw, 36px)",
    paragraphFontSize: "clamp(8px, 16 / 860 * 100vw, 32px)",
    paragraphWidth: "80%",
    buttonFontSize: "clamp(8px, 16 / 860 * 100vw, 32px)",
    buttonBorderRadius: "clamp(2.5px, 5 / 860 * 100vw, 10px)",
    buttonPadding:
      "clamp(3px, 6 / 860 * 100vw, 12px)  clamp(5px, 10 / 860 * 100vw, 20px)  ",
    buttonMargin:
      "clamp(4px, 8 / 860 * 100vw, 16px) 0 clamp(5px, 10 / 860 * 100vw, 20px) 0",
  },
  l: {
    popupHeight: "clamp(130px, 260 / 992 * 100vw, 520px)",
    popupWidth: "clamp(175px, 350 / 992 * 100vw, 700px)",
    popupBorderRadius: "clamp(2.5px, 5 / 992 * 100vw, 10px)",
    logoWidth: "clamp(30px, 60 / 992 * 100vw, 120px)",
    logoHeight: "clamp(30px, 60 / 992 * 100vw, 120px)",
    bigTextMargin: "clamp(8px, 16 / 992 * 100vw, 32px) 0 0 0",
    bigTextFontSize: "clamp(9px, 18 / 992 * 100vw, 36px)",
    paragraphFontSize: "clamp(8px, 16 / 992 * 100vw, 32px)",
    paragraphWidth: "80%",
    buttonFontSize: "clamp(8px, 16 / 992 * 100vw, 32px)",
    buttonBorderRadius: "clamp(2.5px, 5 / 992 * 100vw, 10px)",
    buttonPadding:
      "clamp(3px, 6 / 992 * 100vw, 12px)  clamp(5px, 10 / 992 * 100vw, 20px)  ",
    buttonMargin:
      "clamp(4px, 8 / 992 * 100vw, 16px) 0 clamp(5px, 10 / 992 * 100vw, 20px) 0",
  },
  tablet: {
    popupHeight: "clamp(130px, 260 / 1024 * 100vw, 520px)",
    popupWidth: "clamp(175px, 350 / 1024 * 100vw, 700px)",
    popupBorderRadius: "clamp(2.5px, 5 / 1024 * 100vw, 10px)",
    logoWidth: "clamp(30px, 60 / 1024 * 100vw, 120px)",
    logoHeight: "clamp(30px, 60 / 1024 * 100vw, 120px)",
    bigTextMargin: "clamp(8px, 16 / 1024 * 100vw, 32px) 0 0 0",
    bigTextFontSize: "clamp(9px, 18 / 1024 * 100vw, 36px)",
    paragraphFontSize: "clamp(8px, 16 / 1024 * 100vw, 32px)",
    paragraphWidth: "80%",
    buttonFontSize: "clamp(8px, 16 / 1024 * 100vw, 32px)",
    buttonBorderRadius: "clamp(2.5px, 5 / 1024 * 100vw, 10px)",
    buttonPadding:
      "clamp(3px, 6 / 1024 * 100vw, 12px)  clamp(5px, 10 / 1024 * 100vw, 20px)  ",
    buttonMargin:
      "clamp(4px, 8 / 1024 * 100vw, 16px) 0 clamp(5px, 10 / 1024 * 100vw, 20px) 0",
  },
  md: {
    popupHeight: "clamp(130px, 260 / 1100 * 100vw, 520px)",
    popupWidth: "clamp(175px, 350 / 1100 * 100vw, 700px)",
    popupBorderRadius: "clamp(2.5px, 5 / 1100 * 100vw, 10px)",
    logoWidth: "clamp(30px, 60 / 1100 * 100vw, 120px)",
    logoHeight: "clamp(30px, 60 / 1100 * 100vw, 120px)",
    bigTextMargin: "clamp(8px, 16 / 1100 * 100vw, 32px) 0 0 0",
    bigTextFontSize: "clamp(9px, 18 / 1100 * 100vw, 36px)",
    paragraphFontSize: "clamp(8px, 16 / 1100 * 100vw, 32px)",
    paragraphWidth: "80%",
    buttonFontSize: "clamp(8px, 16 / 1100 * 100vw, 32px)",
    buttonBorderRadius: "clamp(2.5px, 5 / 1100 * 100vw, 10px)",
    buttonPadding:
      "clamp(3px, 6 / 1100 * 100vw, 12px)  clamp(5px, 10 / 1100 * 100vw, 20px)  ",
    buttonMargin:
      "clamp(4px, 8 / 1100 * 100vw, 16px) 0 clamp(5px, 10 / 1100 * 100vw, 20px) 0",
  },
  tablet_sm: {
    popupHeight: "clamp(130px, 260 / 1200 * 100vw, 520px)",
    popupWidth: "clamp(175px, 350 / 1200 * 100vw, 700px)",
    popupBorderRadius: "clamp(2.5px, 5 / 1200 * 100vw, 10px)",
    logoWidth: "clamp(30px, 60 / 1200 * 100vw, 120px)",
    logoHeight: "clamp(30px, 60 / 1200 * 100vw, 120px)",
    bigTextMargin: "clamp(8px, 16 / 1200 * 100vw, 32px) 0 0 0",
    bigTextFontSize: "clamp(9px, 18 / 1200 * 100vw, 36px)",
    paragraphFontSize: "clamp(8px, 16 / 1200 * 100vw, 32px)",
    paragraphWidth: "80%",
    buttonFontSize: "clamp(8px, 16 / 1200 * 100vw, 32px)",
    buttonBorderRadius: "clamp(2.5px, 5 / 1200 * 100vw, 10px)",
    buttonPadding:
      "clamp(3px, 6 / 1200 * 100vw, 12px)  clamp(5px, 10 / 1200 * 100vw, 20px)  ",
    buttonMargin:
      "clamp(4px, 8 / 1200 * 100vw, 16px) 0 clamp(5px, 10 / 1200 * 100vw, 20px) 0",
  },
  lg: {
    popupHeight: "clamp(130px, 260 / 1360 * 100vw, 520px)",
    popupWidth: "clamp(175px, 350 / 1360 * 100vw, 700px)",
    popupBorderRadius: "clamp(2.5px, 5 / 1360 * 100vw, 10px)",
    logoWidth: "clamp(30px, 60 / 1360 * 100vw, 120px)",
    logoHeight: "clamp(30px, 60 / 1360 * 100vw, 120px)",
    bigTextMargin: "clamp(8px, 16 / 1360 * 100vw, 32px) 0 0 0",
    bigTextFontSize: "clamp(9px, 18 / 1360 * 100vw, 36px)",
    paragraphFontSize: "clamp(8px, 16 / 1360 * 100vw, 32px)",
    paragraphWidth: "80%",
    buttonFontSize: "clamp(8px, 16 / 1360 * 100vw, 32px)",
    buttonBorderRadius: "clamp(2.5px, 5 / 1360 * 100vw, 10px)",
    buttonPadding:
      "clamp(3px, 6 / 1360 * 100vw, 12px)  clamp(5px, 10 / 1360 * 100vw, 20px)  ",
    buttonMargin:
      "clamp(4px, 8 / 1360 * 100vw, 16px) 0 clamp(5px, 10 / 1360 * 100vw, 20px) 0",
  },
  xl: {
    popupHeight: "clamp(130px, 260 / 1520 * 100vw, 520px)",
    popupWidth: "clamp(175px, 350 / 1520 * 100vw, 700px)",
    popupBorderRadius: "clamp(2.5px, 5 / 1520 * 100vw, 10px)",
    logoWidth: "clamp(30px, 60 / 1520 * 100vw, 120px)",
    logoHeight: "clamp(30px, 60 / 1520 * 100vw, 120px)",
    bigTextMargin: "clamp(8px, 16 / 1520 * 100vw, 32px) 0 0 0",
    bigTextFontSize: "clamp(9px, 18 / 1520 * 100vw, 36px)",
    paragraphFontSize: "clamp(8px, 16 / 1520 * 100vw, 32px)",
    paragraphWidth: "80%",
    buttonFontSize: "clamp(8px, 16 / 1520 * 100vw, 32px)",
    buttonBorderRadius: "clamp(2.5px, 5 / 1520 * 100vw, 10px)",
    buttonPadding:
      "clamp(3px, 6 / 1520 * 100vw, 12px)  clamp(5px, 10 / 1520 * 100vw, 20px)  ",
    buttonMargin:
      "clamp(4px, 8 / 1520 * 100vw, 16px) 0 clamp(5px, 10 / 1520 * 100vw, 20px) 0",
  },
  twoXl: {
    popupHeight: "clamp(130px, 260 / 1680 * 100vw, 520px)",
    popupWidth: "clamp(175px, 350 / 1680 * 100vw, 700px)",
    popupBorderRadius: "clamp(2.5px, 5 / 1680 * 100vw, 10px)",
    logoWidth: "clamp(30px, 60 / 1680 * 100vw, 120px)",
    logoHeight: "clamp(30px, 60 / 1680 * 100vw, 120px)",
    bigTextMargin: "clamp(8px, 16 / 1680 * 100vw, 32px) 0 0 0",
    bigTextFontSize: "clamp(9px, 18 / 1680 * 100vw, 36px)",
    paragraphFontSize: "clamp(8px, 16 / 1680 * 100vw, 32px)",
    paragraphWidth: "80%",
    buttonFontSize: "clamp(8px, 16 / 1680 * 100vw, 32px)",
    buttonBorderRadius: "clamp(2.5px, 5 / 1680 * 100vw, 10px)",
    buttonPadding:
      "clamp(3px, 6 / 1680 * 100vw, 12px)  clamp(5px, 10 / 1680 * 100vw, 20px)  ",
    buttonMargin:
      "clamp(4px, 8 / 1680 * 100vw, 16px) 0 clamp(5px, 10 / 1680 * 100vw, 20px) 0",
  },
  threeXl: {
    popupHeight: "clamp(130px, 260 / 1920 * 100vw, 520px)",
    popupWidth: "clamp(175px, 350 / 1920 * 100vw, 700px)",
    popupBorderRadius: "clamp(2.5px, 5 / 1920 * 100vw, 10px)",
    logoWidth: "clamp(30px, 60 / 1920 * 100vw, 120px)",
    logoHeight: "clamp(30px, 60 / 1920 * 100vw, 120px)",
    bigTextMargin: "clamp(8px, 16 / 1920 * 100vw, 32px) 0 0 0",
    bigTextFontSize: "clamp(9px, 18 / 1920 * 100vw, 36px)",
    paragraphFontSize: "clamp(8px, 16 / 1920 * 100vw, 32px)",
    paragraphWidth: "80%",
    buttonFontSize: "clamp(8px, 16 / 1680 * 100vw, 32px)",
    buttonBorderRadius: "clamp(2.5px, 5 / 1680 * 100vw, 10px)",
    buttonPadding:
      "clamp(3px, 6 / 1680 * 100vw, 12px)  clamp(5px, 10 / 1680 * 100vw, 20px)  ",
    buttonMargin:
      "clamp(4px, 8 / 1680 * 100vw, 16px) 0 clamp(5px, 10 / 1680 * 100vw, 20px) 0",
  },
  fourXl: {
    popupHeight: "clamp(130px, 260 / 2560 * 100vw, 520px)",
    popupWidth: "clamp(175px, 350 / 2560 * 100vw, 700px)",
    popupBorderRadius: "clamp(2.5px, 5 / 2560 * 100vw, 10px)",
    logoWidth: "clamp(30px, 60 / 2560 * 100vw, 120px)",
    logoHeight: "clamp(30px, 60 / 2560 * 100vw, 120px)",
    bigTextMargin: "clamp(8px, 16 / 2560 * 100vw, 32px) 0 0 0",
    bigTextFontSize: "clamp(9px, 18 / 2560 * 100vw, 36px)",
    paragraphFontSize: "clamp(8px, 16 / 2560 * 100vw, 32px)",
    paragraphWidth: "80%",
    buttonFontSize: "clamp(8px, 16 / 2560 * 100vw, 32px)",
    buttonBorderRadius: "clamp(2.5px, 5 / 2560 * 100vw, 10px)",
    buttonPadding:
      "clamp(3px, 6 / 2560 * 100vw, 12px)  clamp(5px, 10 / 2560 * 100vw, 20px)  ",
    buttonMargin:
      "clamp(4px, 8 / 2560 * 100vw, 16px) 0 clamp(5px, 10 / 2560 * 100vw, 20px) 0",
  },
  fiveXl: {
    popupHeight: "clamp(130px, 260 / 3840 * 100vw, 520px)",
    popupWidth: "clamp(175px, 350 / 3840 * 100vw, 700px)",
    popupBorderRadius: "clamp(2.5px, 5 / 3840 * 100vw, 10px)",
    logoWidth: "clamp(30px, 60 / 3840 * 100vw, 120px)",
    logoHeight: "clamp(30px, 60 / 3840 * 100vw, 120px)",
    bigTextMargin: "clamp(8px, 16 / 3840 * 100vw, 32px) 0 0 0",
    bigTextFontSize: "clamp(9px, 18 / 3840 * 100vw, 36px)",
    paragraphFontSize: "clamp(8px, 16 / 3840 * 100vw, 32px)",
    paragraphWidth: "80%",
    buttonFontSize: "clamp(8px, 16 / 3840 * 100vw, 32px)",
    buttonBorderRadius: "clamp(2.5px, 5 / 3840 * 100vw, 10px)",
    buttonPadding:
      "clamp(3px, 6 / 3840 * 100vw, 12px)  clamp(5px, 10 / 3840 * 100vw, 20px)  ",
    buttonMargin:
      "clamp(4px, 8 / 3840 * 100vw, 16px) 0 clamp(5px, 10 / 3840 * 100vw, 20px) 0",
  },
  sixXl: {
    popupHeight: "clamp(130px, 260 / 5120 * 100vw, 520px)",
    popupWidth: "clamp(175px, 350 / 5120 * 100vw, 700px)",
    popupBorderRadius: "clamp(2.5px, 5 / 5120 * 100vw, 10px)",
    logoWidth: "clamp(30px, 60 / 5120 * 100vw, 120px)",
    logoHeight: "clamp(30px, 60 / 5120 * 100vw, 120px)",
    bigTextMargin: "clamp(8px, 16 / 5120 * 100vw, 32px) 0 0 0",
    bigTextFontSize: "clamp(9px, 18 / 5120 * 100vw, 36px)",
    paragraphFontSize: "clamp(8px, 16 / 5120 * 100vw, 32px)",
    paragraphWidth: "80%",
    buttonFontSize: "clamp(8px, 16 / 5120 * 100vw, 32px)",
    buttonBorderRadius: "clamp(2.5px, 5 / 5120 * 100vw, 10px)",
    buttonPadding:
      "clamp(3px, 6 / 5120 * 100vw, 12px)  clamp(5px, 10 / 5120 * 100vw, 20px)  ",
    buttonMargin:
      "clamp(4px, 8 / 5120 * 100vw, 16px) 0 clamp(5px, 10 / 5120 * 100vw, 20px) 0",
  },
};

export const Test: Story = {
  args: {
    logo: logo,
    popupBackgroundColor: "#fff",
    bigText: "Thank you for your request!",
    bigTextColor: "#333",
    bigTextFontWeight: "bold",
    paragraph: "Our managers will contact you as soon as possible.",
    paragraphColor: "#666",
    paragraphFontWeight: "normal",
    buttonText: "Close",
    buttonColor: "#FFFFFF",
    buttonBackgroundColor: "#845EC2",
    responsive: responsive,
    buttonBorder: "none",
    hoverButtonColor: "#FFFFFF",
    hoverButtonBackgroundColor: "#4B4453",
    buttonTransition: "0.3s all ease-in-out",
    hoverButtonBorder: "none",
  },
};
