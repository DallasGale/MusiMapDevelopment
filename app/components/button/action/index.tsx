import { Button } from "@mantine/core";
import styles from "../styles.module.css";
import { ButtonProps } from "../types";
import classNames from "classnames";

const ActionButton = ({
  onClick,
  label,
  disabled = false,
  type = "button",
  leftSection,
}: ButtonProps) => {
  const classes = classNames(styles.button, styles.action, {});

  return (
    <Button
      type={type}
      onClick={onClick}
      classNames={{ root: classes }}
      disabled={disabled}
      leftSection={leftSection}
    >
      {label}
    </Button>
  );
};
export default ActionButton;
