import styled from "@emotion/styled";
import { ToggleStateType, getStateFromName, toggleState } from "../../../theme/state";
import { useState } from "react";
import palette from "../../../theme/palette";
import { css } from "@emotion/react";

interface ToggleProps {
  state: ToggleStateType;
}

interface ToggleStyleProps {
  state: ToggleStateType;
  behavior: boolean;
}

export const Toggle = (props: ToggleProps) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  return (
    <ToggleStyle behavior={isCheck} state={props.state} onClick={() => setIsCheck((prev) => !prev)}>
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
  ${({ state }) => getStateFromName(toggleState, state)}
`;

const Thumb = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  transform: translateX(2px);
  transition: transform 100ms ease-out 0s;
  background-color: ${palette.MONO_WHITE};
`;
