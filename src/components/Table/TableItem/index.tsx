import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import palette from "../../../theme/palette";

interface PropsType {
  children: ReactNode;
  headWidth?: string;
  align?: "left" | "center" | "right";
}

const TableItem = (props: PropsType) => {
  return <TableItemStyle {...props} />;
};

export default TableItem;

export const TableItemStyle = styled.td<PropsType>`
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
