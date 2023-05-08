import { css } from "@emotion/react";
import palette from "./palette";

export const buttonState = {
  ENABLED: css`
    background-color: ${palette.PRIMARY_400};
  `,
  PRESSED: css`
    background-color: ${palette.PRIMARY_400};
    box-shadow: inset 999px 999px 4px rgba(255, 255, 255, 0.2);
  `,
  DISABLED: css`
    color: ${palette.GRAY_400};
    background-color: ${palette.GRAY_200};
  `,
};

export const toggleState = {
  ENABLED: css`
    span {
      background-color: ${palette.MONO_WHITE};
    }
  `,
  DISABLED: css`
    background-color: ${palette.GRAY_100};
    span {
      background-color: ${palette.GRAY_300};
    }
  `,
};

export const checkboxState = {
  CHECKED: css`
    background-color: ${palette.PRIMARY_400};
  `,
  UNCHECKED: css`
    background-color: ${palette.MONO_WHITE};
    border: 1px solid ${palette.GRAY_200};
  `,
};

export const radioState = {
  CHECKED: css`
    border: 1px solid ${palette.PRIMARY_400};
    div {
      display: block;
    }
  `,
  UNCHECKED: css`
    background-color: ${palette.MONO_WHITE};
    border: 1px solid ${palette.GRAY_200};
    div {
      display: none;
    }
  `,
};

export type BtnStateType = keyof typeof buttonState;
export type ToggleStateType = keyof typeof toggleState;
export type CheckboxStateType = keyof typeof checkboxState;
export type RadioStateType = keyof typeof radioState;

export const getStateFromName = (
  as: any,
  state: BtnStateType | ToggleStateType | CheckboxStateType | RadioStateType
) => {
  return as[state];
};
