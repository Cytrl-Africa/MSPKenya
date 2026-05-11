import { useQuery } from "@tanstack/react-query";

import { getCases } from "./cases.api";
import { caseKeys } from "./cases.keys";

export const useCases = () => {
  return useQuery({
    queryKey: caseKeys.all,

    queryFn: ({ signal }) =>
      getCases(signal),

    select: (response) =>
      response.payload,
  });
};