import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: ["./src/db/schema.ts", "./src/lib/auth-schema.ts"],
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NODE_DATABASE_URL!,
  },
});
