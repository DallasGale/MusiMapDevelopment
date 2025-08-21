"use client";
import { type MantineSize, Select } from "@mantine/core";
import { useEffect, useState } from "react";
import styles from "@components/formInputs/styles.module.css";

export type TextInputValueType = string | null;

interface Props {
  data: string[];
  size?: MantineSize;
  placeholder: string;
  setInputValue: (e: TextInputValueType) => void;
}
const SelectInput = ({
  data,
  size = "xs",
  placeholder,
  setInputValue,
}: Props) => {
  const [value, setValue] = useState<TextInputValueType>("");

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <Select
      classNames={{ input: styles.input }}
      size={size}
      placeholder={placeholder}
      data={data}
      value={value}
      onChange={setValue}
    />
  );
};

export default SelectInput;
