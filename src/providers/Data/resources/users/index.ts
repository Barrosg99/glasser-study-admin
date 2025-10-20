import { GetListParams, GetOneParams, UpdateParams } from "react-admin";
import client from "@/lib/apollo-client";

import { GET_USER, GET_USERS } from "./graphql/queries";
import { ADMIN_EDIT_USER } from "./graphql/mutation";

export const getList = async (params: GetListParams) => {
  const { data } = await client.query({
    query: GET_USERS,
  });
  return {
    data: data.adminGetUsers,
    total: data.adminCountUsers,
  };
};

export const getOne = async (params: GetOneParams) => {
  const { data } = await client.query({
    query: GET_USER,
    variables: { id: params.id as string },
  });

  return {
    data: data.adminGetUser,
  };
};

export const update = async (params: UpdateParams) => {
  const { data: updatedData } = await client.mutate({
    mutation: ADMIN_EDIT_USER,
    variables: {
      userId: params.id as string,
      userData: { isAdmin: params.data.isAdmin, blocked: params.data.blocked },
    },
  });

  return {
    data: updatedData.adminEditUser,
  };
};
