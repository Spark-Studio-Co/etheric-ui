import React from "react";
import { getBreakpoint } from "@/utils/getBreakpoint";
import useWindowSize from "@/components/useWindowSize";
import { useStyle } from "@/components/styleContext";
import { DeviceSize } from "@/types/deviceSize";

interface ResponsiveProperties {
  fontSize?: string;
  margin?: string;
}

interface IMessage {
  message: string;
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
  color?: string;
  fontWeight?: string;
  animation?: string;
  id?: string;
}

export const ErrorText: React.FC<IMessage> = ({
  responsive,
  message,
  color,
  fontWeight,
  id,
  animation,
}) => {
  const { width: windowWidth } = useWindowSize();

  const styles = useStyle({
    nav: {
      color,
      fontWeight,
      animation,
    },
  });

  const getResponsiveProperty = (
    property: keyof ResponsiveProperties,
    defaultValue: string
  ): string => {
    const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;
    return responsive[breakpoint]?.[property] || defaultValue;
  };

  if (!message) return null;

  return (
    <div
      id={id}
      style={{
        fontSize: getResponsiveProperty("fontSize", "16px"),
        margin: getResponsiveProperty("margin", "10px"),
        ...styles.nav,
      }}
    >
      {message}
    </div>
  );
};
