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

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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

  const styles = useStyle({
    defaultbutton: {
      color: isHovered ? hoverColor : color,
      border: isHovered ? hoverBorder : border,
      transition,
      textDecoration,
      fontWeight,
      fontFamily,
      backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
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

  const getHeight = () => getResponsiveProperty("width", "20px");

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
