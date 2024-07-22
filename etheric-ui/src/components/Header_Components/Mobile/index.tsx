import React, { useState } from "react";
import useWindowSize from "../../useWindowSize";
import { getBreakpoint } from "@/utils/getBreakpoint";
import { useStyle } from "../../styleContext";
import { DeviceSize } from "@/types/deviceSize";
import "./animation.scss";

interface ResponsiveProperties {
  logoWidth?: string;
  logoHeight?: string;
  fontSize?: string;
  buttonWidth?: string;
  buttonHeight?: string;
  buttonFontSize?: string;
  burgerLineHeight?: string;
  buttonMargin?: string;
  privateDataPadding?: string;
  privateDataGap?: string;
  phoneFontSize?: string;
  phoneMargin?: string;
  phoneWidth?: string;
  phoneHeight?: string;
  phoneBorderRadius?: string;
  emailFontSize?: string;
  emailMargin?: string;
  emailWidth?: string;
  emailHeight?: string;
  emailBorderRadius?: string;
  navigationGap?: string;
  navigationPadding?: string;
  topLineTop?: string;
  bottomLineTop?: string;
  burgerLineWidth?: string;
  linkMargin?: string;
  linkPadding?: string;
  linkWidth?: string;
  linkHeight?: string;
  buttonBorderRadius?: string;
  buttonPadding?: string;
  burgerContainerHeight?: string;
  burgerContainerWidth?: string;
  burgerContainerMargin?: string;
  containerWidth?: string;
  linkBorderRadius?: string;
  navigationTop?: string;
  linkFontSize?: string;
  containerMargin?: string;
}

interface LinkProps {
  text: string;
  href: string;
}

interface Link {
  isBurgerMenu: boolean;
  linkHoverBackgroundColor?: string;
  linkBackgroundColor?: string;
  linkHoverBorder?: string;
  menuPosition?: string;
  linkBorder?: string;
  linkHoverColor?: string;
  linkColor?: string;
  linkFontWeight?: string;
  linkFontFamily?: string;
  linkTextDecoration?: string;
  linkTransition?: string;
  logo?: string;
  phoneHref: string;
  phoneHoverColor?: string;
  phoneColor?: string;
  phoneTransition?: string;
  phoneTextDecoration?: string;
  phoneHoverBorder?: string;
  phoneBorder?: string;
  emailHref: string;
  emailHoverColor?: string;
  emailColor?: string;
  emailTransition?: string;
  emailTextDecoration?: string;
  emailHoverBorder?: string;
  emailBorder?: string;
  hoverEmailBackgroundColor?: string;
  emailBackgroundColor?: string;
  emailFontWeight?: string;
  emailFontFamily?: string;
  hoverPhoneBackgroundColor?: string;
  phoneBackgroundColor?: string;
  phoneFontWeight?: string;
  phoneFontFamily?: string;
  phoneText: string;
  links: LinkProps[];
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
  hoverButtonBackgroundColor?: string;
  buttonBackgroundColor?: string;
  buttonFontWeight?: string;
  buttonFontFamily?: string;
  buttonTextDecoration?: string;
  burgerLineColor?: string;
  buttonText: string;
  buttonHref: string;
  buttonHoverBorder?: string;
  headerPosition?: any;
  buttonBorder?: string;
  buttonHoverColor?: string;
  emailText?: string;
  buttonColor?: string;
  buttonTransition?: string;
  logoHref?: string;
  headerZindex?: string;
  menuBackground?: string;
  headerTop?: string;
  animateLinks?: boolean;
}

