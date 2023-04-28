import { buttonState } from "../theme/button";
import * as Icons from "../theme/icon";
import palette from "../theme/palette";
import logoSize, { buttonSize, iconSize } from "../theme/size";
import typo from "../theme/typo";

export type IconNameType = keyof typeof Icons;
export type IconSizeType = keyof typeof iconSize;
export type PaletteType = keyof typeof palette;
export type LogoSizeType = keyof typeof logoSize;
export type TypoTitleType = keyof typeof typo;
export type BtnSizeType = keyof typeof buttonSize;
export type BtnStateType = keyof typeof buttonState;

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

export const getTypoFromName = (typoName: TypoTitleType) => {
  return typo[typoName];
};

export const getBtnSizeFromName = (sizeName: BtnSizeType = "MEDIUM") => {
  return buttonSize[sizeName];
};

export const getBtnStateFromName = (state: BtnStateType) => {
  return buttonState[state];
};
