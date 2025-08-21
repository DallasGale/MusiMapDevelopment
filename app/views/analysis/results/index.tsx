import Player, { ArtistType } from "@/app/components/player";
import CardSection from "@/app/components/cardSection";
import Thumbnail from "@/app/components/thumbnail";
import styles from "./styles.module.css";

interface Props {
  artist: ArtistType;
}

const Results = ({ artist }: Props) => {
  return (
    <CardSection title="Upload Results">
      <div className={styles.container}>
        <Thumbnail src={artist.image.src} alt={artist.image.alt} />
        <div className={styles.meta}>
          <div className={styles.metaInfo}>
            <h2 className="display2">{artist.name}</h2>
            <h3 className="display1 text-grey">{artist.songTitle}</h3>
          </div>
          <Player artist={artist} />
        </div>
      </div>
    </CardSection>
  );
};

export default Results;
