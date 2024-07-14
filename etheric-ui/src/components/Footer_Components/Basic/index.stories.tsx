import { FooterBasic } from "./index";
import logo from "../../Logo/logo-402d9f18.svg";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FooterBasic> = {
  title: "Footer_Components/FooterBasic",
  component: FooterBasic,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
const responsiveSettings = {
  xxs: {
    // smallest phones
    footerWidth: "100%",
    containerWidth: "90%",
    logoWidth: "30px",
    logoHeight: "30px",
    gapNavigation: "5px",
    linkFontSize: "10px",
    buttonFontSize: "10px",
    separatorHeight: "1px",
  },
  xs: {
    // larger phones
    logoWidth: "35px",
    logoHeight: "35px",
    linkFontSize: "12px",
    buttonFontSize: "12px",
  },
  s: {
    // small tablets
    containerWidth: "85%",
    logoWidth: "40px",
    logoHeight: "40px",
    linkFontSize: "14px",
    buttonFontSize: "14px",
  },
  sm: {
    // medium tablets
    logoWidth: "45px",
    logoHeight: "45px",
    linkFontSize: "16px",
    buttonFontSize: "16px",
  },
  m: {
    containerWidth: "80%",
    logoWidth: "50px",
    logoHeight: "50px",
    linkFontSize: "18px",
    buttonFontSize: "18px",
  },
  l: {
    // small desktops
    containerWidth: "75%",
    logoWidth: "55px",
    logoHeight: "55px",
    linkFontSize: "20px",
    buttonFontSize: "20px",
  },
  md: {
    logoWidth: "60px",
    logoHeight: "60px",
    linkFontSize: "22px",
    buttonFontSize: "22px",
  },
  tablet: {
    logoWidth: "65px",
    logoHeight: "65px",
  },
  tablet_sm: {
    logoWidth: "70px",
    logoHeight: "70px",
  },
  lg: {
    // larger desktops
    containerWidth: "70%",
    logoWidth: "75px",
    logoHeight: "75px",
  },
  xl: {
    logoWidth: "80px",
    logoHeight: "80px",
  },
  twoXl: {
    logoWidth: "85px",
    logoHeight: "85px",
  },
  threeXl: {
    footerWidth: "100%",
    containerWidth: "65%",
    containerMargin: "32px auto",
    footerMargin: "auto",
    logoWidth: "90px",
    logoHeight: "90px",
    logoStudioMargin: "32px 0 32px",
  },
  fourXl: {
    footerWidth: "100%",
    containerWidth: "65%",
    containerMargin: "32px auto",
    logoWidth: "90px",
    logoHeight: "90px",
  },
  fiveXl: {
    footerWidth: "100%",
    containerWidth: "65%",
    containerMargin: "32px auto",
    logoWidth: "90px",
    logoHeight: "90px",
  },
  sixXl: {
    containerWidth: "60%",
    logoWidth: "105px",
    logoHeight: "105px",
  },
};
export const DefaultFooter: Story = {
  args: {
    backgroundColorFooter: "lightgray",
    transitionNavigation: "all 0.3s ease",
    // logo: logo,
    links: [
      { text: "Home", href: "#" },
      { text: "About", href: "#" },
      { text: "Services", href: "#" },
      { text: "Contact", href: "#" },
    ],
    responsive: responsiveSettings,
    buttonFontWeight: "bold",
    buttonFontFamily: "Arial, sans-serif",
    buttonTextDecoration: "none",
    buttonText: "Call to Action",
    buttonHref: "#",
    logoStudio: logo,
    buttonHoverColor: "white",
    buttonColor: "red",
    linkColor: "orange",
    linkHoverColor: "none",
    linkTextDecoration: "none",
    logoHref: "#",
    separatorBackgroundColor: "red",
  },
};
