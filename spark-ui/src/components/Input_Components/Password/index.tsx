import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import s from "./styles.module.scss";

interface IPasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fontSize?: string;
  color?: string;
  bottom?: string;
  right?: string;
  margin?: string;
  placeholder?: string;
  id?: string;
  padding?: string;
  backgroundColor?: string;
  fontWeight?: string;
  fontFamily?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  border?: string;
  inputType?: "borderBottom";
  focusBackgroundColor?: string;
  focusColor?: string;
  focusBorder?: string;
  transition?: string;
  placeholderColor?: string;
  focusPlaceholderColor?: string;
  focusBorderBottomColor?: string;
  borderBottomColor?: string;
  iconFontSize?: string;
  iconColor?: string;
  iconHoverColor?: string;
}

export const PasswordInput: React.FC<IPasswordProps> = ({
  fontSize,
  color,
  bottom,
  right,
  margin,
  placeholder,
  id,
  padding,
  backgroundColor,
  fontWeight,
  fontFamily,
  width,
  height,
  borderRadius,
  border,
  inputType,
  focusBackgroundColor,
  focusColor,
  focusBorder,
  transition,
  placeholderColor,
  focusPlaceholderColor,
  focusBorderBottomColor,
  borderBottomColor,
  iconFontSize,
  iconColor,
  iconHoverColor,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const inputClass = `default-input ${isFocused ? "focused" : ""} ${
    inputType === "borderBottom" ? s.borderBottom : ""
  }`;

  const inputStyle: React.CSSProperties = {
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
  };

  const iconStyle: React.CSSProperties = {
    position: "absolute",
    bottom,
    right,
    fontSize: iconFontSize || fontSize,
    color: isHovered ? iconHoverColor : iconColor || color,
    cursor: "pointer",
    transition,
  };

  return (
    <div className={s.input_container} style={{ position: "relative" }}>
      <input
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        id={id}
        className={inputClass}
        style={inputStyle}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
        required
      />
      <div
        onClick={() => setVisible(!visible)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={s.show_password}
        style={iconStyle}
      >
        <FontAwesomeIcon icon={visible ? faEye : faEyeSlash} />
      </div>
    </div>
  );
};
