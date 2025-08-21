import { Table } from "@mantine/core";
import { type ColumnType } from "../types";

interface Props {
  headColumns: ColumnType[];
}

const Head = ({ headColumns }: Props) => {
  return (
    <Table.Thead>
      <Table.Tr>
        {headColumns.map((column) => (
          <Table.Th
            key={column.id}
            style={{ width: column?.width, color: column?.color }}
          >
            <p className="label1">{column.label}</p>
          </Table.Th>
        ))}
      </Table.Tr>
    </Table.Thead>
  );
};

export default Head;
