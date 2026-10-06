import { eq } from "drizzle-orm";
import { db } from "../../db/index.js";
import { NewProduct, Product, productsTable } from "../../db/schema.js";

export const ProductsService = {
  async read() {
    return await db.select().from(productsTable);
  },

  async create(data: NewProduct) {
    return await db.insert(productsTable).values(data).returning();
  },

  async delete(id: number) {
    return await db
      .delete(productsTable)
      .where(eq(productsTable.id, id))
      .returning();
  },

  async update(data: Product) {
    return await db
      .update(productsTable)
      .set(data)
      .where(eq(productsTable.id, data.id))
      .returning();
  },
};
