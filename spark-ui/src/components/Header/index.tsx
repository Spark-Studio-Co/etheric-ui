import React, { useState } from "react";
import useWindowSize from "../useWindowSize";
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
  xxsLinkWidth?: string;
  xsLinkWidth?: string;
  sLinkWidth?: string;
  mLinkWidth?: string;
  smLinkWidth?: string;
  lLinkWidth?: string;
  mdLinkWidth?: string;
  tabletLinkWidth?: string;
  tabletSmLinkWidth?: string;
  lgLinkWidth?: string;
  xlLinkWidth?: string;
  twoXlLinkWidth?: string;
  threeXlLinkWidth?: string;
  fourXlLinkWidth?: string;
  fiveXlLinkWidth?: string;
  sixXlLinkWidth?: string;
  xxsLinkHeight?: string;
  xsLinkHeight?: string;
  sLinkHeight?: string;
  mLinkHeight?: string;
  smLinkHeight?: string;
  lLinkHeight?: string;
  mdLinkHeight?: string;
  tabletLinkHeight?: string;
  tabletSmLinkHeight?: string;
  lgLinkHeight?: string;
  xlLinkHeight?: string;
  twoXlLinkHeight?: string;
  threeXlLinkHeight?: string;
  fourXlLinkHeight?: string;
  fiveXlLinkHeight?: string;
  sixXlLinkHeight?: string;
  xxsLinkFontSize?: string;
  xsLinkFontSize?: string;
  sLinkFontSize?: string;
  mLinkFontSize?: string;
  smLinkFontSize?: string;
  lLinkFontSize?: string;
  mdLinkFontSize?: string;
  tabletLinkFontSize?: string;
  tabletSmLinkFontSize?: string;
  lgLinkFontSize?: string;
  xlLinkFontSize?: string;
  twoXlLinkFontSize?: string;
  threeXlLinkFontSize?: string;
  fourXlLinkFontSize?: string;
  fiveXlLinkFontSize?: string;
  sixXlLinkFontSize?: string;
  xxsLinkMargin?: string;
  xsLinkMargin?: string;
  sLinkMargin?: string;
  mLinkMargin?: string;
  smLinkMargin?: string;
  lLinkMargin?: string;
  mdLinkMargin?: string;
  tabletLinkMargin?: string;
  tabletSmLinkMargin?: string;
  lgLinkMargin?: string;
  xlLinkMargin?: string;
  twoXlLinkMargin?: string;
  threeXlLinkMargin?: string;
  fourXlLinkMargin?: string;
  fiveXlLinkMargin?: string;
  sixXlLinkMargin?: string;
  xxsLinkBorderRadius?: string;
  xsLinkBorderRadius?: string;
  sLinkBorderRadius?: string;
  mLinkBorderRadius?: string;
  smLinkBorderRadius?: string;
  lLinkBorderRadius?: string;
  mdLinkBorderRadius?: string;
  tabletLinkBorderRadius?: string;
  tabletSmLinkBorderRadius?: string;
  lgLinkBorderRadius?: string;
  xlLinkBorderRadius?: string;
  twoXlLinkBorderRadius?: string;
  threeXlLinkBorderRadius?: string;
  fourXlLinkBorderRadius?: string;
  fiveXlLinkBorderRadius?: string;
  sixXlLinkBorderRadius?: string;
  xxsLinkPadding?: string;
  xsLinkPadding?: string;
  sLinkPadding?: string;
  mLinkPadding?: string;
  smLinkPadding?: string;
  lLinkPadding?: string;
  mdLinkPadding?: string;
  tabletLinkPadding?: string;
  tabletSmLinkPadding?: string;
  lgLinkPadding?: string;
  xlLinkPadding?: string;
  twoXlLinkPadding?: string;
  threeXlLinkPadding?: string;
  fourXlLinkPadding?: string;
  fiveXlLinkPadding?: string;
  sixXlLinkPadding?: string;
  xxsContactWidth?: string;
  xsContactWidth?: string;
  sContactWidth?: string;
  mContactWidth?: string;
  smContactWidth?: string;
  lContactWidth?: string;
  mdContactWidth?: string;
  tabletContactWidth?: string;
  tabletSmContactWidth?: string;
  lgContactWidth?: string;
  xlContactWidth?: string;
  twoXlContactWidth?: string;
  threeXlContactWidth?: string;
  fourXlContactWidth?: string;
  fiveXlContactWidth?: string;
  sixXlContactWidth?: string;
  xxsContactHeight?: string;
  xsContactHeight?: string;
  sContactHeight?: string;
  mContactHeight?: string;
  smContactHeight?: string;
  lContactHeight?: string;
  mdContactHeight?: string;
  tabletContactHeight?: string;
  tabletSmContactHeight?: string;
  lgContactHeight?: string;
  xlContactHeight?: string;
  twoXlContactHeight?: string;
  threeXlContactHeight?: string;
  fourXlContactHeight?: string;
  fiveXlContactHeight?: string;
  sixXlContactHeight?: string;
  xxsContactFontSize?: string;
  xsContactFontSize?: string;
  sContactFontSize?: string;
  mContactFontSize?: string;
  smContactFontSize?: string;
  lContactFontSize?: string;
  mdContactFontSize?: string;
  tabletContactFontSize?: string;
  tabletSmContactFontSize?: string;
  lgContactFontSize?: string;
  xlContactFontSize?: string;
  twoXlContactFontSize?: string;
  threeXlContactFontSize?: string;
  fourXlContactFontSize?: string;
  fiveXlContactFontSize?: string;
  sixXlContactFontSize?: string;
  xxsContactMargin?: string;
  xsContactMargin?: string;
  sContactMargin?: string;
  mContactMargin?: string;
  smContactMargin?: string;
  lContactMargin?: string;
  mdContactMargin?: string;
  tabletContactMargin?: string;
  tabletSmContactMargin?: string;
  lgContactMargin?: string;
  xlContactMargin?: string;
  twoXlContactMargin?: string;
  threeXlContactMargin?: string;
  fourXlContactMargin?: string;
  fiveXlContactMargin?: string;
  sixXlContactMargin?: string;
  xxsContactBorderRadius?: string;
  xsContactBorderRadius?: string;
  sContactBorderRadius?: string;
  mContactBorderRadius?: string;
  smContactBorderRadius?: string;
  lContactBorderRadius?: string;
  mdContactBorderRadius?: string;
  tabletContactBorderRadius?: string;
  tabletSmContactBorderRadius?: string;
  lgContactBorderRadius?: string;
  xlContactBorderRadius?: string;
  twoXlContactBorderRadius?: string;
  threeXlContactBorderRadius?: string;
  fourXlContactBorderRadius?: string;
  fiveXlContactBorderRadius?: string;
  sixXlContactBorderRadius?: string;
  xxsContactPadding?: string;
  xsContactPadding?: string;
  sContactPadding?: string;
  mContactPadding?: string;
  smContactPadding?: string;
  lContactPadding?: string;
  mdContactPadding?: string;
  tabletContactPadding?: string;
  tabletSmContactPadding?: string;
  lgContactPadding?: string;
  xlContactPadding?: string;
  twoXlContactPadding?: string;
  threeXlContactPadding?: string;
  fourXlContactPadding?: string;
  fiveXlContactPadding?: string;
  sixXlContactPadding?: string;
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
  contactBackgroundColor,
  contactBorder,
  contactColor,
  contactText,
  contactFontFamily,
  contactFontWeight,
  contactHoverBorder,
  contactHoverColor,
  hoverContactBackgroundColor,
  contactHref,
  contactTextDecoration,
  contactTransition,
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
  xxsLinkWidth,
  xsLinkWidth,
  sLinkWidth,
  mLinkWidth,
  smLinkWidth,
  lLinkWidth,
  mdLinkWidth,
  tabletLinkWidth,
  tabletSmLinkWidth,
  lgLinkWidth,
  xlLinkWidth,
  twoXlLinkWidth,
  threeXlLinkWidth,
  fourXlLinkWidth,
  fiveXlLinkWidth,
  sixXlLinkWidth,
  xxsLinkHeight,
  xsLinkHeight,
  sLinkHeight,
  mLinkHeight,
  smLinkHeight,
  lLinkHeight,
  mdLinkHeight,
  tabletLinkHeight,
  tabletSmLinkHeight,
  lgLinkHeight,
  xlLinkHeight,
  twoXlLinkHeight,
  threeXlLinkHeight,
  fourXlLinkHeight,
  fiveXlLinkHeight,
  sixXlLinkHeight,
  xxsLinkFontSize,
  xsLinkFontSize,
  sLinkFontSize,
  mLinkFontSize,
  smLinkFontSize,
  lLinkFontSize,
  mdLinkFontSize,
  tabletLinkFontSize,
  tabletSmLinkFontSize,
  lgLinkFontSize,
  xlLinkFontSize,
  twoXlLinkFontSize,
  threeXlLinkFontSize,
  fourXlLinkFontSize,
  fiveXlLinkFontSize,
  sixXlLinkFontSize,
  xxsLinkMargin,
  xsLinkMargin,
  sLinkMargin,
  mLinkMargin,
  smLinkMargin,
  lLinkMargin,
  mdLinkMargin,
  tabletLinkMargin,
  tabletSmLinkMargin,
  lgLinkMargin,
  xlLinkMargin,
  twoXlLinkMargin,
  threeXlLinkMargin,
  fourXlLinkMargin,
  fiveXlLinkMargin,
  sixXlLinkMargin,
  xxsLinkBorderRadius,
  xsLinkBorderRadius,
  sLinkBorderRadius,
  mLinkBorderRadius,
  smLinkBorderRadius,
  lLinkBorderRadius,
  mdLinkBorderRadius,
  tabletLinkBorderRadius,
  tabletSmLinkBorderRadius,
  lgLinkBorderRadius,
  xlLinkBorderRadius,
  twoXlLinkBorderRadius,
  threeXlLinkBorderRadius,
  fourXlLinkBorderRadius,
  fiveXlLinkBorderRadius,
  sixXlLinkBorderRadius,
  xxsLinkPadding,
  xsLinkPadding,
  sLinkPadding,
  mLinkPadding,
  smLinkPadding,
  lLinkPadding,
  mdLinkPadding,
  tabletLinkPadding,
  tabletSmLinkPadding,
  lgLinkPadding,
  xlLinkPadding,
  twoXlLinkPadding,
  threeXlLinkPadding,
  fourXlLinkPadding,
  fiveXlLinkPadding,
  sixXlLinkPadding,
  xxsContactWidth,
  xsContactWidth,
  sContactWidth,
  mContactWidth,
  smContactWidth,
  lContactWidth,
  mdContactWidth,
  tabletContactWidth,
  tabletSmContactWidth,
  lgContactWidth,
  xlContactWidth,
  twoXlContactWidth,
  threeXlContactWidth,
  fourXlContactWidth,
  fiveXlContactWidth,
  sixXlContactWidth,
  xxsContactHeight,
  xsContactHeight,
  sContactHeight,
  mContactHeight,
  smContactHeight,
  lContactHeight,
  mdContactHeight,
  tabletContactHeight,
  tabletSmContactHeight,
  lgContactHeight,
  xlContactHeight,
  twoXlContactHeight,
  threeXlContactHeight,
  fourXlContactHeight,
  fiveXlContactHeight,
  sixXlContactHeight,
  xxsContactFontSize,
  xsContactFontSize,
  sContactFontSize,
  mContactFontSize,
  smContactFontSize,
  lContactFontSize,
  mdContactFontSize,
  tabletContactFontSize,
  tabletSmContactFontSize,
  lgContactFontSize,
  xlContactFontSize,
  twoXlContactFontSize,
  threeXlContactFontSize,
  fourXlContactFontSize,
  fiveXlContactFontSize,
  sixXlContactFontSize,
  xxsContactMargin,
  xsContactMargin,
  sContactMargin,
  mContactMargin,
  smContactMargin,
  lContactMargin,
  mdContactMargin,
  tabletContactMargin,
  tabletSmContactMargin,
  lgContactMargin,
  xlContactMargin,
  twoXlContactMargin,
  threeXlContactMargin,
  fourXlContactMargin,
  fiveXlContactMargin,
  sixXlContactMargin,
  xxsContactBorderRadius,
  xsContactBorderRadius,
  sContactBorderRadius,
  mContactBorderRadius,
  smContactBorderRadius,
  lContactBorderRadius,
  mdContactBorderRadius,
  tabletContactBorderRadius,
  tabletSmContactBorderRadius,
  lgContactBorderRadius,
  xlContactBorderRadius,
  twoXlContactBorderRadius,
  threeXlContactBorderRadius,
  fourXlContactBorderRadius,
  fiveXlContactBorderRadius,
  sixXlContactBorderRadius,
  xxsContactPadding,
  xsContactPadding,
  sContactPadding,
  mContactPadding,
  smContactPadding,
  lContactPadding,
  mdContactPadding,
  tabletContactPadding,
  tabletSmContactPadding,
  lgContactPadding,
  xlContactPadding,
  twoXlContactPadding,
  threeXlContactPadding,
  fourXlContactPadding,
  fiveXlContactPadding,
  sixXlContactPadding,
}) => {
  const [hoverStates, setHoverStates] = React.useState<boolean[]>(
    new Array(links.length).fill(false)
  );
  const [isHovered, setIsHovered] = useState(false);
  const { width: windowWidth } = useWindowSize();

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

  const getLinkWidth = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsLinkWidth || width;
      case "xs":
        return xsLinkWidth || width;
      case "s":
        return sLinkWidth || width;
      case "m":
        return mLinkWidth || width;
      case "sm":
        return smLinkWidth || width;
      case "l":
        return lLinkWidth || width;
      case "md":
        return mdLinkWidth || width;
      case "tablet":
        return tabletLinkWidth || width;
      case "tablet_sm":
        return tabletSmLinkWidth || width;
      case "lg":
        return lgLinkWidth || width;
      case "xl":
        return xlLinkWidth || width;
      case "2xl":
        return twoXlLinkWidth || width;
      case "3xl":
        return threeXlLinkWidth || width;
      case "4xl":
        return fourXlLinkWidth || width;
      case "5xl":
        return fiveXlLinkWidth || width;
      case "6xl":
        return sixXlLinkWidth || width;
      default:
        return width;
    }
  };

  const getContactWidth = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsContactWidth || width;
      case "xs":
        return xsContactWidth || width;
      case "s":
        return sContactWidth || width;
      case "m":
        return mContactWidth || width;
      case "sm":
        return smContactWidth || width;
      case "l":
        return lContactWidth || width;
      case "md":
        return mdContactWidth || width;
      case "tablet":
        return tabletContactWidth || width;
      case "tablet_sm":
        return tabletSmContactWidth || width;
      case "lg":
        return lgContactWidth || width;
      case "xl":
        return xlContactWidth || width;
      case "2xl":
        return twoXlContactWidth || width;
      case "3xl":
        return threeXlContactWidth || width;
      case "4xl":
        return fourXlContactWidth || width;
      case "5xl":
        return fiveXlContactWidth || width;
      case "6xl":
        return sixXlContactWidth || width;
      default:
        return width;
    }
  };

  const getLinkHeight = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsLinkHeight || height;
      case "xs":
        return xsLinkHeight || height;
      case "s":
        return sLinkHeight || height;
      case "m":
        return mLinkHeight || height;
      case "sm":
        return smLinkHeight || height;
      case "l":
        return lLinkHeight || height;
      case "md":
        return mdLinkHeight || height;
      case "tablet":
        return tabletLinkHeight || height;
      case "tablet_sm":
        return tabletSmLinkHeight || height;
      case "lg":
        return lgLinkHeight || height;
      case "xl":
        return xlLinkHeight || height;
      case "2xl":
        return twoXlLinkHeight || height;
      case "3xl":
        return threeXlLinkHeight || height;
      case "4xl":
        return fourXlLinkHeight || height;
      case "5xl":
        return fiveXlLinkHeight || height;
      case "6xl":
        return sixXlLinkHeight || height;
      default:
        return height;
    }
  };

  const getContactHeight = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsContactHeight || height;
      case "xs":
        return xsContactHeight || height;
      case "s":
        return sContactHeight || height;
      case "m":
        return mContactHeight || height;
      case "sm":
        return smContactHeight || height;
      case "l":
        return lContactHeight || height;
      case "md":
        return mdContactHeight || height;
      case "tablet":
        return tabletContactHeight || height;
      case "tablet_sm":
        return tabletSmContactHeight || height;
      case "lg":
        return lgContactHeight || height;
      case "xl":
        return xlContactHeight || height;
      case "2xl":
        return twoXlContactHeight || height;
      case "3xl":
        return threeXlContactHeight || height;
      case "4xl":
        return fourXlContactHeight || height;
      case "5xl":
        return fiveXlContactHeight || height;
      case "6xl":
        return sixXlContactHeight || height;
      default:
        return height;
    }
  };

  const getLinkFontSize = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsLinkFontSize || fontSize;
      case "xs":
        return xsLinkFontSize || fontSize;
      case "s":
        return sLinkFontSize || fontSize;
      case "m":
        return mLinkFontSize || fontSize;
      case "sm":
        return smLinkFontSize || fontSize;
      case "l":
        return lLinkFontSize || fontSize;
      case "md":
        return mdLinkFontSize || fontSize;
      case "tablet":
        return tabletLinkFontSize || fontSize;
      case "tablet_sm":
        return tabletSmLinkFontSize || fontSize;
      case "lg":
        return lgLinkFontSize || fontSize;
      case "xl":
        return xlLinkFontSize || fontSize;
      case "2xl":
        return twoXlLinkFontSize || fontSize;
      case "3xl":
        return threeXlLinkFontSize || fontSize;
      case "4xl":
        return fourXlLinkFontSize || fontSize;
      case "5xl":
        return fiveXlLinkFontSize || fontSize;
      case "6xl":
        return sixXlLinkFontSize || fontSize;
      default:
        return fontSize;
    }
  };

  const getContactFontSize = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsContactFontSize || fontSize;
      case "xs":
        return xsContactFontSize || fontSize;
      case "s":
        return sContactFontSize || fontSize;
      case "m":
        return mContactFontSize || fontSize;
      case "sm":
        return smContactFontSize || fontSize;
      case "l":
        return lContactFontSize || fontSize;
      case "md":
        return mdContactFontSize || fontSize;
      case "tablet":
        return tabletContactFontSize || fontSize;
      case "tablet_sm":
        return tabletSmContactFontSize || fontSize;
      case "lg":
        return lgContactFontSize || fontSize;
      case "xl":
        return xlContactFontSize || fontSize;
      case "2xl":
        return twoXlContactFontSize || fontSize;
      case "3xl":
        return threeXlContactFontSize || fontSize;
      case "4xl":
        return fourXlContactFontSize || fontSize;
      case "5xl":
        return fiveXlContactFontSize || fontSize;
      case "6xl":
        return sixXlContactFontSize || fontSize;
      default:
        return fontSize;
    }
  };

  const getLinkBorderRadius = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsLinkBorderRadius || borderRadius;
      case "xs":
        return xsLinkBorderRadius || borderRadius;
      case "s":
        return sLinkBorderRadius || borderRadius;
      case "m":
        return mLinkBorderRadius || borderRadius;
      case "sm":
        return smLinkBorderRadius || borderRadius;
      case "l":
        return lLinkBorderRadius || borderRadius;
      case "md":
        return mdLinkBorderRadius || borderRadius;
      case "tablet":
        return tabletLinkBorderRadius || borderRadius;
      case "tablet_sm":
        return tabletSmLinkBorderRadius || borderRadius;
      case "lg":
        return lgLinkBorderRadius || borderRadius;
      case "xl":
        return xlLinkBorderRadius || borderRadius;
      case "2xl":
        return twoXlLinkBorderRadius || borderRadius;
      case "3xl":
        return threeXlLinkBorderRadius || borderRadius;
      case "4xl":
        return fourXlLinkBorderRadius || borderRadius;
      case "5xl":
        return fiveXlLinkBorderRadius || borderRadius;
      case "6xl":
        return sixXlLinkBorderRadius || borderRadius;
      default:
        return borderRadius;
    }
  };

  const getContactBorderRadius = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsContactBorderRadius || borderRadius;
      case "xs":
        return xsContactBorderRadius || borderRadius;
      case "s":
        return sContactBorderRadius || borderRadius;
      case "m":
        return mContactBorderRadius || borderRadius;
      case "sm":
        return smContactBorderRadius || borderRadius;
      case "l":
        return lContactBorderRadius || borderRadius;
      case "md":
        return mdContactBorderRadius || borderRadius;
      case "tablet":
        return tabletContactBorderRadius || borderRadius;
      case "tablet_sm":
        return tabletSmContactBorderRadius || borderRadius;
      case "lg":
        return lgContactBorderRadius || borderRadius;
      case "xl":
        return xlContactBorderRadius || borderRadius;
      case "2xl":
        return twoXlContactBorderRadius || borderRadius;
      case "3xl":
        return threeXlContactBorderRadius || borderRadius;
      case "4xl":
        return fourXlContactBorderRadius || borderRadius;
      case "5xl":
        return fiveXlContactBorderRadius || borderRadius;
      case "6xl":
        return sixXlContactBorderRadius || borderRadius;
      default:
        return borderRadius;
    }
  };

  const getLinkMargin = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsLinkMargin || margin;
      case "xs":
        return xsLinkMargin || margin;
      case "s":
        return sLinkMargin || margin;
      case "m":
        return mLinkMargin || margin;
      case "sm":
        return smLinkMargin || margin;
      case "l":
        return lLinkMargin || margin;
      case "md":
        return mdLinkMargin || margin;
      case "tablet":
        return tabletLinkMargin || margin;
      case "tablet_sm":
        return tabletSmLinkMargin || margin;
      case "lg":
        return lgLinkMargin || margin;
      case "xl":
        return xlLinkMargin || margin;
      case "2xl":
        return twoXlLinkMargin || margin;
      case "3xl":
        return threeXlLinkMargin || margin;
      case "4xl":
        return fourXlLinkMargin || margin;
      case "5xl":
        return fiveXlLinkMargin || margin;
      case "6xl":
        return sixXlLinkMargin || margin;
      default:
        return margin;
    }
  };

  const getContactMargin = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsContactMargin || margin;
      case "xs":
        return xsContactMargin || margin;
      case "s":
        return sContactMargin || margin;
      case "m":
        return mContactMargin || margin;
      case "sm":
        return smContactMargin || margin;
      case "l":
        return lContactMargin || margin;
      case "md":
        return mdContactMargin || margin;
      case "tablet":
        return tabletContactMargin || margin;
      case "tablet_sm":
        return tabletSmContactMargin || margin;
      case "lg":
        return lgContactMargin || margin;
      case "xl":
        return xlContactMargin || margin;
      case "2xl":
        return twoXlContactMargin || margin;
      case "3xl":
        return threeXlContactMargin || margin;
      case "4xl":
        return fourXlContactMargin || margin;
      case "5xl":
        return fiveXlContactMargin || margin;
      case "6xl":
        return sixXlContactMargin || margin;
      default:
        return margin;
    }
  };

  const getLinkPadding = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsLinkPadding || padding;
      case "xs":
        return xsLinkPadding || padding;
      case "s":
        return sLinkPadding || padding;
      case "m":
        return mLinkPadding || padding;
      case "sm":
        return smLinkPadding || padding;
      case "l":
        return lLinkPadding || padding;
      case "md":
        return mdLinkPadding || padding;
      case "tablet":
        return tabletLinkPadding || padding;
      case "tablet_sm":
        return tabletSmLinkPadding || padding;
      case "lg":
        return lgLinkPadding || padding;
      case "xl":
        return xlLinkPadding || padding;
      case "2xl":
        return twoXlLinkPadding || padding;
      case "3xl":
        return threeXlLinkPadding || padding;
      case "4xl":
        return fourXlLinkPadding || padding;
      case "5xl":
        return fiveXlLinkPadding || padding;
      case "6xl":
        return sixXlLinkPadding || padding;
      default:
        return padding;
    }
  };

  const getContactPadding = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsContactPadding || padding;
      case "xs":
        return xsContactPadding || padding;
      case "s":
        return sContactPadding || padding;
      case "m":
        return mContactPadding || padding;
      case "sm":
        return smContactPadding || padding;
      case "l":
        return lContactPadding || padding;
      case "md":
        return mdContactPadding || padding;
      case "tablet":
        return tabletContactPadding || padding;
      case "tablet_sm":
        return tabletSmContactPadding || padding;
      case "lg":
        return lgContactPadding || padding;
      case "xl":
        return xlContactPadding || padding;
      case "2xl":
        return twoXlContactPadding || padding;
      case "3xl":
        return threeXlContactPadding || padding;
      case "4xl":
        return fourXlContactPadding || padding;
      case "5xl":
        return fiveXlContactPadding || padding;
      case "6xl":
        return sixXlContactPadding || padding;
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
          flexDirection: "row",
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
                margin: getLinkMargin(),
                backgroundColor: hoverStates[index]
                  ? hoverBackgroundColor
                  : backgroundColor,
                fontSize: getLinkFontSize(),
                fontWeight: fontWeight,
                padding: getLinkPadding(),
                fontFamily: fontFamily,
                width: getLinkWidth(),
                height: getLinkHeight(),
                textDecoration: textDecoration,
                border: hoverStates[index] ? hoverBorder : border,
                borderRadius: getLinkBorderRadius(),
                color: hoverStates[index] ? hoverColor : color,
                cursor: "pointer",
                outline: "none",
                transition: transition,
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              role="button"
            />
          ))}
        </nav>
        <LinkButton
          href={contactHref}
          text={contactText}
          style={{
            scrollBehavior: "smooth",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: getContactMargin(),
            backgroundColor: isHovered
              ? hoverContactBackgroundColor
              : contactBackgroundColor,
            fontSize: getContactFontSize(),
            fontWeight: contactFontWeight,
            padding: getContactPadding(),
            fontFamily: contactFontFamily,
            width: getContactWidth(),
            height: getContactHeight(),
            textDecoration: contactTextDecoration,
            border: isHovered ? contactHoverBorder : contactBorder,
            borderRadius: getContactBorderRadius(),
            color: isHovered ? contactHoverColor : contactColor,
            cursor: "pointer",
            outline: "none",
            transition: contactTransition,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          role="button"
        />
      </div>
    </header>
  );
};
