export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE";

export interface RequestConfig {
  endpoint: string;
  method?: HttpMethod;
  body?: unknown;
  headers?: HeadersInit;
  params?: Record<string, string | number | boolean>;
  signal?: AbortSignal;
}