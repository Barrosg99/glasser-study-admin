import { gql } from "@apollo/client";

const fields = `
  id
  name
  description
  members {
    user {
      id
      name
    }
    isInvited
    isModerator
  }
  createdAt
  updatedAt
`;

export const GET_CHATS = gql`
  query GetChats {
    adminGetChats {
      ${fields}
    }
    adminCountChats
  }
`;

export const GET_CHAT = gql`
  query GetChat($id: String!) {
    adminGetChat(id: $id) {
      ${fields}
    }
  }
`;
