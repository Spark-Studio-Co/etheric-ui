import React, { useState } from "react";

interface IButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
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
  padding?: string;
  cursor?: string;
  text: string;
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const LinkButton: React.FC<IButtonLinkProps> = ({
  href,
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
  padding,
  hoverBorder,
  cursor,
  transition,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      id={id}
      onClick={onClick}
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin,
        backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
        fontSize,
        fontWeight,
        fontFamily,
        width,
        height,
        textDecoration,
        border: isHovered ? hoverBorder : border,
        borderRadius,
        color: isHovered ? hoverColor : color,
        cursor: "pointer",
        transition,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      target="_blank"
      {...rest}
    >
      {text}
    </a>
  );
};
