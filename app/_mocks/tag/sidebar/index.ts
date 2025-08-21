export type ItemType = {
  id: string;
  label: string;
};

export const items: ItemType[] = [
  {
    id: "settings",
    label: "Settings",
  },
  {
    id: "trackInformation",
    label: "Track Information",
  },
  {
    id: "genres",
    label: "Genres",
  },
  {
    id: "acousticAttributes",
    label: "Acoustic Attributes",
  },
  {
    id: "voiceFamilies",
    label: "Voice Families",
  },
  {
    id: "rythmicMoods",
    label: "Rhythmic Moods",
  },
  {
    id: "moods",
    label: "Moods",
  },
  {
    id: "situations",
    label: "Situations",
  },
];

export const engineVersions = ["v1.4", "v2.0", "v2.1"];
