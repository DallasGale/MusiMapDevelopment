import CardTitle from "@/app/components/cardTitle";
import styles from "./styles.module.css";
interface Props {
  title: string;
  value: string | number;
}
const SummaryItem = ({ title, value }: Props) => {
  return (
    <div className={styles.container}>
      <CardTitle title={title} />
      <p className="display1 text-white">{value}</p>
    </div>
  );
};

export default SummaryItem;
