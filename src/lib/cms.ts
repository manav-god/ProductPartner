import config from "@payload-config";
import { getPayload, type Payload } from "payload";
import { cache } from "react";

export const getCms = cache(async (): Promise<Payload> => {
  return getPayload({ config });
});
