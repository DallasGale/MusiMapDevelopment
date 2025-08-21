import styles from "./styles.module.css";

interface Props {
  title: string;
  actions?: React.ReactNode;
}
const TableTitle = ({ title, actions }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h1 className="display1">{title}</h1>
      {actions && actions}
    </div>
  );
};

export default TableTitle;
