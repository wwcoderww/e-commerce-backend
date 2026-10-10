import { Router } from "express";
import {
  deleteProduct,
  postProduct,
  getAllProducts,
  putProduct,
} from "../controllers/productsController.js";
import {
  createProductScheme,
  updateProductScheme,
} from "../schema/productsScheme.js";
import { validate } from "../middleware/validate.js";

const router = Router();

router.get("/", getAllProducts);
router.post("/", validate(createProductScheme), postProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", validate(updateProductScheme), putProduct);

export { router as productsRouter };
