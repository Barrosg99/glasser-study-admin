import { GetListParams, GetOneParams, UpdateParams } from "react-admin";
import client from "@/lib/apollo-client";

import { REPORTS_QUERY, REPORT_QUERY } from "./graphql/queries";
import { RESOLVE_REPORT_MUTATION } from "./graphql/mutation";

export const getList = async (params: GetListParams) => {
  const { data } = await client.query({
    query: REPORTS_QUERY,
    variables: { queryReportsDto: params.filter },
  });
  return {
    data: data.reports,
    total: data.countReports,
  };
};

export const getOne = async (params: GetOneParams) => {
  const { data } = await client.query({
    query: REPORT_QUERY,
    variables: { id: params.id as string },
  });

  return {
    data: data.report,
  };
};

export const update = async (params: UpdateParams) => {
  const { data } = await client.mutate({
    mutation: RESOLVE_REPORT_MUTATION,
    variables: {
      id: params.id,
      status: params.data.status,
      resolvedReason: params.data.resolvedReason,
    },
  });

  return {
    data: data.resolveReport,
  };
};
