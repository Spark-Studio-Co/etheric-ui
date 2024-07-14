import React, { useState } from "react";
import { getBreakpoint } from "../../../utils/getBreakpoint";
import useWindowSize from "@/components/useWindowSize";
import { useStyle } from "@/components/styleContext";
import { DeviceSize } from "@/types/deviceSize";
import {
  defaultButtonResponsiveStyles,
  defaultButtonStyles,
} from "./defaultStyles";

interface ResponsiveProperties {
  width?: string;
  height?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
}

type CombinedAttributes = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.CSSProperties;

interface IButtonProps extends CombinedAttributes {
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

  const responsiveStyles =
    responsive[breakpoint] || defaultButtonResponsiveStyles[breakpoint];

  const styles = useStyle({
    defaultbutton: {
      ...responsiveStyles,
      color: isHovered
        ? defaultButtonStyles.hoverColor
        : defaultButtonStyles.color,
      backgroundColor: isHovered
        ? defaultButtonStyles.hoverBackgroundColor
        : defaultButtonStyles.backgroundColor,
      transition: defaultButtonStyles.transition,
      cursor: defaultButtonStyles.cursor,
      fontWeight: defaultButtonStyles.fontWeight,
      fontFamily: defaultButtonStyles.fontFamily,
      textDecoration: defaultButtonStyles.textDecoration,
      border: defaultButtonStyles.border,
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
