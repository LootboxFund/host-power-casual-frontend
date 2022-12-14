import { FunctionComponent, useState } from "react";
import styles from "./index.module.css";
import { CreateEventResponseFE, CREATE_EVENT } from "./api.gql";
import { useMutation } from "@apollo/client";
import { MutationCreateTournamentArgs } from "../../api/graphql/generated/types";

export interface OnCreateEventPayload {
  nLootbox: number; // number of lootboxes to make
  eventName?: string;
  lootboxMaxTickets?: number;
  eventTicketPrize?: string;
}
interface CreateEventFormProps {
  onCreateEvent: (payload: OnCreateEventPayload) => Promise<void>;
}

const CreateEventForm: FunctionComponent<CreateEventFormProps> = (
  props: CreateEventFormProps
) => {
  const [teamCount, setTeamCount] = useState(1);
  const [isAdvancedSettingsOpen, setIsAdvancedSettingsOpen] = useState(false);
  const [eventName, setEventName] = useState<string | undefined>(undefined);
  const [maxTickets, setMaxTickets] = useState<string | undefined>(undefined);
  const [ticketPrize, setTicketPrize] = useState<string | undefined>(undefined);

  const [createEventMutation, { loading, error, data }] = useMutation<
    CreateEventResponseFE,
    MutationCreateTournamentArgs
  >(CREATE_EVENT);

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

  const onCreateEvent = () => {
    const payload: OnCreateEventPayload = {
      nLootbox: teamCount,
      eventName: eventName,
      lootboxMaxTickets: maxTickets ? parseInt(maxTickets) : undefined,
      eventTicketPrize: ticketPrize,
    };
  };

  return (
    <div className={styles.createEventFormContainer}>
      <div className={styles.frameDiv2}>
        <div className={styles.groupDiv1}>
          <div className={styles.groupDiv2}>
            <input
              className={styles.frameInput}
              type="text"
              placeholder="Number of teams"
              disabled
              value={teamCount}
            />
            <button className={styles.frameButton} onClick={decrementTeamCount}>
              <b className={styles.b1}>-</b>
            </button>
            <button
              className={styles.frameButton1}
              onClick={incrementTeamCount}
            >
              <b className={styles.b1}>+</b>
            </button>
          </div>
          <b className={styles.nUMBEROFTEAMS}>NUMBER OF TEAMS</b>
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
          className={styles.frameInput2}
          type="text"
          placeholder="TICKETS PER TEAM"
          onChange={(e) => {
            setMaxTickets(e.target.value ? e.target.value : undefined);
          }}
        />
        <input
          className={styles.frameInput3}
          type="text"
          placeholder="TICKET PRIZE"
          onChange={(e) => {
            setTicketPrize(e.target.value ? e.target.value : undefined);
          }}
        />
      </div>
      <div className={styles.frameDiv3}>
        <button className={styles.frameButton2}>
          <b className={styles.cREATEEVENT}>CREATE EVENT</b>
        </button>
      </div>
    </div>
  );
};

export default CreateEventForm;
