import React from "react";
import styled from "@emotion/styled";
import { PaletteType, getColorFromName } from "../../theme/palette";
import Text from "../Text";

interface BadgeProps {
  text?: string;
  bgColor?: PaletteType;
  children?: any;
}

export const Badge = ({ text = "Default", bgColor = "GRAY_100", children }: BadgeProps) => {
  return (
    <BadgeStyle bgColor={bgColor}>
      {children}
      <Text textColor="MONO_WHITE" typo="LABEL_X_SMALL">
        {text}
      </Text>
    </BadgeStyle>
  );
};

export const BadgeStyle = styled.div<BadgeProps>`
  display: inline-flex;
  border-radius: 3rem;
  padding: 0.25rem 8px;
  column-gap: 0.25rem;
  align-items: center;
  background-color: ${(props) => getColorFromName(props.bgColor)};
`;

export default Badge;
