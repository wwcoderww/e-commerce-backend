import { db } from "../../db/index.js";
import { productsTable } from "../../db/schema.js";

export const ProductsService = {
  async read() {
    const allProducts = await db.select().from(productsTable);
    return allProducts;
  },
};
