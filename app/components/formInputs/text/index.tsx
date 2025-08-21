import {
  TextInput as MantinerTextInput,
  type MantineSize,
} from "@mantine/core";
import styles from "@components/formInputs/styles.module.css";

interface Props {
  size?: MantineSize;
  placeholder: string;
  onChange: (e: string) => void;
  // value: string;
}

const TextInput = ({ onChange, size = "xs", placeholder }: Props) => {
  return (
    <MantinerTextInput
      variant="filled"
      size={size}
      radius="md"
      placeholder={placeholder}
      classNames={{ input: styles.input }}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextInput;
