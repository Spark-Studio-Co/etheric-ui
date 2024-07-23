import React, { useState, ChangeEvent } from "react";
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
  value?: string;
  name?: string;
  focusBackgroundColor?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  focusColor?: string;
  focusBorder?: string;
  transition?: string;
  focusBorderBottom?: string;
  type?: string;
  placeholderColor?: string;
  focusPlaceholderColor?: string;
  hoverBorder?: string;
  borderBottom?: string;
  inputType?: "borderBottom";
}

export const DefaultInput: React.FC<IDefaultInputProps> = ({
  placeholder,
  id,
  backgroundColor,
  fontWeight,
  value,
  fontFamily,
  type,
  border,
  color,
  focusBackgroundColor,
  focusColor,
  focusBorder,
  hoverBorder,
  name,
  transition,
  inputType,
  borderBottom,
  placeholderColor,
  focusBorderBottom,
  focusPlaceholderColor,
  onChange,
  responsive,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { width: windowWidth } = useWindowSize();

  const getResponsiveProperty = (
    property: keyof ResponsiveProperties,
    defaultValue: string
  ) => {
    const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;
    return responsive[breakpoint]?.[property] || defaultValue;
  };

  const inputStyle: React.CSSProperties = {
    cursor: "pointer",
    margin: getResponsiveProperty("margin", "0"),
    padding: getResponsiveProperty("padding", "0"),
    backgroundColor: isFocused ? focusBackgroundColor : backgroundColor,
    fontSize: getResponsiveProperty("fontSize", "8px"),
    fontWeight: fontWeight,
    fontFamily: fontFamily,
    width: getResponsiveProperty("width", "100%"),
    height: getResponsiveProperty("height", "auto"),
    borderRadius: getResponsiveProperty("borderRadius", "0"),
    color: color,
    transition: transition,
    outline: "none",
    border:
      inputType !== "borderBottom"
        ? isFocused
          ? focusBorder
          : isHovered
            ? hoverBorder
            : border
        : "none",
    borderBottom:
      inputType === "borderBottom"
        ? isFocused
          ? focusBorderBottom
          : isHovered
            ? hoverBorder
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
        type={type}
        id={id}
        placeholder={placeholder}
        className={`default-input ${isFocused ? "focused" : ""} ${s.input} ${inputType === "borderBottom" ? s.borderBottom : ""}`}
        style={inputStyle}
        onFocus={() => setIsFocused(true)}
        onMouseEnter={() => setIsHovered(true)}
        value={value}
        name={name}
        onMouseLeave={() => setIsHovered(false)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        {...rest}
      />
    </>
  );
};
