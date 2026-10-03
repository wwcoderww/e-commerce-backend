import express from "express";
import { productsRouter } from "./modules/products/products.routes.js";
// Variables
const app = express();
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productsRouter);

export default app;
