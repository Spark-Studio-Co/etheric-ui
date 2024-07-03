import React, { useContext } from "react";

interface StyleTypes {
  contactlinkbutton: React.CSSProperties;
  header: React.CSSProperties;
  nav: React.CSSProperties;
  content: React.CSSProperties;
  navlinkbutton: React.CSSProperties;
  defaultbutton: React.CSSProperties;
  iconbutton: React.CSSProperties;
  defaultinput: React.CSSProperties;
  mergeStyles?: (customStyles: Partial<StyleTypes>) => StyleTypes;
}

const defaultStyles: StyleTypes = {
  contactlinkbutton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    outline: "none",
    scrollBehavior: "smooth",
  },
  navlinkbutton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    outline: "none",
    scrollBehavior: "smooth",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
  },
  defaultbutton: {
    cursor: "pointer",
    outline: "none",
  },
  iconbutton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    outline: "none",
  },
  defaultinput: {
    cursor: "text",
    outline: "none",
  },
  mergeStyles: (customStyles) => {
    return {
      ...defaultStyles,
      ...customStyles,
    };
  },
};

const StyleContext = React.createContext(defaultStyles);

export function useStyle(customStyles: Partial<StyleTypes> = {}) {
  const styles = useContext(StyleContext);
  return styles.mergeStyles ? styles.mergeStyles(customStyles) : styles;
}

export default StyleContext;
