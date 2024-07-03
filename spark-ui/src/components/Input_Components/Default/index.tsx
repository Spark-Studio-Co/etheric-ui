import React, { useState } from "react";
import s from "./styles.module.scss";
import { getBreakpoint } from "@/utils/getBreakpoint";
import useWindowSize from "@/components/useWindowSize";
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
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
  backgroundColor?: string;
  fontWeight?: string;
  fontFamily?: string;
  border?: string;
  focusBackgroundColor?: string;
  focusColor?: string;
  focusBorder?: string;
  transition?: string;
  focusBorderBottom?: string;
  placeholderColor?: string;
  focusPlaceholderColor?: string;
  borderBottom?: string;
  inputType?: "borderBottom";
}

export const DefaultInput: React.FC<IDefaultInputProps> = ({
  placeholder,
  id,
  backgroundColor,
  fontWeight,
  fontFamily,
  border,
  color,
  focusBackgroundColor,
  focusColor,
  focusBorder,
  transition,
  inputType,
  borderBottom,
  placeholderColor,
  focusBorderBottom,
  focusPlaceholderColor,
  responsive,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const { width: windowWidth } = useWindowSize();

  const getResponsiveProperty = (
    property: keyof ResponsiveProperties,
    defaultValue: string
  ) => {
    const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;
    return responsive[breakpoint]?.[property] || defaultValue;
  };

  const inputStyle: React.CSSProperties = {
    margin: getResponsiveProperty("margin", "5px"),
    padding: getResponsiveProperty("padding", "5px"),
    backgroundColor: isFocused ? focusBackgroundColor : backgroundColor,
    fontSize: getResponsiveProperty("fontSize", "16px"),
    fontWeight: fontWeight,
    fontFamily: fontFamily,
    width: getResponsiveProperty("width", "100%"),
    height: getResponsiveProperty("height", "auto"),
    borderRadius: getResponsiveProperty("borderRadius", "5px"),
    color: color,
    transition: transition,
    outline: "none",
    border:
      inputType !== "borderBottom"
        ? isFocused
          ? focusBorder
          : border
        : "none",
    borderBottom:
      inputType === "borderBottom"
        ? isFocused
          ? focusBorderBottom
          : borderBottom
        : border,
  };

  return (
    <>
      <style>
        {`#${id}::placeholder { color: ${placeholderColor}; }`}
        {`#${id}:focus::placeholder { color: ${focusPlaceholderColor || placeholderColor}; }`}
      </style>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className={`default-input ${isFocused ? "focused" : ""} ${s.input} ${inputType === "borderBottom" ? s.borderBottom : ""}`}
        style={inputStyle}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </>
  );
};
