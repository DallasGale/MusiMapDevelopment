import {
  TextInput as MantinerTextInput,
  type MantineSize,
} from "@mantine/core";

import styles from "@components/formInputs/styles.module.css";
import classNames from "classnames";

interface Props {
  size?: MantineSize;
  placeholder: string;
  onChange: (e: string) => void;
  value: string;
}

const EmailInput = ({ onChange, size = "xs", placeholder, value }: Props) => {
  const labelClasses = classNames(`label2 ${styles.label}`, {});

  return (
    <MantinerTextInput
      classNames={{ input: styles.input, label: labelClasses }}
      type="email"
      variant="filled"
      size={size}
      label="Enter your email"
      required
      radius="md"
      placeholder="Email"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default EmailInput;
