import type { NumberInputValueType } from "@components/formInputs/number";
import type { TextInputValueType } from "@components/formInputs/select";

export type TagType = {
  type: string;
  value: string | number | null;
};

export type SettingsTagsType = {
  engine: TextInputValueType | null;
  maxResults: NumberInputValueType | null;
};
