import { eq } from "drizzle-orm";
import { cartItemsTable, NewCartItem } from "../db/schema/carts.js";
import { db } from "../db/index.js";

export const Cart = {
  async read(id: string) {
    return await db
      .select()
      .from(cartItemsTable)
      .where(eq(cartItemsTable.userId, id));
  },

  async create(data: NewCartItem) {
    return await db.insert(cartItemsTable).values(data).returning();
  },
};
