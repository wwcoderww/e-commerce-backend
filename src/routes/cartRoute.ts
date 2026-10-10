import { Router } from "express";
import {
  deleteCart,
  getCartById,
  postCart,
  putCart,
} from "../controllers/cartController.js";

const router = Router();

router.get("/:id", getCartById);
router.post("/", postCart);
router.put("/", putCart);
router.delete("/", deleteCart);

export { router as cartRouter };
