import { Router } from "express";
import {
  deleteProduct,
  putAllProducts,
  readAllProducts,
  updateProduct,
} from "./products.controller.js";
import {
  createProductScheme,
  updateProductScheme,
} from "./products.validate.js";
import { validate } from "../../middleware/validate.js";

const router = Router();

router.get("/", readAllProducts);
router.post("/", validate(createProductScheme), putAllProducts);
router.delete("/:id", deleteProduct);
router.put("/:id", validate(updateProductScheme), updateProduct);

export { router as productsRouter };
