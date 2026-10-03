import nextEnv from "@next/env";
import configPromise from "../src/payload.config.ts";
import { generateImportMap } from "payload";

const { loadEnvConfig } = nextEnv;

loadEnvConfig(process.cwd());

const config = await configPromise;
await generateImportMap(config);
