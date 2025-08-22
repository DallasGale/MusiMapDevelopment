"use client";

import SecondaryButton from "@/app/components/button/secondary";
import styles from "./styles.module.css";
import Wheel from "./wheel";

const Emotion = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <h1 className="headline1">Emotionally Attuned</h1>
          <p className="display2">
            MusiMap is an emotional AI company that transforms how the world
            understands and connects with music.
          </p>
        </div>
        <Wheel />
        <div className={styles.textWrapper}>
          <p className="display3">
            Using proprietary algorithms trained on expert-annotated metadata,
            Musimap decodes the emotional, contextual, and semantic layers of
            sound - enabling businesses to deliver more intelligent, intuitive,
            and human-centered audio experiences.
          </p>
          <SecondaryButton label="Find out more" onClick={() => null} />
        </div>
      </div>
    </section>
  );
};

export default Emotion;
