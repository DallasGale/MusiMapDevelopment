import { observer } from "mobx-react-lite";
import NumberInput from "@/app/components/formInputs/number";
import LineItem from "../lineItem";
import SelectInput from "@/app/components/formInputs/select";
import { useState } from "react";
import { engineVersions } from "@/app/_mocks/tag/sidebar";
import ActionButton from "@/app/components/button/action";
import tagsStore from "@/app/store/tagStore";
import type { TagType } from "@/app/store/types";

const Settings = observer(() => {
  const [engineVersion, setEngineVersion] = useState<TagType | null>(null);
  const [maxResults, setMaxResults] = useState<TagType | null>(null);

  return (
    <>
      <LineItem label="Engine Version">
        <SelectInput
          data={engineVersions}
          placeholder="Select version"
          setInputValue={(e) => {
            if (e && e !== "") {
              setEngineVersion({ type: "engine", value: e });
            } else {
              setEngineVersion(null);
            }
          }}
        />
      </LineItem>
      <LineItem label="Max Number of Results">
        <NumberInput
          placeholder="Enter"
          setInputValue={(e) => {
            if (e && e !== "") {
              setMaxResults({ type: "max results", value: e });
            } else {
              setMaxResults(null);
            }
          }}
        />
      </LineItem>

      <ActionButton
        disabled={!engineVersion && !maxResults}
        onClick={() => {
          const settingsToSave = [engineVersion, maxResults].filter(
            Boolean,
          ) as TagType[];
          tagsStore.setSettings(settingsToSave);
        }}
        label="Save tags"
      />
    </>
  );
});

export default Settings;
