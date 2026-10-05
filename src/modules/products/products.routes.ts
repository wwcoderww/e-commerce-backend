import { Router } from "express";
import { putAllProducts, readAllProducts } from "./products.controller.js";
import { createProductScheme } from "./products.validate.js";
import { validate } from "../../middleware/validate.js";

const router = Router();

router.get("/", readAllProducts);
router.post("/", validate(createProductScheme), putAllProducts);

export { router as productsRouter };
