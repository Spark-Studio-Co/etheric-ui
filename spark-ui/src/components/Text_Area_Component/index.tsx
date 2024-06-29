import React, { useState, useEffect } from "react";
import { getBreakpoint } from "@/utils/getBreakpoint";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  margin?: string;
  placeholder: string;
  fontSize?: string;
  fontFamily?: string;
  width?: string;
  height?: string;
  textAlign?: any;
  background?: string;
  border?: string;
  padding?: string;
  borderRadius?: string;
  color?: string;
  id?: string;
  focusBorder?: string;
  placeholderColor?: string;
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
}

export const TextArea: React.FC<TextAreaProps> = ({
  margin,
  placeholder,
  fontSize,
  fontFamily,
  width,
  height,
  textAlign,
  background,
  id,
  border,
  padding,
  borderRadius,
  color,
  focusBorder,
  placeholderColor,
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [placeholderStyles, setPlaceholderStyles] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

 // Include other dependencies as needed


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

  useEffect(() => {
    const updateStyles = () => {
      const newFontSize = getResponsiveValue(
        xxsFontSize, xsFontSize, sFontSize, mFontSize, smFontSize,
        lFontSize, mdFontSize, tabletFontSize, tabletSmFontSize,
        lgFontSize, xlFontSize, twoXlFontSize, threeXlFontSize,
        fourXlFontSize, fiveXlFontSize, sixXlFontSize, fontSize
      );
      
      const updatedStyles = `
        #${id}::placeholder {
          color: ${placeholderColor};
          font-size: ${newFontSize};
        }
      `;
      setPlaceholderStyles(updatedStyles);
    };
  
    updateStyles(); // Call initially and on resize
    window.addEventListener("resize", updateStyles);
    return () => {
      window.removeEventListener("resize", updateStyles);
    };
  }, [
    windowWidth, placeholderColor, id, xxsFontSize, xsFontSize, sFontSize,
    mFontSize, smFontSize, lFontSize, mdFontSize, tabletFontSize,
    tabletSmFontSize, lgFontSize, xlFontSize, twoXlFontSize, threeXlFontSize,
    fourXlFontSize, fiveXlFontSize, sixXlFontSize, fontSize
  ]);

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



  return (
    <>
    <style>
      {placeholderStyles}
    </style>
    <textarea
      id={id}
      style={{
        margin: getMargin(),
        fontSize: getFontSize(),
        fontFamily,
        width: getWidth(),
        height: getHeight(),
        textAlign,
        background,
        border: isFocused ? focusBorder : border,
        padding: getPadding(),
        borderRadius: getBorderRadius(),
        overflow: "hidden",
        outline: "none",
        color,
      }}
      placeholder={placeholder}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      required
      {...rest}
      className="custom-textarea"
    />
    </>
  );
};
