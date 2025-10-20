import { gql } from "@apollo/client";

const ADMIN_EDIT_USER = gql`
  mutation AdminEditUser($userData: AdminEditUserDto!, $userId: ID!) {
    adminEditUser(userData: $userData, userId: $userId) {
      id
      name
      email
      isAdmin
      blocked
    }
  }
`;

export { ADMIN_EDIT_USER };
