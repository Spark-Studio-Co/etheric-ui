import React, { ReactNode } from "react";
import useWindowSize from "@/components/useWindowSize";
import { useStyle } from "@/components/styleContext";
import { DeviceSize } from "@/types/deviceSize";
import { getBreakpoint } from "@/utils/getBreakpoint";
import { defaultLoaderResponsive } from "../defaultStyles/LoaderStyles/defaultLoaderResponsive";
import { defaultLoaderStyles } from "../defaultStyles/LoaderStyles/defaulLoaderStyles";

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
  defaultStyles?: boolean;
  border?: string;
  color?: string;
  image?: ReactNode;
  spinner: ReactNode;
  text?: string;
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
  transition?: string;
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const isCSSProperty = (
  property: string
): property is keyof React.CSSProperties => {
  return property in ({} as React.CSSProperties);
};

const filterCSSProperties = (
  props: CombinedAttributes
): React.CSSProperties => {
  const cssProps: React.CSSProperties = {};
  for (const key in props) {
    if (isCSSProperty(key)) {
      cssProps[key as keyof React.CSSProperties] = props[key];
    }
  }
  return cssProps;
};

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
  image,
  transition,
  responsive,
  defaultStyles,
  spinner,
  ...rest
}) => {
  const { width: windowWidth } = useWindowSize();
  const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;

  const responsiveStyles =
    responsive[breakpoint] || defaultLoaderResponsive[breakpoint];

  const combinedStyles: React.CSSProperties = {
    ...responsiveStyles,
    color: defaultLoaderStyles.color,
    backgroundColor: defaultLoaderStyles.backgroundColor,
    transition: defaultLoaderStyles.transition,
    fontWeight: defaultLoaderStyles.fontWeight,
    fontFamily: defaultLoaderStyles.fontFamily,
    display: defaultLoaderStyles.display,
    flexDirection: defaultLoaderStyles.flexDirection,
    gap: defaultLoaderStyles.gap,
    textDecoration: defaultLoaderStyles.textDecoration,
    border: defaultLoaderStyles.border,
    ...filterCSSProperties(rest),
  };
  const styles = useStyle({
    loader: {
      ...responsiveStyles,
      backgroundColor,
      color,
      ...rest,
    },
  });

  return (
    <div
      id={id}
      // style={combinedStyles}
      style={
        defaultStyles
          ? {
              ...styles.loader,
            }
          : combinedStyles
      }
      {...rest}
    >
      {image}
      {spinner}
      <span>{text}</span>
    </div>
  );
};
