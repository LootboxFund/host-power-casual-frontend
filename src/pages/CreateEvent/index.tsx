import { FunctionComponent } from "react";
import styles from "./index.module.css";
import globalStyles from "../../index.module.css";

import CreateEventForm, {
  OnCreateEventPayload,
} from "../../components/CreateEventForm";

const CreateEventPage: FunctionComponent = () => {
  const handleCreateEvent = async (payload: OnCreateEventPayload) => {
    console.log("create event", payload);
  };

  return (
    <div className={globalStyles.responsivePageContainer}>
      <div className={styles.frameDiv}>
        <div className={styles.groupDiv}>
          <i className={styles.fanTicketsPoweredBy}>Fan Tickets Powered By</i>
          <b className={styles.lOOTBOX}>🎁 LOOTBOX</b>
        </div>
      </div>
      <div className={styles.frameDiv1}>
        <b className={styles.b}>🏰</b>
      </div>
      <CreateEventForm onCreateEvent={handleCreateEvent} />
      <div className={styles.frameDiv3}>
        <button className={styles.xterrangmailcomClickToCh}>
          0xterran@gmail.com (click to change)
        </button>
      </div>
    </div>
  );
};

export default CreateEventPage;
