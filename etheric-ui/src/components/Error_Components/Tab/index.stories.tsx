import { Meta, StoryObj } from "@storybook/react";
import { ErrorTab } from "./index";

const meta: Meta<typeof ErrorTab> = {
  title: "Error_Components/ErrorTab",
  component: ErrorTab,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ErrorTab>;

const responsiveSettings = {
  xxs: {
    fontSize: "clamp(6px, 12 / 390 * 100vw, 24px)",
    padding: "clamp(4px, 8 / 390 * 100vw, 16px)",
  },
  xs: {
    fontSize: "clamp(6px, 12 / 480 * 100vw, 24px)",
    padding: "clamp(4px, 8 / 480 * 100vw, 16px)",
  },
  s: {
    fontSize: "clamp(6px, 12 / 575 * 100vw, 24px)",
    padding: "clamp(4px, 8 / 575 * 100vw, 16px)",
  },
  m: {
    fontSize: "clamp(6px, 12 / 720 * 100vw, 24px)",
    padding: "clamp(4px, 8 / 720 * 100vw, 16px)",
  },
  sm: {
    fontSize: "clamp(6px, 12 / 860 * 100vw, 24px)",
    padding: "clamp(4px, 8 / 860 * 100vw, 16px)",
  },
  l: {
    fontSize: "clamp(6px, 12 / 992 * 100vw, 24px)",
    padding: "clamp(4px, 8 / 992 * 100vw, 16px)",
  },
  tablet: {
    fontSize: "clamp(6px, 12 / 1024 * 100vw, 24px)",
    padding: "clamp(4px, 8 / 1024 * 100vw, 16px)",
  },
  md: {
    fontSize: "clamp(6px, 12 / 1100 * 100vw, 24px)",
    padding: "clamp(4px, 8 / 1100 * 100vw, 16px)",
  },
  tablet_sm: {
    fontSize: "clamp(6px, 12 / 1200 * 100vw, 24px)",
    padding: "clamp(4px, 8 / 1200 * 100vw, 16px)",
  },
  lg: {
    fontSize: "clamp(6px, 12 / 1360 * 100vw, 24px)",
    padding: "clamp(4px, 8 / 1360 * 100vw, 16px)",
  },
  xl: {
    fontSize: "clamp(6px, 12 / 1520 * 100vw, 24px)",
    padding: "clamp(4px, 8 / 1520 * 100vw, 16px)",
  },
  twoXl: {
    fontSize: "clamp(6px, 12 / 1680 * 100vw, 24px)",
    padding: "clamp(4px, 8 / 1680 * 100vw, 16px)",
  },
  threeXl: {
    fontSize: "clamp(6px, 12 / 1920 * 100vw, 24px)",
    padding: "clamp(4px, 8 / 1920 * 100vw, 16px)",
  },
  fourXl: {
    fontSize: "clamp(6px, 12 / 2560 * 100vw, 24px)",
    padding: "clamp(4px, 8 / 2560 * 100vw, 16px)",
  },
  fiveXl: {
    fontSize: "clamp(6px, 12 / 3840 * 100vw, 24px)",
    padding: "clamp(4px, 8 / 3840 * 100vw, 16px)",
  },
  sixXl: {
    fontSize: "clamp(6px, 12 / 5120 * 100vw, 24px)",
    padding: "clamp(4px, 8 / 5120 * 100vw, 16px)",
  },
};

export const Default: Story = {
  args: {
    text: "User with such email already exists.",
    responsive: responsiveSettings,
  },
};
