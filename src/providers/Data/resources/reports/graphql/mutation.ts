import { gql } from "@apollo/client";

export const RESOLVE_REPORT_MUTATION = gql`
  mutation ResolveReport($id: ID!, $status: String!, $resolvedReason: String!) {
    resolveReport(id: $id, status: $status, resolvedReason: $resolvedReason) {
      id
      status
      resolvedReason
    }
  }
`;
