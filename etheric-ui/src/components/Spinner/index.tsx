import React, { useEffect, useRef } from "react";

interface ResponsiveProperties {
  width?: string;
  height?: string;
}

type CombinedAttributes = React.HTMLAttributes<HTMLDivElement> &
  React.CSSProperties;

interface ISpinnerProps extends CombinedAttributes {
  backgroundColor?: string;
  size?: string; // to set the size of the spinner
  color?: string; // to set the color of the spinner
  id?: string;
}

const addKeyframes = () => {
  const styleSheet = document.styleSheets[0];
  const keyframes = `@keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }`;

  if (styleSheet) {
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }
};

export const Spinner: React.FC<ISpinnerProps> = ({
  backgroundColor = "transparent",
  size,
  color,
  id,
  ...rest
}) => {
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addKeyframes();
    if (spinnerRef.current) {
      spinnerRef.current.style.animation = "spin 1s linear infinite";
    }
  }, []);

  const spinnerStyle: React.CSSProperties = {
    display: "inline-block",
    width: size,
    height: size,
    border: `4px solid rgba(0, 0, 0, 0.1)`,
    borderLeftColor: color,
    borderRadius: "50%",
    backgroundColor,
  };

  return (
    <div id={id} ref={spinnerRef} style={spinnerStyle} {...rest}>
      {/* Hidden text for accessibility */}
    </div>
  );
};

export default Spinner;
