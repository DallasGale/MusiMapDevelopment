import styles from "./styles.module.css";

interface Props {
  id: string;
  children: React.ReactNode;
}

const View = ({ id, children }: Props) => {
  return (
    <section className={styles.view} id={id}>
      {children}
    </section>
  );
};

export default View;
