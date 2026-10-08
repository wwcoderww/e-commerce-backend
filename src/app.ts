import express from "express";
import { productsRouter } from "./modules/products/products.routes.js";
import cors from "cors";
import { auth } from "./lib/auth.js";
import { toNodeHandler } from "better-auth/node";
const app = express();
app.set("trust proxy", true);
// Middlewares
app.use(
  cors({
    origin: ["http://localhost:3000", process.env.FRONTEND_URL].filter(
      Boolean,
    ) as string[],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["set-auth-token"],
    credentials: true,
  }),
);
app.options("*splat", cors());

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productsRouter);

export default app;
