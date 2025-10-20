import { gql } from "@apollo/client";

const fields = `
  id
  entity
  entityId
  reason
  user {
    id
    name
  }
  description
  resolvedBy {
    id
    name
  }
  resolvedReason
  status
  createdAt
  updatedAt
`;

export const REPORTS_QUERY = gql`
  query Reports($queryReportsDto: QueryReportsDto) {
    reports(queryReportsDto: $queryReportsDto) {
      ${fields}
    }
    countReports(queryReportsDto: $queryReportsDto)
  }
`;

export const REPORT_QUERY = gql`
  query Report($id: ID!) {
    report(id: $id) {
      ${fields}
    }
  }
`;
