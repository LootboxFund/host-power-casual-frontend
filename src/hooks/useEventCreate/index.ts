import {
  BulkCreateLootboxResponseFE,
  BULK_CREATE_LOOTBOX,
  CreateEventResponseFE,
  CreateReferralResponseFE,
  CREATE_EVENT,
  CREATE_REFERRAL,
} from "../../components/EventCreateForm/api.gql";
import {
  MutationBulkCreateLootboxArgs,
  MutationCreateReferralArgs,
  MutationCreateTournamentArgs,
  ReferralType,
} from "../../api/graphql/generated/types";
import { useMutation } from "@apollo/client";
import { EventFE, ReferralFE } from "../../lib/types";

export interface CreateEventPayload {
  title?: string;
  lootboxCount: number;
  lootboxMaxTickets?: number;
  nftBountyValue?: string;
}

export interface CreateEventResponseSuccessFE {
  event: EventFE;
  referral: ReferralFE;
}

const useEventCreate = () => {
  const [createEventMutation, { loading: loadingEventCreate }] = useMutation<
    CreateEventResponseFE,
    MutationCreateTournamentArgs
  >(CREATE_EVENT);

  const [bulkCreateLootboxMutation, { loading: _loadingBulkCreate }] =
    useMutation<BulkCreateLootboxResponseFE, MutationBulkCreateLootboxArgs>(
      BULK_CREATE_LOOTBOX
    );

  const [createReferralMutation, { loading: loadingReferralCreate }] =
    useMutation<CreateReferralResponseFE, MutationCreateReferralArgs>(
      CREATE_REFERRAL
    );

  /**
   * This thing just calls 3 mutations:
   * - create event
   * - bulk create lootboxes
   * - creates a referral code
   *
   * Throws an error on errors
   */
  const createEvent = async (
    payload: CreateEventPayload
  ): Promise<CreateEventResponseSuccessFE> => {
    let createdEvent: EventFE;
    let createdReferral: ReferralFE;

    const eventResponse = await createEventMutation({
      variables: {
        payload: {
          title: payload.title,
        },
      },
    });

    console.log("Created event", eventResponse);

    if (
      eventResponse?.data?.createTournament?.__typename ===
      "CreateTournamentResponseSuccess"
    ) {
      createdEvent = {
        id: eventResponse.data.createTournament.tournament.id,
        title: eventResponse.data.createTournament.tournament.title,
      };
    } else {
      throw new Error("An error occured!");
    }

    const referralResponse = await createReferralMutation({
      variables: {
        payload: {
          type: ReferralType.Genesis,
          tournamentId: createdEvent.id,
        },
      },
    });

    if (
      !referralResponse?.data?.createReferral ||
      referralResponse.data.createReferral.__typename === "ResponseError"
    ) {
      throw new Error("An error occured!");
    }

    createdReferral = {
      id: referralResponse.data.createReferral.referral.id,
      slug: referralResponse.data.createReferral.referral.slug,
    };

    const bulkCreateLootboxPayload = Array.from({
      length: payload.lootboxCount,
    }).map((_, i) => ({
      tournamentID: createdEvent.id,
      maxTickets: payload.lootboxMaxTickets
        ? Math.round(payload.lootboxMaxTickets)
        : undefined,
      nftBountyValue: payload.nftBountyValue,
    }));

    // This takes a little while... so just run it async
    bulkCreateLootboxMutation({
      variables: {
        payload: {
          lootboxes: bulkCreateLootboxPayload,
        },
      },
    });

    return {
      event: createdEvent,
      referral: createdReferral,
    };
  };

  return {
    createEvent,
    loading: loadingEventCreate || loadingReferralCreate,
  };
};

export default useEventCreate;
