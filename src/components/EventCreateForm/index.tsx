import { FunctionComponent, useState } from "react";
import styles from "./index.module.css";
import { Modal, message } from "antd";
import { useAuth } from "../../hooks/useAuth";

const LOOTBOX_LIMIT = 30;

export interface OnCreateEventPayload {
  nLootbox: number; // number of lootboxes to make
  eventName?: string;
  lootboxMaxTickets?: number;
  lootboxTicketPrize?: string;
}

interface CreateEventFormProps {
  onOpenAuthModal: () => void;
  onCreateEvent: (payload: OnCreateEventPayload) => Promise<void>;
}

const CreateEventForm: FunctionComponent<CreateEventFormProps> = (
  props: CreateEventFormProps
) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [teamCount, setTeamCount] = useState<number | undefined>(1);
  const [isAdvancedSettingsOpen, setIsAdvancedSettingsOpen] = useState(false);
  const [eventName, setEventName] = useState<string | undefined>(undefined);
  const [maxTickets, setMaxTickets] = useState<number | undefined>(undefined);
  const [ticketPrize, setTicketPrize] = useState<string | undefined>(undefined);

  const incrementTeamCount = () => {
    setTeamCount((cnt) => {
      if (cnt === undefined) {
        return 1;
      } else {
        return cnt + 1;
      }
    });
  };

  const decrementTeamCount = () => {
    setTeamCount((cnt) => {
      if (cnt === undefined) {
        return 0;
      } else if (cnt === 0) {
        return 0;
      } else {
        return cnt - 1;
      }
    });
  };

  const toggleAdvancedSettings = () => {
    setIsAdvancedSettingsOpen(!isAdvancedSettingsOpen);
  };

  const onCreateEvent = async () => {
    if (loading) {
      return;
    }
    const teamCountLocal =
      teamCount === undefined ? 0 : teamCount < 0 ? 0 : teamCount;

    if (teamCountLocal > LOOTBOX_LIMIT) {
      Modal.error({
        title: "Too many Teams",
        content: `You can only create up to ${LOOTBOX_LIMIT} lootboxes at a time`,
      });
      return;
    }

    const payload: OnCreateEventPayload = {
      nLootbox: teamCountLocal,
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
          value={teamCount}
          onChange={(e) => {
            const val = e.target.valueAsNumber;
            if (isNaN(val)) {
              setTeamCount(undefined);
            } else if (val < 0) {
              setTeamCount(0);
            } else {
              setTeamCount(val);
            }
          }}
        />
        <button className={styles.frameButton1} onClick={incrementTeamCount}>
          <b className={styles.b1}>+</b>
        </button>
      </div>

      {isAdvancedSettingsOpen ? (
        [
          <input
            key="input1"
            className={styles.frameInput1}
            type="text"
            placeholder="EVENT NAME"
            onChange={(e) => {
              setEventName(e.target.value ? e.target.value : undefined);
            }}
          />,
          <input
            key="input2"
            className={styles.frameInput1}
            type="number"
            placeholder="TICKETS PER TEAM"
            onChange={(e) => {
              setMaxTickets(
                e.target.valueAsNumber ? e.target.valueAsNumber : undefined
              );
            }}
          />,
          <input
            key="input3"
            className={styles.frameInput1}
            type="text"
            placeholder="TICKET PRIZE"
            onChange={(e) => {
              setTicketPrize(e.target.value ? e.target.value : undefined);
            }}
          />,
          <button
            className={styles.ghostButton}
            onClick={toggleAdvancedSettings}
            key="closebutton"
          >
            <i className={styles.lightText}>Close</i>
          </button>,
        ]
      ) : (
        <button className={styles.ghostButton} onClick={toggleAdvancedSettings}>
          <i className={styles.lightText}>Additional Settings</i>
        </button>
      )}

      <div className={styles.whitespace} />

      <div className={styles.floatingButtonContainer}>
        <button
          disabled={loading}
          className={styles.frameButton2}
          onClick={onCreateEvent}
        >
          <b className={styles.cREATEEVENT}>CREATE EVENT</b>
        </button>

        <button className={styles.ghostButton} onClick={props.onOpenAuthModal}>
          <i className={styles.lightText}>
            {user?.isAnonymous
              ? "Unverified User (click to login)"
              : user?.email
              ? `${user.email} (click to change)`
              : "Click to login"}
          </i>
        </button>
      </div>
    </div>
  );
};

export default CreateEventForm;
