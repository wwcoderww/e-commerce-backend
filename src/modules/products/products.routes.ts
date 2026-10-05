import { Router } from "express";
import { putAllProducts, readAllProducts } from "./products.controller.js";

const router = Router();

router.get("/", readAllProducts);
router.post("/", putAllProducts);

export { router as productsRouter };
