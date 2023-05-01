import { css } from "@emotion/react";

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
    padding: 0.6rem 0.9rem;
  `,
  MEDIUM: css`
    padding: 0.8rem 6.25rem;
  `,
  LARGE: css`
    padding: 1rem 6.25rem;
  `,
};

export const inputSize = {
  SMALL: css``,
};

export type IconSizeType = keyof typeof iconSize;
export type LogoSizeType = keyof typeof logoSize;
export type BtnSizeType = keyof typeof buttonSize;

export const getSizeFromName = (as: any, name: IconSizeType | LogoSizeType | BtnSizeType) => {
  return as[name];
};
