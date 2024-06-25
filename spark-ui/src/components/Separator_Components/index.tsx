import React from "react";

interface IHorizontalSeparatorProps {
  width: string;
  height: string;
  background?: string;
}

export const HorizontalSeparator: React.FC<IHorizontalSeparatorProps> = ({
  width,
  height,
  background = "black",
}) => {
  return (
    <hr
      style={{
        width,
        height,
        background,
        border: "none",
      }}
    />
  );
};
