import React from "react";
import Text from "../Text";
import { Icon } from "../Icon";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import palette from "../../theme/palette";
import { optionItem } from "./type";

interface DropdownProps {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: optionItem;
  children: React.ReactNode;
}

export const Dropdown = ({ ...props }: DropdownProps) => {
  return (
    <DropdownStyle {...props}>
      <DropdownHead isClicked={props.isClicked} onClick={() => props.setIsClicked((prev) => !prev)}>
        <Text typo="PARAGRAPH_SMALL" textColor="GRAY_700">
          {props.selectedItem.name}
        </Text>
        <Icon iconName="ArrowDown" color="GRAY_600" />
      </DropdownHead>
      {props.isClicked && <Content>{props.children}</Content>}
    </DropdownStyle>
  );
};

const DropdownStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.75rem;
`;

const DropdownHead = styled.div<{ isClicked: boolean }>`
  display: flex;
  justify-content: space-between;
  svg {
    transition: transform 300ms ease-out 0s;
    ${({ isClicked }) =>
      isClicked &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

const Content = styled.div`
  width: 100%;
  background-color: ${palette.MONO_WHITE};
  border-radius: 0.75rem;
  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.12));
`;

export default Dropdown;
