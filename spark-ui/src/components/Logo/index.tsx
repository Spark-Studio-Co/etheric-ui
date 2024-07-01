import React, { useEffect, useState } from "react";
import { getBreakpoint } from "@/utils/getBreakpoint";

interface ILogoProps {
  logo: string;
  width?: string;
  height?: string;
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

export const Logo: React.FC<ILogoProps> = ({
  logo,
  width,
  height,
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
  return (
    <a href="/">
      <img
        src={logo}
        alt="Logo"
        style={{ width: getWidth(), height: getHeight() }}
      />
    </a>
  );
};
