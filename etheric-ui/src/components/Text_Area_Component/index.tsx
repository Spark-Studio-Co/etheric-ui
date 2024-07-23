import React, { useState } from "react";
import { getBreakpoint } from "@/utils/getBreakpoint";
import useWindowSize from "../useWindowSize";
import { DeviceSize } from "@/types/deviceSize";

interface ResponsiveProperties {
  width?: string;
  height?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
}

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  fontFamily?: string;
  width?: string;
  height?: string;
  textAlign?: any;
  background?: string;
  border?: string;
  focusPlaceholderColor?: string;
  color?: string;
  id?: string;
  hoverBorder?: string;
  transition?: string;
  focusBorder?: string;
  placeholderColor?: string;
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
}

export const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  fontFamily,
  width,
  height,
  textAlign,
  background,
  transition,
  id,
  border,
  hoverBorder,
  focusPlaceholderColor,
  color,
  focusBorder,
  placeholderColor,
  responsive,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
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

  const getPadding = () => getResponsiveProperty("padding", "5px");

  const getWidth = () => getResponsiveProperty("width", "20px");

  const getHeight = () => getResponsiveProperty("width", "20px");

  const getBorderRadius = () => getResponsiveProperty("borderRadius", "20px");

  const styles = `
    .default-input::placeholder {
      color: ${placeholderColor};
      font-size: ${getFontSize()};
    }
    .default-input.focused::placeholder {
      color: ${focusPlaceholderColor};
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  return (
    <>
      <textarea
        id={id}
        className={`default-input ${isFocused ? "focused" : ""}`}
        style={{
          margin: getMargin(),
          fontSize: getFontSize(),
          fontFamily,
          width: getWidth(),
          height: getHeight(),
          textAlign,
          background,
          border: isFocused ? focusBorder : isHovered ? hoverBorder : border,
          padding: getPadding(),
          borderRadius: getBorderRadius(),
          cursor: "pointer",
          transition,
          overflow: "hidden",
          outline: "none",
          color,
        }}
        placeholder={placeholder}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required
        {...rest}
      />
    </>
  );
};
