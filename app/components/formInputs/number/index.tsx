import {
  NumberInput as MantineNumberInput,
  type MantineSize,
} from "@mantine/core";
import styles from "@components/formInputs/styles.module.css";

export type NumberInputValueType = string | number | null;

interface Props {
  size?: MantineSize;
  placeholder: string;
  setInputValue: (e: NumberInputValueType) => void;
}
const NumberInput = ({ size = "xs", placeholder, setInputValue }: Props) => {
  return (
    <MantineNumberInput
      classNames={{ input: styles.input }}
      size={size}
      radius="md"
      placeholder={placeholder}
      onChange={(e) => setInputValue(e)}
    />
  );
};

export default NumberInput;
