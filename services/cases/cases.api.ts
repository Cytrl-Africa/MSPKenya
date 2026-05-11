import { apiClient } from "@/lib/api/client";

import {
  ApiResponse,
  Case,
  CreateCaseDto,
  CreateCommunityTipDto,
} from "./cases.types";

export const getCases = (
  signal?: AbortSignal
) => {
  return apiClient<ApiResponse<Case[]>>({
    endpoint: "/cases",
    method: "GET",
    signal,
  });
};

export const createCase = (
  dto: CreateCaseDto
) => {
  return apiClient<ApiResponse<Case>>({
    endpoint: "/cases",
    method: "POST",
    body: dto,
  });
};

export const createCommunityTip = (
  dto: CreateCommunityTipDto
) => {
  return apiClient<ApiResponse<null>>({
    endpoint: "/cases/community-tips",
    method: "POST",
    body: dto,
  });
};