import React from "react";
import { getBreakpoint } from "@/utils/getBreakpoint";
import useWindowSize from "../useWindowSize";
import { DeviceSize } from "@/types/deviceSize";

interface ResponsiveProperties {
  width?: string;
  height?: string;
}

interface ILogoProps {
  responsive: Record<DeviceSize, ResponsiveProperties>;
  logo: string;
  width?: string;
  height?: string;
}

export const Logo: React.FC<ILogoProps> = ({ logo, responsive }) => {
  const { width: windowWidth } = useWindowSize();

  const getResponsiveProperty = (
    property: keyof ResponsiveProperties,
    defaultValue: string
  ): string => {
    const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;
    return responsive[breakpoint]?.[property] || defaultValue;
  };

  return (
    <a href="/">
      <img
        src={logo}
        alt="Logo"
        style={{
          width: getResponsiveProperty("width", "35px"),
          height: getResponsiveProperty("height", "35px"),
        }}
      />
    </a>
  );
};
