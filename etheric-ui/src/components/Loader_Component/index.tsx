import React from "react";
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
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
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
  transition,
  responsive,
  defaultStyles,
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
    textDecoration: defaultLoaderStyles.textDecoration,
    border: defaultLoaderStyles.border,
    ...rest,
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
      {text}
    </div>
  );
};
