import React, { HTMLAttributes, useState } from "react";
import styled from "@emotion/styled";
import palette from "../../../theme/palette";
import typo from "../../../theme/typo";
import { Icon } from "../../Icon";

interface SearchProps extends HTMLAttributes<HTMLInputElement> {
  hintText?: string;
}

export const Search = (props: SearchProps) => {
  const [text, setText] = useState("");

  return (
    <SearchBox>
      <SearchStyle
        onChange={(e) => setText(e.target.value)}
        {...props}
        placeholder={props.hintText}
        value={text}></SearchStyle>
      <Icon iconName="Search" color="GRAY_900" size="SMALL" />
      {text !== "" && (
        <DeleteBtn onClick={() => setText("")}>
          <Icon iconName="Close" color="GRAY_400" />
        </DeleteBtn>
      )}
    </SearchBox>
  );
};

const DeleteBtn = styled.button`
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  right: 3rem;
`;

const SearchBox = styled.div`
  display: flex;
  position: relative;
  width: 24.125rem;
  align-items: center;

  svg {
    position: absolute;
    width: 1.25rem;
    left: 1rem;
  }
`;

const SearchStyle = styled.input`
  width: 100%;
  padding: 0.5rem 3rem;
  background-color: ${palette.GRAY_50};
  border: none;
  border-radius: 2rem;
  ${typo.PARAGRAPH_SMALL}

  &::placeholder {
    color: ${palette.GRAY_500};
  }
`;

export default Search;
