import type { Meta, StoryObj } from "@storybook/react";
import logo from "../Logo/logo-402d9f18.svg";
import { Header } from "./index";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Header>;

const links = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#services", text: "Services" },
  { href: "#contact", text: "Contact" },
];

export const Test: Story = {
  args: {
    links: links,
    threeXlHeaderWidth: "100%",
    threeXlContentWidth: "86.6%",
    gap: "20px",
    id: "main-header",
    backgroundColor: "#f0f0f0",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    height: "60px",
    textDecoration: "none",
    border: "none",
    borderRadius: "5px",
    color: "#333",
    hoverBackgroundColor: "#cccccc",
    hoverColor: "#fff",
    hoverBorder: "1px solid #666",
    transition: "all 0.3s ease",
    padding: "10px 15px",
    cursor: "pointer",
    logo: logo,
    xxsLogoWidth: "50px",
    xsLogoWidth: "60px",
    sLogoWidth: "70px",
    mLogoWidth: "80px",
    smLogoWidth: "90px",
    lLogoWidth: "100px",
    mdLogoWidth: "110px",
    tabletLogoWidth: "120px",
    tabletSmLogoWidth: "130px",
    lgLogoWidth: "140px",
    xlLogoWidth: "150px",
    twoXlLogoWidth: "160px",
    threeXlLogoWidth: "170px",
    fourXlLogoWidth: "180px",
    fiveXlLogoWidth: "190px",
    sixXlLogoWidth: "200px",
    xxsLogoHeight: "30px",
    xsLogoHeight: "35px",
    sLogoHeight: "40px",
    mLogoHeight: "45px",
    smLogoHeight: "50px",
    lLogoHeight: "55px",
    mdLogoHeight: "60px",
    tabletLogoHeight: "65px",
    tabletSmLogoHeight: "70px",
    lgLogoHeight: "75px",
    xlLogoHeight: "80px",
    twoXlLogoHeight: "85px",
    threeXlLogoHeight: "90px",
    fourXlLogoHeight: "95px",
    fiveXlLogoHeight: "100px",
    sixXlLogoHeight: "105px",
  },
};
