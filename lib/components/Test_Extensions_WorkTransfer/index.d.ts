import React from "react";
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
declare const TestExtensionsWorkTransferTable: React.FC<TableProps>;
export default TestExtensionsWorkTransferTable;
//# sourceMappingURL=index.d.ts.map