import View from "@/app/components/view";
import styles from "./styles.module.css";
import AnalyserContainer from "@/app/components/formInputs/analyser/container";
import Chart from "@/app/components/chart";
import Summary from "@views/analysis/summary";
import { artist, results, summary } from "@/app/_mocks/analysis";
import Subscribe from "@/app/components/subscribe";
import SecondaryButton from "@/app/components/button/secondary";
import Results from "@views/analysis/results";

const AnalysisView = () => {
  return (
    <View id="analysis-view">
      <div className={`page-content ${styles.container}`}>
        <div>
          <Subscribe />
        </div>
        <div className={styles.content}>
          <AnalyserContainer placeholder="Search Again..." />
          <Results artist={artist} />
          <Summary items={summary.items} />
          <div className={styles.charts}>
            <div className={styles.columm}>
              <Chart category="genres" data={results.data} />
            </div>
            <div className={styles.columm}>
              <Chart category="moods" data={results.data} />
            </div>
            <div className={styles.columm}>
              <Chart category="rhythmic moods" data={results.data} />
            </div>
            <div className={styles.columm}>
              <Chart category="situations" data={results.data} />
            </div>
          </div>
          <div className={styles.ctaGroup}>
            <h3 className="display2">Analyse another song.</h3>
            <SecondaryButton label="Try again" />
          </div>
        </div>
      </div>
    </View>
  );
};

export default AnalysisView;
