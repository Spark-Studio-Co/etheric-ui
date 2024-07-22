import React, { useState } from "react";
import useWindowSize from "../../useWindowSize";
import { getBreakpoint } from "@/utils/getBreakpoint";
import { useStyle } from "@/components/styleContext";
import { DeviceSize } from "@/types/deviceSize";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ResponsiveProperties {
  footerWidth?: string;
  footerMargin?: string;
  containerWidth?: string;
  containerMargin?: string;
  logoWidth?: string;
  logoMargin?: string;
  logoHeight?: string;
  gapNavigation?: string;
  linkWidth?: string;
  linkHeight?: string;
  allRightsFontSize?: string;
  allRightsMargin?: string;
  linkFontSize?: string;
  linkMargin?: string;
  linkBorderRadius?: string;
  linkPadding?: string;
  buttonWidth?: string;
  buttonHeight?: string;
  logoStudioWidth?: string;
  iconWidth?: string;
  iconHeight?: string;
  iconsContainerWidth?: string;
  iconsContainerMargin?: string;
  iconsContainerGap?: string;
  logoStudioHeight?: string;
  logoStudioMargin?: string;
  buttonFontSize?: string;
  buttonMargin?: string;
  buttonBorderRadius?: string;
  buttonPadding?: string;
  navigationMargin?: string;
}

interface LinkProps {
  text: string;
  href: string;
}

interface IconProps {
  icon: IconDefinition;
  iconHref: string;
}

interface IFooterProps {
  backgroundColorFooter?: string;
  transitionNavigation?: string;
  icons: IconProps[];
  logoStudioHref?: string;
  logo: string;
  links: LinkProps[];
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
  buttonBackgroundColor?: string;
  buttonFontWeight?: string;
  buttonFontFamily?: string;
  iconColor?: string;
  iconHoverColor?: string;
  buttonTextDecoration?: string;
  buttonText: string;
  buttonHref: string;
  buttonHoverBorder?: string;
  buttonBorder?: string;
  buttonHoverColor?: string;
  buttonColor?: string;
  buttonTransition?: string;
  logoHref?: string;
  gap?: string;
  hoverButtonBackgroundColor?: string;
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

export const FooterSocialMobile: React.FC<IFooterProps> = ({
  backgroundColorFooter,
  responsive,
  logoHref,
  logo,
  transitionNavigation,
  links,
  iconColor,
  iconHoverColor,
  buttonBackgroundColor,
  buttonBorder,
  buttonColor,
  logoStudio,
  buttonText,
  buttonFontFamily,
  buttonFontWeight,
  buttonHoverBorder,
  logoStudioHref,
  buttonHoverColor,
  buttonHref,
  icons,
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

  const [iconHoverStates, setIconHoverStates] = useState<boolean[]>(
    new Array(icons.length).fill(false)
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

  const handleIconMouseEnter = (index: number) => {
    const updatedStates = [...iconHoverStates];
    updatedStates[index] = true;
    setIconHoverStates(updatedStates);
  };

  const handleIconMouseLeave = (index: number) => {
    const updatedStates = [...iconHoverStates];
    updatedStates[index] = false;
    setIconHoverStates(updatedStates);
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

  const getNavigationGap = () => getResponsiveProperty("gapNavigation", "16px");
  const getNavigationMargin = () =>
    getResponsiveProperty("navigationMargin", "20px");

  const getLogoMargin = () => getResponsiveProperty("logoMargin", "20px");

  const getFooterMargin = () => getResponsiveProperty("footerMargin", "auto");
  const getFooterWidth = () => getResponsiveProperty("footerWidth", "100%");

  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: backgroundColorFooter,
        margin: getFooterMargin(),
        width: getFooterWidth(),
      }}
    >
      <a href={logoHref} style={{ scrollBehavior: "smooth" }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            margin: getLogoMargin(),
            width: getLogoWidth(),
            height: getLogoHeight(),
          }}
        />
      </a>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: getNavigationMargin(),
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
              borderRadius: getResponsiveProperty("linkBorderRadius", "5px"),
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: getResponsiveProperty("iconsContainerWidth", "16px"),
          gap: getResponsiveProperty("iconsContainerGap", "12px"),
          margin: getResponsiveProperty("iconsContainerMargin", "20px"),
        }}
      >
        {icons.map((icon, index) => (
          <a
            href={icon.iconHref}
            target="_blank"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <FontAwesomeIcon
              icon={icon.icon}
              key={index}
              style={{
                width: getResponsiveProperty("iconWidth", "16px"),
                height: getResponsiveProperty("iconHeight", "16px"),
                color: iconHoverStates[index] ? iconHoverColor : iconColor,
                transition: "0.3s all",
              }}
              onMouseEnter={() => handleIconMouseEnter(index)}
              onMouseLeave={() => handleIconMouseLeave(index)}
            />
          </a>
        ))}
      </div>
      {logoStudio ? (
        <a
          href={logoStudioHref}
          style={{
            scrollBehavior: "smooth",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
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
      ) : (
        <span
          style={{
            fontSize: getResponsiveProperty("allRightsFontSize", "8px"),
            margin: getResponsiveProperty("allRightsMargin", "auto"),
          }}
        >
          © All rights reserved.
        </span>
      )}
    </footer>
  );
};
