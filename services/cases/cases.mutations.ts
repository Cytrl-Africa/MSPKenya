import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createCase,
  createCommunityTip,
} from "./cases.api";

import { caseKeys } from "./cases.keys";

export const useCreateCase = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCase,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: caseKeys.all,
      });
    },
  });
};

export const useCreateCommunityTip =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: createCommunityTip,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: caseKeys.all,
        });
      },
    });
  };