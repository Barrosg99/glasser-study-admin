import { DeleteParams, GetListParams, GetOneParams } from "react-admin";
import client from "@/lib/apollo-client";

import { GET_POSTS, GET_POST } from "./graphql/queries";
import { ADMIN_DELETE_POST } from "./graphql/mutation";

export const getList = async (params: GetListParams) => {
  const { data } = await client.query({
    query: GET_POSTS,
  });
  return {
    data: data.adminGetPosts,
    total: data.adminCountPosts,
  };
};

export const getOne = async (params: GetOneParams) => {
  const { data } = await client.query({
    query: GET_POST,
    variables: { id: params.id as string },
  });

  return {
    data: data.adminGetPost,
  };
};

export const remove = async (params: DeleteParams) => {
  const { data } = await client.mutate({
    mutation: ADMIN_DELETE_POST,
    variables: { id: params.id as string },
  });
  return data.adminDeletePost;
};
