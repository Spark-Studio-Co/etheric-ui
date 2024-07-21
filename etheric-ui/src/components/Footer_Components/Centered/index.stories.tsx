import { FooterCentered } from "./index";
import logo from "@/assets/etheric_ui.svg";
import { Meta, StoryObj } from "@storybook/react";
import { defaultFooterStyles } from "@/components/defaultStyles/FooterStyles/Centered/defaultFooterStyles";
import { defaultFooterResponsive } from "@/components/defaultStyles/FooterStyles/Centered/defaultFooterResponsive";

const meta: Meta<typeof FooterCentered> = {
  title: "Footer_Components/FooterCentered",
  component: FooterCentered,
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
    ...defaultFooterStyles,
    responsive: { ...defaultFooterResponsive },
  },
};
