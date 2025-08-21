import Gradient from "@/app/components/gradient";
import "./styles.css";
import styles from "./styles.module.css";
import Card from "@/app/components/card";

const GoBig = () => {
  return (
    <section className="go-big-wrapper">
      <div className="go-big-content">
        <h1 className="headline1">Go big or go home</h1>
        <div className={styles.grid}>
          <Card>1</Card> <Card>1</Card> <Card>1</Card> <Card>1</Card>
        </div>
        <Gradient />
      </div>
    </section>
  );
};

export default GoBig;
