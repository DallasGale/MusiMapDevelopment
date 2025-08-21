import React from "react";
import styles from "./styles.module.css";

export type ArtistType = {
  name: string;
  songTitle: string;
  mp3: string;
  image: {
    src: string;
    alt: string;
  };
};
interface Props {
  artist: ArtistType;
}

const Player = ({ artist }: Props) => {
  return (
    <figure className={styles.figure}>
      <figcaption className={styles.figcaption}>
        Listen to the {artist.songTitle}
      </figcaption>
      <audio className={styles.audio} controls src={artist.mp3}>
        <track default kind="captions" srcLang="en" src="" />
      </audio>
    </figure>
  );
};

export default Player;
