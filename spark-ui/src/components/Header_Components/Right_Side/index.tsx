import React, { useState } from "react";
import useWindowSize from "../../useWindowSize";
import { getBreakpoint } from "@/utils/getBreakpoint";
import { useStyle } from "../../styleContext";
import { DeviceSize } from "@/types/deviceSize";

interface ResponsiveProperties {
  width?: string;
  height?: string;
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
  contactWidth?: string;
  contactHeight?: string;
  contactFontSize?: string;
  contactMargin?: string;
  contactBorderRadius?: string;
  contactPadding?: string;
  headerWidth?: string;
  containerWidth?: string;
  headerMargin?: string;
  gap?: string;
}

interface LinkProps {
  text: string;
  href: string;
}

interface Link {
  logo: string;
  links: LinkProps[];
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
  hoverContactBackgroundColor?: string;
  contactBackgroundColor?: string;
  contactFontWeight?: string;
  contactFontFamily?: string;
  contactTextDecoration?: string;
  contactText: string;
  contactHref: string;
  contactHoverBorder?: string;
  contactBorder?: string;
  contactHoverColor?: string;
  contactColor?: string;
  contactTransition?: string;
  logoHref?: string;
  gap?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  textDecoration?: string;
  border?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  hoverBorder?: string;
  transition?: string;
  padding?: string;
  cursor?: string;
  id?: string;
}

export const HeaderRightSide: React.FC<Link> = ({
  links,
  responsive,
  contactBackgroundColor,
  contactBorder,
  contactColor,
  contactText,
  logoHref,
  contactFontFamily,
  contactFontWeight,
  contactHoverBorder,
  contactHoverColor,
  hoverContactBackgroundColor,
  contactHref,
  color,
  contactTextDecoration,
  contactTransition,
  id,
  backgroundColor,
  fontWeight,
  fontFamily,
  textDecoration,
  border,
  hoverBackgroundColor,
  hoverColor,
  hoverBorder,
  transition,
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
      color: isHovered ? contactHoverColor : contactColor,
      transition: contactTransition,
      textDecoration: contactTextDecoration,
      border: isHovered ? contactHoverBorder : contactBorder,
      backgroundColor: isHovered
        ? hoverContactBackgroundColor
        : contactBackgroundColor,
      fontWeight: contactFontWeight,
      fontFamily: contactFontFamily,
    },
    navlinkbutton: {
      fontWeight: fontWeight,
      fontFamily: fontFamily,
      textDecoration: textDecoration,
      transition: transition,
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

  const getLogoWidth = () => getResponsiveProperty("width", "auto");
  const getLogoHeight = () => getResponsiveProperty("height", "auto");

  const getHeaderWidth = () => getResponsiveProperty("headerWidth", "100%");
  const getHeaderMargin = () => getResponsiveProperty("headerMargin", "0 auto");

  const getContainerWidth = () =>
    getResponsiveProperty("containerWidth", "100%");

  return (
    <header
      id={id}
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
            style={{ ...styles.nav, gap: getResponsiveProperty("gap", "20px") }}
          >
            {links.map((link, index) => (
              <a
                href={link.href}
                key={index}
                style={{
                  ...styles.navlinkbutton,
                  margin: getResponsiveProperty("linkMargin", "0 10px"),
                  backgroundColor: hoverStates[index]
                    ? hoverBackgroundColor
                    : backgroundColor,
                  fontSize: getResponsiveProperty("linkFontSize", "16px"),
                  padding: getResponsiveProperty("linkPadding", "10px 20px"),
                  width: getResponsiveProperty("linkWidth", "auto"),
                  height: getResponsiveProperty("linkHeight", "auto"),
                  border: hoverStates[index] ? hoverBorder : border,
                  borderRadius: getResponsiveProperty(
                    "linkBorderRadius",
                    "5px"
                  ),
                  color: hoverStates[index] ? hoverColor : color,
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
            href={contactHref}
            style={{
              ...styles.contactlinkbutton,
              padding: getResponsiveProperty("contactPadding", "10px 20px"),
              fontSize: getResponsiveProperty("contactFontSize", "16px"),
              margin: getResponsiveProperty("contactMargin", "0 10px"),
              width: getResponsiveProperty("contactWidth", "auto"),
              height: getResponsiveProperty("contactHeight", "auto"),
              borderRadius: getResponsiveProperty("contactBorderRadius", "5px"),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="button"
          >
            {contactText}
          </a>
        </div>
      </div>
    </header>
  );
};
