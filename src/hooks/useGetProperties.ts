import { UseQueryOptions, useQuery } from "react-query";

import { Property } from "models/Property";
import { Search } from "models/Search";
import { getPropertyList } from "utils";

type GetPropertiesParams = {
  page?: number;
  tags?: string[];
  filter?: Search;
};

export const useGetProperties = (
  { page = 1, tags = [], filter }: GetPropertiesParams,
  options?: UseQueryOptions<any, any>
) => {
  const request = useQuery<any, any>(
    ["properties", [page, tags, filter]],
    () =>
      getPropertyList({ page, tags: tags.length > 0 ? tags : [], ...filter }),
    options
  );

  return {
    ...request,
    response: request.data,
    properties: request.data?.data?.results as Property[],
  };
};
