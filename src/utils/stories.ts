import * as Icons from "../theme/icon";
import { iconSize } from "../theme/size";

export type IconNameType = keyof typeof Icons;
export type IconSizeType = keyof typeof iconSize;

export const iconNames = [...(Object.keys(Icons) as IconNameType[])];

export const isIconName = (value: string): value is IconNameType =>
  Object.keys(Icons).includes(value);

export function getIconComponentFromName(iconName: IconNameType) {
  return Icons[iconName];
}
