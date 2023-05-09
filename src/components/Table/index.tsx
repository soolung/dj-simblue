import React from "react";
import styled from "@emotion/styled";
import palette from "../../theme/palette";

interface TableProps {}

export const Table = () => {
  return (
    <TableStyle>
      <thead>
        <tr>
          <th>헤더</th>
          <th>헤더</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>내용</td>
          <td>내용</td>
        </tr>
        <tr>
          <td>내용</td>
          <td>내용</td>
        </tr>
        <tr>
          <td>내용</td>
          <td>내용</td>
        </tr>
      </tbody>
    </TableStyle>
  );
};

const TableStyle = styled.table`
  background-color: ${palette.MONO_WHITE};
  thead {
    width: 100%;
    background-color: ${palette.GRAY_50};
  }

  th {
    border-top: 1px solid ${palette.GRAY_100};
  }

  th,
  td {
    padding: 0.875rem 1rem;
    border-bottom: 1px solid ${palette.GRAY_100};
  }
`;
