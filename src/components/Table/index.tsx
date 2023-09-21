import React, { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from "react";
import Text from "../Text";
import styled from "@emotion/styled";
import palette from "../../theme/palette";
import TableItem from "./TableItem";

export interface HeadType {
  name: string;
  size: string;
  align?: "left" | "center" | "right";
}

interface PropsType extends HTMLAttributes<HTMLTableElement> {
  children: ReactNode | ReactNode[];
  width?: string;
  headTitle: HeadType[];
  hover?: boolean;
}

const Table = forwardRef(
  ({
     children,
     width = "100%",
     headTitle,
     ...props
   }: PropsType,
   ref: ForwardedRef<HTMLTableElement>) => {
    const existsData = (): boolean => !!(children && (children as ReactNode[]).length > 0);
  
  return (
    <TableLayout {...props} width={width} existsData={existsData()} ref={ref}>
      <TableHeadBox>
        {headTitle.map((h, index) => (
          <TableItem align={h.align} headWidth={h.size} key={index}>
            <Text typo="LABEL_SMALL" children={h.name} />
          </TableItem>
        ))}
      </TableHeadBox>
      <tbody>
        {existsData() ? (
          children
        ) : (
          <CenterRow>
            <Text typo="PARAGRAPH_SMALL">데이터가 없습니다!</Text>
          </CenterRow>
        )}
        </tbody>
      </TableLayout>
    );
  }
)

export default Table;

const TableLayout = styled.table<{
  width: string;
  hover?: boolean;
  existsData: boolean;
}>`
  width: ${({ width }) => width};
  border-spacing: 0;
  table-layout: fixed;
  border-radius: 8px;

  tbody > tr {
    cursor: ${({ hover, existsData }) => (existsData && hover ? "pointer" : "")};

    &:hover {
      background-color: ${({ hover }) => (hover ? palette.GRAY_20 : "")};
    }
  }
`;

const TableHeadBox = styled.tr`
  background-color: ${palette.GRAY_50};
`;

const CenterRow = styled.tr`
  padding: 64px 0;
  position: absolute;
  left: 50%;
  transform: translateX(50%);
`;
