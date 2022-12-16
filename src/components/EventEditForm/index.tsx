import { LootboxID, TournamentID } from "@wormgraph/helpers";
import { message } from "antd";
import { OmitProps } from "antd/es/transfer/ListBody";
import { FunctionComponent, useState } from "react";
import styles from "./index.module.css";

export interface OnEditEventFormPayload {
  id: TournamentID;
  title?: string;
  lootboxes?: {
    id: LootboxID;
    maxTickets?: number;
    name?: string;
  }[];
}

interface EventViewEditSettingsProps {
  onFormCancel?: () => void;
  onEdit: (payload: OnEditEventFormPayload) => Promise<void>;
}

const EventViewEditSettings: FunctionComponent<EventViewEditSettingsProps> = (
  props
) => {
  const [loading, setLoading] = useState(false);

  const onEdit = async () => {
    console.log("edit event");

    // if (loading) {
    //   return;
    // }

    // const loadingMessage = message.loading("Editing Event...", 0);
    // setLoading(true);
    // try {
    //   // await props.onEdit({});  // TEMP
    //   message.success("Event updated!", 2);
    // } catch (err: any) {
    //   message.error(err.message);
    // } finally {
    //   loadingMessage();
    //   setLoading(false);
    // }

    // return;
  };

  return (
    <div className={styles.eventViewEditSettings}>
      <div className={styles.frameDiv3}>
        <div className={styles.frameDiv4}>
          <b className={styles.b}>About Event</b>
        </div>
        <input
          className={styles.frameInput}
          type="text"
          placeholder="EVENT NAME"
        />
        <input
          className={styles.frameInput}
          type="text"
          placeholder="MAX TICKETS PER TEAM"
        />
        <input
          className={styles.frameInput}
          type="text"
          placeholder="TICKET PRIZE"
        />
      </div>
      <div className={styles.frameDiv3}>
        <div className={styles.frameDiv6}>
          <b className={styles.teams}>Teams</b>
          <button className={styles.clickToDepositRewards}>
            {" "}
            🎁 Click to deposit rewards
          </button>
        </div>
        <div className={styles.frameDiv7}>
          <input
            className={styles.frameInput3}
            type="text"
            placeholder="ADD TEAM"
          />
          <button className={styles.frameButton1}>
            <b className={styles.b1}>➕</b>
          </button>
        </div>
        <div className={styles.frameDiv7}>
          <input
            className={styles.frameInput3}
            type="text"
            placeholder="TEAM #1"
          />
          <button className={styles.frameButton1}>
            <b className={styles.b1}>⚙️</b>
          </button>
        </div>
        <div className={styles.frameDiv7}>
          <input
            className={styles.frameInput3}
            type="text"
            placeholder="TEAM #2"
          />
          <button className={styles.frameButton1}>
            <b className={styles.b1}>⚙️</b>
          </button>
        </div>
      </div>
      <div className={styles.frameDiv9}>
        <button className={styles.frameButton3} onClick={onEdit}>
          <b className={styles.sAVECHANGES}>SAVE CHANGES</b>
        </button>
        <button className={styles.cancel} onClick={props.onFormCancel}>
          cancel
        </button>
      </div>
    </div>
  );
  // return (
  //   <div className={styles.eventViewEditSettingsForm}>
  //     <div className={styles.frameDiv4}>
  //       <div className={styles.frameDiv5}>
  //         <b className={styles.switchToAdvancedMode}>About Event</b>
  //       </div>
  //       <div className={styles.frameDiv6}>
  //         <b className={styles.switchToAdvancedMode}>EVENT NAME</b>
  //       </div>
  //       <div className={styles.frameDiv6}>
  //         <b className={styles.switchToAdvancedMode}>MAX TICKETS PER TEAM</b>
  //       </div>
  //       <div className={styles.frameDiv6}>
  //         <b className={styles.switchToAdvancedMode}>TICKET PRIZE</b>
  //       </div>
  //     </div>
  //     <div className={styles.frameDiv4}>
  //       <div className={styles.frameDiv10}>
  //         <b className={styles.teams}>Teams</b>
  //         <i className={styles.clickToDepositRewards}>
  //           {" "}
  //           🎁 Click to deposit rewards
  //         </i>
  //       </div>
  //       <div className={styles.frameDiv11}>
  //         <div className={styles.frameDiv12}>
  //           <b className={styles.switchToAdvancedMode}>ADD TEAM</b>
  //         </div>
  //         <div className={styles.frameDiv13}>
  //           <b className={styles.switchToAdvancedMode}>➕</b>
  //         </div>
  //       </div>
  //       <div className={styles.frameDiv11}>
  //         <div className={styles.frameDiv12}>
  //           <b className={styles.switchToAdvancedMode}>TEAM #1</b>
  //         </div>
  //         <div className={styles.frameDiv13}>
  //           <b className={styles.switchToAdvancedMode}>⚙️</b>
  //         </div>
  //       </div>
  //       <div className={styles.frameDiv11}>
  //         <div className={styles.frameDiv12}>
  //           <b className={styles.switchToAdvancedMode}>TEAM #2</b>
  //         </div>
  //         <div className={styles.frameDiv13}>
  //           <b className={styles.switchToAdvancedMode}>⚙️</b>
  //         </div>
  //       </div>
  //     </div>
  //     <div className={styles.frameDiv20}>
  //       {/* <div className={styles.frameDiv21}> */}
  //       <button className={styles.frameButton1}>
  //         <b className={styles.saveChanges}>SAVE CHANGES</b>
  //       </button>
  //       <button className={styles.skeletonButton} onClick={props.onFormCancel}>
  //         <i className={styles.cancel}>cancel</i>
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default EventViewEditSettings;
