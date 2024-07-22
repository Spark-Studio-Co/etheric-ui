import type { Meta, StoryObj } from "@storybook/react";
import { HeaderRightSide } from "./index";
import logo from "@/assets/etheric_ui.svg";
import { defaultHeaderStyles } from "@/components/defaultStyles/HeaderStyles/Basic/defaultHeaderStyles";
import { defaultHeaderResponsive } from "@/components/defaultStyles/HeaderStyles/Basic/defaultHeaderResponsive";

const meta: Meta<typeof HeaderRightSide> = {
  title: "Header_Components/HeaderRightSide",
  component: HeaderRightSide,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeaderRightSide>;

const links = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#services", text: "Services" },
  { href: "#contact", text: "Contact" },
];

export const Test: Story = {
  args: {
    logo: logo,
    links: links,
    responsive: { ...defaultHeaderResponsive },
    ...defaultHeaderStyles,
  },
};
