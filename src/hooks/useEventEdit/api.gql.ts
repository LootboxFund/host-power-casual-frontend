import { gql } from "@apollo/client";
import { LootboxID } from "@wormgraph/helpers";
import { EventFE } from "../../lib/types";

export interface EditEventResponseFE {
  editTournament:
    | {
        tournament: EventFE;
        __typename: "EditTournamentResponseSuccess";
      }
    | {
        error: {
          code: string;
          message: string;
        };
        __typename: "ResponseError";
      };
}

export const EDIT_EVENT = gql`
  mutation EditTournament($payload: EditTournamentPayload!) {
    editTournament(payload: $payload) {
      ... on EditTournamentResponseSuccess {
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

export interface EditLootboxResponseSuccessFE {
  editLootbox:
    | {
        __typename: "EditLootboxResponseSuccess";
        lootbox: {
          id: LootboxID;
          nftBountyValue: string;
          name: string;
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

export const EDIT_LOOTBOX = gql`
  mutation Mutation($payload: EditLootboxPayload!) {
    editLootbox(payload: $payload) {
      ... on EditLootboxResponseSuccess {
        lootbox {
          id
          nftBountyValue
          name
          maxTickets
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
