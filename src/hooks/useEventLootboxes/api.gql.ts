import { gql } from "@apollo/client";
import {
  LootboxID,
  LootboxTournamentSnapshotID,
  TournamentID,
} from "@wormgraph/helpers";

export interface ViewEventLootboxesAsOrganizerResponseFE {
  viewTournamentAsOrganizer:
    | {
        __typename: "ViewTournamentAsOrganizerResponseSuccess";
        tournament: {
          lootboxSnapshots: {
            id: LootboxTournamentSnapshotID;
            lootbox: {
              id: LootboxID;
              name: string;
              nftBountyValue: string;
              maxTickets: number;
              stampImage: string;
            };
          }[];
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

export const VIEW_EVENT_LOOTBOXES_AS_ORGANIZER = gql`
  query ViewTournamentAsOrganizer($tournamentID: ID!) {
    viewTournamentAsOrganizer(tournamentID: $tournamentID) {
      ... on ViewTournamentAsOrganizerResponseSuccess {
        tournament {
          lootboxSnapshots {
            id
            lootbox {
              id
              name
              nftBountyValue
              maxTickets
              stampImage
            }
          }
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
