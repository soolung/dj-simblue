import { css } from "@emotion/react";
import * as Icons from "../theme/icon";
import { iconSize } from "../theme/size";

export type IconNameType = keyof typeof Icons;
export type IconSizeType = keyof typeof iconSize;

export const getIconComponentFromName = (iconName: IconNameType = "BSMLogo") => {
  return Icons[iconName];
};
