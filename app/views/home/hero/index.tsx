"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import LogoWorld from "@assets/logo-world.png";
import AnalyserContainer from "@/app/components/formInputs/analyser/container";
import AnalysisView from "../../analysis";
import { observer } from "mobx-react-lite";
import analysedStore from "@/app/store/analyserStore";
import Gradient from "@/app/components/gradient";

export type TextType = {
  headline: string;
  paragraph: string;
  upload: {
    placeholder: string;
  };
};
export interface Props {
  text: TextType;
}
const HomeHero = observer(({ text }: Props) => {
  if (!analysedStore.analysed) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.wordsWrapper}>
            <Image src={LogoWorld} alt="Musimap" width={246} height={200} />
            <h1 className="headline1">{text.headline}</h1>
            <h2 className="headline2">{text.paragraph}</h2>
          </div>
          <AnalyserContainer placeholder={text.upload.placeholder} />
        </div>
        <Gradient />
      </div>
    );
  } else {
    return <AnalysisView />;
  }
});

export default HomeHero;
