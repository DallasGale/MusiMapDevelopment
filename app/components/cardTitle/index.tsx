import styles from "./styles.module.css";

interface Props {
  title: string;
}
const CardTitle = ({ title }: Props) => {
  return (
    <div className={styles.title}>
      <h2 className="label1">{title}</h2>
    </div>
  );
};

export default CardTitle;
