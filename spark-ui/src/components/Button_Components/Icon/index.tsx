import React, { useState } from "react";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconDefinition;
  size: any;
  margin?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  width?: string;
  height?: string;
  textDecoration?: string;
  borderRadius?: string;
  border?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  hoverBorder?: string;
  transition?: string;
  cursor?: string;
  text: string;
  gap?: string;
  padding?: string;
  iconFontSize?: string;
  iconColor?: string;
  iconHoverColor?: string;
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const IconButton: React.FC<NavButtonProps> = ({
  icon,
  size,
  text,
  onClick,
  id,
  margin,
  backgroundColor,
  fontSize,
  fontWeight,
  fontFamily,
  width,
  height,
  textDecoration,
  border,
  borderRadius,
  color,
  hoverBackgroundColor,
  hoverColor,
  hoverBorder,
  cursor,
  iconFontSize,
  iconColor,
  iconHoverColor,
  transition,
  gap,
  padding,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      id={id}
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin,
        backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
        borderRadius,
        height,
        border: isHovered ? hoverBorder : border,
        gap,
        padding,
        transition,
        cursor: "pointer",
        outline: "none",
        width,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      <FontAwesomeIcon
        icon={icon}
        size={size}
        style={{
          color: isHovered ? iconHoverColor : iconColor || color,
          fontSize: iconFontSize || fontSize,
          transition,
        }}
      />
      <span
        style={{
          fontFamily,
          fontSize,
          color: isHovered ? hoverColor : color,
          fontWeight,
          textDecoration,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </span>
    </button>
  );
};
