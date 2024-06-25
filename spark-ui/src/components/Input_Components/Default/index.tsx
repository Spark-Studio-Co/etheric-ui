import React, { useState } from "react";
import s from "./styles.module.scss";

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
  margin,
  padding,
  backgroundColor,
  fontSize,
  fontWeight,
  focusBorderBottomColor,
  borderBottomColor,
  height,
  borderRadius,
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
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const styles = `
    .default-input::placeholder {
      color: ${placeholderColor};
      font-size: ${fontSize};
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
        margin,
        padding,
        backgroundColor: isFocused ? focusBackgroundColor : backgroundColor,
        fontSize,
        fontWeight,
        fontFamily,
        width,
        height,
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
        borderRadius,
        color: isFocused ? focusColor : color,
        cursor: "text",
        transition,
        outline: "none",
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...rest}
      required
    />
  );
};
