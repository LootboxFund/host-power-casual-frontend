import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation Mutation($payload: CreateUserRecordPayload!) {
    createUserRecord(payload: $payload) {
      ... on CreateUserResponseSuccess {
        user {
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
