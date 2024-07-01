import React, { useState } from "react";
import { getBreakpoint } from "@/utils/getBreakpoint";
import useWindowSize from "../useWindowSize";

interface IMiniText extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  margin?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  animation?: string;
  transition?: string;
  color?: string;
  hoverColor?: string;
  id?: string;
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
}

export const MiniText: React.FC<IMiniText> = ({
  text,
  margin,
  fontFamily,
  fontSize,
  fontWeight,
  animation,
  transition,
  id,
  color,
  hoverColor,
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
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { width: windowWidth } = useWindowSize();

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

  return (
    <span
      id={id}
      style={{
        margin: getMargin(),
        fontFamily,
        fontSize: getFontSize(),
        fontWeight,
        animation,
        transition,
        cursor: "pointer",
        color: isHovered ? hoverColor : color,
      }}
      {...rest}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </span>
  );
};
