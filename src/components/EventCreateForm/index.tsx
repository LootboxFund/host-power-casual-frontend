import { FunctionComponent, useState } from "react";
import styles from "./index.module.css";
import { Modal, message } from "antd";

const LOOTBOX_LIMIT = 30;

export interface OnCreateEventPayload {
  nLootbox: number; // number of lootboxes to make
  eventName?: string;
  lootboxMaxTickets?: number;
  lootboxTicketPrize?: string;
}

interface CreateEventFormProps {
  onCreateEvent: (payload: OnCreateEventPayload) => Promise<void>;
}

const CreateEventForm: FunctionComponent<CreateEventFormProps> = (
  props: CreateEventFormProps
) => {
  const [loading, setLoading] = useState(false);
  const [teamCount, setTeamCount] = useState(1);
  const [isAdvancedSettingsOpen, setIsAdvancedSettingsOpen] = useState(false);
  const [eventName, setEventName] = useState<string | undefined>(undefined);
  const [maxTickets, setMaxTickets] = useState<number | undefined>(undefined);
  const [ticketPrize, setTicketPrize] = useState<string | undefined>(undefined);

  const incrementTeamCount = () => {
    setTeamCount((cnt) => cnt + 1);
  };

  const decrementTeamCount = () => {
    setTeamCount((cnt) => {
      if (cnt === 0) {
        return 0;
      } else {
        return cnt - 1;
      }
    });
  };

  const onCreateEvent = async () => {
    if (loading) {
      return;
    }

    if (teamCount > LOOTBOX_LIMIT) {
      Modal.error({
        title: "Too many Teams",
        content: `You can only create up to ${LOOTBOX_LIMIT} lootboxes at a time`,
      });
      return;
    }

    const payload: OnCreateEventPayload = {
      nLootbox: teamCount,
      eventName: eventName,
      lootboxMaxTickets: maxTickets,
      lootboxTicketPrize: ticketPrize,
    };
    setLoading(true);
    const loadingMessage = message.loading("Creating event...", 0);
    try {
      await props.onCreateEvent(payload);
      message.success("Event created!", 2);
    } catch (err: any) {
      message.error("An error occured", 2);
    } finally {
      setLoading(false);
      loadingMessage();
    }
    return;
  };

  return (
    <div className={styles.frameDiv2}>
      <b className={styles.nUMBEROFTEAMS}>NUMBER OF TEAMS</b>
      <div className={styles.frameDiv3}>
        <button className={styles.frameButton} onClick={decrementTeamCount}>
          <b className={styles.b1}>-</b>
        </button>
        <input
          className={styles.frameInput}
          type="number"
          placeholder="Teams"
          disabled
          value={teamCount}
        />
        <button className={styles.frameButton1} onClick={incrementTeamCount}>
          <b className={styles.b1}>+</b>
        </button>
      </div>
      <input
        className={styles.frameInput1}
        type="text"
        placeholder="EVENT NAME"
        onChange={(e) => {
          setEventName(e.target.value ? e.target.value : undefined);
        }}
      />
      <input
        className={styles.frameInput1}
        type="number"
        placeholder="TICKETS PER TEAM"
        onChange={(e) => {
          setMaxTickets(
            e.target.valueAsNumber ? e.target.valueAsNumber : undefined
          );
        }}
      />
      <input
        className={styles.frameInput1}
        type="text"
        placeholder="TICKET PRIZE"
        onChange={(e) => {
          setTicketPrize(e.target.value ? e.target.value : undefined);
        }}
      />
      <button
        disabled={loading}
        className={styles.frameButton2}
        onClick={onCreateEvent}
      >
        <b className={styles.cREATEEVENT}>CREATE EVENT</b>
      </button>
    </div>
  );
};

export default CreateEventForm;
