import { gql } from "@apollo/client";
import { EventFE } from "../../lib/types";

export interface ViewTournamentAsOrganizerResponseFE {
  viewTournamentAsOrganizer:
    | {
        __typename: "ViewTournamentAsOrganizerResponseSuccess";
        tournament: EventFE;
      }
    | {
        __typename: "ResponseError";
        error: {
          code: string;
          message: string;
        };
      };
}

export const VIEW_TOURNAMENT_AS_ORGANIZER = gql`
  query ViewTournamentAsOrganizer($tournamentID: ID!) {
    viewTournamentAsOrganizer(tournamentID: $tournamentID) {
      ... on ViewTournamentAsOrganizerResponseSuccess {
        tournament {
          id
          title
          inviteMetadata {
            slug
            playerDestinationURL
            promoterDestinationURL
            maxPlayerLootbox
            maxPromoterLootbox
          }
          timestamps {
            createdAt
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
