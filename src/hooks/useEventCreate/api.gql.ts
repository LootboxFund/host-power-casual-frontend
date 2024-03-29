import { gql } from "@apollo/client";
import { ReferralID, ReferralSlug } from "@wormgraph/helpers";
import { EventFE } from "../../lib/types";

export interface CreateEventResponseFE {
  createTournament:
    | {
        tournament: EventFE;
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

export interface BulkCreateLootboxResponseFE {
  bulkCreateLootbox:
    | {
        lootboxes: {
          name: string;
          id: string;
        }[];
        partialErrors: {
          error: string;
        }[];
        __typename: "BulkCreateLootboxResponseSuccess";
      }
    | {
        error: {
          message: string;

          code: string;
        };
        __typename: "ResponseError";
      };
}

export const BULK_CREATE_LOOTBOX = gql`
  mutation BulkCreateLootbox($payload: BulkCreateLootboxPayload!) {
    bulkCreateLootbox(payload: $payload) {
      ... on BulkCreateLootboxResponseSuccess {
        lootboxes {
          name
          id
        }
        partialErrors {
          error
        }
      }
      ... on ResponseError {
        error {
          message
          code
        }
      }
    }
  }
`;

export interface CreateReferralResponseFE {
  createReferral:
    | {
        referral: {
          id: ReferralID;
          slug: ReferralSlug;
        };
        __typename: "CreateReferralResponseSuccess";
      }
    | {
        error: {
          code: string;
          message: string;
        };
        __typename: "ResponseError";
      };
}

export const CREATE_REFERRAL = gql`
  mutation Mutation($payload: CreateReferralPayload!) {
    createReferral(payload: $payload) {
      ... on CreateReferralResponseSuccess {
        referral {
          id
          slug
        }
      }
      ... on ResponseError {
        error {
          message
          code
        }
      }
    }
  }
`;
