import React, { HTMLAttributes } from "react";
import {
  BtnSizeType,
  BtnStateType,
  getBtnSizeFromName,
  getBtnStateFromName,
} from "../../utils/stories";
import styled from "@emotion/styled";
import Text from "../Text";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: BtnSizeType;
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
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  color: white;
  gap: 0.625rem;
  ${({ size }) => getBtnSizeFromName(size)}
  ${({ state }) => getBtnStateFromName(state)}
`;
