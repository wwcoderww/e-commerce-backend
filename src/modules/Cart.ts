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
  // POST
  async create(userId: string, productId: number) {
    return await db.insert(cartItemsTable).values({ userId, productId }).returning();
  },
  // PUT
  async update(userId: string, productId: number, quantity: number = 1) {
    return await db
      .update(cartItemsTable)
      .set({ quantity: sql`${cartItemsTable.quantity} + ${quantity}` })
      .where(
        and(
          eq(cartItemsTable.userId, userId),
          eq(cartItemsTable.productId, productId),
        ),
      )
      .returning();
  },

  async delete(userId: string, productId: number) {
    return await db
      .delete(cartItemsTable)
      .where(
        and(
          eq(cartItemsTable.userId, userId),
          eq(cartItemsTable.productId, productId),
        ),
      );
  },
};
