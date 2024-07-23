import type { Meta, StoryObj } from "@storybook/react";
import { ErrorText } from "./index";

const meta: Meta<typeof ErrorText> = {
  title: "Error_Components/ErrorText",
  component: ErrorText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const responsiveSettings = {
  xxs: {
    fontSize: "clamp(6px, 12 / 390 * 100vw, 24px)",
  },
  xs: {
    fontSize: "clamp(6px, 12 / 480 * 100vw, 24px)",
  },
  s: {
    fontSize: "clamp(6px, 12 / 575 * 100vw, 24px)",
  },
  m: {
    fontSize: "clamp(6px, 12 / 720 * 100vw, 24px)",
  },
  sm: {
    fontSize: "clamp(6px, 12 / 860 * 100vw, 24px)",
  },
  l: {
    fontSize: "clamp(6px, 12 / 992 * 100vw, 24px)",
  },
  tablet: {
    fontSize: "clamp(6px, 12 / 1024 * 100vw, 24px)",
  },
  md: {
    fontSize: "clamp(6px, 12 / 1100 * 100vw, 24px)",
  },
  tablet_sm: {
    fontSize: "clamp(6px, 12 / 1200 * 100vw, 24px)",
  },
  lg: {
    fontSize: "clamp(6px, 12 / 1360 * 100vw, 24px)",
  },
  xl: {
    fontSize: "clamp(6px, 12 / 1520 * 100vw, 24px)",
  },
  twoXl: {
    fontSize: "clamp(6px, 12 / 1680 * 100vw, 24px)",
  },
  threeXl: {
    fontSize: "clamp(6px, 12 / 1920 * 100vw, 24px)",
  },
  fourXl: {
    fontSize: "clamp(6px, 12 / 2560 * 100vw, 24px)",
  },
  fiveXl: {
    fontSize: "clamp(6px, 12 / 3840 * 100vw, 24px)",
  },
  sixXl: {
    fontSize: "clamp(6px, 12 / 5120 * 100vw, 24px)",
  },
};

export const ResponsiveErrorDisplay: Story = {
  args: {
    responsive: responsiveSettings,
    message: "This is a responsive error message.",
    color: "red",
  },
};
