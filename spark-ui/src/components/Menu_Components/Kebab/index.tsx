import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface KebabMenuProps {
  items: string[];
  icon: IconDefinition;
  size: any;
  margin?: string;
  backgroundColor?: string;
  fontSize?: string;
  top?: string;
  right?: string;
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
  optionBoxShadow?: string;
  optionZIndex?: number;
  optionBackgroundColor?: string;
  optionRight?: string;
  optionBorderRadius?: string;
  optionPaddingLeft?: string;
  optionPaddingRight?: string;
  optionHoverColor?: string;
  optionMarginTop?: string;
  optionMarginBottom?: string;
  optionTop?: string;
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export const KebabMenu: React.FC<KebabMenuProps> = ({
  items,
  size,
  icon,
  padding,
  top,
  right,
  backgroundColor,
  fontSize,
  fontWeight,
  fontFamily,
  width,
  height,
  textDecoration,
  borderRadius,
  border,
  color,
  transition,
  cursor,
  iconFontSize,
  iconColor,
  iconHoverColor,
  optionBoxShadow,
  optionZIndex,
  optionBackgroundColor,
  optionRight,
  optionBorderRadius,
  optionPaddingLeft,
  optionPaddingRight,
  optionHoverColor,
  optionMarginTop,
  optionMarginBottom,
  optionTop,
  onClick,
}) => {
  const [isKebabOpen, setKebabOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  const handleOpenMenu = () => {
    setKebabOpen(!isKebabOpen);
  };

  return (
    <>
      <button
        onClick={handleOpenMenu}
        style={{
          position: "absolute",
          padding,
          top,
          right,
          backgroundColor,
          fontSize,
          fontWeight,
          fontFamily,
          width,
          height,
          textDecoration,
          borderRadius,
          border,
          color,
          transition,
          cursor,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FontAwesomeIcon
          icon={icon}
          size={size}
          style={{
            transition,
            fontSize: iconFontSize || fontSize,
            color: isHovered ? iconHoverColor : iconColor || color,
            cursor: "pointer",
          }}
        />
      </button>
      {isKebabOpen && (
        <div
          style={{
            boxShadow: optionBoxShadow,
            position: "absolute",
            zIndex: optionZIndex,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            right: optionRight,
            top: optionTop, // Positioning the menu just below the button
            borderRadius: optionBorderRadius,
            backgroundColor: optionBackgroundColor,
          }}
        >
          {items.map((option, index) => (
            <span
              key={index}
              onClick={onClick}
              style={{
                marginTop: optionMarginTop,
                marginBottom: optionMarginBottom,
                paddingLeft: optionPaddingLeft,
                paddingRight: optionPaddingRight,
                transition,
                color: hoveredOption === index ? optionHoverColor : color,
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredOption(index)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </>
  );
};
