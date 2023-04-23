import React, { createElement } from "react";
import { IconNameType, IconSizeType, getIconComponentFromName } from "../../utils/stories";
import { iconSize } from "../../theme/size";

interface IconProps {
  iconName: IconNameType;
  size?: IconSizeType;
}

export const Icon = ({ iconName = "BSMLogo", size = "MEDIUM" }: IconProps) => {
  return (
    <div style={{ width: `${iconSize[size]}px`, objectFit: "contain" }}>
      {createElement(getIconComponentFromName(iconName))}
    </div>
  );
};
