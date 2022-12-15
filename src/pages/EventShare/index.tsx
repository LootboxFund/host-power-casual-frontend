import { FunctionComponent, useEffect } from "react";
import styles from "./index.module.css";
import { useLocation } from "react-router-dom";
import { ReferralSlug, TournamentID } from "@wormgraph/helpers";
import { manifest } from "../../manifest";
import QRCodeComponent from "easyqrcodejs";

const QR_CODE_ELEMENT_ID = "qrcode";

export interface EventShareState {
  eventID: TournamentID;
  referralSlug: ReferralSlug;
}
const EventShare: FunctionComponent = () => {
  const { state } = useLocation();
  const { eventID, referralSlug } = state as EventShareState;
  const inviteLink = referralSlug
    ? `${manifest.microfrontends.webflow.referral}?r=${referralSlug}`
    : undefined;
  const inviteLinkShort = inviteLink
    ? inviteLink.replace("https://", "")
    : undefined;

  console.log("EventShare", { eventID, referralSlug });

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

  return (
    <div className={styles.eventViewScanQRCodeResp}>
      <div className={styles.frameDiv}>
        <div className={styles.groupDiv}>
          <i className={styles.fanTicketsPoweredBy}>Fan Tickets Powered By</i>
          <b className={styles.lOOTBOX}>🎁 LOOTBOX</b>
        </div>
      </div>
      <div className={styles.frameDiv1}>
        <button className={styles.frameButton}>
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
      <div className={styles.frameDiv3}>
        <div className={styles.frameDiv4}>
          <b className={styles.scanForFanTickets}>🔒 {inviteLinkShort}</b>
        </div>
        <button className={styles.frameButton1}>
          <b className={styles.copyLink}>Copy Link</b>
        </button>
      </div>
      <div className={styles.frameDiv5}>
        <button className={styles.xterrangmailcomClickToCh}>
          0xterran@gmail.com (click to change)
        </button>
      </div>
    </div>
  );
};

export default EventShare;
