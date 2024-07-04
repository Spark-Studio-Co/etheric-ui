import React, { useState } from "react";
import useWindowSize from "../useWindowSize";
import { getBreakpoint } from "@/utils/getBreakpoint";
import { useStyle } from "@/components/styleContext";
import { DeviceSize } from "@/types/deviceSize";

interface ResponsiveProperties {
  footerWidth?: string;
  footerMargin?: string;
  containerWidth?: string;
  containerMarginTop?: string;
  logoWidth?: string;
  logoHeight?: string;
  gapNavigation?: string;
}

interface IFooterProps {
  backgroundColorFooter?: string;
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
  logoHref?: string;
  logo?: string;
  transitionNavigation?: string;
}

export const Footer: React.FC<IFooterProps> = ({
  backgroundColorFooter,
  responsive,
  logoHref,
  logo,
  transitionNavigation,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { width: windowWidth } = useWindowSize();

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

  const getResponsiveProperty = (
    property: keyof ResponsiveProperties,
    defaultValue: string
  ): string => {
    const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;
    return responsive[breakpoint]?.[property] || defaultValue;
  };

  const getLogoWidth = () => getResponsiveProperty("logoWidth", "auto");
  const getLogoHeight = () => getResponsiveProperty("logoWidth", "auto");

  const getContainerMarginTop = () =>
    getResponsiveProperty("containerMarginTop", "32px");
  const getContainerWidth = () =>
    getResponsiveProperty("containerWidth", "65%");

  const getNavigationGap = () => getResponsiveProperty("gapNavigation", "16px");

  const getFooterMargin = () => getResponsiveProperty("footerMargin", "5px");
  const getFooterWidth = () => getResponsiveProperty("footerWidth", "100%");

  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: backgroundColorFooter,
        margin: getFooterMargin(),
        width: getFooterWidth(),
      }}
    >
      <div
        style={{
          width: getContainerWidth(),
          marginTop: getContainerMarginTop(),
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            transition: transitionNavigation,
            gap: getNavigationGap(),
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
                  ? hoverBackgroundColor
                  : backgroundColor,
                fontSize: getResponsiveProperty("linkFontSize", "16px"),
                padding: getResponsiveProperty("linkPadding", "10px 20px"),
                width: getResponsiveProperty("linkWidth", "auto"),
                height: getResponsiveProperty("linkHeight", "auto"),
                border: hoverStates[index] ? hoverBorder : border,
                borderRadius: getResponsiveProperty("linkBorderRadius", "5px"),
                color: hoverStates[index] ? hoverColor : color,
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              role="button"
            >
              {link.text}
            </a>
          ))}
          <Button buttonType="outline-white" text="Авторизация" />
        </nav>
      </div>
      <hr className={styles.footer__hr} />
      <span className={styles.footer__reserved}>© All rights reserved.</span>
    </footer>
  );
};
