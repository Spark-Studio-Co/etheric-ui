import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { getBreakpoint } from "@/utils/getBreakpoint";

interface KebabMenuProps {
  items: string[];
  icon: IconDefinition;
  margin?: string;
  backgroundColor?: string;
  fontSize?: string;
  top?: string;
  right?: string;
  bottom?: string;
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
  optionBoxShadow?: string;
  optionZIndex?: number;
  optionBackgroundColor?: string;
  optionRight?: string;
  optionBorderRadius?: string;
  optionPaddingLeft?: string;
  optionPaddingRight?: string;
  optionHoverColor?: string;
  optionMarginTop?: string;
  optionMarginBottom?: string;
  optionTop?: string;
  optionLeft?: string;
  optionBottom?: string;
  optionWidth?: string;
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
  left?: string;
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
  xxsTop?: string;
  xsTop?: string;
  sTop?: string;
  mTop?: string;
  smTop?: string;
  lTop?: string;
  mdTop?: string;
  tabletTop?: string;
  tabletSmTop?: string;
  lgTop?: string;
  xlTop?: string;
  twoXlTop?: string;
  threeXlTop?: string;
  fourXlTop?: string;
  fiveXlTop?: string;
  sixXlTop?: string;
  xxsLeft?: string;
  xsLeft?: string;
  sLeft?: string;
  mLeft?: string;
  smLeft?: string;
  lLeft?: string;
  mdLeft?: string;
  tabletLeft?: string;
  tabletSmLeft?: string;
  lgLeft?: string;
  xlLeft?: string;
  twoXlLeft?: string;
  threeXlLeft?: string;
  fourXlLeft?: string;
  fiveXlLeft?: string;
  sixXlLeft?: string;
  xxsBottom?: string;
  xsBottom?: string;
  sBottom?: string;
  mBottom?: string;
  smBottom?: string;
  lBottom?: string;
  mdBottom?: string;
  tabletBottom?: string;
  tabletSmBottom?: string;
  lgBottom?: string;
  xlBottom?: string;
  twoXlBottom?: string;
  threeXlBottom?: string;
  fourXlBottom?: string;
  fiveXlBottom?: string;
  sixXlBottom?: string;
  xxsRight?: string;
  xsRight?: string;
  sRight?: string;
  mRight?: string;
  smRight?: string;
  lRight?: string;
  mdRight?: string;
  tabletRight?: string;
  tabletSmRight?: string;
  lgRight?: string;
  xlRight?: string;
  twoXlRight?: string;
  threeXlRight?: string;
  fourXlRight?: string;
  onClickFunctions: ((index: number) => void)[];
  fiveXlRight?: string;
  sixXlRight?: string;
  xxsOptionTop?: string;
  xsOptionTop?: string;
  sOptionTop?: string;
  mOptionTop?: string;
  smOptionTop?: string;
  lOptionTop?: string;
  mdOptionTop?: string;
  tabletOptionTop?: string;
  tabletSmOptionTop?: string;
  lgOptionTop?: string;
  xlOptionTop?: string;
  twoXlOptionTop?: string;
  threeXlOptionTop?: string;
  fourXlOptionTop?: string;
  fiveXlOptionTop?: string;
  sixXlOptionTop?: string;
  xxsOptionRight?: string;
  xsOptionRight?: string;
  sOptionRight?: string;
  mOptionRight?: string;
  smOptionRight?: string;
  lOptionRight?: string;
  mdOptionRight?: string;
  tabletOptionRight?: string;
  tabletSmOptionRight?: string;
  lgOptionRight?: string;
  xlOptionRight?: string;
  twoXlOptionRight?: string;
  threeXlOptionRight?: string;
  fourXlOptionRight?: string;
  fiveXlOptionRight?: string;
  sixXlOptionRight?: string;
  xxsOptionLeft?: string;
  xsOptionLeft?: string;
  sOptionLeft?: string;
  mOptionLeft?: string;
  smOptionLeft?: string;
  lOptionLeft?: string;
  mdOptionLeft?: string;
  tabletOptionLeft?: string;
  tabletSmOptionLeft?: string;
  lgOptionLeft?: string;
  xlOptionLeft?: string;
  twoXlOptionLeft?: string;
  threeXlOptionLeft?: string;
  fourXlOptionLeft?: string;
  fiveXlOptionLeft?: string;
  sixXlOptionLeft?: string;
  xxsOptionBottom?: string;
  xsOptionBottom?: string;
  sOptionBottom?: string;
  mOptionBottom?: string;
  smOptionBottom?: string;
  lOptionBottom?: string;
  mdOptionBottom?: string;
  tabletOptionBottom?: string;
  tabletSmOptionBottom?: string;
  lgOptionBottom?: string;
  xlOptionBottom?: string;
  twoXlOptionBottom?: string;
  threeXlOptionBottom?: string;
  fourXlOptionBottom?: string;
  fiveXlOptionBottom?: string;
  sixXlOptionBottom?: string;
  xxsOptionWidth?: string;
  xsOptionWidth?: string;
  sOptionWidth?: string;
  mOptionWidth?: string;
  smOptionWidth?: string;
  lOptionWidth?: string;
  mdOptionWidth?: string;
  tabletOptionWidth?: string;
  tabletSmOptionWidth?: string;
  lgOptionWidth?: string;
  xlOptionWidth?: string;
  twoXlOptionWidth?: string;
  threeXlOptionWidth?: string;
  fourXlOptionWidth?: string;
  fiveXlOptionWidth?: string;
  sixXlOptionWidth?: string;
  xxsOptionBorderRadius?: string;
  xsOptionBorderRadius?: string;
  sOptionBorderRadius?: string;
  mOptionBorderRadius?: string;
  smOptionBorderRadius?: string;
  lOptionBorderRadius?: string;
  mdOptionBorderRadius?: string;
  tabletOptionBorderRadius?: string;
  tabletSmOptionBorderRadius?: string;
  lgOptionBorderRadius?: string;
  xlOptionBorderRadius?: string;
  twoXlOptionBorderRadius?: string;
  threeXlOptionBorderRadius?: string;
  fourXlOptionBorderRadius?: string;
  fiveXlOptionBorderRadius?: string;
  sixXlOptionBorderRadius?: string;
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export const KebabMenu: React.FC<KebabMenuProps> = ({
  items,
  icon,
  padding,
  right,
  backgroundColor,
  fontSize,
  fontWeight,
  fontFamily,
  width,
  height,
  textDecoration,
  borderRadius,
  border,
  color,
  transition,
  cursor,
  margin,
  iconFontSize,
  iconColor,
  iconHoverColor,
  optionBoxShadow,
  optionZIndex,
  optionBackgroundColor,
  optionRight,
  optionBorderRadius,
  optionHoverColor,
  optionTop,
  optionLeft,
  optionBottom,
  optionWidth,
  left,
  bottom,
  top,
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
  xxsTop,
  xsTop,
  sTop,
  mTop,
  smTop,
  lTop,
  mdTop,
  tabletTop,
  tabletSmTop,
  lgTop,
  xlTop,
  twoXlTop,
  threeXlTop,
  fourXlTop,
  fiveXlTop,
  sixXlTop,
  xxsLeft,
  xsLeft,
  sLeft,
  mLeft,
  smLeft,
  lLeft,
  mdLeft,
  xxsOptionBorderRadius,
  xsOptionBorderRadius,
  sOptionBorderRadius,
  mOptionBorderRadius,
  smOptionBorderRadius,
  lOptionBorderRadius,
  mdOptionBorderRadius,
  tabletOptionBorderRadius,
  tabletSmOptionBorderRadius,
  lgOptionBorderRadius,
  xlOptionBorderRadius,
  twoXlOptionBorderRadius,
  threeXlOptionBorderRadius,
  fourXlOptionBorderRadius,
  fiveXlOptionBorderRadius,
  sixXlOptionBorderRadius,
  tabletLeft,
  tabletSmLeft,
  lgLeft,
  xlLeft,
  twoXlLeft,
  threeXlLeft,
  fourXlLeft,
  fiveXlLeft,
  sixXlLeft,
  xxsBottom,
  xsBottom,
  sBottom,
  mBottom,
  smBottom,
  lBottom,
  mdBottom,
  tabletBottom,
  tabletSmBottom,
  lgBottom,
  xlBottom,
  twoXlBottom,
  threeXlBottom,
  fourXlBottom,
  fiveXlBottom,
  sixXlBottom,
  xxsRight,
  xsRight,
  sRight,
  mRight,
  smRight,
  lRight,
  mdRight,
  tabletRight,
  tabletSmRight,
  lgRight,
  xlRight,
  twoXlRight,
  threeXlRight,
  fourXlRight,
  fiveXlRight,
  sixXlRight,
  xxsOptionTop,
  xsOptionTop,
  sOptionTop,
  mOptionTop,
  smOptionTop,
  lOptionTop,
  mdOptionTop,
  tabletOptionTop,
  tabletSmOptionTop,
  lgOptionTop,
  xlOptionTop,
  twoXlOptionTop,
  threeXlOptionTop,
  fourXlOptionTop,
  fiveXlOptionTop,
  sixXlOptionTop,
  xxsOptionRight,
  xsOptionRight,
  sOptionRight,
  mOptionRight,
  smOptionRight,
  lOptionRight,
  mdOptionRight,
  tabletOptionRight,
  tabletSmOptionRight,
  lgOptionRight,
  xlOptionRight,
  twoXlOptionRight,
  threeXlOptionRight,
  fourXlOptionRight,
  fiveXlOptionRight,
  sixXlOptionRight,
  xxsOptionLeft,
  xsOptionLeft,
  sOptionLeft,
  mOptionLeft,
  smOptionLeft,
  lOptionLeft,
  mdOptionLeft,
  tabletOptionLeft,
  tabletSmOptionLeft,
  lgOptionLeft,
  xlOptionLeft,
  twoXlOptionLeft,
  threeXlOptionLeft,
  fourXlOptionLeft,
  fiveXlOptionLeft,
  sixXlOptionLeft,
  xxsOptionBottom,
  xsOptionBottom,
  onClickFunctions,
  sOptionBottom,
  mOptionBottom,
  smOptionBottom,
  lOptionBottom,
  mdOptionBottom,
  tabletOptionBottom,
  tabletSmOptionBottom,
  lgOptionBottom,
  xlOptionBottom,
  twoXlOptionBottom,
  threeXlOptionBottom,
  fourXlOptionBottom,
  fiveXlOptionBottom,
  sixXlOptionBottom,
  xxsOptionWidth,
  xsOptionWidth,
  sOptionWidth,
  mOptionWidth,
  smOptionWidth,
  lOptionWidth,
  mdOptionWidth,
  tabletOptionWidth,
  tabletSmOptionWidth,
  lgOptionWidth,
  xlOptionWidth,
  twoXlOptionWidth,
  threeXlOptionWidth,
  fourXlOptionWidth,
  fiveXlOptionWidth,
  sixXlOptionWidth,
}) => {
  const [isKebabOpen, setKebabOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);
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

  const getResponsiveValue = (
    xxsValue: string | undefined,
    xsValue: string | undefined,
    sValue: string | undefined,
    mValue: string | undefined,
    smValue: string | undefined,
    lValue: string | undefined,
    mdValue: string | undefined,
    tabletValue: string | undefined,
    tabletSmValue: string | undefined,
    lgValue: string | undefined,
    xlValue: string | undefined,
    twoXlValue: string | undefined,
    threeXlValue: string | undefined,
    fourXlValue: string | undefined,
    fiveXlValue: string | undefined,
    sixXlValue: string | undefined,
    defaultValue: string | undefined
  ) => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsValue || defaultValue;
      case "xs":
        return xsValue || defaultValue;
      case "s":
        return sValue || defaultValue;
      case "m":
        return mValue || defaultValue;
      case "sm":
        return smValue || defaultValue;
      case "l":
        return lValue || defaultValue;
      case "md":
        return mdValue || defaultValue;
      case "tablet":
        return tabletValue || defaultValue;
      case "tablet_sm":
        return tabletSmValue || defaultValue;
      case "lg":
        return lgValue || defaultValue;
      case "xl":
        return xlValue || defaultValue;
      case "2xl":
        return twoXlValue || defaultValue;
      case "3xl":
        return threeXlValue || defaultValue;
      case "4xl":
        return fourXlValue || defaultValue;
      case "5xl":
        return fiveXlValue || defaultValue;
      case "6xl":
        return sixXlValue || defaultValue;
      default:
        return defaultValue;
    }
  };

  const getWidth = () =>
    getResponsiveValue(
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
      width
    );

  const getHeight = () =>
    getResponsiveValue(
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
      height
    );

  const getFontSize = () =>
    getResponsiveValue(
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
      fontSize
    );

  const getMargin = () =>
    getResponsiveValue(
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
      margin
    );

  const getPadding = () =>
    getResponsiveValue(
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
      padding
    );

  const getBorderRadius = () =>
    getResponsiveValue(
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
      borderRadius
    );

  const getOptionBorderRadius = () =>
    getResponsiveValue(
      xxsOptionBorderRadius,
      xsOptionBorderRadius,
      sOptionBorderRadius,
      mOptionBorderRadius,
      smOptionBorderRadius,
      lOptionBorderRadius,
      mdOptionBorderRadius,
      tabletOptionBorderRadius,
      tabletSmOptionBorderRadius,
      lgOptionBorderRadius,
      xlOptionBorderRadius,
      twoXlOptionBorderRadius,
      threeXlOptionBorderRadius,
      fourXlOptionBorderRadius,
      fiveXlOptionBorderRadius,
      sixXlOptionBorderRadius,
      optionBorderRadius
    );

  const getIconFontSize = () =>
    getResponsiveValue(
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
      iconFontSize
    );

  const getTop = () =>
    getResponsiveValue(
      xxsTop,
      xsTop,
      sTop,
      mTop,
      smTop,
      lTop,
      mdTop,
      tabletTop,
      tabletSmTop,
      lgTop,
      xlTop,
      twoXlTop,
      threeXlTop,
      fourXlTop,
      fiveXlTop,
      sixXlTop,
      top
    );

  const getOptionTop = () =>
    getResponsiveValue(
      xxsOptionTop,
      xsOptionTop,
      sOptionTop,
      mOptionTop,
      smOptionTop,
      lOptionTop,
      mdOptionTop,
      tabletOptionTop,
      tabletSmOptionTop,
      lgOptionTop,
      xlOptionTop,
      twoXlOptionTop,
      threeXlOptionTop,
      fourXlOptionTop,
      fiveXlOptionTop,
      sixXlOptionTop,
      optionTop
    );

  const getLeft = () =>
    getResponsiveValue(
      xxsLeft,
      xsLeft,
      sLeft,
      mLeft,
      smLeft,
      lLeft,
      mdLeft,
      tabletLeft,
      tabletSmLeft,
      lgLeft,
      xlLeft,
      twoXlLeft,
      threeXlLeft,
      fourXlLeft,
      fiveXlLeft,
      sixXlLeft,
      left
    );

  const getOptionLeft = () =>
    getResponsiveValue(
      xxsOptionLeft,
      xsOptionLeft,
      sOptionLeft,
      mOptionLeft,
      smOptionLeft,
      lOptionLeft,
      mdOptionLeft,
      tabletOptionLeft,
      tabletSmOptionLeft,
      lgOptionLeft,
      xlOptionLeft,
      twoXlOptionLeft,
      threeXlOptionLeft,
      fourXlOptionLeft,
      fiveXlOptionLeft,
      sixXlOptionLeft,
      optionLeft
    );

  const getBottom = () =>
    getResponsiveValue(
      xxsBottom,
      xsBottom,
      sBottom,
      mBottom,
      smBottom,
      lBottom,
      mdBottom,
      tabletBottom,
      tabletSmBottom,
      lgBottom,
      xlBottom,
      twoXlBottom,
      threeXlBottom,
      fourXlBottom,
      fiveXlBottom,
      sixXlBottom,
      bottom
    );

  const getOptionBottom = () =>
    getResponsiveValue(
      xxsOptionBottom,
      xsOptionBottom,
      sOptionBottom,
      mOptionBottom,
      smOptionBottom,
      lOptionBottom,
      mdOptionBottom,
      tabletOptionBottom,
      tabletSmOptionBottom,
      lgOptionBottom,
      xlOptionBottom,
      twoXlOptionBottom,
      threeXlOptionBottom,
      fourXlOptionBottom,
      fiveXlOptionBottom,
      sixXlOptionBottom,
      optionBottom
    );

  const getRight = () =>
    getResponsiveValue(
      xxsRight,
      xsRight,
      sRight,
      mRight,
      smRight,
      lRight,
      mdRight,
      tabletRight,
      tabletSmRight,
      lgRight,
      xlRight,
      twoXlRight,
      threeXlRight,
      fourXlRight,
      fiveXlRight,
      sixXlRight,
      right
    );

  const getOptionRight = () =>
    getResponsiveValue(
      xxsOptionRight,
      xsOptionRight,
      sOptionRight,
      mOptionRight,
      smOptionRight,
      lOptionRight,
      mdOptionRight,
      tabletOptionRight,
      tabletSmOptionRight,
      lgOptionRight,
      xlOptionRight,
      twoXlOptionRight,
      threeXlOptionRight,
      fourXlOptionRight,
      fiveXlOptionRight,
      sixXlOptionRight,
      optionRight
    );

  const getOptionWidth = () =>
    getResponsiveValue(
      xxsOptionWidth,
      xsOptionWidth,
      sOptionWidth,
      mOptionWidth,
      smOptionWidth,
      lOptionWidth,
      mdOptionWidth,
      tabletOptionWidth,
      tabletSmOptionWidth,
      lgOptionWidth,
      xlOptionWidth,
      twoXlOptionWidth,
      threeXlOptionWidth,
      fourXlOptionWidth,
      fiveXlOptionWidth,
      sixXlOptionWidth,
      optionWidth
    );

  const handleOpenMenu = () => {
    setKebabOpen(!isKebabOpen);
  };

  return (
    <>
      <button
        onClick={handleOpenMenu}
        style={{
          position: "absolute",
          padding: getPadding(),
          top: getTop(),
          right: getRight(),
          left: getLeft(),
          bottom: getBottom(),
          backgroundColor,
          fontSize: getFontSize(),
          fontWeight,
          fontFamily,
          width: getWidth(),
          height: getHeight(),
          textDecoration,
          borderRadius: getBorderRadius(),
          border,
          color,
          transition,
          cursor,
          margin: getMargin(),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FontAwesomeIcon
          icon={icon}
          style={{
            transition,
            fontSize: getIconFontSize(),
            color: isHovered ? iconHoverColor : iconColor || color,
            cursor: "pointer",
          }}
        />
      </button>
      {isKebabOpen && (
        <div
          style={{
            boxShadow: optionBoxShadow,
            position: "absolute",
            zIndex: optionZIndex,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            right: getOptionRight(),
            top: getOptionTop(),
            left: getOptionLeft(),
            bottom: getOptionBottom(),
            borderRadius: getOptionBorderRadius(),
            backgroundColor: optionBackgroundColor,
            width: getOptionWidth(),
          }}
        >
          {items.map((option, index) => (
            <span
              key={index}
              onClick={() => onClickFunctions[index](index)}
              style={{
                margin: getMargin(),
                padding: getPadding(),
                transition,
                color: hoveredOption === index ? optionHoverColor : color,
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredOption(index)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </>
  );
};
