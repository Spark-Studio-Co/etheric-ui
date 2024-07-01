import React, { useState, useEffect } from "react";
import { LinkButton } from "../Button_Components/Link";
import { Logo } from "../Logo";
import { getBreakpoint } from "@/utils/getBreakpoint";

interface LinkProps {
  text: string;
  href: string;
}

interface Link {
  logo: string;
  links: LinkProps[];
  width?: string;
  xxsLogoWidth?: string;
  xsLogoWidth?: string;
  sLogoWidth?: string;
  mLogoWidth?: string;
  smLogoWidth?: string;
  lLogoWidth?: string;
  mdLogoWidth?: string;
  tabletLogoWidth?: string;
  tabletSmLogoWidth?: string;
  lgLogoWidth?: string;
  xlLogoWidth?: string;
  twoXlLogoWidth?: string;
  threeXlLogoWidth?: string;
  fourXlLogoWidth?: string;
  fiveXlLogoWidth?: string;
  sixXlLogoWidth?: string;
  xxsLogoHeight?: string;
  xsLogoHeight?: string;
  sLogoHeight?: string;
  mLogoHeight?: string;
  smLogoHeight?: string;
  lLogoHeight?: string;
  mdLogoHeight?: string;
  tabletLogoHeight?: string;
  tabletSmLogoHeight?: string;
  lgLogoHeight?: string;
  xlLogoHeight?: string;
  twoXlLogoHeight?: string;
  threeXlLogoHeight?: string;
  fourXlLogoHeight?: string;
  fiveXlLogoHeight?: string;
  sixXlLogoHeight?: string;
  widthHeader?: string;
  marginHeader?: string;
  margin?: string;
  widthContent?: string;
  gap?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  widthLink?: string;
  height?: string;
  textDecoration?: string;
  borderRadius?: string;
  border?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  hoverBorder?: string;
  transition?: string;
  padding?: string;
  cursor?: string;
  id?: string;
  xxsWidth?: string;
  xsWidth?: string;
  sWidth?: string;
  mWidth?: string;
  smWidth?: string;
  lWidth?: string;
  mdWidth?: string;
  tabletWidth?: string;
  tabletSmWidth?: string;
  lgWidth?: string;
  xlWidth?: string;
  twoXlWidth?: string;
  threeXlWidth?: string;
  fourXlWidth?: string;
  fiveXlWidth?: string;
  sixXlWidth?: string;
  xxsHeight?: string;
  xsHeight?: string;
  sHeight?: string;
  mHeight?: string;
  smHeight?: string;
  lHeight?: string;
  mdHeight?: string;
  tabletHeight?: string;
  tabletSmHeight?: string;
  lgHeight?: string;
  xlHeight?: string;
  twoXlHeight?: string;
  threeXlHeight?: string;
  fourXlHeight?: string;
  fiveXlHeight?: string;
  sixXlHeight?: string;
  xxsFontSize?: string;
  xsFontSize?: string;
  sFontSize?: string;
  mFontSize?: string;
  smFontSize?: string;
  lFontSize?: string;
  mdFontSize?: string;
  tabletFontSize?: string;
  tabletSmFontSize?: string;
  lgFontSize?: string;
  xlFontSize?: string;
  twoXlFontSize?: string;
  threeXlFontSize?: string;
  fourXlFontSize?: string;
  fiveXlFontSize?: string;
  sixXlFontSize?: string;
  xxsMargin?: string;
  xsMargin?: string;
  sMargin?: string;
  mMargin?: string;
  smMargin?: string;
  lMargin?: string;
  mdMargin?: string;
  tabletMargin?: string;
  tabletSmMargin?: string;
  lgMargin?: string;
  xlMargin?: string;
  twoXlMargin?: string;
  threeXlMargin?: string;
  fourXlMargin?: string;
  xxsHeaderWidth?: string;
  xsHeaderWidth?: string;
  sHeaderWidth?: string;
  mHeaderWidth?: string;
  smHeaderWidth?: string;
  lHeaderWidth?: string;
  mdHeaderWidth?: string;
  tabletHeaderWidth?: string;
  tabletSmHeaderWidth?: string;
  lgHeaderWidth?: string;
  xlHeaderWidth?: string;
  twoXlHeaderWidth?: string;
  threeXlHeaderWidth?: string;
  fourXlHeaderWidth?: string;
  fiveXlHeaderWidth?: string;
  sixXlHeaderWidth?: string;
  xxsContentWidth?: string;
  xsContentWidth?: string;
  sContentWidth?: string;
  mContentWidth?: string;
  smContentWidth?: string;
  lContentWidth?: string;
  mdContentWidth?: string;
  tabletContentWidth?: string;
  tabletSmContentWidth?: string;
  lgContentWidth?: string;
  xlContentWidth?: string;
  twoXlContentWidth?: string;
  threeXlContentWidth?: string;
  fourXlContentWidth?: string;
  fiveXlContentWidth?: string;
  sixXlContentWidth?: string;
  xxsHeaderMargin?: string;
  xsHeaderMargin?: string;
  sHeaderMargin?: string;
  mHeaderMargin?: string;
  smHeaderMargin?: string;
  lHeaderMargin?: string;
  mdHeaderMargin?: string;
  tabletHeaderMargin?: string;
  tabletSmHeaderMargin?: string;
  lgHeaderMargin?: string;
  xlHeaderMargin?: string;
  twoXlHeaderMargin?: string;
  threeXlHeaderMargin?: string;
  fourXlHeaderMargin?: string;
  fiveXlHeaderMargin?: string;
  sixXlHeaderMargin?: string;
  fiveXlMargin?: string;
  sixXlMargin?: string;
  xxsPadding?: string;
  xsPadding?: string;
  sPadding?: string;
  mPadding?: string;
  smPadding?: string;
  lPadding?: string;
  mdPadding?: string;
  tabletPadding?: string;
  tabletSmPadding?: string;
  lgPadding?: string;
  xlPadding?: string;
  twoXlPadding?: string;
  threeXlPadding?: string;
  fourXlPadding?: string;
  fiveXlPadding?: string;
  sixXlPadding?: string;
  xxsBorderRadius?: string;
  xsBorderRadius?: string;
  sBorderRadius?: string;
  mBorderRadius?: string;
  smBorderRadius?: string;
  lBorderRadius?: string;
  mdBorderRadius?: string;
  tabletBorderRadius?: string;
  tabletSmBorderRadius?: string;
  lgBorderRadius?: string;
  xlBorderRadius?: string;
  twoXlBorderRadius?: string;
  threeXlBorderRadius?: string;
  fourXlBorderRadius?: string;
  fiveXlBorderRadius?: string;
  sixXlBorderRadius?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const Header: React.FC<Link> = ({
  links,
  width,
  margin,
  widthContent,
  gap,
  id,
  backgroundColor,
  fontSize,
  fontWeight,
  fontFamily,
  height,
  textDecoration,
  border,
  borderRadius,
  xxsLogoWidth,
  xsLogoWidth,
  sLogoWidth,
  mLogoWidth,
  smLogoWidth,
  lLogoWidth,
  mdLogoWidth,
  tabletLogoWidth,
  tabletSmLogoWidth,
  lgLogoWidth,
  xlLogoWidth,
  twoXlLogoWidth,
  threeXlLogoWidth,
  fourXlLogoWidth,
  fiveXlLogoWidth,
  sixXlLogoWidth,
  xxsLogoHeight,
  xsLogoHeight,
  sLogoHeight,
  mLogoHeight,
  smLogoHeight,
  lLogoHeight,
  mdLogoHeight,
  tabletLogoHeight,
  tabletSmLogoHeight,
  lgLogoHeight,
  xlLogoHeight,
  twoXlLogoHeight,
  threeXlLogoHeight,
  fourXlLogoHeight,
  fiveXlLogoHeight,
  sixXlLogoHeight,
  marginHeader,
  xxsHeaderMargin,
  xsHeaderMargin,
  sHeaderMargin,
  mHeaderMargin,
  smHeaderMargin,
  mdHeaderMargin,
  lgHeaderMargin,
  xlHeaderMargin,
  twoXlHeaderMargin,
  threeXlHeaderMargin,
  fourXlHeaderMargin,
  fiveXlHeaderMargin,
  sixXlHeaderMargin,
  lHeaderMargin,
  tabletHeaderMargin,
  tabletSmHeaderMargin,
  color,
  hoverBackgroundColor,
  hoverColor,
  padding,
  hoverBorder,
  transition,
  xxsWidth,
  xsWidth,
  sWidth,
  mWidth,
  smWidth,
  lWidth,
  mdWidth,
  tabletWidth,
  tabletSmWidth,
  lgWidth,
  xlWidth,
  twoXlWidth,
  threeXlWidth,
  fourXlWidth,
  fiveXlWidth,
  sixXlWidth,
  xxsHeight,
  xsHeight,
  sHeight,
  mHeight,
  smHeight,
  lHeight,
  mdHeight,
  tabletHeight,
  tabletSmHeight,
  lgHeight,
  xlHeight,
  twoXlHeight,
  threeXlHeight,
  fourXlHeight,
  fiveXlHeight,
  sixXlHeight,
  xxsFontSize,
  xsFontSize,
  sFontSize,
  mFontSize,
  smFontSize,
  lFontSize,
  mdFontSize,
  tabletFontSize,
  tabletSmFontSize,
  lgFontSize,
  xlFontSize,
  twoXlFontSize,
  threeXlFontSize,
  fourXlFontSize,
  fiveXlFontSize,
  sixXlFontSize,
  xxsMargin,
  xsMargin,
  sMargin,
  mMargin,
  smMargin,
  lMargin,
  mdMargin,
  tabletMargin,
  tabletSmMargin,
  lgMargin,
  xlMargin,
  twoXlMargin,
  threeXlMargin,
  fourXlMargin,
  fiveXlMargin,
  sixXlMargin,
  xxsBorderRadius,
  xsBorderRadius,
  sBorderRadius,
  mBorderRadius,
  smBorderRadius,
  lBorderRadius,
  mdBorderRadius,
  tabletBorderRadius,
  tabletSmBorderRadius,
  lgBorderRadius,
  xlBorderRadius,
  twoXlBorderRadius,
  threeXlBorderRadius,
  fourXlBorderRadius,
  fiveXlBorderRadius,
  sixXlBorderRadius,
  xxsPadding,
  xsPadding,
  sPadding,
  mPadding,
  smPadding,
  lPadding,
  mdPadding,
  tabletPadding,
  tabletSmPadding,
  lgPadding,
  xlPadding,
  twoXlPadding,
  threeXlPadding,
  fourXlPadding,
  fiveXlPadding,
  sixXlPadding,
  xxsHeaderWidth,
  xsHeaderWidth,
  sHeaderWidth,
  mHeaderWidth,
  smHeaderWidth,
  lHeaderWidth,
  mdHeaderWidth,
  tabletHeaderWidth,
  tabletSmHeaderWidth,
  lgHeaderWidth,
  xlHeaderWidth,
  twoXlHeaderWidth,
  threeXlHeaderWidth,
  fourXlHeaderWidth,
  fiveXlHeaderWidth,
  sixXlHeaderWidth,
  xxsContentWidth,
  xsContentWidth,
  sContentWidth,
  mContentWidth,
  smContentWidth,
  lContentWidth,
  mdContentWidth,
  tabletContentWidth,
  tabletSmContentWidth,
  lgContentWidth,
  xlContentWidth,
  twoXlContentWidth,
  threeXlContentWidth,
  fourXlContentWidth,
  fiveXlContentWidth,
  sixXlContentWidth,
  logo,
}) => {
  const [hoverStates, setHoverStates] = React.useState<boolean[]>(
    new Array(links.length).fill(false)
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMouseEnter = (index: number) => {
    const updatedStates = [...hoverStates];
    updatedStates[index] = true;
    setHoverStates(updatedStates);
  };

  // Function to handle mouse leave
  const handleMouseLeave = (index: number) => {
    const updatedStates = [...hoverStates];
    updatedStates[index] = false;
    setHoverStates(updatedStates);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getLogoWidth = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsLogoWidth || width;
      case "xs":
        return xsLogoWidth || width;
      case "s":
        return sLogoWidth || width;
      case "m":
        return mLogoWidth || width;
      case "sm":
        return smLogoWidth || width;
      case "l":
        return lLogoWidth || width;
      case "md":
        return mdLogoWidth || width;
      case "tablet":
        return tabletLogoWidth || width;
      case "tabletSm":
        return tabletSmLogoWidth || width;
      case "lg":
        return lgLogoWidth || width;
      case "xl":
        return xlLogoWidth || width;
      case "2xl":
        return twoXlLogoWidth || width;
      case "3xl":
        return threeXlLogoWidth || width;
      case "4xl":
        return fourXlLogoWidth || width;
      case "5xl":
        return fiveXlLogoWidth || width;
      case "6xl":
        return sixXlLogoWidth || width;
      default:
        return width;
    }
  };

  const getLogoHeight = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsLogoHeight || height;
      case "xs":
        return xsLogoHeight || height;
      case "s":
        return sLogoHeight || height;
      case "m":
        return mLogoHeight || height;
      case "sm":
        return smLogoHeight || height;
      case "l":
        return lLogoHeight || height;
      case "md":
        return mdLogoHeight || height;
      case "tablet":
        return tabletLogoHeight || height;
      case "tabletSm":
        return tabletSmLogoHeight || height;
      case "lg":
        return lgLogoHeight || height;
      case "xl":
        return xlLogoHeight || height;
      case "2xl":
        return twoXlLogoHeight || height;
      case "3xl":
        return threeXlLogoHeight || height;
      case "4xl":
        return fourXlLogoHeight || height;
      case "5xl":
        return fiveXlLogoHeight || height;
      case "6xl":
        return sixXlLogoHeight || height;
      default:
        return height;
    }
  };

  const getHeaderWidth = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsHeaderWidth || width;
      case "xs":
        return xsHeaderWidth || width;
      case "s":
        return sHeaderWidth || width;
      case "m":
        return mHeaderWidth || width;
      case "sm":
        return smHeaderWidth || width;
      case "l":
        return lHeaderWidth || width;
      case "md":
        return mdHeaderWidth || width;
      case "tablet":
        return tabletHeaderWidth || width;
      case "tablet_sm":
        return tabletSmHeaderWidth || width;
      case "lg":
        return lgHeaderWidth || width;
      case "xl":
        return xlHeaderWidth || width;
      case "2xl":
        return twoXlHeaderWidth || width;
      case "3xl":
        return threeXlHeaderWidth || width;
      case "4xl":
        return fourXlHeaderWidth || width;
      case "5xl":
        return fiveXlHeaderWidth || width;
      case "6xl":
        return sixXlHeaderWidth || width;
      default:
        return width;
    }
  };

  const getContentWidth = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsContentWidth || widthContent;
      case "xs":
        return xsContentWidth || widthContent;
      case "s":
        return sContentWidth || widthContent;
      case "m":
        return mContentWidth || widthContent;
      case "sm":
        return smContentWidth || widthContent;
      case "l":
        return lContentWidth || widthContent;
      case "md":
        return mdContentWidth || widthContent;
      case "tablet":
        return tabletContentWidth || widthContent;
      case "tablet_sm":
        return tabletSmContentWidth || widthContent;
      case "lg":
        return lgContentWidth || widthContent;
      case "xl":
        return xlContentWidth || widthContent;
      case "2xl":
        return twoXlContentWidth || widthContent;
      case "3xl":
        return threeXlContentWidth || widthContent;
      case "4xl":
        return fourXlContentWidth || widthContent;
      case "5xl":
        return fiveXlContentWidth || widthContent;
      case "6xl":
        return sixXlContentWidth || widthContent;
      default:
        return widthContent;
    }
  };

  const getHeaderMargin = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsHeaderMargin || marginHeader;
      case "xs":
        return xsHeaderMargin || marginHeader;
      case "s":
        return sHeaderMargin || marginHeader;
      case "m":
        return mHeaderMargin || marginHeader;
      case "sm":
        return smHeaderMargin || marginHeader;
      case "l":
        return lHeaderMargin || marginHeader;
      case "md":
        return mdHeaderMargin || marginHeader;
      case "tablet":
        return tabletHeaderMargin || marginHeader;
      case "tablet_sm":
        return tabletSmHeaderMargin || marginHeader;
      case "lg":
        return lgHeaderMargin || marginHeader;
      case "xl":
        return xlHeaderMargin || marginHeader;
      case "2xl":
        return twoXlHeaderMargin || marginHeader;
      case "3xl":
        return threeXlHeaderMargin || marginHeader;
      case "4xl":
        return fourXlHeaderMargin || marginHeader;
      case "5xl":
        return fiveXlHeaderMargin || marginHeader;
      case "6xl":
        return sixXlHeaderMargin || marginHeader;
      default:
        return marginHeader; // Default to the general header margin if no specific breakpoint margin is set
    }
  };

  const getWidth = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsWidth || width;
      case "xs":
        return xsWidth || width;
      case "s":
        return sWidth || width;
      case "m":
        return mWidth || width;
      case "sm":
        return smWidth || width;
      case "l":
        return lWidth || width;
      case "md":
        return mdWidth || width;
      case "tablet":
        return tabletWidth || width;
      case "tablet_sm":
        return tabletSmWidth || width;
      case "lg":
        return lgWidth || width;
      case "xl":
        return xlWidth || width;
      case "2xl":
        return twoXlWidth || width;
      case "3xl":
        return threeXlWidth || width;
      case "4xl":
        return fourXlWidth || width;
      case "5xl":
        return fiveXlWidth || width;
      case "6xl":
        return sixXlWidth || width;
      default:
        return width;
    }
  };

  const getHeight = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsHeight || height;
      case "xs":
        return xsHeight || height;
      case "s":
        return sHeight || height;
      case "m":
        return mHeight || height;
      case "sm":
        return smHeight || height;
      case "l":
        return lHeight || height;
      case "md":
        return mdHeight || height;
      case "tablet":
        return tabletHeight || height;
      case "tablet_sm":
        return tabletSmHeight || height;
      case "lg":
        return lgHeight || height;
      case "xl":
        return xlHeight || height;
      case "2xl":
        return twoXlHeight || height;
      case "3xl":
        return threeXlHeight || height;
      case "4xl":
        return fourXlHeight || height;
      case "5xl":
        return fiveXlHeight || height;
      case "6xl":
        return sixXlHeight || height;
      default:
        return height;
    }
  };

  const getFontSize = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsFontSize || fontSize;
      case "xs":
        return xsFontSize || fontSize;
      case "s":
        return sFontSize || fontSize;
      case "m":
        return mFontSize || fontSize;
      case "sm":
        return smFontSize || fontSize;
      case "l":
        return lFontSize || fontSize;
      case "md":
        return mdFontSize || fontSize;
      case "tablet":
        return tabletFontSize || fontSize;
      case "tablet_sm":
        return tabletSmFontSize || fontSize;
      case "lg":
        return lgFontSize || fontSize;
      case "xl":
        return xlFontSize || fontSize;
      case "2xl":
        return twoXlFontSize || fontSize;
      case "3xl":
        return threeXlFontSize || fontSize;
      case "4xl":
        return fourXlFontSize || fontSize;
      case "5xl":
        return fiveXlFontSize || fontSize;
      case "6xl":
        return sixXlFontSize || fontSize;
      default:
        return fontSize;
    }
  };

  const getBorderRadius = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsBorderRadius || borderRadius;
      case "xs":
        return xsBorderRadius || borderRadius;
      case "s":
        return sBorderRadius || borderRadius;
      case "m":
        return mBorderRadius || borderRadius;
      case "sm":
        return smBorderRadius || borderRadius;
      case "l":
        return lBorderRadius || borderRadius;
      case "md":
        return mdBorderRadius || borderRadius;
      case "tablet":
        return tabletBorderRadius || borderRadius;
      case "tablet_sm":
        return tabletSmBorderRadius || borderRadius;
      case "lg":
        return lgBorderRadius || borderRadius;
      case "xl":
        return xlBorderRadius || borderRadius;
      case "2xl":
        return twoXlBorderRadius || borderRadius;
      case "3xl":
        return threeXlBorderRadius || borderRadius;
      case "4xl":
        return fourXlBorderRadius || borderRadius;
      case "5xl":
        return fiveXlBorderRadius || borderRadius;
      case "6xl":
        return sixXlBorderRadius || borderRadius;
      default:
        return borderRadius;
    }
  };

  const getMargin = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsMargin || margin;
      case "xs":
        return xsMargin || margin;
      case "s":
        return sMargin || margin;
      case "m":
        return mMargin || margin;
      case "sm":
        return smMargin || margin;
      case "l":
        return lMargin || margin;
      case "md":
        return mdMargin || margin;
      case "tablet":
        return tabletMargin || margin;
      case "tablet_sm":
        return tabletSmMargin || margin;
      case "lg":
        return lgMargin || margin;
      case "xl":
        return xlMargin || margin;
      case "2xl":
        return twoXlMargin || margin;
      case "3xl":
        return threeXlMargin || margin;
      case "4xl":
        return fourXlMargin || margin;
      case "5xl":
        return fiveXlMargin || margin;
      case "6xl":
        return sixXlMargin || margin;
      default:
        return margin;
    }
  };

  const getPadding = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsPadding || padding;
      case "xs":
        return xsPadding || padding;
      case "s":
        return sPadding || padding;
      case "m":
        return mPadding || padding;
      case "sm":
        return smPadding || padding;
      case "l":
        return lPadding || padding;
      case "md":
        return mdPadding || padding;
      case "tablet":
        return tabletPadding || padding;
      case "tablet_sm":
        return tabletSmPadding || padding;
      case "lg":
        return lgPadding || padding;
      case "xl":
        return xlPadding || padding;
      case "2xl":
        return twoXlPadding || padding;
      case "3xl":
        return threeXlPadding || padding;
      case "4xl":
        return fourXlPadding || padding;
      case "5xl":
        return fiveXlPadding || padding;
      case "6xl":
        return sixXlPadding || padding;
      default:
        return padding;
    }
  };

  return (
    <header
      id={id}
      style={{
        width: getHeaderWidth(),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: getHeaderMargin(),
      }}
    >
      <div
        style={{
          width: getContentWidth(),
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo logo={logo} width={getLogoWidth()} height={getLogoHeight()} />
        <nav style={{ display: "flex", justifyContent: "center", gap }}>
          {links.map((link, index) => (
            <LinkButton
              href={link.href}
              text={link.text}
              key={index}
              style={{
                scrollBehavior: "smooth",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: getMargin(),
                backgroundColor: hoverStates[index]
                  ? hoverBackgroundColor
                  : backgroundColor,
                fontSize: getFontSize(),
                fontWeight: fontWeight,
                padding: getPadding(),
                fontFamily: fontFamily,
                width: getWidth(),
                height: getHeight(),
                textDecoration: textDecoration,
                border: hoverStates[index] ? hoverBorder : border,
                borderRadius: getBorderRadius(),
                color: hoverStates[index] ? hoverColor : color,
                cursor: "pointer",
                outline: "none",
                transition: transition,
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              role="button"
              target="_blank"
            />
          ))}
        </nav>
      </div>
    </header>
  );
};
