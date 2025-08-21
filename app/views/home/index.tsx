import View from "@components/view";
import HomeHero, { type Props as HeroProps } from "./hero";
import Emotion from "./emotion";
import GoBig from "./goBig";

const HomeView = ({ text }: HeroProps) => {
  return (
    <View id="home-view">
      <HomeHero text={text} />
      <Emotion />
      <GoBig />
    </View>
  );
};

export default HomeView;
