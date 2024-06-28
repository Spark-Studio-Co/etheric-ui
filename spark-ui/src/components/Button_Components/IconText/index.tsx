import React, { useState, useEffect } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getBreakpoint } from "../../../utils/getBreakpoint";

interface IIconTextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconDefinition;
  margin?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  width?: string;
  height?: string;
  textDecoration?: string;
  borderRadius?: string;
  border?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  hoverBorder?: string;
  transition?: string;
  cursor?: string;
  text: string;
  gap?: string;
  padding?: string;
  iconFontSize?: string;
  iconColor?: string;
  iconHoverColor?: string;
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
  xxsIconFontSize?: string;
  xsIconFontSize?: string;
  sIconFontSize?: string;
  mIconFontSize?: string;
  smIconFontSize?: string;
  lIconFontSize?: string;
  mdIconFontSize?: string;
  tabletIconFontSize?: string;
  tabletSmIconFontSize?: string;
  lgIconFontSize?: string;
  xlIconFontSize?: string;
  twoXlIconFontSize?: string;
  threeXlIconFontSize?: string;
  fourXlIconFontSize?: string;
  fiveXlIconFontSize?: string;
  sixXlIconFontSize?: string;
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
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const IconTextButton: React.FC<IIconTextProps> = ({
  icon,
  text,
  onClick,
  id,
  margin,
  backgroundColor,
  fontSize,
  fontWeight,
  fontFamily,
  width,
  height,
  textDecoration,
  border,
  borderRadius,
  color,
  hoverBackgroundColor,
  hoverColor,
  hoverBorder,
  cursor,
  iconFontSize,
  iconColor,
  iconHoverColor,
  transition,
  gap,
  padding,
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
  xxsIconFontSize,
  xsIconFontSize,
  sIconFontSize,
  mIconFontSize,
  smIconFontSize,
  lIconFontSize,
  mdIconFontSize,
  tabletIconFontSize,
  tabletSmIconFontSize,
  lgIconFontSize,
  xlIconFontSize,
  twoXlIconFontSize,
  threeXlIconFontSize,
  fourXlIconFontSize,
  fiveXlIconFontSize,
  sixXlIconFontSize,
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
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const getIconFontSize = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsIconFontSize || iconFontSize;
      case "xs":
        return xsIconFontSize || iconFontSize;
      case "s":
        return sIconFontSize || iconFontSize;
      case "m":
        return mIconFontSize || iconFontSize;
      case "sm":
        return smIconFontSize || iconFontSize;
      case "l":
        return lIconFontSize || iconFontSize;
      case "md":
        return mdIconFontSize || iconFontSize;
      case "tablet":
        return tabletIconFontSize || iconFontSize;
      case "tablet_sm":
        return tabletSmIconFontSize || iconFontSize;
      case "lg":
        return lgIconFontSize || iconFontSize;
      case "xl":
        return xlIconFontSize || iconFontSize;
      case "2xl":
        return twoXlIconFontSize || iconFontSize;
      case "3xl":
        return threeXlIconFontSize || iconFontSize;
      case "4xl":
        return fourXlIconFontSize || iconFontSize;
      case "5xl":
        return fiveXlIconFontSize || iconFontSize;
      case "6xl":
        return sixXlIconFontSize || iconFontSize;
      default:
        return iconFontSize;
    }
  };

  return (
    <button
      id={id}
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: getMargin(),
        backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
        borderRadius: getBorderRadius(),
        height: getHeight(),
        border: isHovered ? hoverBorder : border,
        gap,
        padding: getPadding(),
        transition,
        cursor: "pointer",
        outline: "none",
        width: getWidth(),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      <FontAwesomeIcon
        icon={icon}
        style={{
          color: isHovered ? iconHoverColor : iconColor || color,
          fontSize: getIconFontSize(),
          transition,
        }}
      />
      <span
        style={{
          fontFamily,
          fontSize: getFontSize(),
          color: isHovered ? hoverColor : color,
          fontWeight,
          textDecoration,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </span>
    </button>
  );
};
