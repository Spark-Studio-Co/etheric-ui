import React, { useState } from "react";
import { getBreakpoint } from "@/utils/getBreakpoint";
import useWindowSize from "../useWindowSize";
import { DeviceSize } from "@/types/deviceSize";

interface ResponsiveProperties {
  margin?: string;
  fontSize?: string;
}

interface IMiniText extends React.HTMLAttributes<HTMLSpanElement> {
  responsive: Record<DeviceSize, ResponsiveProperties>;
  text: string;
  fontFamily?: string;
  fontWeight?: string;
  animation?: string;
  transition?: string;
  color?: string;
  hoverColor?: string;
  id?: string;
}

export const MiniText: React.FC<IMiniText> = ({
  text,
  fontFamily,
  fontWeight,
  animation,
  transition,
  id,
  color,
  hoverColor,
  responsive,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { width: windowWidth } = useWindowSize();

  const getResponsiveProperty = (
    property: keyof ResponsiveProperties,
    defaultValue: string
  ): string => {
    const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;
    return responsive[breakpoint]?.[property] || defaultValue;
  };

  const getMargin = () => getResponsiveProperty("margin", "5px");

  const getFontSize = () => getResponsiveProperty("fontSize", "16px");

  return (
    <span
      id={id}
      style={{
        margin: getMargin(),
        fontFamily,
        fontSize: getFontSize(),
        fontWeight,
        animation,
        transition,
        cursor: "pointer",
        color: isHovered ? hoverColor : color,
      }}
      {...rest}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </span>
  );
};
