import Card from "@/app/components/card";
import styles from "./styles.module.css";

interface Props {
  title: string;
  children: React.ReactNode;
}

const CardSection = ({ title, children }: Props) => {
  return (
    <section className={styles.section}>
      <h1 className="display1">{title}</h1>
      <Card direction="row">{children}</Card>
    </section>
  );
};

export default CardSection;
