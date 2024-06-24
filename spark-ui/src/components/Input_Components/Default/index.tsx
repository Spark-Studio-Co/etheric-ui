import React, { useState } from "react";

interface IDefaultInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  border?: string;
  color?: string;
  focusBackgroundColor?: string;
  focusColor?: string;
  focusBorder?: string;
  transition?: string;
  id?: string;
}

export const DefaultInput: React.FC<IDefaultInputProps> = ({
  placeholder,
  id,
  margin,
  padding,
  backgroundColor,
  fontSize,
  fontWeight,
  fontFamily,
  width,
  height,
  borderRadius,
  border,
  color,
  focusBackgroundColor,
  focusColor,
  focusBorder,
  transition,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      placeholder={placeholder}
      id={id}
      style={{
        margin,
        padding,
        backgroundColor: isFocused ? focusBackgroundColor : backgroundColor,
        fontSize,
        fontWeight,
        fontFamily,
        width,
        height,
        border: isFocused ? focusBorder : border,
        borderRadius,
        color: isFocused ? focusColor : color,
        cursor: "text",
        transition,
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...rest}
      required
    />
  );
};
