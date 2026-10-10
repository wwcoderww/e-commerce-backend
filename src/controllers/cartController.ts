import { Request, Response } from "express";
import { Cart } from "../modules/Cart.js";

export async function getCartById(req: Request, res: Response) {
  try {
    const reqId = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;
    const results = await Cart.read(reqId);
    // No items found matching users ID
    if (results.length === 0)
      return res
        .status(404)
        .json({ success: "fail", error: "No items found matching ID" });
    // Items found
    return res.status(200).json({ success: "success", data: results });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ success: "fail", error: error?.message });
  }
}

export async function putCart(req: Request, res: Response) {
  try {
    const data = await Cart.update(req.body);
    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ success: "fail", error: error?.message });
  }
}

export async function postCart(req: Request, res: Response) {
  try {
    const result = await Cart.create(req.body);
    return res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    if (error.message.code === "23505") return putCart(req, res);
    console.log(error);
    return res.status(500).json({ success: "fail", error: error?.message });
  }
}
