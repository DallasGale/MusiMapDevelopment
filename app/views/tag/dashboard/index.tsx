import View from "@components/view";
import CustomCard from "@components/card";
import styles from "./styles.module.css";

const DashboardView = () => {
  return (
    <View id="tag-dashboard-view">
      <div className={styles.grid}>
        <div className={styles.column}>
          <CustomCard>Welcome back</CustomCard>
          <CustomCard>Total Tracks</CustomCard>
          <CustomCard>(Tag) Total Tracks)</CustomCard>
        </div>

        <div className={styles.column}>
          <CustomCard>Tag Success</CustomCard>
          <CustomCard>Software Updates</CustomCard>
        </div>

        <div className={styles.column}>
          <CustomCard>Enhance Success</CustomCard>
          <CustomCard>Tag Pending</CustomCard>
          <CustomCard>Tag Fails</CustomCard>
        </div>
      </div>
    </View>
  );
};

export default DashboardView;
