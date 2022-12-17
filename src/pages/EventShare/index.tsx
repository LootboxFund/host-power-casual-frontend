import { FunctionComponent, useMemo, useState } from "react";
import styles from "./index.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { manifest } from "../../manifest";
import { FrontendUser, ReferralFE } from "../../lib/types";
import { message, Modal } from "antd";
import { EventEditNavigationState } from "../EventEdit";
import { useAuth } from "../../hooks/useAuth";
import EventQRCode from "../../components/EventQRCode";
import LoginForm from "../../components/LoginForm";
import useEvent from "../../hooks/useEvent";
import { TournamentID } from "@wormgraph/helpers";

export interface NavigationState {
  referral?: ReferralFE;
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
    message.success(`Welcome ${user.username}!`);
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
            {event?.title || "Epic Battle Event"} (click to edit)
          </i>
        </button>
      </div>
      <EventQRCode referral={state.referral} />
      <div className={styles.whitespace} />
      <div className={styles.floatingButtonContainer}>
        <div className={styles.frameDiv3}>
          <div className={styles.frameDiv4}>
            <b className={styles.scanForFanTickets}>🔒 {inviteLinkShort}</b>
          </div>
          <button className={styles.frameButton1} onClick={copyInviteLink}>
            <b className={styles.copyLink}>Copy Link</b>
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
