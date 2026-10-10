import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db } from "../db/index.js";
import { admin, bearer } from "better-auth/plugins";
import * as authSchema from "../db/schema/auth.js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: authSchema,
  }),
  emailAndPassword: { enabled: true },
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:5000",
  trustedOrigins: [
    "http://localhost:3000",
    process.env.FRONTEND_URL || "",
  ].filter(Boolean),
  advanced: {
    trustedProxyHeaders: true,
    crossSubDomainCookies: {
      enabled: true,
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "user",
        input: false,
      },
    },
  },
  plugins: [admin(), bearer()],
});
