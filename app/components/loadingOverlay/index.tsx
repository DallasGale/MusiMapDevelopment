import { LoadingOverlay as MantineLoadingOverlay } from "@mantine/core";
import styles from "./styles.module.css";
import Image from "next/image";
import LogoFace from "@assets/logo-face.png";

interface Props {
  loading: boolean;
}

const LoadingOverlay = ({ loading }: Props) => {
  return (
    <MantineLoadingOverlay
      classNames={{ overlay: styles.overlay }}
      visible={loading}
      zIndex={1000}
      transitionProps={{
        duration: 250,
      }}
      overlayProps={{ radius: "sm", blur: 2 }}
      loaderProps={{
        children: (
          <div className={styles.loading}>
            <Image src={LogoFace} alt="MusicMap" width={35} height={35} />
            <p>Loading...</p>
          </div>
        ),
      }}
    />
  );
};

export default LoadingOverlay;
