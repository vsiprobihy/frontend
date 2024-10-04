import { defineConfig } from "@hey-api/openapi-ts";
import dotenv from "dotenv";

dotenv.config();

const API_URL = process.env.BASE_URL;

export default defineConfig({
  client: "@hey-api/client-fetch",
  input: `${API_URL}/swagger/?format=openapi`,
  output: {
    lint: "eslint",
    format: "prettier",
    path: "src/app/api-client",
  },
  types: {
    dates: true,
    enums: "typescript",
  },
});
