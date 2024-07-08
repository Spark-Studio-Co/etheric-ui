import { Meta, StoryObj } from "@storybook/react";
import { FooterBasicMobile } from "./index";
import logo from "../../Logo/logo-402d9f18.svg";

const meta: Meta<typeof FooterBasicMobile> = {
  title: "Footer_Components/FooterBasicMobile",
  component: FooterBasicMobile,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof FooterBasicMobile>;

const responsiveSettings = {
  xxs: {
    footerWidth: "100%",
    footerMargin: "20px 0px 0px 0px",
    containerWidth: "95%",
    containerMargin: "0 auto",
    logoWidth: "80px",
    logoHeight: "80px",
    allRightsMargin: "0px 0 20px",
    allRightsFontSize: "16px",
    gapNavigation: "10px",
    linkWidth: "auto",
    linkHeight: "20px",
    linkFontSize: "12px",
    linkMargin: "5px",
    linkBorderRadius: "5px",
    linkPadding: "5px 10px",
    buttonHeight: "20px",
    buttonFontSize: "14px",
    buttonMargin: "5px",
    buttonBorderRadius: "5px",
    buttonPadding: "10px 20px",
    separatorMargin: "20px auto",
    separatorHeight: "1px",
  },
  xl: {
    footerWidth: "100%",
    footerMargin: "0",
    containerWidth: "70%",
    containerMargin: "0 auto",
    logoWidth: "150px",
    logoHeight: "150px",
    gapNavigation: "20px",
    linkWidth: "auto",
    linkHeight: "30px",
    linkFontSize: "18px",
    linkMargin: "10px",
    linkBorderRadius: "10px",
    linkPadding: "10px 15px",
    buttonWidth: "200px",
    buttonHeight: "50px",
    buttonFontSize: "18px",
    buttonMargin: "10px",
    buttonBorderRadius: "10px",
    buttonPadding: "15px 25px",
    separatorMargin: "25px auto",
    separatorHeight: "2px",
  },
};

export const DefaultFooter: Story = {
  args: {
    backgroundColorFooter: "yellow",
    transitionNavigation: "0.3s ease",
    logoHref: "#",
    logo: logo,
    links: [
      { text: "Home", href: "#" },
      { text: "About", href: "#" },
      { text: "Services", href: "#" },
      { text: "Contact", href: "#" },
    ],
    buttonBackgroundColor: "#007bff",
    buttonFontWeight: "bold",
    buttonFontFamily: "Arial, sans-serif",
    buttonTextDecoration: "none",
    buttonText: "Subscribe",
    buttonHref: "#subscribe",
    buttonHoverBorder: "1px solid #0056b3",
    buttonBorder: "1px solid #007bff",
    buttonHoverColor: "#ffffff",
    buttonColor: "#ffffff",
    buttonTransition: "color 0.3s ease",
    hoverButtonBackgroundColor: "#0056b3",
    logoStudioHref: "#studio",
    separatorBackgroundColor: "red",
    linkFontWeight: "normal",
    linkFontFamily: "Arial, sans-serif",
    linkTextDecoration: "none",
    linkTransition: "background-color 0.3s ease",
    responsive: responsiveSettings,
  },
};
