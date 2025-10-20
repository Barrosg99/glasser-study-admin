import { gql } from "@apollo/client";

const ADMIN_DELETE_POST = gql`
  mutation ADMIN_DELETE_POST($id: ID!) {
    adminDeletePost(id: $id) {
      id
      isDeleted
    }
  }
`;

export { ADMIN_DELETE_POST };
