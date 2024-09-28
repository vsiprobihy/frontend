import { defineConfig } from "@hey-api/openapi-ts";

const API_URL = process.env.BASE_URL;

export default defineConfig({
  client: "@hey-api/client-fetch",
  input: `${API_URL}/swagger/?format=openapi`,
  output: {
    lint: "eslint",
    format: "prettier",
    path: "app/api-client",
  },
  types: {
    dates: true,
    enums: "typescript",
  },
});
