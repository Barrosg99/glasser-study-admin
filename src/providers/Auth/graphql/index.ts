import client from "@/lib/apollo-client";
import { LOG_IN } from "./mutation";

const logIn = async (param: {
  userLoginData: { email: string; password: string };
}) => {
  try {
    const { data } = await client.mutate({
      mutation: LOG_IN,
      variables: param,
      context: {
        headers: {
          from: "admin",
        },
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
};

export { logIn };
