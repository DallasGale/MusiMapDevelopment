import styles from "./styles.module.css";
interface Props {
  label: string;
  children: React.ReactNode;
}

const LineItem = ({ label, children }: Props) => {
  return (
    <div className={styles.container}>
      <p className="label2">{label}</p>
      <div>{children}</div>
    </div>
  );
};

export default LineItem;
