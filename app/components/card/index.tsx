import { Card as MantineCard } from "@mantine/core";

import styles from "./styles.module.css";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  direction?: "row" | "column";
}

const Card = ({ children, direction }: Props) => {
  const classes = classNames(styles.root, {
    [styles.row]: direction === "row",
    [styles.columm]: direction === "column",
  });
  return <MantineCard classNames={{ root: classes }}>{children}</MantineCard>;
};

export default Card;
