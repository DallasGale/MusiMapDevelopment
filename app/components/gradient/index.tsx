import classNames from "classnames";
import styles from "./styles.module.css";

interface Props {
  size: "default" | "small";
}

const Gradient = ({ size }: Props) => {
  const classes = classNames(styles.blur, {
    [`${styles[size]}`]: size,
  });
  return (
    <>
      <div className={classes}></div>
      <div className={styles.gradientContainer}>
        <div className={styles.gradient}></div>
      </div>
    </>
  );
};

export default Gradient;
