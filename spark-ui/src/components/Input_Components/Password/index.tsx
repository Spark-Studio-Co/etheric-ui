import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import s from "./styles.module.scss";
import { getBreakpoint } from "@/utils/getBreakpoint";

interface IPasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fontSize?: string;
  color?: string;
  bottom?: string;
  right?: string;
  margin?: string;
  placeholder?: string;
  id?: string;
  padding?: string;
  backgroundColor?: string;
  fontWeight?: string;
  fontFamily?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  border?: string;
  inputType?: "borderBottom";
  focusBackgroundColor?: string;
  focusColor?: string;
  focusBorder?: string;
  transition?: string;
  placeholderColor?: string;
  focusPlaceholderColor?: string;
  focusBorderBottomColor?: string;
  borderBottomColor?: string;
  iconFontSize?: string;
  iconColor?: string;
  iconHoverColor?: string;
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
  top?: string;
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
  fiveXlRight?: string;
  sixXlRight?: string;
}

export const PasswordInput: React.FC<IPasswordProps> = ({
  fontSize,
  color,
  bottom,
  right,
  margin,
  placeholder,
  id,
  padding,
  backgroundColor,
  fontWeight,
  fontFamily,
  width,
  height,
  borderRadius,
  border,
  inputType,
  focusBackgroundColor,
  focusColor,
  focusBorder,
  transition,
  placeholderColor,
  focusPlaceholderColor,
  focusBorderBottomColor,
  borderBottomColor,
  iconFontSize,
  iconColor,
  iconHoverColor,
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
  top,
  left,
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
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
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

  const getTop = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsTop || top;
      case "xs":
        return xsTop || top;
      case "s":
        return sTop || top;
      case "m":
        return mTop || top;
      case "sm":
        return smTop || top;
      case "l":
        return lTop || top;
      case "md":
        return mdTop || top;
      case "tablet":
        return tabletTop || top;
      case "tablet_sm":
        return tabletSmTop || top;
      case "lg":
        return lgTop || top;
      case "xl":
        return xlTop || top;
      case "2xl":
        return twoXlTop || top;
      case "3xl":
        return threeXlTop || top;
      case "4xl":
        return fourXlTop || top;
      case "5xl":
        return fiveXlTop || top;
      case "6xl":
        return sixXlTop || top;
      default:
        return top;
    }
  };

  const getLeft = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsLeft || left;
      case "xs":
        return xsLeft || left;
      case "s":
        return sLeft || left;
      case "m":
        return mLeft || left;
      case "sm":
        return smLeft || left;
      case "l":
        return lLeft || left;
      case "md":
        return mdLeft || left;
      case "tablet":
        return tabletLeft || left;
      case "tablet_sm":
        return tabletSmLeft || left;
      case "lg":
        return lgLeft || left;
      case "xl":
        return xlLeft || left;
      case "2xl":
        return twoXlLeft || left;
      case "3xl":
        return threeXlLeft || left;
      case "4xl":
        return fourXlLeft || left;
      case "5xl":
        return fiveXlLeft || left;
      case "6xl":
        return sixXlLeft || left;
      default:
        return left;
    }
  };

  const getBottom = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsBottom || bottom;
      case "xs":
        return xsBottom || bottom;
      case "s":
        return sBottom || bottom;
      case "m":
        return mBottom || bottom;
      case "sm":
        return smBottom || bottom;
      case "l":
        return lBottom || bottom;
      case "md":
        return mdBottom || bottom;
      case "tablet":
        return tabletBottom || bottom;
      case "tablet_sm":
        return tabletSmBottom || bottom;
      case "lg":
        return lgBottom || bottom;
      case "xl":
        return xlBottom || bottom;
      case "2xl":
        return twoXlBottom || bottom;
      case "3xl":
        return threeXlBottom || bottom;
      case "4xl":
        return fourXlBottom || bottom;
      case "5xl":
        return fiveXlBottom || bottom;
      case "6xl":
        return sixXlBottom || bottom;
      default:
        return bottom;
    }
  };

  const getRight = () => {
    const breakpoint = getBreakpoint(windowWidth);
    switch (breakpoint) {
      case "xxs":
        return xxsRight || right;
      case "xs":
        return xsRight || right;
      case "s":
        return sRight || right;
      case "m":
        return mRight || right;
      case "sm":
        return smRight || right;
      case "l":
        return lRight || right;
      case "md":
        return mdRight || right;
      case "tablet":
        return tabletRight || right;
      case "tablet_sm":
        return tabletSmRight || right;
      case "lg":
        return lgRight || right;
      case "xl":
        return xlRight || right;
      case "2xl":
        return twoXlRight || right;
      case "3xl":
        return threeXlRight || right;
      case "4xl":
        return fourXlRight || right;
      case "5xl":
        return fiveXlRight || right;
      case "6xl":
        return sixXlRight || right;
      default:
        return right;
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

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [styles]);

  const inputClass = `default-input ${isFocused ? "focused" : ""} ${s.input} ${
    s[`input--${inputType}`]
  } ${inputType === "borderBottom" ? s.borderBottom : ""}`;

  const inputStyle: React.CSSProperties = {
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
  };

  const iconStyle: React.CSSProperties = {
    position: "absolute",
    bottom: getBottom(),
    right: getRight(),
    top: getTop(),
    left: getLeft(),
    fontSize: getIconFontSize(),
    color: isHovered ? iconHoverColor : iconColor || color,
    cursor: "pointer",
    transition,
  };

  return (
    <div className={s.input_container} style={{ position: "relative" }}>
      <input
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        id={id}
        className={inputClass}
        style={inputStyle}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
        required
      />
      <div
        onClick={() => setVisible(!visible)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={s.show_password}
        style={iconStyle}
      >
        <FontAwesomeIcon icon={visible ? faEye : faEyeSlash} />
      </div>
    </div>
  );
};
