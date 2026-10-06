import express from "express";
import { productsRouter } from "./modules/products/products.routes.js";
import cors from "cors";
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

export default app;
