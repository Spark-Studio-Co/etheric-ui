import React, { useState } from "react";
import s from "./styles.module.scss";
import { getBreakpoint } from "@/utils/getBreakpoint";
import useWindowSize from "@/components/useWindowSize";

interface IDefaultInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  border?: string;
  color?: string;
  focusBackgroundColor?: string;
  focusColor?: string;
  focusBorder?: string;
  transition?: string;
  placeholderColor?: string;
  focusPlaceholderColor?: string;
  focusBorderBottomColor?: string;
  borderBottomColor?: string;
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
  inputType?: "borderBottom";
}

export const DefaultInput: React.FC<IDefaultInputProps> = ({
  placeholder,
  id,
  margin,
  padding,
  backgroundColor,
  fontSize,
  fontWeight,
  focusBorderBottomColor,
  borderBottomColor,
  height,
  borderRadius,
  border,
  color,
  width,
  fontFamily,
  focusBackgroundColor = "transparent",
  focusColor,
  focusBorder,
  transition,
  inputType,
  placeholderColor,
  focusPlaceholderColor,
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
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const { width: windowWidth } = useWindowSize();

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

  const styles = `
    .default-input::placeholder {
      color: ${placeholderColor};
      font-size: ${getFontSize()};
    }
    .default-input.focused::placeholder {
      color: ${focusPlaceholderColor};
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  const inputClass = `${s.input} ${s[`input--${inputType}`]}`;

  return (
    <input
      placeholder={placeholder}
      id={id}
      className={`default-input ${isFocused ? "focused" : ""} ${inputClass}`}
      style={{
        margin: getMargin(),
        padding: getPadding(),
        backgroundColor: isFocused ? focusBackgroundColor : backgroundColor,
        fontSize: getFontSize(),
        fontWeight,
        fontFamily,
        width: getWidth(),
        height: getHeight(),
        border:
          inputType !== "borderBottom"
            ? isFocused
              ? focusBorder
              : border
            : undefined,
        borderBottom:
          inputType === "borderBottom"
            ? `${isFocused ? focusBorderBottomColor : borderBottomColor}`
            : undefined,
        borderRadius: getBorderRadius(),
        color: isFocused ? focusColor : color,
        cursor: "text",
        transition,
        outline: "none",
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...rest}
      required
    />
  );
};
