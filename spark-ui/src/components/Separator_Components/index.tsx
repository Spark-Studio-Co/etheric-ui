import React from "react";
import { getBreakpoint } from "@/utils/getBreakpoint";
import useWindowSize from "../useWindowSize";

interface IHorizontalSeparatorProps {
  width: string;
  height: string;
  background?: string;
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
  margin?: string;
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
}

export const HorizontalSeparator: React.FC<IHorizontalSeparatorProps> = ({
  width,
  height,
  background = "black",
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
  margin,
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
}) => {
  const { width: windowWidth } = useWindowSize();

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

  return (
    <hr
      style={{
        margin: getMargin(),
        width: getWidth(),
        height: getHeight(),
        background,
        border: "none",
      }}
    />
  );
};
