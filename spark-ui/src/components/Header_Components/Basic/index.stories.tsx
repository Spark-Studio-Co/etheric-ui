import type { Meta, StoryObj } from "@storybook/react";
import { HeaderBasic } from "./index";
import logo from "../../Logo/logo-402d9f18.svg";

const meta: Meta<typeof HeaderBasic> = {
  title: "Header_Components/HeaderBasic",
  component: HeaderBasic,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeaderBasic>;

const links = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#services", text: "Services" },
  { href: "#contact", text: "Contact" },
];

const responsive = {
  xxs: {
    width: "50px",
    height: "30px",
    fontSize: "12px",
    headerWidth: "100%",
    contentWidth: "86.6%",
    linkFontSize: "12px",
    contactFontSize: "12px",
  },
  xs: {
    width: "60px",
    height: "35px",
    fontSize: "14px",
    linkFontSize: "14px",
    contactFontSize: "14px",
  },
  s: {
    width: "70px",
    height: "40px",
    fontSize: "16px",
    linkFontSize: "16px",
    contactFontSize: "16px",
  },
  m: {
    width: "80px",
    height: "45px",
    fontSize: "18px",
    linkFontSize: "18px",
    contactFontSize: "18px",
  },
  sm: {
    width: "90px",
    height: "50px",
    fontSize: "20px",
    linkFontSize: "20px",
    contactFontSize: "20px",
  },
  l: {
    width: "100px",
    height: "55px",
    fontSize: "22px",
    linkFontSize: "22px",
    contactFontSize: "22px",
  },
  md: {
    width: "110px",
    height: "60px",
    fontSize: "24px",
    linkFontSize: "24px",
    contactFontSize: "24px",
  },
  tablet: {
    width: "120px",
    height: "65px",
    fontSize: "26px",
    linkFontSize: "26px",
    contactFontSize: "26px",
  },
  tabletSm: {
    width: "130px",
    height: "70px",
    fontSize: "28px",
    linkFontSize: "28px",
    contactFontSize: "28px",
  },
  lg: {
    width: "140px",
    height: "75px",
    fontSize: "30px",
    linkFontSize: "30px",
    contactFontSize: "30px",
  },
  xl: {
    width: "150px",
    height: "80px",
    fontSize: "32px",
    linkFontSize: "32px",
    contactFontSize: "32px",
  },
  twoXl: {
    width: "160px",
    height: "85px",
    fontSize: "34px",
    linkFontSize: "34px",
    contactFontSize: "34px",
  },
  threeXl: {
    width: "50px",
    height: "30px",
    fontSize: "36px",
    linkFontSize: "36px",
    contactFontSize: "36px",
    contactPadding: "10px",
    contactMargin: "10px",
    contactwidth: "50px",
    contactHeight: "30px",
    contactBorderRadius: "10px",
  },
  fourXl: {
    width: "180px",
    height: "95px",
    fontSize: "38px",
    linkFontSize: "38px",
    contactFontSize: "38px",
  },
  fiveXl: {
    width: "190px",
    height: "100px",
    fontSize: "40px",
    linkFontSize: "40px",
    contactFontSize: "40px",
  },
  sixXl: {
    width: "200px",
    height: "105px",
    fontSize: "42px",
    linkFontSize: "42px",
    contactFontSize: "42px",
  },
};

export const Test: Story = {
  args: {
    logo: logo,
    links: links,
    responsive: responsive,
    buttonText: "Contact Us",
    buttonBackgroundColor: "orange",
    buttonBorder: "none",
    buttonColor: "#fff",
    buttonFontFamily: "Arial, sans-serif",
    buttonFontWeight: "bold",
    buttonHoverBorder: "1px solid #666",
    buttonHoverColor: "#fff",
    hoverButtonBackgroundColor: "yellow",
    buttonHref: "#contact",
    buttonTextDecoration: "none",
    buttonTransition: "all 0.3s ease",
    gap: "20px",
    id: "main-header",
    linkBackgroundColor: "#f0f0f0",
    linkFontSize: "16px",
    linkFontWeight: "bold",
    linkFontFamily: "Arial, sans-serif",
    linkTextDecoration: "none",
    linkBorder: "none",
    linkColor: "#333",
    hoverLinkBackgroundColor: "#cccccc",
    hoverLinkColor: "#fff",
    hoverLinkBorder: "1px solid #666",
    linkTransition: "all 0.3s ease",
  },
};
