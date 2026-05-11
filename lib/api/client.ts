import { ApiError } from "./errors";
import { RequestConfig } from "./types";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8080";

export async function apiClient<T>({
  endpoint,
  method = "GET",
  body,
  headers,
  params,
  signal,
}: RequestConfig): Promise<T> {
  const url = new URL(endpoint, BASE_URL);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("accessToken")
      : null;

  const response = await fetch(url.toString(), {
    method,
    signal,

    headers: {
      "Content-Type": "application/json",

      ...(token && {
        Authorization: `Bearer ${token}`,
      }),

      ...headers,
    },

    body:
      body !== undefined
        ? JSON.stringify(body)
        : undefined,
  });

  let data: unknown = null;

  const contentType =
    response.headers.get("content-type");

  if (contentType?.includes("application/json")) {
    data = await response.json();
  }

  if (!response.ok) {
    throw new ApiError(
      (data as any)?.message ||
        `Request failed with status ${response.status}`,
      response.status,
      data
    );
  }

  return data as T;
}