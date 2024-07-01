import React, { useState } from "react";
import useWindowSize from "../../useWindowSize";
import { getBreakpoint } from "../../../utils/getBreakpoint";
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

interface IButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  backgroundColor?: string;
  target?: string;
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
  id?: string;
  responsive?: Record<DeviceSize, ResponsiveProperties>;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const LinkButton: React.FC<IButtonLinkProps> = ({
  href,
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
  target,
  transition,
  responsive,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { width: windowWidth } = useWindowSize();

  const styles = useStyle({
    navlinkbutton: {
      color: isHovered ? hoverColor : color,
      border: isHovered ? hoverBorder : border,
      transition,
      textDecoration,
      fontWeight,
      fontFamily,
      backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
      display: "inline-block",
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
  const getWidth = () => getResponsiveProperty("width", "auto");
  const getHeight = () => getResponsiveProperty("height", "auto");
  const getBorderRadius = () => getResponsiveProperty("borderRadius", "20px");

  return (
    <a
      id={id}
      href={href}
      target={target}
      style={{
        ...styles.navlinkbutton,
        margin: getMargin(),
        fontSize: getFontSize(),
        padding: getPadding(),
        width: getWidth(),
        height: getHeight(),
        borderRadius: getBorderRadius(),
      }}
      onClick={(event) => {
        if (onClick) {
          event.preventDefault();
          onClick(event);
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {text}
    </a>
  );
};
