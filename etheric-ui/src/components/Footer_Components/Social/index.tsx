import React, { useState } from "react";
import useWindowSize from "../../useWindowSize";
import { getBreakpoint } from "@/utils/getBreakpoint";
import { useStyle } from "@/components/styleContext";
import { DeviceSize } from "@/types/deviceSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface ResponsiveProperties {
  footerWidth?: string;
  footerMargin?: string;
  containerWidth?: string;
  containerMargin?: string;
  logoWidth?: string;
  logoHeight?: string;
  gapNavigation?: string;
  linkWidth?: string;
  iconsContainerWidth?: string;
  iconsContainerMargin?: string;
  allRightsFontSize?: string;
  allRightsMargin?: string;
  iconsContainerGap?: string;
  linkHeight?: string;
  linkFontSize?: string;
  linkMargin?: string;
  linkBorderRadius?: string;
  linkPadding?: string;
  buttonWidth?: string;
  buttonHeight?: string;
  logoStudioWidth?: string;
  logoStudioHeight?: string;
  logoStudioMargin?: string;
  buttonFontSize?: string;
  buttonMargin?: string;
  buttonBorderRadius?: string;
  buttonPadding?: string;
  iconWidth?: string;
  iconHeight?: string;
}

interface LinkProps {
  text: string;
  href: string;
}

interface IIconProps {
  iconHref?: string;
  icon: IconDefinition;
}

interface IFooterProps {
  backgroundColorFooter?: string;
  transitionNavigation?: string;
  iconColor?: string;
  iconHoverColor?: string;
  logoStudioHref?: string;
  logo: string;
  icons: IIconProps[];
  links: LinkProps[];
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
  buttonBackgroundColor?: string;
  buttonFontWeight?: string;
  buttonFontFamily?: string;
  buttonTextDecoration?: string;
  buttonText: string;
  buttonHref: string;
  buttonHoverBorder?: string;
  buttonBorder?: string;
  buttonHoverColor?: string;
  buttonColor?: string;
  buttonTransition?: string;
  logoHref?: string;
  hoverButtonBackgroundColor?: string;
  backgroundColor?: string;
  fontWeight?: string;
  fontFamily?: string;
  textDecoration?: string;
  border?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  hoverBorder?: string;
  transition?: string;
  cursor?: string;
  id?: string;
  linkFontWeight?: string;
  linkFontFamily?: string;
  linkTextDecoration?: string;
  linkTransition?: string;
  linkBorder?: string;
  linkHoverBackgroundColor?: string;
  logoStudio?: string;
  linkHoverColor?: string;
  linkHoverBorder?: string;
  linkColor?: string;
  linkBackgroundColor?: string;
}

export const FooterSocial: React.FC<IFooterProps> = ({
  backgroundColorFooter,
  responsive,
  logoHref,
  icons,
  logo,
  transitionNavigation,
  logoStudio,
  links,
  buttonBackgroundColor,
  buttonBorder,
  buttonColor,
  buttonText,
  buttonFontFamily,
  buttonFontWeight,
  iconColor,
  iconHoverColor,
  buttonHoverBorder,
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

  const [linkHoverStates, setLinkHoverStates] = useState<boolean[]>(
    new Array(links.length).fill(false)
  );
  const [iconHoverStates, setIconHoverStates] = useState<boolean[]>(
    new Array(icons.length).fill(false)
  );

  const handleLinkMouseEnter = (index: number) => {
    const updatedStates = [...linkHoverStates];
    updatedStates[index] = true;
    setLinkHoverStates(updatedStates);
  };

  const handleLinkMouseLeave = (index: number) => {
    const updatedStates = [...linkHoverStates];
    updatedStates[index] = false;
    setLinkHoverStates(updatedStates);
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

  const getContainerMargin = () =>
    getResponsiveProperty("containerMargin", "32px");
  const getContainerWidth = () =>
    getResponsiveProperty("containerWidth", "65%");

  const getNavigationGap = () => getResponsiveProperty("gapNavigation", "16px");

  const getFooterMargin = () => getResponsiveProperty("footerMargin", "auto");
  const getFooterWidth = () => getResponsiveProperty("footerWidth", "100%");

  const allRightsFontSize = getResponsiveProperty("allRightsFontSize", "12px");
  const allRightsMargin = getResponsiveProperty("allRightsMargin", "20px auto");
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: backgroundColorFooter,
        alignItems: "center",
        justifyContent: "center",
        margin: getFooterMargin(),
        width: getFooterWidth(),
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: getContainerWidth(),
          margin: getContainerMargin(),
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
                backgroundColor: linkHoverStates[index]
                  ? linkHoverBackgroundColor
                  : linkBackgroundColor,
                fontSize: getResponsiveProperty("linkFontSize", "16px"),
                padding: getResponsiveProperty("linkPadding", "10px 20px"),
                width: getResponsiveProperty("linkWidth", "auto"),
                height: getResponsiveProperty("linkHeight", "auto"),
                border: linkHoverStates[index] ? linkHoverBorder : linkBorder,
                borderRadius: getResponsiveProperty("linkBorderRadius", "5px"),
                color: linkHoverStates[index] ? linkHoverColor : linkColor,
              }}
              onMouseEnter={() => handleLinkMouseEnter(index)}
              onMouseLeave={() => handleLinkMouseLeave(index)}
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
            fontSize: allRightsFontSize,
            margin: allRightsMargin,
          }}
        >
          © All rights reserved.
        </span>
      )}
    </footer>
  );
};
