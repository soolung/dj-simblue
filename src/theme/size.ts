import { css } from "@emotion/react";

const calcRem = (px: number) => `${px / 16}rem`;

export const logoSize = {
  DEFAULT: 94,
  MEDIUM: 256,
};

export const iconSize = {
  SMALL: 16,
  MEDIUM: 18,
  LARGE: 24,
};

export const buttonSize = {
  X_SMALL: css`
    padding: ${calcRem(10)} ${calcRem(15)};
  `,
  MEDIUM: css`
    padding: ${calcRem(14)} ${calcRem(110)};
  `,
  LARGE: css`
    padding: ${calcRem(16)} ${calcRem(110)};
  `,
};

export const inputSize = {
  SMALL: css`
    padding-top: ${calcRem(10)};
    padding-bottom: ${calcRem(10)};
  `,
  MEDIUM: css`
    padding-top: ${calcRem(12)};
    padding-bottom: ${calcRem(12)};
  `,
  LARGE: css`
    padding-top: ${calcRem(14)};
    padding-bottom: ${calcRem(14)};
  `,
};

export type IconSizeType = keyof typeof iconSize;
export type LogoSizeType = keyof typeof logoSize;
export type BtnSizeType = keyof typeof buttonSize;
export type InputSizeType = keyof typeof inputSize;

export const getSizeFromName = (as: any, name: IconSizeType | LogoSizeType | BtnSizeType) => {
  return as[name];
};
