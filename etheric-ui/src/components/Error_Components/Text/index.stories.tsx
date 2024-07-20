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
  xxs: { fontSize: "12px", margin: "5px" },
  xs: { fontSize: "14px", margin: "10px" },
  s: { fontSize: "16px", margin: "15px" },
  m: { fontSize: "18px", margin: "20px" },
  sm: { fontSize: "20px", margin: "25px" },
  l: { fontSize: "22px", margin: "30px" },
  md: { fontSize: "24px", margin: "35px" },
  tablet: { fontSize: "26px", margin: "40px" },
  tabletSm: { fontSize: "28px", margin: "45px" },
  lg: { fontSize: "30px", margin: "50px" },
  xl: { fontSize: "32px", margin: "55px" },
  twoXl: { fontSize: "34px", margin: "60px" },
  threeXl: { fontSize: "36px", margin: "65px" },
  fourXl: { fontSize: "38px", margin: "70px" },
  fiveXl: { fontSize: "40px", margin: "75px" },
  sixXl: { fontSize: "42px", margin: "80px" },
};

export const ResponsiveErrorDisplay: Story = {
  args: {
    responsive: responsiveSettings,
    message: "This is a responsive error message.",
    color: "red",
    fontWeight: "bold",
    animation: "fadeIn 0.5s ease-out",
  },
};
