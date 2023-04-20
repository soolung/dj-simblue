import React, { HTMLAttributes } from "react";
import { EColorMap } from "../../utils/colorMap";
import { TFontSize } from "../..";

export interface ITextProps
  extends HTMLAttributes<HTMLDivElement | HTMLSpanElement | HTMLHeadingElement> {
  textColor?: EColorMap;
  className?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "block" | "inline";
  weight?: "light" | "regular" | "medium" | "bold";
  lineHeight?: "narrow" | "wide";
  size?: TFontSize;
  align?: "start" | "center" | "end";
}

export const Text: React.FC<ITextProps> = ({
  className,
  children,
  variant = "block",
  weight,
  lineHeight,
  size,
  align,
  textColor,
  ...props
}) => {
  return <div>index</div>;
};
