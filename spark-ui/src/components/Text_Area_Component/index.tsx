import React, { useState, useEffect } from "react";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  margin?: string;
  placeholder: string;
  fontSize?: string;
  fontFamily?: string;
  width?: string;
  height?: string;
  textAlign?: any;
  background?: string;
  border?: string;
  padding?: string;
  borderRadius?: string;
  color?: string;
  focusBorder?: string;
  placeholderColor?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  margin,
  placeholder,
  fontSize,
  fontFamily,
  width,
  height,
  textAlign,
  background,
  border,
  padding,
  borderRadius,
  color,
  focusBorder,
  placeholderColor,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      .custom-textarea::placeholder {
        color: ${placeholderColor};
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [placeholderColor]);

  return (
    <textarea
      style={{
        margin,
        fontSize,
        fontFamily,
        width,
        height,
        textAlign,
        background,
        border: isFocused ? focusBorder : border,
        padding,
        borderRadius,
        overflow: "hidden",
        outline: "none",
        color,
      }}
      placeholder={placeholder}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      required
      {...rest}
      className="custom-textarea"
    />
  );
};
