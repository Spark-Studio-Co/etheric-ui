import React from "react";
import { getBreakpoint } from "@/utils/getBreakpoint";
import useWindowSize from "../useWindowSize";
import { DeviceSize } from "@/types/deviceSize";

interface ResponsiveProperties {
  width?: string;
  height?: string;
  margin?: string;
}

interface IHorizontalSeparatorProps {
  background?: string;
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
}

export const HorizontalSeparator: React.FC<IHorizontalSeparatorProps> = ({
  background = "black",
  responsive,
}) => {
  const { width: windowWidth } = useWindowSize();

  const getResponsiveProperty = (
    property: keyof ResponsiveProperties,
    defaultValue: string
  ): string => {
    const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;
    return responsive[breakpoint]?.[property] || defaultValue;
  };

  const getMargin = () => getResponsiveProperty("margin", "5px");

  const getWidth = () => getResponsiveProperty("width", "20px");

  const getHeight = () => getResponsiveProperty("width", "20px");

  return (
    <hr
      style={{
        margin: getMargin(),
        width: getWidth(),
        height: getHeight(),
        background,
        border: "none",
      }}
    />
  );
};
