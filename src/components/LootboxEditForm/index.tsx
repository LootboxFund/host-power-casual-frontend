import {
  LootboxID,
  LootboxTournamentSnapshotID,
  TournamentID,
} from "@wormgraph/helpers";
import { message, Popconfirm } from "antd";
import { FunctionComponent, useState } from "react";
import { LootboxFE } from "../../lib/types";
import { manifest } from "../../manifest";
import styles from "./index.module.css";
import { DeleteOutlined } from "@ant-design/icons";

export interface EditLootboxPayload {
  name?: string;
  lootboxID: LootboxID;
}

export interface LootboxEditFormProps {
  lootbox: LootboxFE;
  eventID: TournamentID;
  editLootbox: (
    eventID: TournamentID,
    payload: EditLootboxPayload
  ) => Promise<void>;
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

  const handleEditTeam = async () => {
    if (loading) {
      return;
    }

    const loadingMessage = message.loading("Editing team...", 0);
    setLoading(true);
    try {
      await props.editLootbox(props.eventID, {
        name: lootboxTmp.name,
        lootboxID: lootboxTmp.id,
      });
      message.success("Team successfully edited!", 2);
    } catch (err: any) {
      message.error(err.message);
    } finally {
      loadingMessage();
      setLoading(false);
    }

    return;
  };

  const lootboxURL = `${manifest.microfrontends.webflow.cosmicLootboxPage}?lid=${props.lootbox.id}`;

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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEditTeam();
              }
            }}
          />
        </div>
        <button className={styles.frameButton1} onClick={handleEditTeam}>
          <b className={styles.sAVECHANGES}>SAVE CHANGES</b>
        </button>
        <a
          href={lootboxURL}
          className={styles.hrefAdvanced}
          target="_blank"
          rel="noreferrer"
        >
          <button className={styles.frameButton3}>
            <div className={styles.vIEWLOOTBOX}>VIEW LOOTBOX</div>
          </button>
        </a>
        <a
          href={`${manifest.microfrontends.dashboard.promoter}`}
          className={styles.hrefAdvanced}
          target="_blank"
          rel="noreferrer"
        >
          <button className={styles.frameButton3}>
            <div className={styles.vIEWLOOTBOX}>🎁 DEPOSIT REWARDS</div>
          </button>
        </a>
        <Popconfirm
          title="Are you sure?"
          onConfirm={handleRemoveLootboxFromEvent}
          okType="danger"
        >
          <button className={styles.ghostButton}>
            <i className={styles.lightText}>
              Remove team <DeleteOutlined />
            </i>
          </button>
        </Popconfirm>
      </div>
    </div>
  );
};

export default LootboxEditForm;
