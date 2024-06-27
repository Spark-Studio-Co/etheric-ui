import React from "react";

interface IMessage {
  message: string;
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  margin?: string;
  animation?: string;
  id?: string;
}

export const ErrorDisplay: React.FC<IMessage> = ({
  message,
  color,
  fontSize,
  fontWeight,
  id,
  margin,
  animation,
}) => {
  if (!message) return null;

  return (
    <div id={id} style={{ color, fontWeight, fontSize, margin, animation }}>
      {message}
    </div>
  );
};
