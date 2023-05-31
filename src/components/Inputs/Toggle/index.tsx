import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import palette from "../../../theme/palette";
import { css } from "@emotion/react";

interface ToggleProps {
  isDiabled?: boolean;
}

interface ToggleStyleProps {
  isDiabled?: boolean;
  behavior: boolean;
}

export const Toggle = ({ isDiabled = false, ...props }: ToggleProps) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  return (
    <ToggleStyle
      behavior={isCheck}
      isDiabled={isDiabled}
      {...props}
      onClick={() => setIsCheck((prev) => !prev)}>
      <Thumb />
    </ToggleStyle>
  );
};

const ToggleStyle = styled.button<ToggleStyleProps>`
  display: flex;
  align-items: center;
  width: 52px;
  height: 32px;
  border-radius: 50px;
  background-color: ${palette.GRAY_100};
  cursor: pointer;

  ${({ behavior }) =>
    behavior &&
    css`
      background-color: ${palette.PRIMARY_400};
      span {
        transform: translateX(22px);
      }
    `}

  ${({ isDiabled }) =>
    isDiabled &&
    css`
      background-color: ${palette.GRAY_100};
      span {
        background-color: ${palette.GRAY_300};
      }
    `}
`;

const Thumb = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  transform: translateX(2px);
  transition: transform 100ms ease-out 0s;
  background-color: ${palette.MONO_WHITE};
`;

export default Toggle;
