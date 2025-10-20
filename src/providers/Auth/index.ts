import { AuthProvider } from "react-admin";

import { getUser, setUser, removeUser } from "./helpers";
import { logIn } from "./graphql";

const authProvider: AuthProvider = {
  async login(params: { username: string; password: string }) {
    const { username, password } = params;
    const data = await logIn({
      userLoginData: { email: username, password: password },
    });
    setUser(data.login.token);
  },

  async checkError(params: { status: number }) {
    const { status } = params;
    if (status === 401 || status === 403) {
      removeUser();
      throw new Error("Session expired");
    }
  },

  async checkAuth() {
    const token = getUser();
    if (!token) {
      throw new Error("Session expired");
    }
  },

  async logout() {
    removeUser();
  },
};

export default authProvider;
