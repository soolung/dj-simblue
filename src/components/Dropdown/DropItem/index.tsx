import React, { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import palette from "../../../theme/palette";
import { css } from "@emotion/react";
import { optionItem } from "../type";
import Text from "../../Text";

interface DropItemProps extends HTMLAttributes<HTMLDivElement> {
  dropItem: optionItem;
}

export const DropItem = (props: DropItemProps) => {
  return (
    <OptionItem {...props} state={props.dropItem.state}>
      <Text
        textColor={props.dropItem.state === "DISABLED" ? "GRAY_300" : "MONO_BLACK"}
        typo="PARAGRAPH_SMALL">
        {props.dropItem.name}
      </Text>
    </OptionItem>
  );
};

const OptionItem = styled.div<{ state: "ENABLED" | "DISABLED" }>`
  border-radius: 0.75rem;
  padding: 0.5rem 1rem;

  ${({ state }) =>
    state === "ENABLED" &&
    css`
      cursor: pointer;
      &:hover {
        background-color: ${palette.GRAY_50};
      }
      &:active {
        background-color: ${palette.GRAY_100};
      }
    `}
`;
