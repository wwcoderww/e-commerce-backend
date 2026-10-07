import express from "express";
import { productsRouter } from "./modules/products/products.routes.js";
import cors from "cors";
import { auth } from "./lib/auth.js";
import { toNodeHandler } from "better-auth/node";
// Variables
const app = express();
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:3000", // For local development
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use("/api/products", productsRouter);
app.use("/api/auth/*", (req, res) => {
  return toNodeHandler(auth)(req, res);
});
export default app;
