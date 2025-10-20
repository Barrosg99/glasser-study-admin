import client from "@/lib/apollo-client";
import { GetListParams } from "react-admin";
import { GET_MESSAGES, GET_MESSAGE_CHAT } from "./graphql/queries";

export const getList = async (params: GetListParams) => {
  const { chatId, messageId } = params.filter;
  const { page, perPage } = params.pagination!;

  const limit = perPage;
  const skip = (page - 1) * perPage;

  const { data } = await client.query({
    query: GET_MESSAGES,
    variables: {
      queryMessagesInput: {
        chatId,
        messageId,
        limit,
        skip,
      },
    },
  });
  return {
    data: data.adminGetMessages,
    total: data.adminCountMessages,
  };
};

export const getMessageChat = async (id: string) => {
  const { data } = await client.query({
    query: GET_MESSAGE_CHAT,
    variables: { id },
  });

  return data.adminGetMessage;
};
