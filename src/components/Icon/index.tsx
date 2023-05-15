import React, { createElement } from "react";
import { IconNameType, IconSizeType, getIconComponentFromName } from "../../utils/stories";
import { iconSize } from "../../theme/size";
import styled from "@emotion/styled";
import { PaletteType, getColorFromName } from "../../theme/palette";

interface IconProps {
  iconName?: IconNameType;
  size?: IconSizeType;
  color?: PaletteType;
}

export const Icon = ({
  iconName = "ArrowBack",
  size = "MEDIUM",
  color = "MONO_BLACK",
}: IconProps) => {
  return (
    <IconStyle color={color} size={size}>
      {createElement(getIconComponentFromName(iconName))}
    </IconStyle>
  );
};

export const IconStyle = styled.div<{
  size: IconSizeType;
  color: PaletteType;
}>`
  display: flex;
  align-items: center;

  width: ${(props) => iconSize[props.size]}px;
  object-fit: contain;
  path {
    fill: ${({ color }) => getColorFromName(color)};
  }
`;
