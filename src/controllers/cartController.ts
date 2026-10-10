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
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: "fail", error: "Internal server error" });
  }
}
