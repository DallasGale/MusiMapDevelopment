"use client";

import { Table as MantineTable } from "@mantine/core";
import Head from "./head";
import Row from "./row";
import { ColumnType, RowsType } from "./types";
import styles from "./styles.module.css";
import Pagination, { type Props as PaginationProps } from "./pagination";
import TableTitle from "./title";

interface Props {
  title: string;
  titleActions?: React.ReactNode;
  headColumns: ColumnType[];
  rows: RowsType[];
  rowActions?: React.ReactNode;
  pagination?: PaginationProps;
}

const Table = ({
  title,
  titleActions,
  headColumns,
  rows,
  rowActions,
  pagination,
}: Props) => {
  return (
    <>
      <div className={styles.tableContainer}>
        <TableTitle title={title} actions={titleActions} />
        <div className={styles.tableWrapper}>
          <MantineTable.ScrollContainer minWidth={1600}>
            <MantineTable>
              <Head headColumns={headColumns} />
              <MantineTable.Tbody>
                {rows.slice(0, 8).map((row, i) => {
                  const isEven = i % 2 === 0;
                  return (
                    <Row
                      key={row.id}
                      columns={row.columns}
                      actions={rowActions}
                      isEven={isEven}
                    />
                  );
                })}
              </MantineTable.Tbody>
            </MantineTable>
          </MantineTable.ScrollContainer>
          {pagination && (
            <div className={styles.paginationWrapper}>
              <Pagination {...pagination} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Table;
