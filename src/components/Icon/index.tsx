import React, { HTMLAttributes, createElement } from "react";
import { IconNameType, IconSizeType, getIconComponentFromName } from "../../utils/stories";
import { iconSize } from "../../theme/size";
import styled from "@emotion/styled";
import { PaletteType, getColorFromName } from "../../theme/palette";

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  iconName?: IconNameType;
  size?: IconSizeType;
  color?: PaletteType;
}

export const Icon = ({ iconName = "ArrowBack", size = "MEDIUM", ...props }: IconProps) => {
  return (
    <IconStyle {...props} size={size}>
      {createElement(getIconComponentFromName(iconName))}
    </IconStyle>
  );
};

export const IconStyle = styled.div<{
  size: IconSizeType;
  color?: PaletteType;
}>`
  display: flex;
  align-items: center;

  width: ${({ size }) => iconSize[size]}px;
  object-fit: contain;
  path {
    fill: ${({ color }) => color && getColorFromName(color)};
  }
`;

export default Icon;
