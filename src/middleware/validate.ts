import { NextFunction, Request, Response } from "express";
import z, { ZodError } from "zod";

type GenericObjectSchema = z.ZodObject<z.ZodRawShape>;

export const validate =
  (schema: GenericObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const parseData = await schema.parseAsync(req.body);
      req.body = parseData;
      return next();
    } catch (error: any) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          status: "fail",
          errors: error.issues.map((err) => ({
            field: err.path[0],
            message: err.message,
          })),
        });
      }
      if (error.code === "23505") {
        return res.status(400).json({
          status: "fail",
          // This array perfectly matches your Zod middleware error structure!
          errors: [
            {
              field: "name",
              message: "This product name is already in use.",
            },
          ],
        });
      } else {
        console.log(error);
        return res.status(500).json({ error: "Internal validation failure" });
      }
    }
  };
