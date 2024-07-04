import React, { useState } from "react";
import useWindowSize from "../../useWindowSize";
import { getBreakpoint } from "@/utils/getBreakpoint";
import { useStyle } from "@/components/styleContext";
import { DeviceSize } from "@/types/deviceSize";

interface ResponsiveProperties {
  footerWidth?: string;
  footerMargin?: string;
  containerWidth?: string;
  containerMargin?: string;
  logoWidth?: string;
  logoHeight?: string;
  gapNavigation?: string;
  linkWidth?: string;
  linkHeight?: string;
  linkFontSize?: string;
  linkMargin?: string;
  linkBorderRadius?: string;
  linkPadding?: string;
  buttonWidth?: string;
  companyMargin?: string;
  companyFontSize?: string;
  buttonHeight?: string;
  logoStudioWidth?: string;
  logoStudioHeight?: string;
  logoStudioMargin?: string;
  buttonFontSize?: string;
  buttonMargin?: string;
  buttonBorderRadius?: string;
  buttonPadding?: string;
  separatorWidth?: string;
  separatorMargin?: string;
  separatorHeight?: string;
}

interface LinkProps {
  text: string;
  href: string;
}

interface IFooterProps {
  backgroundColorFooter?: string;
  transitionNavigation?: string;
  logoStudioHref?: string;
  logo: string;
  links: LinkProps[];
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
  buttonBackgroundColor?: string;
  buttonFontWeight?: string;
  buttonFontFamily?: string;
  buttonTextDecoration?: string;
  buttonText: string;
  buttonHref: string;
  companyTextAlign?: any;
  companyFontFamily?: string;
  buttonHoverBorder?: string;
  buttonBorder?: string;
  buttonHoverColor?: string;
  buttonColor?: string;
  buttonTransition?: string;
  companyName?: string;
  companyColor?: string;
  logoHref?: string;
  gap?: string;
  hoverButtonBackgroundColor?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  separatorBackgroundColor?: string;
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
  linkFontWeight?: string;
  linkFontFamily?: string;
  linkTextDecoration?: string;
  linkTransition?: string;
  linkBorder?: string;
  linkHoverBackgroundColor?: string;
  linkHoverColor?: string;
  linkHoverBorder?: string;
  linkColor?: string;
  logoStudio?: string;
  linkBackgroundColor?: string;
}

export const FooterCentered: React.FC<IFooterProps> = ({
  backgroundColorFooter,
  responsive,
  logoHref,
  logo,
  separatorBackgroundColor,
  transitionNavigation,
  links,
  buttonBackgroundColor,
  buttonBorder,
  buttonColor,
  logoStudio,
  buttonText,
  buttonFontFamily,
  buttonFontWeight,
  buttonHoverBorder,
  companyColor,
  companyFontFamily,
  companyName,
  companyTextAlign,
  logoStudioHref,
  buttonHoverColor,
  buttonHref,
  linkColor,
  buttonTextDecoration,
  buttonTransition,
  linkBackgroundColor,
  linkFontWeight,
  linkFontFamily,
  linkTextDecoration,
  hoverButtonBackgroundColor,
  linkBorder,
  linkHoverBackgroundColor,
  linkHoverColor,
  linkHoverBorder,
  linkTransition,
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
      color: isHovered ? buttonHoverColor : buttonColor,
      transition: buttonTransition,
      textDecoration: buttonTextDecoration,
      border: isHovered ? buttonHoverBorder : buttonBorder,
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

  const getResponsiveProperty = (
    property: keyof ResponsiveProperties,
    defaultValue: string
  ): string => {
    const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;
    return responsive[breakpoint]?.[property] || defaultValue;
  };

  const getLogoWidth = () => getResponsiveProperty("logoWidth", "auto");
  const getLogoHeight = () => getResponsiveProperty("logoWidth", "auto");

  const getContainerMargin = () =>
    getResponsiveProperty("containerMargin", "32px");
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: getContainerWidth(),
            margin: getContainerMargin(),
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
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
                    ? linkHoverBackgroundColor
                    : linkBackgroundColor,
                  fontSize: getResponsiveProperty("linkFontSize", "16px"),
                  padding: getResponsiveProperty("linkPadding", "10px 20px"),
                  width: getResponsiveProperty("linkWidth", "auto"),
                  height: getResponsiveProperty("linkHeight", "auto"),
                  border: hoverStates[index] ? linkHoverBorder : linkBorder,
                  borderRadius: getResponsiveProperty(
                    "linkBorderRadius",
                    "5px"
                  ),
                  color: hoverStates[index] ? linkHoverColor : linkColor,
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
        <div
          style={{
            margin: "auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <hr
            style={{
              margin: getResponsiveProperty("separatorMargin", "10px"),
              width: getResponsiveProperty("separatorWidth", "80%"),
              height: getResponsiveProperty("separatorHeight", "2px"),
              background: separatorBackgroundColor,
              border: "none",
            }}
          />
        </div>
      </div>
      <span
        style={{
          color: companyColor,
          textAlign: companyTextAlign,
          fontFamily: companyFontFamily,
          fontSize: getResponsiveProperty("companyFontSize", "16px"),
          margin: getResponsiveProperty("companyMargin", "10px 0 10px"),
        }}
      >
        {companyName}
      </span>
      <a
        href={logoStudioHref}
        style={{
          scrollBehavior: "smooth",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logoStudio}
          alt="Logo"
          style={{
            width: getResponsiveProperty("logoStudioWidth", "50px"),
            height: getResponsiveProperty("logoStudioHeight", "50px"),
            margin: getResponsiveProperty("logoStudioMargin", "auto"),
          }}
        />
      </a>
    </footer>
  );
};
