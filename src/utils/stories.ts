import * as Icons from "../theme/icon";
import palette from "../theme/palette";
import logoSize, { iconSize } from "../theme/size";

export type IconNameType = keyof typeof Icons;
export type IconSizeType = keyof typeof iconSize;
export type PaletteType = keyof typeof palette;
export type LogoSizeType = keyof typeof logoSize;

export const iconNames = [...(Object.keys(Icons) as IconNameType[])];

export const isIconName = (value: string): value is IconNameType =>
  Object.keys(Icons).includes(value);

export const getIconComponentFromName = (iconName: IconNameType) => {
  return Icons[iconName];
};

export const getColorFromName = (colorName: PaletteType = "NONE") => {
  return palette[colorName];
};

export const getLogoSizeFromName = (size: LogoSizeType = "DEFAULT") => {
  return logoSize[size];
};
