import React, { createElement } from "react";
import { IconNameType, IconSizeType, getIconComponentFromName } from "../../utils/stories";
import { iconSize } from "../../theme/size";
import styled from "@emotion/styled";

interface IconProps {
  iconName?: IconNameType;
  size?: IconSizeType;
}

export const Icon = ({ iconName = "BSMLogo", size = "MEDIUM" }: IconProps) => {
  return <IconStyle size={size}>{createElement(getIconComponentFromName(iconName))}</IconStyle>;
};

export const IconStyle = styled.div<{
  size: IconSizeType;
}>`
  display: flex;
  align-items: center;

  width: ${(props) => iconSize[props.size]}px;
  object-fit: contain;
`;
