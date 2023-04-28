import React, { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { SerializedStyles, css } from "@emotion/react";
import palette from "../../theme/palette";

export interface TextProps
  extends HTMLAttributes<HTMLSpanElement | HTMLHeadingElement | HTMLParagraphElement> {
  typo: SerializedStyles;
  display?: "block";
  textColor?: string;
  align?: "start" | "center" | "end";
}

const Text: React.FC<TextProps> = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

const StyledText = styled.span<TextProps>`
  display: flex;
  align-items: center;
  white-space: pre-wrap;

  ${({ typo }) => typo}
  ${({ textColor }) =>
    css`
      color: ${textColor ?? palette.MONO_BLACK};
    `}
  ${({ display }) =>
    css`
      display: ${display};
    `}
`;

export default Text;
