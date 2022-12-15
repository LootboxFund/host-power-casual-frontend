import { FunctionComponent, useMemo, useState } from "react";
import styles from "./index.module.css";
import {
  BulkCreateLootboxResponseFE,
  BULK_CREATE_LOOTBOX,
  CreateEventResponseFE,
  CREATE_EVENT,
  CREATE_REFERRAL,
  CreateReferralResponseFE,
} from "./api.gql";
import { useMutation } from "@apollo/client";
import {
  MutationBulkCreateLootboxArgs,
  MutationCreateReferralArgs,
  MutationCreateTournamentArgs,
  ReferralType,
} from "../../api/graphql/generated/types";
import { Spin } from "antd";
import { TournamentID } from "@wormgraph/helpers";
import { useNavigate } from "react-router-dom";
import { EventShareState } from "../../pages/EventShare";

const LOOTBOX_LIMIT = 30;

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
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const navigate = useNavigate();
  const [teamCount, setTeamCount] = useState(1);
  const [isAdvancedSettingsOpen, setIsAdvancedSettingsOpen] = useState(false);
  const [eventName, setEventName] = useState<string | undefined>(undefined);
  const [maxTickets, setMaxTickets] = useState<string | undefined>(undefined);
  const [ticketPrize, setTicketPrize] = useState<string | undefined>(undefined);
  const loading = false;
  const [createEventMutation, { loading: loadingEventCreate, error, data }] =
    useMutation<CreateEventResponseFE, MutationCreateTournamentArgs>(
      CREATE_EVENT
    );

  const [bulkCreateLootboxMutation, { loading: loadingBulkCreate }] =
    useMutation<BulkCreateLootboxResponseFE, MutationBulkCreateLootboxArgs>(
      BULK_CREATE_LOOTBOX
    );

  const [createReferralMutation, { loading: loadingReferralCreate }] =
    useMutation<CreateReferralResponseFE, MutationCreateReferralArgs>(
      CREATE_REFERRAL
    );

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

  /**
   * This thing just calls 3 mutations:
   * - create event
   * - bulk create lootboxes
   * - creates a referral code
   */
  const onCreateEvent = async () => {
    if (loading) {
      return;
    }

    if (teamCount > LOOTBOX_LIMIT) {
      setErrorMessage(
        `You can only create up to ${LOOTBOX_LIMIT} lootboxes at a time`
      );
      return;
    }

    setErrorMessage(undefined);
    let createdEventID: TournamentID;
    try {
      // await props.onCreateEvent(payload);
      const eventResponse = await createEventMutation({
        variables: {
          payload: {
            title: eventName,
          },
        },
      });

      console.log("Created event", eventResponse);

      if (
        eventResponse?.data?.createTournament?.__typename ===
        "CreateTournamentResponseSuccess"
      ) {
        createdEventID = eventResponse.data.createTournament.tournament.id;
      } else {
        throw new Error("An error occured!");
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "An error occured");
      return;
    }

    try {
      const bulkCreateLootboxPayload = Array.from({ length: teamCount }).map(
        (_, i) => ({
          tournamentID: createdEventID,
          maxTickets: maxTickets ? parseInt(maxTickets) : undefined,
          nftBountyValue: ticketPrize,
        })
      );
      const referralResponse = await createReferralMutation({
        variables: {
          payload: {
            type: ReferralType.Genesis,
            tournamentId: createdEventID,
          },
        },
      });

      if (
        !referralResponse?.data?.createReferral ||
        referralResponse.data.createReferral.__typename === "ResponseError"
      ) {
        throw new Error("An error occured!");
      }

      const referralSlug = referralResponse.data.createReferral.referral.slug;

      console.log("Created referral", referralSlug);

      // This takes a little while... so just run it async
      bulkCreateLootboxMutation({
        variables: {
          payload: {
            lootboxes: bulkCreateLootboxPayload,
          },
        },
      });

      // navigate to the eventShare page
      // window.location.href = `/eventShare?referralSlug=${referralSlug}`;
      const state: EventShareState = {
        eventID: createdEventID,
        referralSlug: referralSlug,
      };
      navigate(`/share/${referralSlug}`, {
        state: {},
      });
    } catch (err: any) {
      setErrorMessage(err?.message || "An error occured");
      return;
    }
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
          type="text"
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
        type="text"
        placeholder="TICKETS PER TEAM"
        onChange={(e) => {
          setMaxTickets(e.target.value ? e.target.value : undefined);
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
        <b className={styles.cREATEEVENT}>{loading && <Spin />} CREATE EVENT</b>
      </button>
    </div>
  );
};

export default CreateEventForm;
