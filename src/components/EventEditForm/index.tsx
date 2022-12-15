import { FunctionComponent } from "react";
import styles from "./index.module.css";

const EventViewEditSettings: FunctionComponent = () => {
  return (
    <div className={styles.eventViewEditSettingsForm}>
      <div className={styles.frameDiv4}>
        <div className={styles.frameDiv5}>
          <b className={styles.switchToAdvancedMode}>About Event</b>
        </div>
        <div className={styles.frameDiv6}>
          <b className={styles.switchToAdvancedMode}>EVENT NAME</b>
        </div>
        <div className={styles.frameDiv6}>
          <b className={styles.switchToAdvancedMode}>MAX TICKETS PER TEAM</b>
        </div>
        <div className={styles.frameDiv6}>
          <b className={styles.switchToAdvancedMode}>TICKET PRIZE</b>
        </div>
      </div>
      <div className={styles.frameDiv4}>
        <div className={styles.frameDiv10}>
          <b className={styles.teams}>Teams</b>
          <i className={styles.clickToDepositRewards}>
            {" "}
            🎁 Click to deposit rewards
          </i>
        </div>
        <div className={styles.frameDiv11}>
          <div className={styles.frameDiv12}>
            <b className={styles.switchToAdvancedMode}>ADD TEAM</b>
          </div>
          <div className={styles.frameDiv13}>
            <b className={styles.switchToAdvancedMode}>➕</b>
          </div>
        </div>
        <div className={styles.frameDiv11}>
          <div className={styles.frameDiv12}>
            <b className={styles.switchToAdvancedMode}>TEAM #1</b>
          </div>
          <div className={styles.frameDiv13}>
            <b className={styles.switchToAdvancedMode}>⚙️</b>
          </div>
        </div>
        <div className={styles.frameDiv11}>
          <div className={styles.frameDiv12}>
            <b className={styles.switchToAdvancedMode}>TEAM #2</b>
          </div>
          <div className={styles.frameDiv13}>
            <b className={styles.switchToAdvancedMode}>⚙️</b>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv20}>
        <div className={styles.frameDiv21}>
          <b className={styles.switchToAdvancedMode}>SAVE CHANGES</b>
        </div>
        <i className={styles.cancel}>cancel</i>
      </div>
    </div>
  );
};

export default EventViewEditSettings;
