import client from "@/lib/apollo-client";
import { GetListParams, GetOneParams } from "react-admin";
import { GET_CHAT, GET_CHATS } from "./graphql/queries";

export const getList = async (params: GetListParams) => {
  const { data } = await client.query({
    query: GET_CHATS,
  });
  return {
    data: data.adminGetChats,
    total: data.adminCountChats,
  };
};

export const getOne = async (params: GetOneParams) => {
  const { id } = params;

  const { data } = await client.query({
    query: GET_CHAT,
    variables: { id },
  });
  return { data: data.adminGetChat };
};
