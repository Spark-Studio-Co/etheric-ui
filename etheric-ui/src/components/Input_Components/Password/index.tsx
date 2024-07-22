import React, { useState, ChangeEvent } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from "./styles.module.scss";
import { getBreakpoint } from "@/utils/getBreakpoint";
import useWindowSize from "@/components/useWindowSize";
import { DeviceSize } from "@/types/deviceSize";

interface ResponsiveProperties {
  fontSize?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  iconFontSize?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

interface IPasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
  color?: string;
  value?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  backgroundColor?: string;
  fontWeight?: string;
  fontFamily?: string;
  border?: string;
  focusBackgroundColor?: string;
  focusColor?: string;
  borderBottom?: string;
  focusBorder?: string;
  transition?: string;
  placeholderColor?: string;
  hoverBorder?: string;
  focusPlaceholderColor?: string;
  focusBorderBottom?: string;
  borderBottomColor?: string;
  inputType?: "borderBottom";
  iconColor?: string;
  iconHoverColor?: string;
}

export const PasswordInput: React.FC<IPasswordProps> = ({
  responsive,
  color,
  placeholder,
  id,
  backgroundColor,
  fontWeight,
  fontFamily,
  border,
  focusBackgroundColor,
  name,
  value,
  borderBottom,
  hoverBorder,
  onChange,
  focusColor,
  focusBorder,
  transition,
  placeholderColor,
  focusPlaceholderColor,
  borderBottomColor,
  focusBorderBottom,
  inputType,
  iconColor,
  iconHoverColor,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isIconHovered, setIconIsHovered] = useState(false);
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
    <div className={s.input_container} style={{ position: "relative" }}>
      <style>
        {`#${id}::placeholder { color: ${placeholderColor}; }`}
        {`#${id}:focus::placeholder { color: ${focusPlaceholderColor || placeholderColor}; }`}
      </style>
      <input
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        id={id}
        className={`default-input ${isFocused ? "focused" : ""} ${s.input} ${inputType === "borderBottom" ? s.borderBottom : ""}`}
        style={inputStyle}
        onFocus={() => setIsFocused(true)}
        onMouseEnter={() => setIsHovered(true)}
        onChange={onChange}
        value={value}
        name={name}
        onMouseLeave={() => setIsHovered(false)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
      <FontAwesomeIcon
        icon={visible ? faEyeSlash : faEye}
        onClick={() => setVisible(!visible)}
        onMouseEnter={() => setIconIsHovered(true)}
        onMouseLeave={() => setIconIsHovered(false)}
        style={{
          position: "absolute",
          top: getResponsiveProperty("top", "0"),
          right: getResponsiveProperty("right", "0"),
          fontSize: getResponsiveProperty("iconFontSize", "0"),
          color: isIconHovered ? iconHoverColor : iconColor,
          cursor: "pointer",
        }}
      />
    </div>
  );
};
