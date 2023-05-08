import styled from "@emotion/styled";
import { useState } from "react";
import { CheckboxStateType, checkboxState, getStateFromName } from "../../../theme/state";
import { Icon } from "../../Icon";

export const Checkbox = () => {
  const [isCheck, setIsCheck] = useState<CheckboxStateType>("CHECKED");

  return (
    <CheckboxStyle
      state={isCheck}
      onClick={() => setIsCheck((prev) => (prev === "CHECKED" ? "UNCHECKED" : "CHECKED"))}>
      <Icon iconName="Check" />
    </CheckboxStyle>
  );
};

const CheckboxStyle = styled.button<{ state: CheckboxStateType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.2s;
  ${({ state }) => getStateFromName(checkboxState, state)}
`;
