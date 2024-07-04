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
    footerWidth: "100%",
    footerMargin: "5px",
    containerWidth: "100%",
    containerMarginTop: "10px",
    logoWidth: "40px",
    logoHeight: "40px",
    gapNavigation: "5px",
    linkWidth: "auto",
    linkHeight: "30px",
    linkFontSize: "10px",
    linkMargin: "5px",
    linkBorderRadius: "2px",
    linkPadding: "5px",
    buttonWidth: "100%",
    buttonHeight: "30px",
    buttonFontSize: "10px",
    buttonMargin: "5px",
    buttonBorderRadius: "2px",
    buttonPadding: "5px",
    separatorMargin: "5px",
    separatorHeight: "1px",
  },
  xs: {
    footerWidth: "100%",
    footerMargin: "10px",
    containerWidth: "100%",
    containerMarginTop: "15px",
    logoWidth: "50px",
    logoHeight: "50px",
    gapNavigation: "10px",
    linkWidth: "auto",
    linkHeight: "35px",
    linkFontSize: "12px",
    linkMargin: "5px",
    linkBorderRadius: "3px",
    linkPadding: "8px",
    buttonWidth: "100%",
    buttonHeight: "35px",
    buttonFontSize: "12px",
    buttonMargin: "5px",
    buttonBorderRadius: "3px",
    buttonPadding: "8px",
    separatorMargin: "10px",
    separatorHeight: "1px",
  },
  s: {
    footerWidth: "100%",
    footerMargin: "15px",
    containerWidth: "95%",
    containerMarginTop: "20px",
    logoWidth: "60px",
    logoHeight: "60px",
    gapNavigation: "12px",
    linkWidth: "auto",
    linkHeight: "40px",
    linkFontSize: "14px",
    linkMargin: "10px",
    linkBorderRadius: "4px",
    linkPadding: "10px",
    buttonWidth: "100%",
    buttonHeight: "40px",
    buttonFontSize: "14px",
    buttonMargin: "10px",
    buttonBorderRadius: "4px",
    buttonPadding: "10px",
    separatorMargin: "15px",
    separatorHeight: "1px",
  },
  m: {
    footerWidth: "100%",
    footerMargin: "20px",
    containerWidth: "90%",
    containerMarginTop: "25px",
    logoWidth: "70px",
    logoHeight: "70px",
    gapNavigation: "14px",
    linkWidth: "auto",
    linkHeight: "45px",
    linkFontSize: "16px",
    linkMargin: "10px",
    linkBorderRadius: "5px",
    linkPadding: "12px",
    buttonWidth: "100%",
    buttonHeight: "45px",
    buttonFontSize: "16px",
    buttonMargin: "10px",
    buttonBorderRadius: "5px",
    buttonPadding: "12px",
    separatorMargin: "20px",
    separatorHeight: "2px",
  },
  l: {
    footerWidth: "100%",
    footerMargin: "25px",
    containerWidth: "85%",
    containerMarginTop: "30px",
    logoWidth: "80px",
    logoHeight: "80px",
    gapNavigation: "16px",
    linkWidth: "auto",
    linkHeight: "50px",
    linkFontSize: "18px",
    linkMargin: "15px",
    linkBorderRadius: "6px",
    linkPadding: "14px",
    buttonWidth: "100%",
    buttonHeight: "50px",
    buttonFontSize: "18px",
    buttonMargin: "15px",
    buttonBorderRadius: "6px",
    buttonPadding: "14px",
    separatorMargin: "25px",
    separatorHeight: "2px",
  },
  xl: {
    footerWidth: "100%",
    containerWidth: "90%",
    containerMargin: "20px auto",
    footerMargin: "auto",
    logoWidth: "90px",
    logoHeight: "90px",
    gapNavigation: "18px",
    linkWidth: "auto",
    linkHeight: "55px",
    linkFontSize: "20px",
    linkMargin: "20px",
    linkBorderRadius: "7px",
    linkPadding: "16px",
    buttonWidth: "100%",
    buttonHeight: "55px",
    buttonFontSize: "20px",
    buttonMargin: "20px",
    buttonBorderRadius: "7px",
    buttonPadding: "16px",
    separatorMargin: "10px auto",
    logoStudioWidth: "90px",
    logoStudioHeight: "90px",
    logoStudioMargin: "25px 0 0 90px",
  },
};

export const DefaultFooter: Story = {
  args: {
    backgroundColorFooter: "lightgray",
    transitionNavigation: "all 0.3s ease",
    logo: logo,
    links: [
      { text: "Home", href: "#" },
      { text: "About", href: "#" },
      { text: "Services", href: "#" },
      { text: "Contact", href: "#" },
    ],
    responsive: responsiveSettings,
    buttonBackgroundColor: "blue",
    buttonFontWeight: "bold",
    buttonFontFamily: "Arial, sans-serif",
    buttonTextDecoration: "none",
    buttonText: "Call to Action",
    buttonHref: "#",
    buttonHoverBorder: "2px solid darkblue",
    buttonBorder: "1px solid blue",
    buttonHoverColor: "white",
    buttonColor: "red",
    buttonTransition: "all 0.3s ease",
    linkColor: "orange",
    linkHoverColor: "none",
    linkTextDecoration: "none",
    logoHref: "#",
    hoverButtonBackgroundColor: "darkblue",
    separatorBackgroundColor: "red",
  },
};
