import React, { createElement } from "react";
import {
  IconNameType,
  IconSizeType,
  PaletteType,
  getColorFromName,
  getIconComponentFromName,
} from "../../utils/stories";
import { iconSize } from "../../theme/size";
import styled from "@emotion/styled";

interface IconProps {
  iconName?: IconNameType;
  size?: IconSizeType;
  strokeColor?: PaletteType;
  fillColor?: PaletteType;
}

export const Icon = ({
  iconName = "BSMLogo",
  size = "MEDIUM",
  fillColor,
  strokeColor,
}: IconProps) => {
  return (
    <IconStyle
      size={size}
      strokeColor={getColorFromName(strokeColor)}
      fillColor={getColorFromName(fillColor)}>
      {createElement(getIconComponentFromName(iconName))}
    </IconStyle>
  );
};

export const IconStyle = styled.div<{
  size: IconSizeType;
  fillColor?: string;
  strokeColor?: string;
}>`
  display: flex;
  align-items: center;

  width: ${(props) => iconSize[props.size]}px;
  object-fit: contain;
  svg {
    path {
      stroke: ${(props) => props.strokeColor};
      fill: ${(props) => props.fillColor};
    }
  }
`;
