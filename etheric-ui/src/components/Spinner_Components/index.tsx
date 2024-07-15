import React from "react";

interface ResponsiveProperties {
  width?: string;
  height?: string;
}

type CombinedAttributes = React.HTMLAttributes<HTMLDivElement> &
  React.CSSProperties;

interface ISpinnerProps extends CombinedAttributes {
  backgroundColor?: string;
  id?: string;
}

export const Spinner_Components: React.FC<ISpinnerProps> = () => {
  return <div>index</div>;
};
