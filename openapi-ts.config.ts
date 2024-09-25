import { defineConfig } from "@hey-api/openapi-ts";

const API_URL = process.env.API_URL || "http://185.65.244.112:8000/";
// const API_URL = process.env.API_URL || "http://localhost:8000/";

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
