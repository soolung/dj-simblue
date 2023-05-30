import React, { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import Text from "../Text";
import { BtnSizeType, buttonSize, getSizeFromName } from "../../theme/size";
import { css } from "@emotion/react";
import palette from "../../theme/palette";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size: BtnSizeType;
  isDisabled: boolean;
  text?: string;
}

export const Button = ({
  text = "button",
  size = "X_SMALL",
  isDisabled = false,
  children,
}: ButtonProps) => {
  return (
    <ButtonStyle size={size} isDisabled={isDisabled}>
      {children}
      <Text typo={`LABEL_${size}`}>{text}</Text>
    </ButtonStyle>
  );
};

export const ButtonStyle = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  border-radius: 0.4rem;
  color: white;
  gap: 0.625rem;
  background-color: ${palette.PRIMARY_400};

  ${({ size }) => getSizeFromName(buttonSize, size)}
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      color: ${palette.GRAY_400};
      background-color: ${palette.GRAY_200};
    `}

  &:active {
    box-shadow: inset 999px 999px 4px rgba(255, 255, 255, 0.2);
  }
`;

export default Button;
