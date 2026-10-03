import { drizzle } from "drizzle-orm/neon-http";

export const db = drizzle(process.env.NODE_DATABASE_URL!);
