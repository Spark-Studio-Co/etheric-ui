import { Meta, StoryObj } from "@storybook/react";
import logo from "@/assets/etheric_ui.svg";
import { FooterBasicMobile } from "./index";
import { defaultFooterStyles } from "@/components/defaultStyles/FooterStyles/BasicMobile/defaultFooterStyles";
import { defaultFooterResponsive } from "@/components/defaultStyles/FooterStyles/BasicMobile/dafaultFooterResponsive";

const meta: Meta<typeof FooterBasicMobile> = {
  title: "Footer_Components/FooterBasicMobile",
  component: FooterBasicMobile,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof FooterBasicMobile>;

export const DefaultFooter: Story = {
  args: {
    ...defaultFooterStyles,
    logo: logo,
    links: [
      { text: "Home", href: "#" },
      { text: "About", href: "#" },
      { text: "Services", href: "#" },
      { text: "Contact", href: "#" },
    ],
    responsive: { ...defaultFooterResponsive },
  },
};
