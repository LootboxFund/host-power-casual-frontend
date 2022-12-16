import { createContext } from "react";
import { LootboxID, ReferralSlug, TournamentID } from "@wormgraph/helpers";
import {
  EditEventResponseFE,
  EDIT_EVENT,
  EditLootboxResponseSuccessFE,
  EDIT_LOOTBOX,
} from "./api.gql";
import {
  MutationBulkCreateLootboxArgs,
  MutationCreateReferralArgs,
  MutationCreateTournamentArgs,
  MutationEditLootboxArgs,
  MutationEditTournamentArgs,
  ReferralType,
} from "../../api/graphql/generated/types";
import { useMutation } from "@apollo/client";
import { EventFE, LootboxFE } from "../../lib/types";

export interface EditLootboxPayload {
  id: LootboxID;
  name?: string;
  // These will be the same for all elements in the array
  nftBountyValue?: string;
  maxTickets?: number;
}

export interface EditEventPayload {
  id: TournamentID;
  title?: string;
  lootboxes?: EditLootboxPayload[];
}

export interface EditEventResponseSuccessFE {
  event: EventFE;
  lootboxes: LootboxFE[];
}

const useEventEdit = () => {
  const [editEventMutation, { loading: loadingEventEdit }] = useMutation<
    EditEventResponseFE,
    MutationEditTournamentArgs
  >(EDIT_EVENT);

  const [editLootboxMutation, { loading: loadingLootboxEdit }] = useMutation<
    EditLootboxResponseSuccessFE,
    MutationEditLootboxArgs
  >(EDIT_LOOTBOX);

  /**
   * Updates event + lootboxes for event
   *
   * Throws if an error
   */
  const editEvent = async (
    payload: EditEventPayload
  ): Promise<EditEventResponseSuccessFE> => {
    const shouldUpdateEventBody: boolean = !!payload.title;
    const shouldUpdateLootboxes: boolean = !!payload.lootboxes?.length;

    if (!shouldUpdateEventBody && !shouldUpdateLootboxes) {
      throw new Error("Nothing to change");
    }

    if (shouldUpdateEventBody) {
      const eventPayload: MutationEditTournamentArgs = {
        payload: {
          id: payload.id,
          title: payload.title,
        },
      };

      // Update the event
      const eventResponse = await editEventMutation({
        variables: eventPayload,
      });

      if (
        !eventResponse?.data?.editTournament ||
        eventResponse.data.editTournament.__typename === "ResponseError"
      ) {
        throw new Error("An error occured!");
      }

      // Now update the lootboxes
      const lootboxResponse = await Promise.all(
        payload?.lootboxes?.map(async (lootbox) => {
          const lootboxPayload: MutationEditLootboxArgs = {
            payload: {
              lootboxID: lootbox.id,
              name: lootbox.name,
              nftBountyValue: lootbox.nftBountyValue,
              maxTickets: lootbox.maxTickets,
            },
          };

          return editLootboxMutation({
            variables: lootboxPayload,
          });
        }) || []
      );

      if (
        lootboxResponse.some((res) => {
          return (
            !res?.data?.editLootbox ||
            res.data.editLootbox.__typename === "ResponseError"
          );
        })
      ) {
        throw new Error("An error occured!");
      }
    }

    return {} as EditEventResponseSuccessFE; // TEMP HACK
    // return {
    //   event: {
    //     id: eventResponse.data.editTournament.tournament.id,
    //     title: eventResponse.data.editTournament.tournament.title,
    //   },
    //   lootboxes: [],
    //   // lootboxes: lootboxResponse
    //   //   .filter(
    //   //     (res) =>
    //   //       !!res?.data &&
    //   //       res.data.editLootbox.__typename === "EditLootboxResponseSuccess"
    //   //   )
    //   //   .map((res) => {
    //   //     return {
    //   //       id: res!.data!.editLootbox.lootbox.id,
    //   //       name: res!.data!.editLootbox.lootbox.name,
    //   //       nftBountyValue: res!.data!.editLootbox.lootbox.nftBountyValue,
    //   //       maxTickets: res!.data!.editLootbox.lootbox.maxTickets,
    //   //     };
    //   //   }),
    // };
  };

  return {
    editEvent,
    loading: loadingEventEdit || loadingLootboxEdit,
  };
};

export default useEventEdit;
