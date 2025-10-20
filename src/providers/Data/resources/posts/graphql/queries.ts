import { gql } from "@apollo/client";

const postFields = `
  id
  title
  subject
  description
  tags
  materials {
    name
    link
    type
  }
  author {
    id
    name
    email
  }
  likesCount
  commentsCount
  isDeleted
  createdAt
  updatedAt
`;

export const GET_POSTS = gql`
  query GetPosts {
    adminGetPosts {
      ${postFields}
    }
    adminCountPosts
  }
`;

export const GET_POST = gql`
  query GetPost($id: ID!) {
    adminGetPost(id: $id) {
      ${postFields}
    }
  }
`;
