import { FunctionComponent } from "react";
import { Button, Input } from "antd";
import styles from "./index.module.css";

import CreateEventForm, {
  OnCreateEventPayload,
} from "../../components/CreateEventForm";

const StartViewDefaultSimple: FunctionComponent = () => {
  const handleCreateEvent = async (payload: OnCreateEventPayload) => {
    console.log("create event", payload);
  };

  return (
    <div className={"responsivePageContainer " + styles.startViewDefaultSimple}>
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
        <Button
          className={styles.anonymousUserClickToLogin}
          type="text"
          size="middle"
          shape="default"
        >
          Anonymous User (click to login)
        </Button>
      </div>
    </div>
  );
};

export default StartViewDefaultSimple;
