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
    return res.status(200).json({ sucess: true, data });
  } catch (error: any) {
    console.log(error);
    // If name is unique
    if (error?.cause?.code === "23505") {
      return res.status(400).json({
        status: "fail",
        errors: [
          {
            field: "name",
            message: "This product name is already in use.",
          },
        ],
      });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deleteID = Number(req.params.id);
    const result = await ProductsService.delete(deleteID);
    console.log(result);
    return res.status(200).json({ status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedItem = req.body;
    const result = await ProductsService.update(updatedItem);
    console.log(result);
    return res.status(200).json({ status: "success", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
