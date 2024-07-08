import { Meta, StoryObj } from "@storybook/react";
import { HeaderMobile } from "./index";
import logo from "../../Logo/logo-402d9f18.svg";

const meta: Meta<typeof HeaderMobile> = {
  title: "Header_Components/HeaderMobile",
  component: HeaderMobile,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof HeaderMobile>;

export const DefaultHeaderMobile: Story = {
  args: {
    logoHref: "#",
    logo: logo,
    links: [
      { text: "Home", href: "#" },
      { text: "About Us", href: "#" },
      { text: "Services", href: "#" },
      { text: "Contact", href: "#" },
    ],
    buttonHref: "#signup",
    buttonText: "Sign Up",
    buttonColor: "red",
    buttonTextDecoration: "none",
    buttonFontFamily: "Arial, sans-serif",
    buttonFontWeight: "bold",
    isBurgerMenu: true,
    burgerLineColor: "red",
    phoneText: "Phone",
    phoneColor: "red",
    emailText: "Email",
    emailColor: "blue",
    menuPosition: "center",
    animateLinks: true,
    responsive: {
      xxs: {
        logoWidth: "100px",
        logoHeight: "60px",
        buttonFontSize: "12px",
        buttonBorderRadius: "5px",
        buttonPadding: "12px 20px",
        containerWidth: "90%",
        containerMargin: "16px auto 16px auto",
      },
      xs: {
        logoHeight: "120px",
        logoWidth: "80px",
        containerWidth: "85%",
        burgerLineWidth: "35px",
        bottomLineTop: "10px",
        topLineTop: "-10px",
        burgerContainerMargin: "0",
        containerMargin: "10px auto",
      },
      s: {
        logoHeight: "120px",
        logoWidth: "80px",
        containerWidth: "90%",
        burgerContainerMargin: "0",
        containerMargin: "10px auto",
      },
    },
  },
};
