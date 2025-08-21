import { makeObservable, observable, computed, action } from "mobx";
import type { TagType } from "./types";

class TagsStore {
  allTags: TagType[] = [];
  settings: TagType[] = [];
  track_info: TagType[] = [];
  genres: TagType[] = [];
  acoustic_attributes: TagType[] = [];
  voice_families: TagType[] = [];
  rhythmic_moods: TagType[] = [];
  moods: TagType[] = [];
  situations: TagType[] = [];

  constructor() {
    makeObservable(this, {
      settings: observable,
      track_info: observable,
      genres: observable,
      acoustic_attributes: observable,
      voice_families: observable,
      rhythmic_moods: observable,
      moods: observable,
      situations: observable,

      clearTags: action,
      submit: action,

      getTags: computed,
    });
  }

  setSettings(settings: TagType[]) {
    this.settings = settings;
    return this.settings;
  }
  setTrackInformation(trackInfo: TagType[]) {
    this.track_info = trackInfo;
    return this.track_info;
  }

  setGenres() {}

  setAcousticAttributes() {}

  setVoiceFamilies() {}

  setRhythmicMoods() {}

  setMoods() {}

  setSituations() {}

  get getTags() {
    const allTags = [
      ...this.settings,
      ...this.track_info,
      ...this.genres,
      ...this.acoustic_attributes,
      ...this.voice_families,
      ...this.moods,
      ...this.situations,
    ];
    console.log("getTags(): ", allTags);
    this.allTags = allTags;
    return this.allTags;
  }

  clearTags() {
    this.settings = [];
    this.track_info = [];
    this.genres = [];
    this.acoustic_attributes = [];
    this.voice_families = [];
    this.rhythmic_moods = [];
    this.moods = [];
    this.situations = [];
  }

  submit() {
    alert(JSON.stringify(this.allTags));
  }
}

const tagsStore = new TagsStore();
export default tagsStore;
