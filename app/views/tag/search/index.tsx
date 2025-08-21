import View from "@components/view";
import Sidebar from "@components/sidebar";
import { items } from "@mocks/tag/sidebar";
import Settings from "./sidebar/settings";
import styles from "./styles.module.css";
import Card from "@components/card";
import TagInput, { TagInputType } from "./tagInput";
import TrackInformation from "./sidebar/trackInformation";

export const componentList = {
  settings: <Settings />,
  trackInformation: <TrackInformation />,
  genres: <div>genres Content</div>,
  acousticAttributes: <div>acousticAttributes Content</div>,
  voiceFamilies: <div>voiceFamilies Content</div>,
  rythmicMoods: <div>rythmicMoods Content</div>,
  moods: <div>moods Content</div>,
  situations: <div>situations Content</div>,
};

interface Props {
  translation: {
    tagInput: TagInputType;
  };
}
const SearchView = ({ translation }: Props) => {
  return (
    <View id="tag-search-view">
      <div className={styles.container}>
        <Sidebar items={items} itemContent={componentList} />
        <div className={styles.column}>
          <Card>
            <TagInput tagInput={translation.tagInput} />
          </Card>
          <Card>Organisation</Card>
        </div>
      </div>
    </View>
  );
};

export default SearchView;
