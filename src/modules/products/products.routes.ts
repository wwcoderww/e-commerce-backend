import { Router } from "express";
import {
  deleteProduct,
  putAllProducts,
  readAllProducts,
} from "./products.controller.js";
import { createProductScheme } from "./products.validate.js";
import { validate } from "../../middleware/validate.js";

const router = Router();

router.get("/", readAllProducts);
router.post("/", validate(createProductScheme), putAllProducts);
router.delete("/:id", deleteProduct);

export { router as productsRouter };
