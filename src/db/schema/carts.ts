import { integer, pgTable, text, primaryKey } from "drizzle-orm/pg-core";
import {
  defineRelations,
  type InferSelectModel,
  type InferInsertModel,
} from "drizzle-orm";
import { user } from "./auth.js";
import { productsTable } from "./products.js";

export const cartItemsTable = pgTable(
  "cart",
  {
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),

    productId: integer("product_id")
      .notNull()
      .references(() => productsTable.id, { onDelete: "cascade" }),

    quantity: integer("quantity").notNull().default(1),
  },
  (table) => [primaryKey({ columns: [table.userId, table.productId] })],
);
// Drizzle
export const cartRelations = defineRelations(
  { cartItemsTable, user, productsTable },
  (r) => ({
    cartItemsTable: {
      user: r.one.user({
        from: r.cartItemsTable.userId,
        to: r.user.id,
      }),
      product: r.one.productsTable({
        from: r.cartItemsTable.productId,
        to: r.productsTable.id,
      }),
    },
  }),
);

export type CartItem = InferSelectModel<typeof cartItemsTable>;
export type NewCartItem = InferInsertModel<typeof cartItemsTable>;
