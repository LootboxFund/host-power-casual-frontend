import { FunctionComponent, useEffect } from "react";
import styles from "./index.module.css";
import { manifest } from "../../manifest";
import QRCodeComponent from "easyqrcodejs";
import { ReferralFE } from "../../lib/types";

const QR_CODE_ELEMENT_ID = "qrcode";

export interface EventQRCodeProps {
  referral: ReferralFE;
}
const EventQRCode: FunctionComponent<EventQRCodeProps> = (props) => {
  const inviteLink = `${manifest.microfrontends.webflow.referral}?r=${props.referral?.slug}`;

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
    <div className={styles.frameDiv2}>
      <b className={styles.scanForFanTickets}>Scan for Fan Tickets</b>
      <div id="qrcode" />
    </div>
  );
};

export default EventQRCode;
