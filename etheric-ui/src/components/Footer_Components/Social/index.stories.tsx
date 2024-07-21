import { Meta, StoryObj } from "@storybook/react";
import logo from "@/assets/etheric_ui.svg";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { defaultFooterStyles } from "@/components/defaultStyles/FooterStyles/Social/defaultFooterStyles";
import { defaultFooterResponsive } from "@/components/defaultStyles/FooterStyles/Social/defaultFooterResponsive";
import { FooterSocial } from "./index";

const meta: Meta<typeof FooterSocial> = {
  title: "Footer_Components/FooterSocial",
  component: FooterSocial,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof FooterSocial>;

export const Default: Story = {
  args: {
    logo: logo,
    links: [
      { text: "Home", href: "#" },
      { text: "About", href: "#" },
      { text: "Services", href: "#" },
      { text: "Contact", href: "#" },
    ],
    icons: [
      { iconHref: "https://instagram.com", icon: faInstagram },
      { iconHref: "https://facebook.com", icon: faFacebookF },
      { iconHref: "https://twitter.com", icon: faTwitter },
    ],
    responsive: { ...defaultFooterResponsive },
    ...defaultFooterStyles,
  },
};
