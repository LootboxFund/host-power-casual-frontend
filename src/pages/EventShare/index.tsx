import { FunctionComponent } from "react";
import styles from "./index.module.css";

const EventShare: FunctionComponent = () => {
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
        <img className={styles.image1Icon} alt="" src="../image-1@2x.png" />
      </div>
      <div className={styles.frameDiv3}>
        <div className={styles.frameDiv4}>
          <b className={styles.scanForFanTickets}>
            🔒 go.lootbox.fund?r=2048jfd48
          </b>
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
