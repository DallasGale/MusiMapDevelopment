import { Button } from "@mantine/core";
import styles from "../styles.module.css";
import { ButtonProps } from "../types";
import classNames from "classnames";

const TextButton = ({ onClick, label, isActive }: ButtonProps) => {
  const classes = classNames(styles.button, styles.text, "label2", {
    [styles.textActive]: isActive,
  });

  return (
    <Button onClick={onClick} classNames={{ root: classes }}>
      {label}
    </Button>
  );
};
export default TextButton;
