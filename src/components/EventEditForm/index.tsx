import { LootboxID, TournamentID } from "@wormgraph/helpers";
import { message, Result, Spin } from "antd";
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

export interface AddTeamPayload {
  eventID: TournamentID;
  teamName?: string;
  maxTickets?: number;
  nftBountyValue?: string;
}

interface EventViewEditSettingsProps {
  event: EventFE;
  lootboxes: LootboxFE[];
  loadingLootboxes: boolean;
  onFormCancel?: () => void;
  onEdit: (payload: OnEditEventFormPayload) => Promise<void>;
  onOpenTeamSettings: (lootbox: LootboxFE) => void;
  addTeam: (payload: AddTeamPayload) => Promise<void>;
}

const EventViewEditSettings: FunctionComponent<EventViewEditSettingsProps> = (
  props
) => {
  const [teamNameTmp, setTeamNameTmp] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [loadingAddLootbox, setLoadingAddLootbox] = useState(false);
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

    if (loading || loadingAddLootbox) {
      return;
    }

    const loadingMessage = message.loading("Editing Event...", 0);
    setLoading(true);
    try {
      // get lootboxes to edit:
      const mapping: { [key: LootboxID]: LootboxFE } = {};
      props.lootboxes.forEach((lootbox) => {
        mapping[lootbox.id] = lootbox;
      });
      const lootboxesToEdit = lootboxesTmp
        .filter((lootboxTmp) => {
          const lootbox = mapping[lootboxTmp.id];
          if (!lootbox) {
            return false;
          }

          return (
            lootbox.maxTickets !== maxTicketsTmp ||
            lootbox.name !== lootboxTmp.name ||
            lootbox.nftBountyValue !== ticketPrizeTmp ||
            lootboxTmp.maxTickets !== maxTicketsTmp
          );
        })
        .map((lootboxTmp) => {
          const lootbox = mapping[lootboxTmp.id];
          return {
            ...lootbox,
            maxTickets: maxTicketsTmp,
            name: lootboxTmp.name,
            nftBountyValue: ticketPrizeTmp,
          };
        });

      await props.onEdit({
        id: props.event.id,
        title: eventNameTmp !== props.event.title ? eventNameTmp : undefined,
        lootboxes: lootboxesToEdit,
      });
      message.success("Event updated!", 2);
    } catch (err: any) {
      message.error(err.message);
    } finally {
      loadingMessage();
      setLoading(false);
    }

    return;
  };

  const handleAddTeamToEvent = async () => {
    if (loading || loadingAddLootbox) {
      return;
    }

    const loadingMessage = message.loading("Adding team to event...", 0);
    setLoadingAddLootbox(true);
    try {
      await props.addTeam({
        eventID: props.event.id,
        teamName: teamNameTmp,
        maxTickets: maxTicketsTmp,
      });
      message.success("Team added to event!", 2);
      setTeamNameTmp("");
    } catch (err: any) {
      message.error(err.message);
    } finally {
      loadingMessage();
      setLoadingAddLootbox(false);
    }

    return;
  };

  return (
    <div className={styles.eventViewEditSettings}>
      <div className={styles.frameDiv3}>
        <div className={styles.frameDiv4}>
          <b className={styles.b}>About Event</b>
        </div>
        <div className={styles.frameInput}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.inputSkeleton}
            type="text"
            placeholder="Event Name"
            value={eventNameTmp}
            onChange={(e) => {
              setEventNameTmp(e.target.value ? e.target.value : undefined);
            }}
          />
        </div>

        <div className={styles.frameInput}>
          <label className={styles.label}>Max Tickets</label>
          <input
            className={styles.inputSkeleton}
            type="number"
            placeholder="Max Tickets"
            value={maxTicketsTmp}
            onChange={(e) => {
              setMaxTicketsTmp(
                e.target.valueAsNumber ? e.target.valueAsNumber : undefined
              );
            }}
          />
        </div>
        <div className={styles.frameInput}>
          <label className={styles.label}>Ticket Prize</label>

          <input
            className={styles.inputSkeleton}
            type="text"
            placeholder="Ticket Prize"
            value={ticketPrizeTmp}
            onChange={(e) => {
              setTicketPrizeTmp(e.target.value ? e.target.value : undefined);
            }}
          />
        </div>
      </div>
      <div className={styles.frameDiv3}>
        <div className={styles.frameDiv6}>
          <b className={styles.teams}>Teams</b>
          <button className={styles.clickToDepositRewards}>
            🎁 Click to deposit rewards
          </button>
        </div>
        <div className={styles.frameDiv7}>
          <input
            className={styles.frameInput3}
            type="text"
            placeholder="Enter a new team name"
            value={teamNameTmp}
            onChange={(e) => {
              setTeamNameTmp(e.target.value ? e.target.value : "");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTeamToEvent();
              }
            }}
          />
          <button
            className={styles.frameButton1}
            onClick={handleAddTeamToEvent}
          >
            <b className={styles.b1}>{loadingAddLootbox ? <Spin /> : "➕"}</b>
          </button>
        </div>
        {props.loadingLootboxes && (
          <Result
            icon={
              <Spin size="large" style={{ display: "block", margin: "auto" }} />
            }
          />
        )}
        {lootboxesTmp.map((team) => {
          return (
            <div key={"Team" + team.id} className={styles.frameDiv7}>
              <input
                className={styles.frameInput3}
                type="text"
                placeholder="TEAM COMPETITOR"
                value={team.name}
                onChange={(e) => {
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
      <div className={styles.floatingButtonContainer}>
        <button className={styles.frameButton3} onClick={onEdit}>
          <b className={styles.sAVECHANGES}>SAVE CHANGES</b>
        </button>
        <button className={styles.ghostButton} onClick={props.onFormCancel}>
          <i className={styles.lightText}>cancel</i>
        </button>
      </div>
    </div>
  );
};

export default EventViewEditSettings;
