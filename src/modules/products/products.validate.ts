import z from "zod";

export const createProductScheme = z.object({
  name: z.coerce.string().min(1, "Name is required"),
  price: z.number().min(1, "Price is required"),
  description: z.string().optional(),
  image: z.string().optional(),
  category: z.string().optional(),
});
