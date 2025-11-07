import { resolve } from "path";

const codes: Record<number, string> = {
  200: "success",
};

export function getResponse<T>(code: number, data: T) {
  return {
    code,
    data,
    message: codes[code] || "fetch error",
  };
}

export function waitTime(time = 1000) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
