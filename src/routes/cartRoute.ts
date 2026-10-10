import { Router } from "express";
import { getCartById } from "../controllers/cartController.js";

const router = Router();

router.get("/:id", getCartById);

export { router as cartRouter };
