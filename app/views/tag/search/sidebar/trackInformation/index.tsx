import { observer } from "mobx-react-lite";
import LineItem from "../lineItem";
import { useState } from "react";
import ActionButton from "@/app/components/button/action";
import tagsStore from "@/app/store/tagStore";
import type { TagType } from "@/app/store/types";
import TextInput from "@/app/components/formInputs/text";

const TrackInformation = observer(() => {
  const [trackTitle, setTrackTitle] = useState<TagType | null>(null);
  const [artistName, setArtistName] = useState<TagType | null>(null);
  const disabled = !trackTitle && !artistName;
  return (
    <>
      <LineItem label="Track Title">
        <TextInput
          placeholder="Enter"
          // value={trackTitle?.value}
          onChange={(e) => {
            if (e) {
              setTrackTitle({
                type: "track title",
                value: e,
              });
            } else {
              setTrackTitle(null);
            }
          }}
        />
      </LineItem>
      <LineItem label="Artist Name">
        <TextInput
          placeholder="Enter"
          // setValue={artistName?.value}
          onChange={(e) => {
            if (e) {
              setArtistName({
                type: "artist name",
                value: e,
              });
            } else {
              setArtistName(null);
            }
          }}
        />
      </LineItem>

      <ActionButton
        disabled={disabled}
        onClick={() => {
          const settingsToSave = [trackTitle, artistName].filter(
            Boolean,
          ) as TagType[];
          tagsStore.setTrackInformation(settingsToSave);
        }}
        label="Save tags"
      />
    </>
  );
});

export default TrackInformation;
