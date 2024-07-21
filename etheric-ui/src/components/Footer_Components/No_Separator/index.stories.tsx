import { FooterNoSeparator } from "./index";
import logo from "@/assets/etheric_ui.svg";
import { Meta, StoryObj } from "@storybook/react";
import { defaultFooterStyles } from "@/components/defaultStyles/FooterStyles/Basic/defaultFooterStyles";
import { defaultFooterResponsive } from "@/components/defaultStyles/FooterStyles/Basic/dafaultFooterResponsive";

const meta: Meta<typeof FooterNoSeparator> = {
  title: "Footer_Components/FooterNoSeparator",
  component: FooterNoSeparator,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultFooter: Story = {
  args: {
    logo: logo,
    links: [
      { text: "Home", href: "#" },
      { text: "About", href: "#" },
      { text: "Services", href: "#" },
      { text: "Contact", href: "#" },
    ],
    responsive: { ...defaultFooterResponsive },
    ...defaultFooterStyles,
  },
};
