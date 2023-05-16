import styled from "@emotion/styled";
import palette from "../../theme/palette";
import { css } from "@emotion/react";

export const PickerStyle = styled.div`
  position: absolute;
  z-index: 3;
  width: 18.375rem;
  padding: 1rem 0.7rem;
  background-color: ${palette.MONO_WHITE};
  box-shadow: 0px 0.25rem 1rem rgba(0, 0, 0, 0.12);
  border-radius: 0.75rem;
`;

export const Head = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 1.875rem;
`;

export const HeadNow = styled.div`
  display: flex;
  gap: 0.75rem;
  cursor: pointer;
`;

export const HeadPicker = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const TableRows = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2.625rem 2.625rem 2.625rem 2.625rem 2.625rem 2.625rem 2.625rem;
`;

export const HeadRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6rem;
  aspect-ratio: 1/1;
  cursor: pointer;
`;

export const TableRow = styled(HeadRow)<{ isSelected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6rem;
  aspect-ratio: 1/1;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${palette.PRIMARY_400};
    `}

  &:hover {
    border: 1px solid ${palette.PRIMARY_400};
  }

  &:active {
    border: 1px solid ${palette.PRIMARY_400};
    background-color: ${palette.PRIMARY_100};
  }
`;

export const Rows = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const Row = styled.div<{ isSelected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 1.25rem 1.875rem;
  border: 1.5px solid ${palette.GRAY_50};

  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1.5px solid ${palette.PRIMARY_400};
      background-color: ${palette.PRIMARY_400};
    `}

  &:hover {
    border: 1.5px solid ${palette.PRIMARY_400};
  }

  &:active {
    border: 1px solid ${palette.PRIMARY_400};
    background-color: ${palette.PRIMARY_100};
  }
`;
