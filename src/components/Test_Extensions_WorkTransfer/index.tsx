import React from "react";
import StyledWrapper from "./styles"; // Assuming you still want to use your styled wrapper

interface ColumnConfig {
  key: string;
  label: string;
}

interface RowData {
  [key: string]: any;
}

export interface TableProps {
  columns: ColumnConfig[];
  data: RowData[];
}

const TestExtensionsWorkTransferTable: React.FC<TableProps> = ({
  columns = [],
  data = [],
}) => {
  return (
    <StyledWrapper>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{
                  textAlign: "left",
                  padding: "8px",
                  borderBottom: "1px solid #ccc",
                }}
              >
                {col.label}
              </th>
            ))}
            <th
              style={{ padding: "8px", borderBottom: "1px solid #ccc" }}
              aria-label="Actions"
            ></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id ?? row[columns[0].key]}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  style={{ padding: "8px", borderBottom: "1px solid #eee" }}
                >
                  {row[col.key]}
                </td>
              ))}
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  aria-label="options"
                >
                  ⋯
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledWrapper>
  );
};

export default TestExtensionsWorkTransferTable;
