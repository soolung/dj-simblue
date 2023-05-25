import React, { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import palette from "../../../theme/palette";
import typo from "../../../theme/typo";
import { Icon } from "../../Icon";

interface SearchProps extends HTMLAttributes<HTMLInputElement> {
  hintText?: string;
}

export const SearchPerson = (props: SearchProps) => {
  return (
    <SearchBox>
      <SearchStyle {...props} placeholder={props.hintText}></SearchStyle>
      <Icon iconName="Search" color="GRAY_900" size="SMALL" />
    </SearchBox>
  );
};

const SearchBox = styled.div`
  display: flex;
  position: relative;
  width: 13.5rem;
  height: 1.25rem;
  align-items: center;
  svg {
    width: 1.25rem;
    right: 2rem;
    position: absolute;
  }
`;

const SearchStyle = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.5rem 3rem 0.5rem 1rem;
  background-color: ${palette.GRAY_50};
  border: none;
  border-radius: 0.5rem;
  ${typo.PARAGRAPH_SMALL}
  &::placeholder {
    color: ${palette.GRAY_500};
  }
`;

export default SearchPerson;
