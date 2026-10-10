import { Router } from "express";
import { getCartById, postCart } from "../controllers/cartController.js";

const router = Router();

router.get("/:id", getCartById);
router.post("/", postCart);

export { router as cartRouter };
