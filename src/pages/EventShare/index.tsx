import { FunctionComponent, useEffect } from "react";
import styles from "./index.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { manifest } from "../../manifest";
import QRCodeComponent from "easyqrcodejs";
import { ReferralFE } from "../../lib/types";
import { message } from "antd";
import { EventEditNavigationState } from "../EventEdit";

const QR_CODE_ELEMENT_ID = "qrcode";

export interface NavigationState {
  referral?: ReferralFE;
}
const EventShare: FunctionComponent = () => {
  const navigate = useNavigate();
  const { id: eventID } = useParams();
  const { state }: { state: NavigationState } = useLocation();

  const inviteLink = `${manifest.microfrontends.webflow.referral}?r=${state?.referral?.slug}`;
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

  const copyInviteLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      message.success("Copied to clipboard");
    } catch (err) {
      message.error("An error occured");
    }
  };

  if (!state.referral) {
    // Gets caught in /src/routes.tsx
    throw new Error("No referral provided");
  }

  return (
    <div className={styles.eventViewScanQRCodeResp}>
      <div className={styles.frameDiv}>
        <div className={styles.groupDiv}>
          <i className={styles.fanTicketsPoweredBy}>Fan Tickets Powered By</i>
          <b className={styles.lOOTBOX}>🎁 LOOTBOX</b>
        </div>
      </div>
      <div className={styles.frameDiv1}>
        <button className={styles.frameButton} onClick={navigateToEdit}>
          <b className={styles.b}>🏰</b>
          <i className={styles.epicBattleEventClickToEd}>
            Epic Battle Event (click to edit)
          </i>
        </button>
      </div>
      <div className={styles.frameDiv2}>
        <b className={styles.scanForFanTickets}>Scan for Fan Tickets</b>
        <div id="qrcode" />
      </div>
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
          <button className={styles.xterrangmailcomClickToCh}>
            0xterran@gmail.com (click to change)
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventShare;
