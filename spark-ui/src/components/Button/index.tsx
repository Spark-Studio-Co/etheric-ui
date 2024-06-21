import React from "react";

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
  //   const buttonClass = `${styles.button} ${styles[`button--${buttonType}`]}`;

  return (
    <button
      id={id}
      //   className={buttonClass}
      onClick={onClick}
      style={
        {
          margin,
          backgroundColor,
          fontSize,
          fontWeight,
          fontFamily,
          width,
          height,
          textDecoration,
          border,
          transition,
          borderRadius,
          color,
          cursor,
          "--hover-background-color": hoverBackgroundColor,
          "--hover-color": hoverColor,
          "--hover-border": hoverBorder,
        } as React.CSSProperties
      }
      {...rest}
      type="submit"
    >
      {text}
    </button>
  );
};
