import { Button, Result, Spin } from "antd";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import CreateEventForm, {
  OnCreateEventPayload,
} from "../../components/EventCreateForm";
import { useAuth } from "../../hooks/useAuth";
import useEventCreate, { CreateEventPayload } from "../../hooks/useEventCreate";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

const StartViewAdditionalSetting: FunctionComponent = () => {
  const navigate = useNavigate();
  const { createEvent } = useEventCreate();
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

  const onEventCreate = async (
    payload: OnCreateEventPayload
  ): Promise<void> => {
    const serviceRequest: CreateEventPayload = {
      lootboxCount: payload.nLootbox,
      title: payload.eventName,
      lootboxMaxTickets: payload.lootboxMaxTickets,
      nftBountyValue: payload.lootboxTicketPrize,
    };
    const { event, referral } = await createEvent(serviceRequest);

    navigate(`/share/${event.id}`, { state: { referral } });

    return;
  };

  if (errorMessage) {
    return (
      <div className={styles.startViewAdditionalSetting}>
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
    <div className={styles.startViewAdditionalSetting}>
      <div className={styles.frameDiv}>
        <div className={styles.groupDiv}>
          <i className={styles.fanTicketsPoweredBy}>Fan Tickets Powered By</i>
          <b className={styles.lOOTBOX}>🎁 LOOTBOX</b>
        </div>
      </div>
      <div className={styles.frameDiv1}>
        <b className={styles.b}>🏰</b>
      </div>
      {!loading ? (
        <CreateEventForm onCreateEvent={onEventCreate} />
      ) : (
        <div className={styles.loadingContainer}>
          <Spin size="default" style={{ display: "block", margin: "auto" }} />
        </div>
      )}
      <div className={styles.frameDiv4}>
        {!loading && (
          <button className={styles.xterrangmailcomClickToCh}>
            0xterran@gmail.com (click to change)
          </button>
        )}
      </div>
    </div>
  );
};

export default StartViewAdditionalSetting;
