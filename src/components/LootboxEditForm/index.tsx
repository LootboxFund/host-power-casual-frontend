import { LootboxTournamentSnapshotID, TournamentID } from "@wormgraph/helpers";
import { message, Popconfirm } from "antd";
import { FunctionComponent, useState } from "react";
import { LootboxFE } from "../../lib/types";
import styles from "./index.module.css";

export interface LootboxEditFormProps {
  lootbox: LootboxFE;
  eventID: TournamentID;
  removeFromEvent: (
    eventID: TournamentID,
    snapshotID: LootboxTournamentSnapshotID
  ) => Promise<void>;
}

export interface RemoveTeamPayload {
  eventID: TournamentID;
  lootboxSnapshotID: LootboxTournamentSnapshotID;
}

const LootboxEditForm: FunctionComponent<LootboxEditFormProps> = (
  props: LootboxEditFormProps
) => {
  const [lootboxTmp, setLootboxTmp] = useState<LootboxFE>(props.lootbox);
  const [loading, setLoading] = useState(false);

  const handleRemoveLootboxFromEvent = async () => {
    if (loading) {
      return;
    }

    const loadingMessage = message.loading("Removing team...", 0);
    setLoading(true);
    try {
      await props.removeFromEvent(props.eventID, lootboxTmp.snapshotID);
      message.success("Team removed from event!", 2);
    } catch (err: any) {
      message.error(err.message);
    } finally {
      loadingMessage();
      setLoading(false);
    }

    return;
  };

  return (
    <div className={styles.editLootboxModal}>
      <div className={styles.frameDiv}>
        <b className={styles.tEAMSETTINGS}>TEAM SETTINGS</b>
        <div className={styles.frameDiv1}>
          <input
            className={styles.tEAMNAME}
            type="text"
            placeholder="TEAM NAME"
            value={lootboxTmp.name}
            onChange={(e) => {
              setLootboxTmp((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
          />
        </div>
        <button className={styles.frameButton1}>
          <b className={styles.sAVECHANGES}>SAVE CHANGES</b>
        </button>
        <button className={styles.frameButton3}>
          <div className={styles.vIEWLOOTBOX}>VIEW LOOTBOX</div>
        </button>
        <button className={styles.frameButton3}>
          <div className={styles.vIEWLOOTBOX}>🎁 DEPOSIT REWARDS</div>
        </button>
        <Popconfirm
          title="Are you sure?"
          onConfirm={handleRemoveLootboxFromEvent}
          okType="danger"
        >
          <button className={styles.removeTeam}>remove team</button>
        </Popconfirm>
      </div>
    </div>
  );
};

export default LootboxEditForm;
