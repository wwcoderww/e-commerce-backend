import { Router } from "express";
import { readAllProducts } from "./products.controller.js";

const router = Router();

router.get("/", readAllProducts);

export { router as productsRouter };
