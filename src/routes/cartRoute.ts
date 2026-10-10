import { Router } from "express";
import {
  getCartById,
  postCart,
  putCart,
} from "../controllers/cartController.js";

const router = Router();

router.get("/:id", getCartById);
router.post("/", postCart);
router.put("/", putCart);

export { router as cartRouter };
