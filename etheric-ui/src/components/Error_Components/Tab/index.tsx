import React from "react";
import { getBreakpoint } from "@/utils/getBreakpoint";
import useWindowSize from "@/components/useWindowSize";
import { DeviceSize } from "@/types/deviceSize";

interface ResponsiveProperties {
  fontSize?: string;
  padding?: string;
}

interface IErrorTab {
  text: string;
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
}

export const ErrorTab: React.FC<IErrorTab> = ({ text, responsive }) => {
  const { width: windowWidth } = useWindowSize();

  const getResponsiveProperty = (
    property: keyof ResponsiveProperties,
    defaultValue: string
  ): string => {
    const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;
    return responsive[breakpoint]?.[property] || defaultValue;
  };

  const getFontSize = () => getResponsiveProperty("fontSize", "16px");

  const getPadding = () => getResponsiveProperty("padding", "5px");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #DC2626",
        padding: getPadding(),
        fontSize: getFontSize(),
        color: "#DC2626",
        backgroundColor: "#FECACA",
      }}
    >
      {text}
    </div>
  );
};
