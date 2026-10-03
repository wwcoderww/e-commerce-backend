import express from "express";
import { drizzle } from "drizzle-orm/neon-http";
// Variables
const app = express();
const db = drizzle(process.env.NODE_DATABASE_URL!);
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
