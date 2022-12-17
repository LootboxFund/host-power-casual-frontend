import { gql } from "@apollo/client";
import { LootboxID, LootboxTournamentSnapshotID } from "@wormgraph/helpers";

export interface CreateLootboxResponseSuccessFE {
  createLootbox:
    | {
        __typename: "CreateLootboxResponseSuccess";
        lootbox: {
          id: LootboxID;
        };
      }
    | {
        __typename: "ResponseError";
        error: {
          code: string;
          message: string;
        };
      };
}

export const CREATE_LOOTBOX = gql`
  mutation CreateLootbox($payload: CreateLootboxPayload!) {
    createLootbox(payload: $payload) {
      ... on CreateLootboxResponseSuccess {
        lootbox {
          id
        }
      }
      ... on ResponseError {
        error {
          code
          message
        }
      }
    }
  }
`;

export interface BulkEditLootboxTournamentSnapshotsResponseFE {
  bulkEditLootboxTournamentSnapshots:
    | {
        __typename: "BulkEditLootboxTournamentSnapshotsResponseSuccess";
        lootboxTournamentSnapshotIDs: string[];
      }
    | {
        __typename: "ResponseError";
        error: {
          code: string;
          message: string;
        };
      };
}

export const BULK_EDIT_LOOTBOX_TOURNAMENT_SNAPSHOTS = gql`
  mutation BulkEditLootboxTournamentSnapshots(
    $payload: BulkEditLootboxTournamentSnapshotsPayload!
  ) {
    bulkEditLootboxTournamentSnapshots(payload: $payload) {
      ... on BulkEditLootboxTournamentSnapshotsResponseSuccess {
        lootboxTournamentSnapshotIDs
      }
      ... on ResponseError {
        error {
          code
          message
        }
      }
    }
  }
`;
