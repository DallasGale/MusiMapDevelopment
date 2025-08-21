import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
}

const ActionsGroup = ({ children }: Props) => {
  return <div className={styles.actionGroup}>{children}</div>;
};

export default ActionsGroup;
