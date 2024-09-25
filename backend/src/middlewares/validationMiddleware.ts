import { Request, Response, NextFunction } from "express";
import Joi from "joi";

/**
 * Validates user input
 */
const validationMiddleware =
  (schema: Joi.ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        statusCode: 400,
        errors: error.details.map((error) => ({
          field: error.path[0],
          message: error.message.replace(/"/g, ""),
        })),
      });
    }

    return next();
  };

export default validationMiddleware;
