import { Meta, StoryObj } from "@storybook/react";
import { HeaderMobile } from "./index";
import logo from "@/assets/etheric_ui.svg";
import { mobileStyles } from "@/components/defaultStyles/HeaderStyles/Mobile/defaultHeaderStyles";
import { mobileResponsive } from "@/components/defaultStyles/HeaderStyles/Mobile/defaultHeaderResponsive";

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
    ...mobileStyles,
    logo: logo,
    links: [
      { text: "Home", href: "#" },
      { text: "About Us", href: "#" },
      { text: "Services", href: "#" },
      { text: "Contact", href: "#" },
    ],
    isBurgerMenu: true,
    animateLinks: true,
    responsive: { ...mobileResponsive },
  },
};
