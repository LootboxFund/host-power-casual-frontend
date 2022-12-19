import { Button, Result, Spin, Modal } from "antd";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import CreateEventForm, {
  OnCreateEventPayload,
} from "../../components/EventCreateForm";
import { useAuth } from "../../hooks/useAuth";
import useEventCreate, { CreateEventPayload } from "../../hooks/useEventCreate";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";

const StartViewAdditionalSetting: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { createEvent } = useEventCreate();
  const { user, signInAnonymously } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  // const hasRunInit = useRef(false);
  useEffect(() => {
    // if (hasRunInit.current || !signInAnonymously) {
    //   return;
    // }

    if (user === undefined) {
      return;
    } else if (user === null) {
      // END STATE - sign them in anonymously
      setLoading(true);
      signInAnonymously()
        .then((_user) => {
          console.log("new user", _user.id);
        })
        .catch((err) => {
          setErrorMessage("An error occured");
        })
        .finally(() => {
          setLoading(false);
        });
      // hasRunInit.current = true;
      return;
    } else {
      // END STATE - user logged in already
      // hasRunInit.current = true;
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

    navigate(`/share/${event.id}`, {
      state: { referral, nLootboxes: payload.nLootbox },
    });

    return;
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
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

  const loginCallback = () => {
    closeAuthModal();
  };

  const signoutCallback = () => {
    closeAuthModal();
  };

  return (
    <div className={styles.startViewAdditionalSetting}>
      <div className={styles.frameDiv}>
        <div className={styles.groupDiv}>
          <i className={styles.fanTicketsPoweredBy}>Fan Tickets Powered By</i>
          &nbsp;
          <b className={styles.lOOTBOX}> 🎁 LOOTBOX</b>
        </div>
      </div>
      <div className={styles.frameDiv1}>
        <b className={styles.b}>🏰</b>
      </div>
      {!loading && !!user ? (
        <CreateEventForm
          onCreateEvent={onEventCreate}
          onOpenAuthModal={openAuthModal}
        />
      ) : (
        <div className={styles.loadingContainer}>
          <Spin size="default" style={{ display: "block", margin: "auto" }} />
          <br />
          <i className={styles.lightText}>Loading... Please wait a moment</i>
        </div>
      )}
      <Modal
        open={isAuthModalOpen}
        onCancel={closeAuthModal}
        bodyStyle={{ overflowX: "scroll" }}
        okButtonProps={{ style: { display: "none" } }}
        destroyOnClose={true}
      >
        <LoginForm
          onLoginCallback={loginCallback}
          onSignOutCallback={signoutCallback}
        />
      </Modal>
    </div>
  );
};

export default StartViewAdditionalSetting;