export const HeaderMobile: React.FC<Link> = ({
  logoHref,
  logo,
  links,
  responsive,
  buttonHref,
  menuBackground,
  emailText,
  buttonText,
  phoneHref,
  phoneText,
  phoneBackgroundColor,
  emailHref,
  emailBackgroundColor,
  emailBorder,
  emailColor,
  emailFontFamily,
  emailFontWeight,
  emailTextDecoration,
  phoneBorder,
  phoneColor,
  phoneFontFamily,
  phoneFontWeight,
  buttonBackgroundColor,
  phoneTextDecoration,
  animateLinks,
  buttonBorder,
  headerPosition,
  linkFontFamily,
  linkFontWeight,
  linkTextDecoration,
  headerTop,
  menuPosition,
  headerZindex,
  buttonColor,
  linkBackgroundColor,
  linkBorder,
  linkColor,
  isBurgerMenu,
  burgerLineColor,
  buttonTextDecoration,
  buttonFontFamily,
  buttonFontWeight,
}) => {
  const { width: windowWidth } = useWindowSize();
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsActive(false);
  };

  const styles = useStyle({
    contactlinkbutton: {
      color: buttonColor,
      textDecoration: buttonTextDecoration,
      border: buttonBorder,
      backgroundColor: buttonBackgroundColor,
      fontWeight: buttonFontWeight,
      fontFamily: buttonFontFamily,
    },
    navlinkbutton: {
      fontWeight: linkFontWeight,
      fontFamily: linkFontFamily,
      textDecoration: linkTextDecoration,
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
  const getLogoHeight = () => getResponsiveProperty("logoHeight", "auto");
  const getContainerWidth = () =>
    getResponsiveProperty("containerWidth", "90%");

  const baseDelay = 0.1;

  return (
    <header
      style={{
        width: "100%",
        position: headerPosition,
        zIndex: headerZindex,
        top: headerTop,
      }}
    >
      <div
        style={{
          margin: "auto",
          width: getContainerWidth(),
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href={logoHref} style={{ scrollBehavior: "smooth" }}>
          <img
            src={logo}
            alt="Etheric"
            style={{
              width: getLogoWidth(),
              height: getLogoHeight(),
            }}
          />
        </a>
        {isBurgerMenu ? (
          <>
            <div>
              <div
                style={{
                  cursor: "pointer",
                  height: getResponsiveProperty("burgerContainerHeight", "0"),
                  width: getResponsiveProperty("burgerContainerWidth", "0"),
                  margin: getResponsiveProperty("burgerContainerMargin", "0"),
                  overflow: "visible",
                  position: "relative",
                  zIndex: "9999",
                }}
                onClick={() => handleBurgerClick()}
              >
                <span
                  style={{
                    background: burgerLineColor,
                    display: "block",
                    height: getResponsiveProperty("burgerLineHeight", "2px"),
                    position: "absolute",
                    transition: "0.3s ease-in-out",
                    width: getResponsiveProperty("burgerLineWidth", "27px"),
                    top: isActive
                      ? "0px"
                      : getResponsiveProperty("topLineTop", "-8px"),
                    transform: isActive ? "rotate(45deg)" : "none",
                  }}
                ></span>
                <span
                  style={{
                    background: burgerLineColor,
                    display: "block",
                    height: getResponsiveProperty("burgerLineHeight", "2px"),
                    position: "absolute",
                    transition: "0.3s ease-in-out",
                    width: getResponsiveProperty("burgerLineWidth", "27px"),
                    opacity: isActive ? 0 : 1,
                    top: "0px",
                  }}
                ></span>
                <span
                  style={{
                    background: burgerLineColor,
                    display: "block",
                    height: getResponsiveProperty("burgerLineHeight", "2px"),
                    position: "absolute",
                    transition: "0.3s ease-in-out",
                    width: getResponsiveProperty("burgerLineWidth", "27px"),
                    top: isActive
                      ? "0px"
                      : getResponsiveProperty("bottomLineTop", "8px"),
                    transform: isActive ? "rotate(-45deg)" : "none",
                  }}
                ></span>
              </div>
              {isOpen && (
                <div
                  style={{
                    background: menuBackground,
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    position: "fixed",
                    left: "0",
                    top: "0",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                    zIndex: "1000",
                    overflow: "hidden",
                  }}
                >
                  <nav
                    style={{
                      position: "absolute",
                      alignItems: menuPosition,
                      gap: getResponsiveProperty("navigationGap", "0"),
                      top: getResponsiveProperty("navigationTop", "0"),
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      padding: getResponsiveProperty("navigationPadding", "0"),
                    }}
                  >
                    {links.map((link, index) => (
                      <a
                        href={link.href}
                        key={index}
                        className={animateLinks ? "link-enter" : "link-exit"}
                        style={{
                          ...styles.navlinkbutton,
                          animationDelay: `${baseDelay * index}s`,
                          margin: getResponsiveProperty("linkMargin", "0"),
                          backgroundColor: linkBackgroundColor,
                          fontSize: getResponsiveProperty(
                            "linkFontSize",
                            "20px"
                          ),
                          padding: getResponsiveProperty(
                            "linkPadding",
                            "10px 20px"
                          ),
                          width: getResponsiveProperty("linkWidth", "auto"),
                          height: getResponsiveProperty("linkHeight", "auto"),
                          border: linkBorder,
                          borderRadius: getResponsiveProperty(
                            "linkBorderRadius",
                            "0"
                          ),
                          color: linkColor,
                        }}
                        onClick={handleLinkClick}
                        role="button"
                      >
                        {link.text}
                      </a>
                    ))}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: getResponsiveProperty(
                          "privateDataPadding",
                          "0 0 0 10px"
                        ),
                        gap: getResponsiveProperty("privateDataGap", "20px"),
                      }}
                    >
                      {phoneText && (
                        <a
                          href={phoneHref}
                          className={animateLinks ? "link-enter" : "link-exit"}
                          style={{
                            animationDelay: "0.5s",
                            fontSize: getResponsiveProperty(
                              "phoneFontSize",
                              "16px"
                            ),
                            margin: getResponsiveProperty("phoneMargin", "0"),
                            width: getResponsiveProperty("phoneWidth", "auto"),
                            height: getResponsiveProperty(
                              "phoneHeight",
                              "auto"
                            ),
                            borderRadius: getResponsiveProperty(
                              "phoneBorderRadius",
                              "5px"
                            ),
                            color: phoneColor,
                            textDecoration: phoneTextDecoration,
                            border: phoneBorder,
                            backgroundColor: phoneBackgroundColor,
                            fontWeight: phoneFontWeight,
                            fontFamily: phoneFontFamily,
                          }}
                          onClick={handleLinkClick}
                          role="button"
                        >
                          {phoneText}
                        </a>
                      )}
                      {emailText && (
                        <a
                          href={emailHref}
                          className={animateLinks ? "link-enter" : "link-exit"}
                          style={{
                            animationDelay: "0.6s",
                            fontSize: getResponsiveProperty(
                              "emailFontSize",
                              "16px"
                            ),
                            margin: getResponsiveProperty("emailMargin", "0"),
                            width: getResponsiveProperty("emailWidth", "auto"),
                            height: getResponsiveProperty(
                              "emailHeight",
                              "auto"
                            ),
                            borderRadius: getResponsiveProperty(
                              "emailBorderRadius",
                              "5px"
                            ),
                            color: emailColor,
                            textDecoration: emailTextDecoration,
                            border: emailBorder,
                            backgroundColor: emailBackgroundColor,
                            fontWeight: emailFontWeight,
                            fontFamily: emailFontFamily,
                          }}
                          onClick={handleLinkClick}
                          role="button"
                        >
                          {emailText}
                        </a>
                      )}
                    </div>
                  </nav>
                </div>
              )}
            </div>
          </>
        ) : (
          <a
            href={buttonHref}
            style={{
              ...styles.contactlinkbutton,
              cursor: "pointer",
              padding: getResponsiveProperty("buttonPadding", "auto"),
              fontSize: getResponsiveProperty("buttonFontSize", "auto"),
              margin: getResponsiveProperty("buttonMargin", "0"),
              width: getResponsiveProperty("buttonWidth", "auto"),
              height: getResponsiveProperty("buttonHeight", "auto"),
              borderRadius: getResponsiveProperty("buttonBorderRadius", "0"),
            }}
            role="button"
          >
            {buttonText}
          </a>
        )}
      </div>
    </header>
  );
};
