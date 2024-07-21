import { Meta, StoryObj } from "@storybook/react";
import logo from "@/assets/etheric_ui.svg";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { defaultFooterStyles } from "@/components/defaultStyles/FooterStyles/SocialMobile/defaultFooterStyles";
import { defaultFooterResponsive } from "@/components/defaultStyles/FooterStyles/SocialMobile/defaultFooterResponsive";
import { FooterSocialMobile } from "./index";

const meta: Meta<typeof FooterSocialMobile> = {
  title: "Footer_Components/FooterSocialMobile",
  component: FooterSocialMobile,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const defaultArgs = {
  logo: logo,
  links: [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
    { text: "Services", href: "#" },
    { text: "Contact", href: "#" },
  ],
  icons: [
    { iconHref: "https://twitter.com", icon: faTwitter },
    { iconHref: "https://facebook.com", icon: faFacebookF },
    { iconHref: "https://instagram.com", icon: faInstagram },
  ],
  responsive: { ...defaultFooterResponsive },
  ...defaultFooterStyles,
};

export const Default: StoryObj<typeof FooterSocialMobile> = {
  args: defaultArgs,
};
