import { Meta, StoryObj } from "@storybook/react";
import logo from "@/assets/etheric_ui.svg";
import { FooterBasic } from "./index";
import { defaultFooterStyles } from "@/components/defaultStyles/FooterStyles/Basic/defaultFooterStyles";
import { defaultFooterResponsive } from "@/components/defaultStyles/FooterStyles/Basic/dafaultFooterResponsive";

const meta: Meta<typeof FooterBasic> = {
  title: "Footer_Components/FooterBasic",
  component: FooterBasic,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const DefaultFooter: Story = {
  args: {
    links: [
      { text: "Home", href: "#" },
      { text: "About", href: "#" },
      { text: "Services", href: "#" },
      { text: "Contact", href: "#" },
    ],
    logo: logo,
    responsive: { ...defaultFooterResponsive },
    ...defaultFooterStyles,
  },
};
