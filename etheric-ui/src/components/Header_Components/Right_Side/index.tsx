import React, { useState } from "react";
import useWindowSize from "../../useWindowSize";
import { getBreakpoint } from "@/utils/getBreakpoint";
import { useStyle } from "../../styleContext";
import { DeviceSize } from "@/types/deviceSize";

interface ResponsiveProperties {
  logoWidth?: string;
  logoHeight?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  linkWidth?: string;
  linkHeight?: string;
  linkFontSize?: string;
  linksButtonGap?: string;
  linkMargin?: string;
  linkBorderRadius?: string;
  linkPadding?: string;
  buttonWidth?: string;
  buttonHeight?: string;
  buttonFontSize?: string;
  buttonMargin?: string;
  buttonBorderRadius?: string;
  buttonPadding?: string;
  headerWidth?: string;
  containerWidth?: string;
  headerMargin?: string;
  navigationGap?: string;
}

interface LinkProps {
  text: string;
  href: string;
}

interface Link {
  logo: string;
  links: LinkProps[];
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
  logoHref?: string;
  buttonText?: string;
  buttonBackgroundColor?: string;
  buttonBorder?: string;
  buttonColor?: string;
  buttonFontFamily?: string;
  buttonFontWeight?: string;
  hoverButtonBorder?: string;
  hoverButtonColor?: string;
  hoverButtonBackgroundColor?: string;
  buttonHref?: string;
  buttonTextDecoration?: string;
  linkColor?: string;
  linkBackgroundColor?: string;
  linkFontWeight?: string;
  linkFontFamily?: string;
  linkTextDecoration?: string;
  linkBorder?: string;
  hoverLinkBackgroundColor?: string;
  hoverLinkColor?: string;
  hoverLinkBorder?: string;
  linkTransition?: string;
}

export const HeaderRightSide: React.FC<Link> = ({
  links,
  responsive,
  buttonBackgroundColor,
  buttonBorder,
  buttonColor,
  buttonText,
  logoHref,
  buttonFontFamily,
  buttonFontWeight,
  hoverButtonBorder,
  hoverButtonColor,
  hoverButtonBackgroundColor,
  buttonHref,
  linkColor,
  buttonTextDecoration,
  linkBackgroundColor,
  linkFontWeight,
  linkFontFamily,
  linkTextDecoration,
  linkBorder,
  hoverLinkBackgroundColor,
  hoverLinkColor,
  hoverLinkBorder,
  linkTransition,
  logo,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverStates, setHoverStates] = React.useState<boolean[]>(
    new Array(links.length).fill(false)
  );

  const handleMouseEnter = (index: number) => {
    const updatedStates = [...hoverStates];
    updatedStates[index] = true;
    setHoverStates(updatedStates);
  };

  const handleMouseLeave = (index: number) => {
    const updatedStates = [...hoverStates];
    updatedStates[index] = false;
    setHoverStates(updatedStates);
  };

  const styles = useStyle({
    contactlinkbutton: {
      color: isHovered ? hoverButtonColor : buttonColor,
      transition: linkTransition,
      textDecoration: buttonTextDecoration,
      border: isHovered ? hoverButtonBorder : buttonBorder,
      backgroundColor: isHovered
        ? hoverButtonBackgroundColor
        : buttonBackgroundColor,
      fontWeight: buttonFontWeight,
      fontFamily: buttonFontFamily,
    },
    navlinkbutton: {
      fontWeight: linkFontWeight,
      fontFamily: linkFontFamily,
      textDecoration: linkTextDecoration,
      transition: linkTransition,
    },
  });

  const { width: windowWidth } = useWindowSize();

  const getResponsiveProperty = (
    property: keyof ResponsiveProperties,
    defaultValue: string
  ): string => {
    const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;
    return responsive[breakpoint]?.[property] || defaultValue;
  };

  const getLogoWidth = () => getResponsiveProperty("logoWidth", "auto");
  const getLogoHeight = () => getResponsiveProperty("logoHeight", "auto");

  const getHeaderWidth = () => getResponsiveProperty("headerWidth", "100%");
  const getHeaderMargin = () => getResponsiveProperty("headerMargin", "0 auto");

  const getContainerWidth = () =>
    getResponsiveProperty("containerWidth", "100%");

  return (
    <header
      style={{
        width: getHeaderWidth(),
        ...styles.header,
        margin: getHeaderMargin(),
      }}
    >
      <div
        style={{
          width: getContainerWidth(),
          ...styles.content,
        }}
      >
        <a href={logoHref} style={{ scrollBehavior: "smooth" }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: getLogoWidth(),
              height: getLogoHeight(),
            }}
          />
        </a>
        <div
          style={{
            ...styles.nav,
            gap: getResponsiveProperty("linksButtonGap", "20px"),
          }}
        >
          <nav
            style={{
              ...styles.nav,
              gap: getResponsiveProperty("navigationGap", "20px"),
            }}
          >
            {links.map((link, index) => (
              <a
                href={link.href}
                key={index}
                style={{
                  ...styles.navlinkbutton,
                  margin: getResponsiveProperty("linkMargin", "0 10px"),
                  backgroundColor: hoverStates[index]
                    ? hoverLinkBackgroundColor
                    : linkBackgroundColor,
                  fontSize: getResponsiveProperty("linkFontSize", "16px"),
                  padding: getResponsiveProperty("linkPadding", "10px 20px"),
                  width: getResponsiveProperty("linkWidth", "auto"),
                  height: getResponsiveProperty("linkHeight", "auto"),
                  border: hoverStates[index] ? hoverLinkBorder : linkBorder,
                  borderRadius: getResponsiveProperty(
                    "linkBorderRadius",
                    "5px"
                  ),
                  color: hoverStates[index] ? hoverLinkColor : linkColor,
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                role="button"
              >
                {link.text}
              </a>
            ))}
          </nav>
          <a
            href={buttonHref}
            style={{
              ...styles.contactlinkbutton,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              padding: getResponsiveProperty("buttonPadding", "10px 20px"),
              fontSize: getResponsiveProperty("buttonFontSize", "16px"),
              margin: getResponsiveProperty("buttonMargin", "0 10px"),
              width: getResponsiveProperty("buttonWidth", "auto"),
              height: getResponsiveProperty("buttonHeight", "auto"),
              borderRadius: getResponsiveProperty("buttonBorderRadius", "5px"),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="button"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </header>
  );
};
