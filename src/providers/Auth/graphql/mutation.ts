import { gql } from "@apollo/client";

const LOG_IN = gql`
  mutation logIn($userLoginData: LoggedUserDto!) {
    login(userLoginData: $userLoginData) {
      token
    }
  }
`;

export { LOG_IN };
