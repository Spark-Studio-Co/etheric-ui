import React from "react";

interface IMessage {
  message: string;
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  margin?: string;
  animation?: string;
}

export const ErrorDisplay: React.FC<IMessage> = ({
  message,
  color,
  fontSize,
  fontWeight,
  margin,
  animation,
}) => {
  if (!message) return null;

  return (
    <div style={{ color, fontWeight, fontSize, margin, animation }}>
      {message}
    </div>
  );
};
