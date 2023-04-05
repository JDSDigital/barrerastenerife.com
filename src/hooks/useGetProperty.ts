import { UseQueryOptions, useQuery } from "react-query";

import { Property } from "models/Property";
import { getProperty } from "utils";

export const useGetProperty = (
  identifier: string,
  options?: UseQueryOptions<any, any>
) => {
  const request = useQuery<any, any>(
    ["property", identifier],
    () => getProperty({ identifier }),
    options
  );

  return {
    ...request,
    property: request.data?.data as Property,
  };
};
