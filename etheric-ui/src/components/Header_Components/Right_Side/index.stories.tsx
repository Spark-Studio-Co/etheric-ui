import type { Meta, StoryObj } from "@storybook/react";
import { HeaderRightSide } from "./index";
import logo from "../../Logo/logo-402d9f18.svg";

const meta: Meta<typeof HeaderRightSide> = {
  title: "Header_Components/HeaderRightSide",
  component: HeaderRightSide,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeaderRightSide>;

// Define the links array
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
    contactText: "Contact Us",
    contactBackgroundColor: "orange",
    contactBorder: "none",
    contactColor: "#fff",
    contactFontFamily: "Arial, sans-serif",
    contactFontWeight: "bold",
    contactHoverBorder: "1px solid #666",
    contactHoverColor: "#fff",
    hoverContactBackgroundColor: "yellow",
    contactHref: "#contact",
    contactTextDecoration: "none",
    contactTransition: "all 0.3s ease",
    gap: "20px",
    id: "main-header",
    backgroundColor: "#f0f0f0",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    textDecoration: "none",
    border: "none",
    color: "#333",
    hoverBackgroundColor: "#cccccc",
    hoverColor: "#fff",
    hoverBorder: "1px solid #666",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
};
