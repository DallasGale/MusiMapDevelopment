import Gradient from "@/app/components/gradient";
import styles from "./styles.module.css";
import Card from "@/app/components/card";
import { stats } from "@/app/_mocks/analysis";

const GoBig = () => {
  return (
    <section className={styles.goBigWapper}>
      <div className={styles.goBigContent}>
        <h1 className="headline1">Go big or go home</h1>
        <div className={styles.grid}>
          {stats.map((stat) => (
            <Card key={stat.label} hasBorder={false}>
              <div className={styles.stat}>
                <p className="headline3">{stat.value}</p>
                <h2 className="display3">{stat.label}</h2>
              </div>
            </Card>
          ))}
        </div>
        <Gradient size="small" />
      </div>
    </section>
  );
};

export default GoBig;
