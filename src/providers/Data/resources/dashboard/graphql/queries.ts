import { gql } from "@apollo/client";

export const GET_USER_SUMMARY = gql`
  query adminGetUserSummary($userSummaryInput: UserSummaryInput!) {
    adminGetUserSummary(userSummaryInput: $userSummaryInput) {
      labels
      data
    }
  }
`;

export const GET_POST_SUMMARY = gql`
  query adminGetPostSummary($postSummaryInput: PostSummaryInput!) {
    adminGetPostSummary(postSummaryInput: $postSummaryInput) {
      labels
      data
    }
  }
`;

export const GET_GOAL_SUMMARY = gql`
  query adminGetGoalSummary($goalSummaryInput: GoalSummaryInput!) {
    adminGetGoalSummary(goalSummaryInput: $goalSummaryInput) {
      labels
      data
    }
  }
`;

export const GET_APPLICATION_SUMMARY = gql`
  query adminGetApplicationSummary {
    adminCountUsers
    adminCountPosts
    adminCountGoals
    adminGetPercentageOfCompletedGoals
  }
`;
