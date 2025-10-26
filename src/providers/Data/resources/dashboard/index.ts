import client from "@/lib/apollo-client";
import {
  GET_POST_SUMMARY,
  GET_GOAL_SUMMARY,
  GET_USER_SUMMARY,
  GET_APPLICATION_SUMMARY,
} from "./graphql/queries";

export const getUserSummary = async (period: string) => {
  const { data } = await client.query({
    query: GET_USER_SUMMARY,
    variables: { userSummaryInput: { period } },
  });

  return data.adminGetUserSummary;
};

export const getPostSummary = async (period: string) => {
  const { data } = await client.query({
    query: GET_POST_SUMMARY,
    variables: { postSummaryInput: { period } },
  });

  return data.adminGetPostSummary;
};

export const getGoalSummary = async (period: string) => {
  const { data } = await client.query({
    query: GET_GOAL_SUMMARY,
    variables: { goalSummaryInput: { period } },
  });

  return data.adminGetGoalSummary;
};

export const getApplicationSummary = async () => {
  const { data } = await client.query({
    query: GET_APPLICATION_SUMMARY,
  });

  return data;
};
