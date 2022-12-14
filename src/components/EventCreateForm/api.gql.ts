import { gql } from "@apollo/client";

export interface CreateEventResponseFE {
  createTournament:
    | {
        tournament: {
          id: string;
          title: string;
        };
        __typename: "CreateTournamentResponseSuccess";
      }
    | {
        error: {
          code: string;
          message: string;
        };
        __typename: "ResponseError";
      };
}

export const CREATE_EVENT = gql`
  mutation Mutation($payload: CreateTournamentPayload!) {
    createTournament(payload: $payload) {
      ... on CreateTournamentResponseSuccess {
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
