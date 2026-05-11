export const caseKeys = {
  all: ["cases"] as const,

  detail: (id: string) =>
    ["cases", id] as const,

  tips: ["community-tips"] as const,
};