import type { Meta, StoryObj } from "@storybook/react";
import { MiniText } from "./index";

const meta: Meta<typeof MiniText> = {
  title: "MiniText/MiniText",
  component: MiniText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Mini_Text: Story = {};

const responsiveSettings = {
  xxs: { fontSize: "clamp(8px, 16 / 390 * 100vw, 32px)" },
  xs: { fontSize: "clamp(8px, 16 / 480 * 100vw, 32px)" },
  s: { fontSize: "clamp(8px, 16 / 575 * 100vw, 32px)" },
  m: { fontSize: "clamp(8px, 16 / 720 * 100vw, 32px)" },
  sm: { fontSize: "clamp(8px, 16 / 860 * 100vw, 32px)" },
  l: { fontSize: "clamp(8px, 16 / 992 * 100vw, 32px)" },
  md: { fontSize: "clamp(8px, 16 / 1100 * 100vw, 32px)" },
  tablet: { fontSize: "clamp(8px, 16 / 1024 * 100vw, 32px)" },
  tablet_sm: { fontSize: "clamp(8px, 16 / 1200 * 100vw, 32px)" },
  lg: { fontSize: "clamp(8px, 16 / 1360 * 100vw, 32px)" },
  xl: { fontSize: "clamp(8px, 16 / 1520 * 100vw, 32px)" },
  twoXl: { fontSize: "clamp(8px, 16 / 1680 * 100vw, 32px)" },
  threeXl: { fontSize: "clamp(8px, 16 / 1920 * 100vw, 32px)" },
  fourXl: { fontSize: "clamp(8px, 16 / 2560 * 100vw, 32px)" },
  fiveXl: { fontSize: "clamp(8px, 16 / 3840 * 100vw, 32px)" },
  sixXl: { fontSize: "clamp(8px, 16 / 5120 * 100vw, 32px)" },
};

export const Testing: Story = {
  args: {
    text: "Responsive Text",
    color: "#845EC2",
    hoverColor: "none",
    responsive: responsiveSettings,
  },
};
