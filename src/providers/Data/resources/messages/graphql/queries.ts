import { gql } from "@apollo/client";

export const GET_MESSAGES = gql`
  query GetMessages($queryMessagesInput: QueryMessagesInput!) {
    adminGetMessages(queryMessagesInput: $queryMessagesInput) {
      id
      content
      isRead
      createdAt
      sender {
        id
        name
      }
    }
    adminCountMessages(queryMessagesInput: $queryMessagesInput)
  }
`;

export const GET_MESSAGE_CHAT = gql`
  query GetMessageChat($id: ID!) {
    adminGetMessage(id: $id) {
      chat {
        id
      }
    }
  }
`;
