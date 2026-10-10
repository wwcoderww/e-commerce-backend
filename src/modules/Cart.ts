import { eq } from "drizzle-orm";
import { cartItemsTable } from "../db/schema/carts.js";
import { db } from "../db/index.js";

export const Cart = {
  async read(id: string) {
    return await db
      .select()
      .from(cartItemsTable)
      .where(eq(cartItemsTable.userId, id));
  },
};
