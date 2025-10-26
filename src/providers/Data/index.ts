import {
  CreateParams,
  CreateResult,
  DataProvider,
  DeleteManyParams,
  DeleteManyResult,
  DeleteParams,
  DeleteResult,
  GetListParams,
  GetListResult,
  GetManyParams,
  GetManyReferenceParams,
  GetManyReferenceResult,
  GetManyResult,
  GetOneParams,
  GetOneResult,
  UpdateManyParams,
  UpdateManyResult,
  UpdateParams,
  UpdateResult,
} from "react-admin";

import resources from "./resources";

export interface DataProviderWithCustomMethods extends DataProvider {
  getSummary: (
    resource: string,
    period: string
  ) => Promise<{ data: number[]; labels: string[] }>;
}

const dataProvider: DataProviderWithCustomMethods = {
  getList: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    if (resource && resources[resource as keyof typeof resources]) {
      const resourceData = resources[resource as keyof typeof resources];
      if (
        "getList" in resourceData &&
        typeof resourceData.getList === "function"
      ) {
        return resourceData.getList(params);
      }
    }
    return {
      data: [],
      total: 0,
    };
  },
  getOne: async (
    resource: string,
    params: GetOneParams
  ): Promise<GetOneResult> => {
    if (resource && resources[resource as keyof typeof resources]) {
      const resourceData = resources[resource as keyof typeof resources];
      if (
        "getOne" in resourceData &&
        typeof resourceData.getOne === "function"
      ) {
        return resourceData.getOne(params);
      }
    }
    return {
      data: {},
    };
  },
  getMany: async (
    resource: string,
    params: GetManyParams
  ): Promise<GetManyResult> => {
    return {
      data: [],
    };
  },
  getManyReference: async (
    resource: string,
    params: GetManyReferenceParams
  ): Promise<GetManyReferenceResult> => {
    return {
      data: [],
    };
  },
  create: async (
    resource: string,
    params: CreateParams
  ): Promise<CreateResult> => {
    return {
      data: {},
    };
  },
  update: async (
    resource: string,
    params: UpdateParams
  ): Promise<UpdateResult> => {
    if (resource && resources[resource as keyof typeof resources]) {
      const resourceData = resources[resource as keyof typeof resources];
      if (
        "update" in resourceData &&
        typeof resourceData.update === "function"
      ) {
        return resourceData.update(params);
      }
    }
    return {
      data: {},
    };
  },
  updateMany: async (
    resource: string,
    params: UpdateManyParams
  ): Promise<UpdateManyResult> => {
    return {
      data: [],
    };
  },
  delete: async (
    resource: string,
    params: DeleteParams
  ): Promise<DeleteResult> => {
    if (resource && resources[resource as keyof typeof resources]) {
      const resourceData = resources[resource as keyof typeof resources];
      if (
        "remove" in resourceData &&
        typeof resourceData.remove === "function"
      ) {
        return resourceData.remove(params);
      }
    }
    return {
      data: {},
    };
  },
  deleteMany: async (
    resource: string,
    params: DeleteManyParams
  ): Promise<DeleteManyResult> => {
    return {
      data: [],
    };
  },
  getSummary: async (
    resource: string,
    period: string
  ): Promise<{ data: number[]; labels: string[] }> => {
    if (resource === "users") {
      return resources.dashboard.getUserSummary(period);
    }
    if (resource === "posts") {
      return resources.dashboard.getPostSummary(period);
    }
    if (resource === "goals") {
      return resources.dashboard.getGoalSummary(period);
    }
    if (resource === "application") {
      return resources.dashboard.getApplicationSummary();
    }

    return Promise.reject(`Resource ${resource} not found`);
  },
};

export default dataProvider;
