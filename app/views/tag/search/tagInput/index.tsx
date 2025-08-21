"use client";
import ActionButton from "@components/button/action";
import { PillsInput, Pill } from "@mantine/core";
import styles from "./styles.module.css";
import ActionsGroup from "@/app/components/actionGroup";
import tagsStore from "@/app/store/tagStore";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

export type TagInputType = {
  placeholder: string;
};
interface Props {
  tagInput: {
    placeholder: string;
  };
}
const TagInput = observer(({ tagInput }: Props) => {
  const tags = toJS(tagsStore.getTags);

  const hasTags = tags.length > 0;

  return (
    <div className={styles.container}>
      <PillsInput classNames={{ input: styles.input }}>
        <Pill.Group>
          {hasTags
            ? tags.map((tag, index) => {
                console.log("map: ", tag);

                return (
                  <Pill key={index}>
                    {tag.type}: {tag.value}
                  </Pill>
                );
              })
            : tagInput.placeholder}
          <PillsInput.Field />
        </Pill.Group>
      </PillsInput>

      <ActionsGroup>
        {hasTags && (
          <ActionButton
            label="Clear Tags"
            onClick={() => tagsStore.clearTags()}
          />
        )}
        <ActionButton label="Submit" onClick={() => tagsStore.submit()} />
      </ActionsGroup>
    </div>
  );
});
export default TagInput;
