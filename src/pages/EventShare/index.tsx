import { FunctionComponent, useEffect } from "react";
import styles from "./index.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { manifest } from "../../manifest";
import QRCodeComponent from "easyqrcodejs";
import { EventFE, ReferralFE } from "../../hooks/useEventCreate";

const QR_CODE_ELEMENT_ID = "qrcode";

export interface NavigationState {
  event?: EventFE;
  referral?: ReferralFE;
}
const EventShare: FunctionComponent = () => {
  const navigate = useNavigate();

  const { state }: { state: NavigationState } = useLocation();

  if (!state.event || !state.referral) {
    throw new Error("Invalid state");
  }

  const inviteLink = state.referral
    ? `${manifest.microfrontends.webflow.referral}?r=${state.referral.slug}`
    : undefined;
  const inviteLinkShort = inviteLink
    ? inviteLink.replace("https://", "")
    : undefined;

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
    navigate(`/edit`);
  };

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
