import React, { useState } from "react";
import useWindowSize from "@/components/useWindowSize";
import { useStyle } from "@/components/styleContext";
import { DeviceSize } from "@/types/deviceSize";
import { getBreakpoint } from "@/utils/getBreakpoint";
import { defaultLoaderResponsive } from "../defaultStyles/LoaderStyles/defaultLoaderResponsive";

interface ResponsiveProperties {
  width?: string;
  height?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
}

type CombinedAttributes = React.HTMLAttributes<HTMLDivElement> &
  React.CSSProperties;

interface ILoaderProps extends CombinedAttributes {
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

export const Loader: React.FC<ILoaderProps> = ({
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
  const { width: windowWidth } = useWindowSize();
  const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;

  const responsiveStyles =
    responsive[breakpoint] || defaultLoaderResponsive[breakpoint];

  const styles = useStyle({
    loader: {
      ...responsiveStyles,
      backgroundColor,
      color,
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

  const getBorderRadius = () => getResponsiveProperty("borderRadius", "20px");

  return (
    <div
      id={id}
      style={{
        ...styles.loader,
        margin: getMargin(),
        fontSize: getFontSize(),
        padding: getPadding(),
        borderRadius: getBorderRadius(),
      }}
      {...rest}
    >
      {text}
    </div>
  );
};
