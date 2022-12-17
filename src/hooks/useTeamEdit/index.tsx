import {
  CreateLootboxResponseSuccessFE,
  CREATE_LOOTBOX,
  BulkEditLootboxTournamentSnapshotsResponseFE,
  BULK_EDIT_LOOTBOX_TOURNAMENT_SNAPSHOTS,
} from "./api.gql";
import { useMutation } from "@apollo/client";
import {
  MutationBulkEditLootboxTournamentSnapshotsArgs,
  MutationCreateLootboxArgs,
} from "../../api/graphql/generated/types";
import { LootboxTournamentSnapshotID, TournamentID } from "@wormgraph/helpers";

export interface AddTeamPayload {
  eventID: TournamentID;
  teamName?: string;
}

export interface RemoveTeamPayload {
  eventID: TournamentID;
  lootboxTournamentSnapshotID: LootboxTournamentSnapshotID;
}

const useTeamEdit = () => {
  const [createLootboxMutation] = useMutation<
    CreateLootboxResponseSuccessFE,
    MutationCreateLootboxArgs
  >(CREATE_LOOTBOX);

  const [bulkEdit] = useMutation<
    BulkEditLootboxTournamentSnapshotsResponseFE,
    MutationBulkEditLootboxTournamentSnapshotsArgs
  >(BULK_EDIT_LOOTBOX_TOURNAMENT_SNAPSHOTS);

  const addTeam = async (payload: AddTeamPayload): Promise<void> => {
    const { data } = await createLootboxMutation({
      variables: {
        payload: {
          tournamentID: payload.eventID,
          name: payload.teamName,
        },
      },
    });

    if (!data?.createLootbox || !("lootbox" in data?.createLootbox)) {
      throw new Error("An error occured!");
    }

    return;
  };

  const removeTeam = async (payload: RemoveTeamPayload): Promise<void> => {
    const { data } = await bulkEdit({
      variables: {
        payload: {
          lootboxSnapshotIDs: [payload.lootboxTournamentSnapshotID],
          tournamentID: payload.eventID,
          delete: true,
        },
      },
    });

    if (
      !data?.bulkEditLootboxTournamentSnapshots ||
      data.bulkEditLootboxTournamentSnapshots.__typename === "ResponseError"
    ) {
      throw new Error("Failed to remove team");
    }

    return;
  };

  return {
    addTeam,
    removeTeam,
  };
};

export default useTeamEdit;
