import React, { useState } from "react";
import s from "./styles.module.scss";
import { getBreakpoint } from "@/utils/getBreakpoint";
import useWindowSize from "@/components/useWindowSize";
import { useStyle } from "@/components/styleContext";
import { DeviceSize } from "@/types/deviceSize";

interface ResponsiveProperties {
  margin?: string;
  padding?: string;
  fontSize?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

interface IDefaultInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  responsive: Record<DeviceSize, ResponsiveProperties>;
  backgroundColor?: string;
  fontWeight?: string;
  fontFamily?: string;
  border?: string;
  color?: string;
  focusBackgroundColor?: string;
  focusColor?: string;
  focusBorder?: string;
  transition?: string;
  placeholderColor?: string;
  focusPlaceholderColor?: string;
  focusBorderBottomColor?: string;
  borderBottomColor?: string;
  id?: string;
  inputType?: "borderBottom";
}

export const DefaultInput: React.FC<IDefaultInputProps> = ({
  placeholder,
  id,
  backgroundColor,
  fontWeight,
  focusBorderBottomColor,
  borderBottomColor,
  height,
  border,
  color,
  width,
  fontFamily,
  focusBackgroundColor = "transparent",
  focusColor,
  focusBorder,
  transition,
  inputType,
  placeholderColor,
  focusPlaceholderColor,
  responsive,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const { width: windowWidth } = useWindowSize();

  const componentStyles = useStyle({
    defaultinput: {
      backgroundColor: isFocused ? focusBackgroundColor : backgroundColor,
      fontWeight,
      fontFamily,
      border:
        inputType !== "borderBottom"
          ? isFocused
            ? focusBorder
            : border
          : undefined,
      borderBottom:
        inputType === "borderBottom"
          ? `${isFocused ? focusBorderBottomColor : borderBottomColor}`
          : undefined,
      color: isFocused ? focusColor : color,
      transition,
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

  const inputClass = `${s.input} ${s[`input--${inputType}`]}`;

  return (
    <input
      placeholder={placeholder}
      id={id}
      className={`default-input ${isFocused ? "focused" : ""} ${inputClass}`}
      style={{
        ...componentStyles.defaultinput,
        margin: getMargin(),
        padding: getPadding(),
        fontSize: getFontSize(),
        width: getWidth(),
        height: getHeight(),
        borderRadius: getBorderRadius(),
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...rest}
      required
    />
  );
};
