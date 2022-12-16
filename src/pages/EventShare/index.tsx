import { FunctionComponent, useEffect, useMemo, useState } from "react";
import styles from "./index.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { manifest } from "../../manifest";
import QRCodeComponent from "easyqrcodejs";
import { ReferralFE } from "../../lib/types";
import { message, Modal } from "antd";
import { EventEditNavigationState } from "../EventEdit";
import { useAuth } from "../../hooks/useAuth";
import EventQRCode from "../../components/EventQRCode";
import LoginForm from "../../components/LoginForm";

const QR_CODE_ELEMENT_ID = "qrcode";

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

  const inviteLink = useMemo(() => {
    return `${manifest.microfrontends.webflow.referral}?r=${state?.referral?.slug}`;
  }, [state]);
  const inviteLinkShort = inviteLink.replace("https://", "");

  useEffect(() => {
    if (inviteLink) {
      const options_object = {
        // ====== Basic
        text: inviteLink,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCodeComponent.CorrectLevel.H, // L, M, Q, <H></H>
        quietZone: 12,
        /*
          title: 'QR Title', // content

          titleColor: "#004284", // color. default is "#000"
          titleBackgroundColor: "#fff", // background color. default is "#fff"
          titleHeight: 70, // height, including subTitle. default is 0
          titleTop: 25, // draws y coordinates. default is 30
      */
      };
      const el = document.getElementById(QR_CODE_ELEMENT_ID);
      if (el) {
        if (el.firstChild) {
          el.removeChild(el.firstChild);
        }
        new QRCodeComponent(el, options_object);
      }
    }
  }, [inviteLink]);

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

  const handleLogin = (email: string, password: string) => {
    console.log("login", email);
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
            ⚠️ Don't Lose Your Event! Click to Add Your Email
          </i>
        </div>
      ) : (
        <div className={styles.frameDiv}>
          <div className={styles.groupDiv}>
            <i className={styles.fanTicketsPoweredBy}>Fan Tickets Powered By</i>
            <b className={styles.lOOTBOX}>🎁 LOOTBOX</b>
          </div>
        </div>
      )}

      <div className={styles.frameDiv1}>
        <button className={styles.frameButton} onClick={navigateToEdit}>
          <b className={styles.b}>🏰</b>
          <i className={styles.epicBattleEventClickToEd}>
            Epic Battle Event (click to edit)
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
          <button
            className={styles.xterrangmailcomClickToCh}
            onClick={openAuthModel}
          >
            {user?.isAnonymous
              ? "Unverified User (click to login)"
              : user?.email
              ? `${user.email} (click to change)`
              : "Click to login"}
          </button>
        </div>
      </div>
      <Modal
        open={isAuthModalOpen}
        onCancel={closeAuthModal}
        bodyStyle={{ overflowX: "scroll" }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <LoginForm onLogin={handleLogin} />
      </Modal>
    </div>
  );
};

export default EventShare;
