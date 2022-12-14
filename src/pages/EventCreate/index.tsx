import { FunctionComponent, useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import globalStyles from "../../index.module.css";

import CreateEventForm, {
  OnCreateEventPayload,
} from "../../components/EventCreateForm";
import { useAuth } from "../../hooks/useAuth";
import { Button, Result, Spin } from "antd";

const CreateEventPage: FunctionComponent = () => {
  const { user, signInAnonymously } = useAuth();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const hasRunInit = useRef(false);
  useEffect(() => {
    if (hasRunInit.current || !signInAnonymously) {
      return;
    }

    if (user === undefined) {
      return;
    } else if (user === null) {
      // END STATE - sign them in anonymously
      signInAnonymously()
        .then((_user) => {
          console.log("new user", _user.id);
        })
        .catch((err) => {
          setErrorMessage("An error occured");
        });
      hasRunInit.current = true;
      setLoading(false);
      return;
    } else {
      // END STATE - user logged in already
      hasRunInit.current = true;
      setLoading(false);
      console.log("user", user.id);
      return;
    }
  }, [user, signInAnonymously]);

  const handleCreateEvent = async (payload: OnCreateEventPayload) => {
    console.log("create event", payload);
  };

  if (errorMessage) {
    return (
      <div className={globalStyles.responsivePageContainer}>
        <br />
        <br />
        <Result
          status="500"
          title="Error"
          subTitle="Sorry, something went wrong."
          extra={
            <Button type="primary" onClick={() => window.location.reload()}>
              Retry
            </Button>
          }
        />
      </div>
    );
  }

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
      {loading ? (
        <div className={styles.loadingContainer}>
          <Spin size="large" style={{ display: "block", margin: "auto" }} />
        </div>
      ) : (
        <CreateEventForm onCreateEvent={handleCreateEvent} />
      )}
      <div className={styles.frameDiv3}>
        {!loading && (
          <button className={styles.xterrangmailcomClickToCh}>
            0xterran@gmail.com (click to change)
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateEventPage;
