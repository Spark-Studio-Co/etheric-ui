import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./index";

const meta: Meta<typeof Header> = {
  title: "Header/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const links = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#services", text: "Services" },
  { href: "#contact", text: "Contact" },
];

export const Test: Story = {
  args: {
    links: links,
    width: "100%",
    margin: "0 auto",
    widthContent: "90%",
    gap: "20px",
  },
};
