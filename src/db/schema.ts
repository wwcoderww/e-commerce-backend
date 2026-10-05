import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  price: integer().notNull(),
  description: varchar({ length: 255 }),
  image: varchar({ length: 255 }),
  category: varchar({ length: 255 }),
  rating: integer(),
  ratingCount: integer(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type Product = InferSelectModel<typeof productsTable>;
export type NewProduct = InferInsertModel<typeof productsTable>;
