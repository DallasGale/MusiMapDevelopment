"use client";

import { pageRange, totalPages } from "@helpers/index";
import { Pagination as MantinePagination } from "@mantine/core";
import styles from "./styles.module.css";
import IconArrowDown from "@assets/icons/arrow-down.svg";
import Image from "next/image";
import {
  IconArrowNarrowLeft,
  IconChevronLeftPipe,
  IconChevronRightPipe,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
export interface Props {
  limit: number;
  page: number;
  total: number;
  setPage: (pg: number) => void;
}

const Pagination = ({ total, limit, page, setPage }: Props) => {
  const allPages = totalPages(total, limit);

  return (
    <div className={styles.pagination}>
      <div className={styles.controls}>
        <p className="label1">Results per page:</p>
        <div className={styles.perPage}>
          <p className="label1">{limit}</p>
          <Image src={IconArrowDown.src} alt="" width={10} height={10} />
        </div>
        <p className="label1">
          {pageRange(page, limit)} of {total}
        </p>
      </div>
      <div className={styles.controls}>
        <MantinePagination
          total={allPages}
          withEdges
          withControls
          withPages={false}
          siblings={0}
          value={page}
          onChange={setPage}
          lastIcon={IconChevronRightPipe}
          firstIcon={IconChevronLeftPipe}
          previousIcon={IconArrowNarrowLeft}
          nextIcon={IconArrowNarrowRight}
        >
          <MantinePagination.Root total={allPages}>
            <MantinePagination.First />
            <MantinePagination.Previous />
            <MantinePagination.Next />
            <MantinePagination.Last />
          </MantinePagination.Root>
        </MantinePagination>
      </div>
    </div>
  );
};

export default Pagination;
