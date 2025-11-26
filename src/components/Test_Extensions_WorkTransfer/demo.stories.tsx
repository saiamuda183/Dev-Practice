import TestExtensionsWorkTransferTable from "./index";

export default {
  title: "Components/TestExtensionsWorkTransferTable",
  component: TestExtensionsWorkTransferTable,
};

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "status", label: "Status" },
];

const data = [
  { id: 1, name: "John Doe", status: "Pending" },
  { id: 2, name: "Jane Smith", status: "Approved" },
  { id: 3, name: "Alice Johnson", status: "Rejected" },
];

export const Default = () => (
  <TestExtensionsWorkTransferTable columns={columns} data={data} />
);
