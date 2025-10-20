import { gql } from "@apollo/client";

const userFields = `id
      name
      email
      goal
      isAdmin
      blocked
      createdAt
      updatedAt
`;

const GET_USERS = gql`
  query GetUsers {
    adminGetUsers {
      ${userFields}
    }
    adminCountUsers
  }
`;

const GET_USER = gql`
  query GetUser($id: ID!) {
    adminGetUser(id: $id) {
      ${userFields}
    }
  }
`;

export { GET_USERS, GET_USER };
