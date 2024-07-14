import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { getBreakpoint } from "../../../utils/getBreakpoint";
import useWindowSize from "@/components/useWindowSize";
import { DeviceSize } from "@/types/deviceSize";
import { useStyle } from "@/components/styleContext";

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

interface IIconButton extends CombinedAttributes {
  icon: IconDefinition;
  id?: string;
  onClick?: () => void;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  borderRadius?: string;
  hoverBorder?: string;
  border?: string;
  transition?: string;
  iconHoverColor?: string;
  iconColor?: string;
  color?: string;
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
}

export const IconButton: React.FC<IIconButton> = ({
  icon,
  id,
  onClick,
  backgroundColor,
  hoverBackgroundColor,
  borderRadius,
  hoverBorder,
  border,
  transition,
  iconHoverColor,
  iconColor,
  color,
  responsive,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { width: windowWidth } = useWindowSize();

  const styles = useStyle({
    iconbutton: {
      transition,
      border: isHovered ? hoverBorder : border,
      backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
      color: isHovered ? iconHoverColor : iconColor || color,
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

  const getHeight = () => getResponsiveProperty("width", "20px");

  const getBorderRadius = () => getResponsiveProperty("borderRadius", "20px");

  return (
    <button
      id={id}
      onClick={onClick}
      style={{
        margin: getMargin(),
        borderRadius: getBorderRadius(),
        height: getHeight(),
        padding: getPadding(),
        width: getWidth(),
        ...styles.iconbutton,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      <FontAwesomeIcon
        icon={icon}
        style={{
          fontSize: getFontSize(),
          ...styles.iconbutton,
        }}
      />
    </button>
  );
};
