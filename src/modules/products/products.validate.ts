import z from "zod";

export const createProductScheme = z.object({
  name: z.coerce.string().min(1, "Name is required"),
  price: z.coerce.number().min(1, "Price is required"),
  description: z.string().optional(),
  image: z.string().optional(),
  category: z.string().optional(),
  rating: z.coerce.number().optional(),
  ratingCount: z.coerce.number().optional(),
  createdAt: z.string().optional(),
});

export const updateProductScheme = z.object({
  name: z.coerce.string().min(1, "Name is required"),
  price: z.coerce.number().min(1, "Price is required"),
  description: z.string().optional(),
  image: z.string().optional(),
  category: z.string().optional(),
  rating: z.coerce.number().optional(),
  ratingCount: z.coerce.number().optional(),
  createdAt: z.string(),
});
