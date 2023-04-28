import React, { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import palette from "../../theme/palette";
import { PaletteType, TypoTitleType, getColorFromName, getTypoFromName } from "../../utils/stories";

export interface TextProps
  extends HTMLAttributes<HTMLSpanElement | HTMLHeadingElement | HTMLParagraphElement> {
  typo: TypoTitleType;
  textColor?: PaletteType;
}

const Text: React.FC<TextProps> = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

const StyledText = styled.span<TextProps>`
  display: inline-block;
  align-items: center;
  white-space: pre-wrap;

  ${({ typo }) => getTypoFromName(typo)}
  ${({ textColor }) =>
    css`
      color: ${getColorFromName(textColor) ?? palette.MONO_BLACK};
    `}
`;

export default Text;
