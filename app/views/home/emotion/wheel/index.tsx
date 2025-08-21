import Image from "next/image";
import styles from "./styles.module.css";
import WheelImg from "@assets/wheel.png";
import Card from "@/app/components/card";

const Wheel = () => {
  return (
    <Card>
      <div className={styles.clip}>
        <div className={styles.wheel}>
          <Image src={WheelImg} alt="" width={1200} height={1200} />
        </div>
      </div>
    </Card>
  );
};

export default Wheel;
