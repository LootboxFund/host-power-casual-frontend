import { FunctionComponent } from "react";
import EventEditForm from "../../components/EventEditForm";
import styles from "./index.module.css";

const EventEdit: FunctionComponent = () => {
  return (
    <div className={styles.eventViewEditSettings}>
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <i className={styles.switchToAdvancedMode}>Switch to Advanced Mode</i>
        </div>
      </div>
      <div className={styles.frameDiv2}>
        <div className={styles.frameDiv3}>
          <b className={styles.switchToAdvancedMode}>🏰</b>
          <i className={styles.epicBattleEventSimpleSett}>
            Epic Battle Event (simple settings)
          </i>
        </div>
      </div>
      <EventEditForm />
    </div>
  );
};

export default EventEdit;
