import { LootboxID, TournamentID } from "@wormgraph/helpers";
import { message } from "antd";
import { OmitProps } from "antd/es/transfer/ListBody";
import { FunctionComponent, useEffect, useState } from "react";
import { EventFE, LootboxFE } from "../../lib/types";
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
  event: EventFE;
  lootboxes: LootboxFE[];
  onFormCancel?: () => void;
  onEdit: (payload: OnEditEventFormPayload) => Promise<void>;
  onOpenTeamSettings: (lootbox: LootboxFE) => void;
}

const EventViewEditSettings: FunctionComponent<EventViewEditSettingsProps> = (
  props
) => {
  const [loading, setLoading] = useState(false);
  const [eventNameTmp, setEventNameTmp] = useState<string | undefined>(
    props.event.title
  );
  const [maxTicketsTmp, setMaxTicketsTmp] = useState<number | undefined>(
    props.lootboxes[0]?.maxTickets || undefined
  );
  const [ticketPrizeTmp, setTicketPrizeTmp] = useState<string | undefined>(
    props.lootboxes[0]?.nftBountyValue || undefined
  );

  const [lootboxesTmp, setLootboxesTmp] = useState<LootboxFE[]>(
    props.lootboxes || undefined
  );

  useEffect(() => {
    setEventNameTmp(props.event.title);
    setMaxTicketsTmp(props.lootboxes[0]?.maxTickets || undefined);
    setTicketPrizeTmp(props.lootboxes[0]?.nftBountyValue || undefined);
    setLootboxesTmp(props.lootboxes);
  }, [props.event, props.lootboxes]);

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
          value={eventNameTmp}
          onChange={(e) => {
            setEventNameTmp(e.target.value ? e.target.value : undefined);
          }}
        />
        <input
          className={styles.frameInput}
          type="text"
          placeholder="MAX TICKETS PER TEAM"
          value={maxTicketsTmp}
          onChange={(e) => {
            setMaxTicketsTmp(
              e.target.valueAsNumber ? e.target.valueAsNumber : undefined
            );
          }}
        />
        <input
          className={styles.frameInput}
          type="text"
          placeholder="TICKET PRIZE"
          value={ticketPrizeTmp}
          onChange={(e) => {
            setTicketPrizeTmp(e.target.value ? e.target.value : undefined);
          }}
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
        {props.lootboxes.map((team) => {
          return (
            <div key={"Team" + team.id} className={styles.frameDiv7}>
              <input
                className={styles.frameInput3}
                type="text"
                placeholder="TEAM #1"
                value={team.name}
                onChange={(e) => {
                  console.log("change " + team.id, e.target.value);
                  setLootboxesTmp((prev) => {
                    const newLootboxes = prev.map((lootbox) => {
                      if (lootbox.id === team.id) {
                        return { ...lootbox, name: e.target.value };
                      }
                      return lootbox;
                    });
                    return newLootboxes;
                  });
                }}
              />
              <button
                className={styles.frameButton1}
                onClick={() => props.onOpenTeamSettings(team)}
              >
                <b className={styles.b1}>⚙️</b>
              </button>
            </div>
          );
        })}
        <div className={styles.bottomWhitespace} />
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
};

export default EventViewEditSettings;
