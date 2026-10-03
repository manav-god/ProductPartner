import config from "@payload-config";
import { getPayload, type Payload } from "payload";
import { cache } from "react";

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("cms-timeout")), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error: unknown) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}

export const getCms = cache(async (): Promise<Payload> => {
  return withTimeout(getPayload({ config }), 2500);
});
