import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: ["./src/db/schema/products.ts", "./src/db/schema/auth.ts", "./src/db/schema/carts.ts"],
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NODE_DATABASE_URL!,
  },
});
