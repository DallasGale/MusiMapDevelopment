import Card from "@components/card";

import { PieChart, Pie, Cell } from "recharts";
import type { PolarChartProps } from "recharts/types/util/types";

import styles from "./styles.module.css";
import CardTitle from "../cardTitle";

type DataType = {
  color: string;
  name: string;
  value: number;
};

interface Props extends PolarChartProps {
  data: DataType[];
  category: string;
}

const Chart = ({ data, category }: Props) => {
  return (
    <Card>
      <div className={styles.content}>
        <PieChart width={250} height={250}>
          <Pie
            stroke="transparent"
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={100}
            fill="grey"
            label={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${entry.name}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        <div className={styles.category}>
          <CardTitle title={category} />
          <ul className={styles.list}>
            {data.map((sub) => {
              return (
                <li key={sub.name} className={styles.listItem}>
                  <div className={styles.categoryItem}>
                    <div
                      className={styles.legend}
                      style={{
                        backgroundColor: sub.color,
                      }}
                    />
                    <p className="label2">{sub.name}</p>
                  </div>
                  <p className="label2">{sub.value}%</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default Chart;
