import { Button } from "@mantine/core";
import styles from "../styles.module.css";
import { ButtonProps } from "../types";
import classNames from "classnames";

const SecondaryButton = ({ onClick, label }: ButtonProps) => {
  const classes = classNames(styles.button, styles.secondary, {});

  return (
    <Button
      onClick={onClick}
      classNames={{ root: classes, label: styles.label }}
    >
      {label}
    </Button>
  );
};
export default SecondaryButton;
