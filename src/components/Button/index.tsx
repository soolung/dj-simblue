import React, { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import Text from "../Text";
import { BtnSizeType, buttonSize, getSizeFromName } from "../../theme/size";
import { BtnStateType, buttonState, getStateFromName } from "../../theme/state";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size: BtnSizeType;
  state: BtnStateType;
  text?: string;
}

export const Button = ({
  text = "button",
  size = "X_SMALL",
  state = "ENABLED",
  children,
}: ButtonProps) => {
  return (
    <ButtonStyle size={size} state={state}>
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
  ${({ size }) => getSizeFromName(buttonSize, size)}
  ${({ state }) => getStateFromName(buttonState, state)}

  &:active {
    box-shadow: inset 999px 999px 4px rgba(255, 255, 255, 0.2);
  }
`;
