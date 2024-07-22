import React, { useState } from "react";
import useWindowSize from "../../useWindowSize";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getBreakpoint } from "../../../utils/getBreakpoint";
import { useStyle } from "@/components/styleContext";
import { DeviceSize } from "@/types/deviceSize";
import { defaultIconButtonResponsive } from "@/components/defaultStyles/IconButtonStyles/defaultIconButtonResponsive";
import { defaultIconButtonStyles } from "@/components/defaultStyles/IconButtonStyles/defaultIconButtonStyles";

interface ResponsiveProperties {
  width?: string;
  height?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  iconFontSize?: string;
  gap?: string;
}

type CombinedAttributes = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.CSSProperties;

interface IIconTextProps extends CombinedAttributes {
  icon: IconDefinition;
  backgroundColor?: string;
  fontWeight?: string;
  fontFamily?: string;
  textDecoration?: string;
  border?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  hoverBorder?: string;
  transition?: string;
  text: string;
  iconColor?: string;
  iconHoverColor?: string;
  id?: string;
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const IconTextButton: React.FC<IIconTextProps> = ({
  icon,
  text,
  onClick,
  id,
  backgroundColor,
  fontWeight,
  fontFamily,
  textDecoration,
  border,
  color,
  hoverBackgroundColor,
  hoverColor,
  hoverBorder,
  iconColor,
  iconHoverColor,
  transition,
  responsive,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { width: windowWidth } = useWindowSize();

  const styles = useStyle({
    iconbutton: {
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

  const getHeight = () => getResponsiveProperty("height", "20px");

  const getBorderRadius = () => getResponsiveProperty("borderRadius", "20px");

  const getIconFontSize = () => getResponsiveProperty("iconFontSize", "24px");

  const getGap = () => getResponsiveProperty("gap", "20px");

  return (
    <button
      id={id}
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        ...styles.iconbutton,
        margin: getMargin(),
        borderRadius: getBorderRadius(),
        height: getHeight(),
        padding: getPadding(),
        width: getWidth(),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      <FontAwesomeIcon
        icon={icon}
        style={{
          ...styles.iconbutton,
          color: isHovered ? iconHoverColor : iconColor || color,
          fontSize: getIconFontSize(),
          marginRight: getGap(),
        }}
      />
      <span
        style={{
          ...styles.iconbutton,
          fontSize: getFontSize(),
          color: isHovered ? hoverColor : color,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </span>
    </button>
  );
};
