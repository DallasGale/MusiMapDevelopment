"use client";

import View from "@components/view";
import HomeHero, { type Props as HeroProps } from "./hero";
import Emotion from "./emotion";
import GoBig from "./goBig";
import styles from "./styles.module.css";
import Subscribe from "@/app/components/subscribe";

const HomeView = ({ text }: HeroProps) => {
  return (
    <View id="home-view">
      <HomeHero text={text} />

      <div className={styles.belowFold}>
        <div className={styles.content}>
          <div className={styles.subscribe}>
            <Subscribe />
          </div>
          <div>
            <Emotion />
            <GoBig />
          </div>
        </div>
      </div>
    </View>
  );
};

export default HomeView;
