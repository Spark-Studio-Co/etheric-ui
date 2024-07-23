import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { getBreakpoint } from "@/utils/getBreakpoint";
import useWindowSize from "@/components/useWindowSize";
import { DeviceSize } from "@/types/deviceSize";

interface ResponsiveProperties {
  margin?: string;
  buttonFontSize?: string;
  buttonTop?: string;
  buttonRight?: string;
  buttonBottom?: string;
  buttonWidth?: string;
  buttonHeight?: string;
  buttonBorderRadius?: string;
  buttonPadding?: string;
  iconFontSize?: string;
  buttonLeft?: string;
  containerRight?: string;
  containerBorderRadius?: string;
  optionPadding?: string;
  optionMargin?: string;
  containerTop?: string;
  containerLeft?: string;
  containerBottom?: string;
  containerHeight?: string;
  containerWidth?: string;
  optionFontSize?: string;
}

interface KebabMenuProps {
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
  items: string[];
  containerBoxShadow?: string;
  icon: IconDefinition;
  buttonBackgroundColor?: string;
  containerBackgroundColor?: string;
  buttonColor?: string;
  buttonBorder?: string;
  optionFontWeight?: string;
  optionFontFamily?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  transition?: string;
  text: string;
  iconColor?: string;
  iconHoverColor?: string;
  id?: string;
  optionZIndex?: number;
  optionBackgroundColor?: string;
  optionHoverColor?: string;
  onClickFunctions: ((index: number) => void)[];
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export const KebabMenu: React.FC<KebabMenuProps> = ({
  items,
  icon,
  responsive,
  buttonBackgroundColor,
  optionFontFamily,
  buttonBorder,
  color,
  transition,
  iconColor,
  buttonColor,
  iconHoverColor,
  containerBoxShadow,
  optionZIndex,
  containerBackgroundColor,
  optionHoverColor,
  onClickFunctions,
}) => {
  const [isKebabOpen, setKebabOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);
  const { width: windowWidth } = useWindowSize();

  const getResponsiveProperty = (
    property: keyof ResponsiveProperties,
    defaultValue: string
  ): string => {
    const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;
    const properties = responsive[breakpoint] || {};
    return properties[property] || defaultValue;
  };

  const getPadding = () => getResponsiveProperty("buttonPadding", "10px");
  const getTop = () => getResponsiveProperty("buttonTop", "0px");
  const getRight = () => getResponsiveProperty("buttonRight", "0px");
  const getBottom = () => getResponsiveProperty("buttonBottom", "0px");
  const getFontSize = () => getResponsiveProperty("buttonFontSize", "0px");
  const getWidth = () => getResponsiveProperty("buttonWidth", "100%");
  const getHeight = () => getResponsiveProperty("buttonHeight", "auto");
  const getBorderRadius = () =>
    getResponsiveProperty("buttonBorderRadius", "5px");
  const getIconFontSize = () => getResponsiveProperty("iconFontSize", "20px");
  const getMargin = () => getResponsiveProperty("margin", "0px");
  const getLeft = () => getResponsiveProperty("buttonLeft", "25px");
  const getOptionFontSize = () =>
    getResponsiveProperty("optionFontSize", "20px");

  const getContainerRight = () =>
    getResponsiveProperty("containerRight", "0px");
  const getContainerTop = () => getResponsiveProperty("containerTop", "0px");
  const getContainerLeft = () => getResponsiveProperty("containerLeft", "0px");
  const getContainerBottom = () =>
    getResponsiveProperty("containerBottom", "0px");
  const getContainerBorderRadius = () =>
    getResponsiveProperty("containerBorderRadius", "5px");
  const getContainerWidth = () =>
    getResponsiveProperty("containerWidth", "auto");
  const getContainerHeight = () =>
    getResponsiveProperty("containerHeight", "auto");
  const getOptionMargin = () => getResponsiveProperty("optionMargin", "5px");
  const getOptionPadding = () => getResponsiveProperty("optionPadding", "5px");

  const handleOpenMenu = () => {
    setKebabOpen(!isKebabOpen);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <button
          onClick={handleOpenMenu}
          style={{
            cursor: "pointer",
            padding: getPadding(),
            top: getTop(),
            right: getRight(),
            left: getLeft(),
            bottom: getBottom(),
            backgroundColor: buttonBackgroundColor || "transparent",
            fontSize: getFontSize(),
            width: getWidth(),
            height: getHeight(),
            borderRadius: getBorderRadius(),
            border: buttonBorder || "none",
            color: buttonColor || "none",
            transition: transition || "none",
            margin: getMargin(),
            // position: "absolute",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FontAwesomeIcon
            icon={icon}
            style={{
              fontSize: getIconFontSize(),
              color: isHovered ? iconHoverColor : iconColor,
              transition,
            }}
          />
        </button>
        {isKebabOpen && (
          <div
            style={{
              boxShadow: containerBoxShadow,
              zIndex: optionZIndex,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: getContainerBorderRadius(),
              backgroundColor: containerBackgroundColor,
              width: getContainerWidth(),
              height: getContainerHeight(),
              position: "absolute",
              right: getContainerRight(),
              top: getContainerTop(),
              left: getContainerLeft(),
              bottom: getContainerBottom(),
            }}
          >
            {items.map((option, index) => (
              <span
                key={index}
                onClick={() => onClickFunctions[index](index)}
                style={{
                  padding: getOptionPadding(),
                  margin: getOptionMargin(),
                  transition,
                  fontSize: getOptionFontSize(),
                  fontFamily: optionFontFamily,
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
      </div>
    </>
  );
};
