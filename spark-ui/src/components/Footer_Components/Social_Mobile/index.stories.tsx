import { Meta, StoryObj } from "@storybook/react";
import logo from "../../Logo/logo-402d9f18.svg";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FooterSocialMobile } from "./index";

const meta: Meta<typeof FooterSocialMobile> = {
  title: "Footer_Components/FooterSocialMobile",
  component: FooterSocialMobile,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const responsive = {
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
    iconWidth: "24px",
    iconHeight: "24px",
    iconsContainerWidth: "100%",
    iconsContainerMargin: "10px 0 10px 0",
    iconsContainerGap: "10px",
  },
};

const defaultArgs = {
  backgroundColorFooter: "#f0f0f0",
  transitionNavigation: "0.3s ease",
  logoHref: "#",
  logo: logo,
  links: [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
    { text: "Services", href: "#" },
    { text: "Contact", href: "#" },
  ],
  icons: [
    { iconHref: "https://twitter.com", icon: faTwitter },
    { iconHref: "https://facebook.com", icon: faFacebookF },
    { iconHref: "https://instagram.com", icon: faInstagram },
  ],
  iconColor: "red",
  linkColor: "green",
  linkTextDecoration: "none",
  responsive: responsive,
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
};

export const Default: StoryObj<typeof FooterSocialMobile> = {
  args: defaultArgs,
};
