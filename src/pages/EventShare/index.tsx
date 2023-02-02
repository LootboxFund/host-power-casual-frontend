import { FunctionComponent, useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { manifest } from "../../manifest";
import { FrontendUser, ReferralFE } from "../../lib/types";
import { Button, message, Modal, Spin, Typography, List, Alert } from "antd";
import { EventEditNavigationState } from "../EventEdit";
import { useAuth } from "../../hooks/useAuth";
import EventQRCode from "../../components/EventQRCode";
import LoginForm from "../../components/LoginForm";
import useEvent from "../../hooks/useEvent";
import { TournamentID } from "@wormgraph/helpers";
import EventLootboxImages from "../../components/EventLootboxImages";
import useEventLootboxes from "../../hooks/useEventLootboxes";
import { MAX_IMAGES_SHOWN } from "../../components/EventLootboxImages/const";
import { EditOutlined } from "@ant-design/icons";
import LootboxPreview from "../../components/LootboxPreview";
import {
  buildPlayerInviteLinkForEvent,
  buildPromoterInviteLinkForEvent,
} from "../../lib/routes";

const LOOTBOX_TUTORIAL_VIDEO = "https://youtu.be/So8LMw7oJ7w";

export interface NavigationState {
  referral?: ReferralFE;
  nLootboxes?: number;
  onOpenAuthModal: () => void;
}
const EventShare: FunctionComponent = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { id: eventID } = useParams();
  const { state }: { state: NavigationState } = useLocation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { event } = useEvent({
    eventID: (eventID || "") as TournamentID,
  });
  const playerInviteLink = event?.inviteMetadata?.slug
    ? buildPlayerInviteLinkForEvent(event?.inviteMetadata.slug)
    : undefined;
  const promoterInviteLink = event?.inviteMetadata?.slug
    ? buildPromoterInviteLinkForEvent(event.inviteMetadata.slug)
    : undefined;

  const {
    lootboxes,
    startPolling,
    stopPolling,
    loading: loadingLootboxes,
  } = useEventLootboxes({
    eventID: (eventID || "") as TournamentID,
  });
  const [isPolling, setIsPolling] = useState<boolean>(false);
  const hasPolledOnce = useRef<boolean>(false);
  const showSpinner = isPolling || loadingLootboxes;
  const [isShowingAllLootboxes, setIsShowingAllLootboxes] = useState(false);

  useEffect(() => {
    // If event was created less than 5 minutes ago, start polling for lootboxes
    if (
      !hasPolledOnce.current &&
      state?.nLootboxes &&
      !isPolling &&
      event?.timestamps?.createdAt &&
      Date.now() - event.timestamps.createdAt < 5 * 60 * 1000 // event made within last 5 mins
    ) {
      setIsPolling(true);
      // Poll every 5 seconds
      console.log("start polling...");
      startPolling(2500);
      hasPolledOnce.current = true;
      const timeout = setTimeout(() => {
        console.log("stop polling - timeout");
        stopPolling();
        setIsPolling(false);
        // Stop polling after 1 minute
      }, 1 * 60 * 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [
    event?.timestamps?.createdAt,
    startPolling,
    stopPolling,
    isPolling,
    state?.nLootboxes,
  ]);

  useEffect(() => {
    if (
      isPolling &&
      state?.nLootboxes &&
      lootboxes.length >= state.nLootboxes
    ) {
      console.log("stop polling - cut off");
      stopPolling();
      setIsPolling(false);
    }
  }, [lootboxes, state?.nLootboxes, stopPolling, isPolling]);

  const inviteLink = useMemo(() => {
    return `${manifest.microfrontends.webflow.referral}?r=${state?.referral?.slug}`;
  }, [state]);
  const inviteLinkShort = inviteLink.replace("https://", "");

  const navigateToEdit = () => {
    const navState: EventEditNavigationState = {
      referral: state.referral,
    };
    navigate(`/edit/${eventID}`, { state: navState });
  };

  const toggleListView = () => {
    setIsShowingAllLootboxes(!isShowingAllLootboxes);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const openAuthModel = () => {
    setIsAuthModalOpen(true);
  };

  const copyInviteLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      message.success("Copied to clipboard");
    } catch (err) {
      message.error("An error occured");
    }
  };

  const loginCallback = (user: FrontendUser) => {
    closeAuthModal();
  };

  if (!state.referral) {
    // Gets caught in /src/routes.tsx
    throw new Error("No referral provided");
  }

  return (
    <div className={styles.eventViewScanQRCodeResp}>
      {user?.isAnonymous ? (
        <div className={styles.frameDivUnverified} onClick={openAuthModel}>
          <i className={styles.warningText}>
            ⚠️ Don't lose your event! Click to add your email
          </i>
        </div>
      ) : (
        <div className={styles.frameDiv}>
          <div className={styles.groupDiv}>
            <i className={styles.fanTicketsPoweredBy}>Fan Tickets Powered By</i>
            &nbsp;
            <b className={styles.lOOTBOX}>🎁 LOOTBOX</b>
          </div>
        </div>
      )}

      <div className={styles.frameDiv1}>
        <button className={styles.ghostButton} onClick={navigateToEdit}>
          <b className={styles.b}>🏰</b>&nbsp;
          <i className={styles.lightText}>
            {event?.title || "Epic Battle Event"} (click to edit{" "}
            <EditOutlined />)
          </i>
        </button>
      </div>

      <div className={styles.frameDivThumbs}>
        <EventLootboxImages lootboxes={lootboxes} />
        {
          showSpinner && [
            <Spin key="spin-loading" />,
            <div className={styles.frameDiv1small} key="lootbox-loading-msg">
              <i className={styles.lightText}>
                {isPolling
                  ? "Waiting for Lootboxes to be created..."
                  : "Loading Lootboxes..."}
              </i>
            </div>,
          ]
          //  : (
          //   <div className={styles.frameDiv1small}>
          //     <button className={styles.ghostButton} onClick={navigateToEdit}>
          //       <i className={styles.lightText}>
          //         Click to edit <EditOutlined />
          //       </i>
          //     </button>
          //   </div>
          // )
        }
      </div>

      <EventQRCode referral={state.referral} />

      <div className={styles.frameDiv1Padding}>
        <Typography.Title
          type="secondary"
          style={{ textAlign: "start" }}
          level={4}
        >
          How does it work?
        </Typography.Title>
        <p
          className={styles.lightText}
          style={{ fontStyle: "normal", textAlign: "start" }}
        >
          Fans scan the QR code to claim a FREE fan ticket. If their team wins,
          fans will get a share of prize money.{" "}
          <Typography.Link
            href={LOOTBOX_TUTORIAL_VIDEO}
            target="_blank"
            className={styles.lightText}
          >
            Watch tutorial.
          </Typography.Link>
        </p>
        <br />
        <Alert
          type="info"
          message={
            <div style={{ textAlign: "start", color: "#00000073" }}>
              <Typography.Text type="secondary" style={{ fontWeight: 800 }}>
                PRO TIP:
              </Typography.Text>
              <ul>
                <li>
                  <Typography.Text
                    type="secondary"
                    style={{ textAlign: "start" }}
                  >
                    Share{" "}
                    <Typography.Link
                      href={inviteLink}
                      rel="noreferrer"
                      target="_blank"
                      copyable={{
                        text: `Come join my event & collect our LOOTBOX tickets so that you can win FREE stuff! \n${inviteLink}`,
                      }}
                    >
                      this link
                    </Typography.Link>{" "}
                    with <b>fans</b> to invite them to your event
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    type="secondary"
                    style={{ textAlign: "start" }}
                  >
                    Share{" "}
                    <Typography.Link
                      href={playerInviteLink}
                      rel="noreferrer"
                      target="_blank"
                      copyable={{
                        text: `Join my event by making a Lootbox! Click here: \n${playerInviteLink}`,
                      }}
                    >
                      this link
                    </Typography.Link>{" "}
                    with <b>players</b> to make Lootboxes for your event
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    type="secondary"
                    style={{ textAlign: "start" }}
                  >
                    Share{" "}
                    <Typography.Link
                      href={promoterInviteLink}
                      rel="noreferrer"
                      target="_blank"
                      copyable={{
                        text: `Join my event by making a Lootbox! Click here: \n${promoterInviteLink}`,
                      }}
                    >
                      this link
                    </Typography.Link>{" "}
                    with <b>promoters & KOLs</b> to make Lootboxes for your
                    event
                  </Typography.Text>
                </li>
              </ul>
            </div>
          }
        />
      </div>

      <div className={styles.lootboxPreviewContainer}>
        {lootboxes
          .slice(0, isShowingAllLootboxes ? lootboxes.length : MAX_IMAGES_SHOWN)
          .map((lootbox) => {
            return (
              <LootboxPreview
                key={`lootboxPreview_${lootbox.id}`}
                eventName={event?.title}
                lootbox={lootbox}
                onLootboxEditClick={navigateToEdit}
              />
            );
          })}
        {lootboxes.length > MAX_IMAGES_SHOWN && (
          <Button
            type="ghost"
            onClick={toggleListView}
            className={styles.lightText}
          >
            {isShowingAllLootboxes ? "Hide" : "Show more"}
          </Button>
        )}
      </div>

      <div className={styles.whitespace} />
      <div className={styles.floatingButtonContainer}>
        <div className={styles.frameDiv3}>
          <div className={styles.frameDiv4}>
            <b className={styles.scanForFanTickets}>🔒 {inviteLinkShort}</b>
          </div>
          <button className={styles.frameButton1} onClick={copyInviteLink}>
            <b className={styles.copyLink}>Copy Invite</b>
          </button>
        </div>
        <div className={styles.frameDiv5}>
          <button className={styles.ghostButton} onClick={openAuthModel}>
            <i className={styles.lightText}>
              {user?.isAnonymous
                ? "Unverified User (click to login)"
                : user?.email
                ? `${user.email} (click to change)`
                : "Click to login"}
            </i>
          </button>
        </div>
      </div>
      <Modal
        open={isAuthModalOpen}
        onCancel={closeAuthModal}
        bodyStyle={{ overflowX: "scroll" }}
        okButtonProps={{ style: { display: "none" } }}
        destroyOnClose={true}
      >
        <LoginForm onLoginCallback={loginCallback} />
      </Modal>
    </div>
  );
};

export default EventShare;
