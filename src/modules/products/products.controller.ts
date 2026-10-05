import { Request, Response } from "express";
import { ProductsService } from "./products.service.js";

export const readAllProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await ProductsService.read();
    res.status(200).json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const putAllProducts = async (req: Request, res: Response) => {
  try {
    const data = await ProductsService.create(req.body);
    res.status(200).json({ sucess: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
