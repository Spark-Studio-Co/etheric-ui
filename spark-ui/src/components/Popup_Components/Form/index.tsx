import { useState } from "react";
import useWindowSize from "../../useWindowSize";
import { getBreakpoint } from "@/utils/getBreakpoint";
import { useStyle } from "@/components/styleContext";
import { DeviceSize } from "@/types/deviceSize";

interface ResponsiveProperties {
  popupWidth?: string;
  popupHeight?: string;
  popupBorderRadius?: string;
  logoWidth?: string;
  logoHeight?: string;
  bigTextFontSize?: string;
  paragraphFontSize?: string;
  buttonMargin?: string;
  buttonFontSize?: string;
  buttonPadding?: string;
  buttonWidth?: string;
  buttonHeight?: string;
  buttonBorderRadius?: string;
  bigTextMargin?: string;
  paragraphMargin?: string;
  popupPadding?: string;
}

interface IPopupProps {
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
  logo: string;
  popupBorder?: string;
  popupBackgroundColor?: string;
  logoHref?: string;
  bigText?: string;
  bigTextColor?: string;
  bigTextFontWeight?: string;
  bigTextFontFamily?: string;
  paragraphFontFamily?: string;
  paragraphFontWeight?: string;
  paragraphColor?: string;
  paragraph?: string;
  hoverButtonColor?: string;
  buttonColor?: string;
  hoverButtonBorder?: string;
  buttonBorder?: string;
  buttonTransition?: string;
  buttonTextDecoration?: string;
  buttonFontWeight?: string;
  buttonFontFamily?: string;
  hoverButtonBackgroundColor?: string;
  buttonBackgroundColor?: string;
  buttonText?: string;
}

export const Popup: React.FC<IPopupProps> = ({
  responsive,
  logo,
  popupBackgroundColor,
  popupBorder,
  logoHref,
  bigText,
  bigTextColor,
  bigTextFontWeight,
  bigTextFontFamily,
  paragraphFontFamily,
  paragraphFontWeight,
  paragraphColor,
  paragraph,
  buttonBackgroundColor,
  buttonBorder,
  buttonColor,
  buttonFontFamily,
  buttonFontWeight,
  buttonText,
  buttonTextDecoration,
  buttonTransition,
  hoverButtonBackgroundColor,
  hoverButtonBorder,
  hoverButtonColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { width: windowWidth } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const styles = useStyle({
    defaultbutton: {
      color: isHovered ? hoverButtonColor : buttonColor,
      border: isHovered ? hoverButtonBorder : buttonBorder,
      transition: buttonTransition,
      textDecoration: buttonTextDecoration,
      fontWeight: buttonFontWeight,
      fontFamily: buttonFontFamily,
      backgroundColor: isHovered
        ? hoverButtonBackgroundColor
        : buttonBackgroundColor,
    },
  });

  const togglePopup = () => setIsOpen(!isOpen);

  const getResponsiveProperty = (
    property: keyof ResponsiveProperties,
    defaultValue: string
  ): string => {
    const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;
    return responsive?.[breakpoint]?.[property] || defaultValue;
  };

  return isOpen ? (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
      }}
      onClick={togglePopup}
      aria-modal="true"
      role="dialog"
    >
      <div
        style={{
          height: getResponsiveProperty("popupHeight", "200px"),
          width: getResponsiveProperty("popupWidth", "300px"),
          borderRadius: getResponsiveProperty("popupBorderRadius", "10px"),
          display: "flex",
          padding: getResponsiveProperty("popupPadding", "20px"),
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: popupBorder,
          backgroundColor: popupBackgroundColor,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <a href={logoHref} style={{ scrollBehavior: "smooth" }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: getResponsiveProperty("logoWidth", "50px"),
              height: getResponsiveProperty("logoHeight", "50px"),
            }}
          />
        </a>
        <span
          style={{
            textAlign: "center",
            fontFamily: bigTextFontFamily,
            fontWeight: bigTextFontWeight,
            margin: getResponsiveProperty("bigTextMargin", "10px"),
            color: bigTextColor,
            fontSize: getResponsiveProperty("bigTextFontSize", "16px"),
          }}
        >
          {bigText}
        </span>
        <p
          style={{
            textAlign: "center",
            fontFamily: paragraphFontFamily,
            fontWeight: paragraphFontWeight,
            margin: getResponsiveProperty("paragraphMargin", "10px"),
            color: paragraphColor,
            fontSize: getResponsiveProperty("paragraphFontSize", "14px"),
          }}
        >
          {paragraph}
        </p>
        <button
          onClick={togglePopup}
          style={{
            ...styles.defaultbutton,
            margin: getResponsiveProperty("buttonMargin", "10px"),
            fontSize: getResponsiveProperty("buttonFontSize", "16px"),
            padding: getResponsiveProperty("buttonPadding", "12px"),
            width: getResponsiveProperty("buttonWidth", "auto"),
            height: getResponsiveProperty("buttonHeight", "auto"),
            borderRadius: getResponsiveProperty("buttonBorderRadius", "5px"),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          type="button"
        >
          {buttonText}
        </button>
      </div>
    </div>
  ) : null;
};
