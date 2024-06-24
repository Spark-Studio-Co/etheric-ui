import React, { useState } from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<IButtonProps> = ({
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
  transition,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      id={id}
      onClick={onClick}
      style={{
        margin,
        backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
        fontSize,
        fontWeight,
        fontFamily,
        width,
        height,
        textDecoration,
        border: isHovered ? hoverBorder : border,
        transition,
        borderRadius,
        color: isHovered ? hoverColor : color,
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
      type="submit"
    >
      {text}
    </button>
  );
};
