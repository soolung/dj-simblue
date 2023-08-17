import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import palette from "../../../theme/palette";

interface PropsType {
  children: ReactNode;
  checked?: boolean;
}

const TableRow = (props: PropsType) => {
  return <TableRowStyle {...props} />;
};

export default TableRow;

export const TableRowStyle = styled.tr<PropsType>`
  background-color: ${({ checked }) => (checked ? palette.GRAY_50 : "")};
`;
