import { gql } from "@apollo/client";
import { TournamentID } from "@wormgraph/helpers";

export interface ViewTournamentAsOrganizerResponseFE {
  viewTournamentAsOrganizer:
    | {
        __typename: "ViewTournamentAsOrganizerResponseSuccess";
        tournament: {
          id: TournamentID;
          title: string;
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

export const VIEW_TOURNAMENT_AS_ORGANIZER = gql`
  query ViewTournamentAsOrganizer($tournamentID: ID!) {
    viewTournamentAsOrganizer(tournamentID: $tournamentID) {
      ... on ViewTournamentAsOrganizerResponseSuccess {
        tournament {
          id
          title
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
