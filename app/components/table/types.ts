export type ColumnType = {
  id: number;
  label: string;
  width?: number | string;
  color?: string;
};

export type RowsType = {
  id: number;
  columns: ColumnType[];
};
