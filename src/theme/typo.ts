import { css } from "@emotion/react";

const calcRem = (px: number) => `${px / 16}rem`;

const typo = {
  DISPLAY_LARGE: css`
    font-size: ${calcRem(96)};
    line-height: ${calcRem(112)};
    font-weight: 500;
  `,
  DISPLAY_MEDIUM: css`
    font-size: ${calcRem(52)};
    line-height: ${calcRem(64)};
    font-weight: 500;
  `,
  DISPLAY_SMALL: css`
    font-size: ${calcRem(44)};
    line-height: ${calcRem(52)};
    font-weight: 500;
  `,
  DISPLAY_X_SMALL: css`
    font-size: ${calcRem(36)};
    line-height: ${calcRem(44)};
    font-weight: 500;
  `,
  HEADING_XX_LARGE: css`
    font-size: ${calcRem(40)};
    line-height: ${calcRem(52)};
    font-weight: 500;
  `,
  HEADING_X_LARGE: css`
    font-size: ${calcRem(36)};
    line-height: ${calcRem(44)};
    font-weight: 500;
  `,
  HEADING_LARGE: css`
    font-size: ${calcRem(32)};
    line-height: ${calcRem(40)};
    font-weight: 500;
  `,
  HEADING_MEDIUM: css`
    font-size: ${calcRem(28)};
    line-height: ${calcRem(36)};
    font-weight: 500;
  `,
  HEADING_SMALL: css`
    font-size: ${calcRem(24)};
    line-height: ${calcRem(32)};
    font-weight: 500;
  `,
  HEADING_X_SMALL: css`
    font-size: ${calcRem(20)};
    line-height: ${calcRem(28)};
    font-weight: 500;
  `,
  LABEL_LARGE: css`
    font-size: ${calcRem(18)};
    line-height: ${calcRem(24)};
    font-weight: 500;
  `,
  LABEL_MEDIUM: css`
    font-size: ${calcRem(16)};
    line-height: ${calcRem(20)};
    font-weight: 500;
  `,
  LABEL_SMALL: css`
    font-size: ${calcRem(14)};
    line-height: ${calcRem(16)};
    font-weight: 500;
  `,
  LABEL_X_SMALL: css`
    font-size: ${calcRem(12)};
    line-height: ${calcRem(16)};
    font-weight: 500;
  `,
  PARAGRAPH_LARGE: css`
    font-size: ${calcRem(18)};
    line-height: ${calcRem(28)};
    font-weight: 400;
  `,
  PARAGRAPH_MEDIUM: css`
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    font-weight: 400;
  `,
  PARAGRAPH_SMALL: css`
    font-size: ${calcRem(14)};
    line-height: ${calcRem(20)};
    font-weight: 400;
  `,
  PARAGRAPH_X_SMALL: css`
    font-size: ${calcRem(12)};
    line-height: ${calcRem(20)};
    font-weight: 400;
  `,
};

export default typo;
