import { and, eq, sql } from "drizzle-orm";
import { CartItem, cartItemsTable, NewCartItem } from "../db/schema/carts.js";
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

  async addOne(data: CartItem) {
    return await db
      .update(cartItemsTable)
      .set({ quantity: sql`${cartItemsTable.quantity} + 1` })
      .where(
        and(
          eq(cartItemsTable.userId, data.userId),
          eq(cartItemsTable.productId, data.productId),
        ),
      )
      .returning();
  },
};
