import React, { HTMLAttributes, ReactNode } from "react";
import Text from "../Text";
import styled from "@emotion/styled";
import palette from "../../theme/palette";

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

export const Table = ({ children, width = "100%", headTitle, ...props }: PropsType) => {
  const existsData = (): boolean => !!(children && (children as ReactNode[]).length > 0);

  return (
    <TableLayout {...props} width={width} existsData={existsData()}>
      <TableHeadBox>
        <tr>
          {headTitle.map((h, index) => (
            <TableItem align={h.align} headWidth={h.size} key={index}>
              <Text typo="LABEL_SMALL" children={h.name} />
            </TableItem>
          ))}
        </tr>
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
};

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

const TableHeadBox = styled.thead`
  background-color: ${palette.GRAY_50};
`;

export const TableItem = styled.td<{ headWidth?: string; align?: "left" | "center" | "right" }>`
  width: ${({ headWidth, align }) => {
    if (headWidth === "small") return "10%";
    if (headWidth === "medium") return "30%";
    if (align === "left" || align === "right") return "calc(40% - 30px)";

    return "40%";
  }};
  height: 55px;
  border-top: ${({ headWidth }) => (headWidth ? `1px solid ${palette.GRAY_100}` : "")};
  border-bottom: 1px solid ${palette.GRAY_100};
  padding-left: ${({ align }) => (align === "left" ? "30px" : "")};
  padding-right: ${({ align }) => (align === "right" ? "30px" : "")};
  text-align: ${({ align }) => (align === undefined ? "center" : align)};

  img {
    object-fit: contain;
    height: 30px;
  }
`;

const CenterRow = styled.tr`
  padding: 64px 0;
  position: absolute;
  left: 50%;
  transform: translateX(50%);
`;

export const TableRow = styled.tr<{
  checked?: boolean;
}>`
  background-color: ${({ checked }) => (checked ? palette.GRAY_50 : "")};
`;
