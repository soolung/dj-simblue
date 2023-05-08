import styled from "@emotion/styled";
import { useState } from "react";
import { RadioStateType, getStateFromName, radioState } from "../../../theme/state";
import palette from "../../../theme/palette";

export const Radio = () => {
  const [isCheck, setIsCheck] = useState<RadioStateType>("UNCHECKED");

  return (
    <RadioStyle
      state={isCheck}
      onClick={() => setIsCheck((prev) => (prev === "CHECKED" ? "UNCHECKED" : "CHECKED"))}>
      <Circle />
    </RadioStyle>
  );
};

const RadioStyle = styled.button<{ state: RadioStateType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  cursor: pointer;
  ${({ state }) => getStateFromName(radioState, state)}
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: ${palette.PRIMARY_400};
`;
