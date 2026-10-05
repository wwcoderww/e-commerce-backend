import { db } from "../../db/index.js";
import { NewProduct, productsTable } from "../../db/schema.js";

export const ProductsService = {
  async read() {
    const allProducts = await db.select().from(productsTable);
    return allProducts;
  },

  async create(data: NewProduct) {
    const [result] = await db.insert(productsTable).values(data).returning();
    return result;
  },
};
