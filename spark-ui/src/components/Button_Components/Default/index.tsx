import React, { useState } from "react";
import { getBreakpoint } from "../../../utils/getBreakpoint";
import useWindowSize from "@/components/useWindowSize";
import { useStyle } from "@/components/styleContext";
import { DeviceSize } from "@/types/deviceSize";

interface ResponsiveProperties {
  width?: string;
  height?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
}

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.CSSProperties {
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  textDecoration?: string;
  border?: string;
  color?: string;
  hoverBackgroundColor?: string;
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
  hoverColor?: string;
  hoverBorder?: string;
  transition?: string;
  text: string;
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const defaultResponsiveStyles: Record<string, React.CSSProperties> = {
  xxs: {
    width: "clamp(125px, 250 / 390 * 100vw, 500px)",
    height: "clamp(25px, 50 / 390 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 390 * 100vw, 24px)",
    borderRadius: "0px",
  },
  xs: {
    width: "clamp(125px, 250 / 480 * 100vw, 500px)",
    height: "clamp(25px, 50 / 480 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 480 * 100vw, 24px)",
    borderRadius: "0px",
  },
  s: {
    width: "clamp(125px, 250 / 575 * 100vw, 500px)",
    height: "clamp(25px, 50 / 575 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 575 * 100vw, 24px)",
    borderRadius: "0px",
  },
  m: {
    width: "clamp(125px, 250 / 720 * 100vw, 500px)",
    height: "clamp(25px, 50 / 720 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 720 * 100vw, 24px)",
    borderRadius: "0px",
  },
  sm: {
    width: "clamp(125px, 250 / 860 * 100vw, 500px)",
    height: "clamp(25px, 50 / 860 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 860 * 100vw, 24px)",
    borderRadius: "0px",
  },
  l: {
    width: "clamp(125px, 250 / 992 * 100vw, 500px)",
    height: "clamp(25px, 50 / 992 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 992 * 100vw, 24px)",
    borderRadius: "0px",
  },
  md: {
    width: "clamp(125px, 250 / 1100 * 100vw, 500px)",
    height: "clamp(25px, 50 / 1100 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 1100 * 100vw, 24px)",
    borderRadius: "0px",
  },
  tablet: {
    width: "clamp(125px, 250 / 1024 * 100vw, 500px)",
    height: "clamp(25px, 50 / 1024 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 1024 * 100vw, 24px)",
    borderRadius: "0px",
  },
  tablet_sm: {
    width: "clamp(125px, 250 / 1200 * 100vw, 500px)",
    height: "clamp(25px, 50 / 1200 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 1200 * 100vw, 24px)",
    borderRadius: "0px",
  },
  lg: {
    width: "clamp(125px, 250 / 1360 * 100vw, 500px)",
    height: "clamp(25px, 50 / 1360 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 1360 * 100vw, 24px)",
    borderRadius: "0px",
  },
  xl: {
    width: "clamp(125px, 250 / 1520 * 100vw, 500px)",
    height: "clamp(25px, 50 / 1520 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 1520 * 100vw, 24px)",
    borderRadius: "0px",
  },
  twoXl: {
    width: "clamp(125px, 250 / 1680 * 100vw, 500px)",
    height: "clamp(25px, 50 / 1680 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 1680 * 100vw, 24px)",
    borderRadius: "0px",
  },
  threeXl: {
    width: "clamp(125px, 250 / 1920 * 100vw, 500px)",
    height: "clamp(25px, 50 / 1920 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 1920 * 100vw, 24px)",
    borderRadius: "0px",
  },
  fourXl: {
    width: "clamp(125px, 250 / 2560 * 100vw, 500px)",
    height: "clamp(25px, 50 / 2560 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 2560 * 100vw, 24px)",
    borderRadius: "0px",
  },
  fiveXl: {
    width: "clamp(125px, 250 / 3840 * 100vw, 500px)",
    height: "clamp(25px, 50 / 3840 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 3840 * 100vw, 24px)",
    borderRadius: "0px",
  },
  sixXl: {
    width: "clamp(125px, 250 / 5120 * 100vw, 500px)",
    height: "clamp(25px, 50 / 5120 * 100vw, 100px)",
    fontSize: "clamp(6px, 12 / 5120 * 100vw, 24px)",
    borderRadius: "0px",
  },
};

export const Button: React.FC<IButtonProps> = ({
  text,
  onClick,
  id,
  backgroundColor,
  fontSize,
  fontWeight,
  fontFamily,
  textDecoration,
  border,
  color,
  hoverBackgroundColor,
  hoverColor,
  hoverBorder,
  transition,
  responsive,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { width: windowWidth } = useWindowSize();
  const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;
  // Тут надо пофиксить брэйкпоинт
  console.log("Current Breakpoint:", defaultResponsiveStyles[breakpoint]); // Log the current breakpoint

  const responsiveStyles =
    defaultResponsiveStyles[breakpoint] || defaultResponsiveStyles["s"]; // Confirm 's' is always defined

  const styles = useStyle({
    defaultbutton: {
      ...responsiveStyles, // Apply the default responsive styles
      color: isHovered ? hoverColor : color,
      border: isHovered ? hoverBorder : border,
      transition,
      textDecoration,
      fontWeight,
      fontFamily,
      backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
      ...rest,
    },
  });

  const getResponsiveProperty = (
    property: keyof ResponsiveProperties,
    defaultValue: string
  ): string => {
    const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;
    return responsive[breakpoint]?.[property] || defaultValue;
  };

  const getMargin = () => getResponsiveProperty("margin", "5px");

  const getFontSize = () => getResponsiveProperty("fontSize", "16px");

  const getPadding = () => getResponsiveProperty("padding", "5px");

  const getWidth = () => getResponsiveProperty("width", "20px");

  const getHeight = () => getResponsiveProperty("height", "20px");

  const getBorderRadius = () => getResponsiveProperty("borderRadius", "20px");

  return (
    <button
      id={id}
      onClick={onClick}
      style={{
        ...styles.defaultbutton,
        margin: getMargin(),
        fontSize: getFontSize(),
        padding: getPadding(),
        width: getWidth(),
        height: getHeight(),
        borderRadius: getBorderRadius(),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
      type="submit"
    >
      {text}
    </button>
  );
};
