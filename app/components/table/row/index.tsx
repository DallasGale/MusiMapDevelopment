import { Table as MantineTable } from "@mantine/core";
import { type ColumnType } from "../types";
import classNames from "classnames";
import styles from "./styles.module.css";

interface Props {
  columns: ColumnType[];
  isEven: boolean;
  actions?: React.ReactNode;
}

const Row = ({ columns, actions, isEven }: Props) => {
  const rowStyles = classNames(styles.row, {
    [styles.odd]: isEven,
  });

  return (
    <MantineTable.Tr className={rowStyles} classNames={{ tr: styles.row }}>
      {/* {download && (
        <MantineTable.Td classNames={{ td: styles.actionsGroup }}>
          {download}
        </MantineTable.Td>
      )} */}
      {columns.map((col) => (
        <MantineTable.Td classNames={{ td: styles.cell }} key={col.id}>
          {col.label}
        </MantineTable.Td>
      ))}
      {actions && (
        <MantineTable.Td classNames={{ td: styles.actionsGroup }}>
          {actions}
        </MantineTable.Td>
      )}
    </MantineTable.Tr>
  );
};

export default Row;
