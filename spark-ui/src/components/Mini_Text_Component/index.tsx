import React, { useState } from "react";

interface IMiniText extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  margin?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  animation?: string;
  transition?: string;
  color?: string;
  hoverColor?: string;
  id?: string;
}

export const MiniText: React.FC<IMiniText> = ({
  text,
  margin,
  fontFamily,
  fontSize,
  fontWeight,
  animation,
  transition,
  id,
  color,
  hoverColor,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      id={id}
      style={{
        margin,
        fontFamily,
        fontSize,
        fontWeight,
        animation,
        transition,
        cursor: "pointer",
        color: isHovered ? hoverColor : color,
      }}
      {...rest}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </span>
  );
};
