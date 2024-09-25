import Joi from "joi";
import { cardRegex } from "./regex.js";

export const validateCreateOrder = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  zipcode: Joi.string().required(),
  cardHolder: Joi.string().required(),
  cardNumber: Joi.string()
    .regex(cardRegex)
    .message("Invalid card number")
    .required(),
  expMonth: Joi.number().min(1).max(12).required(),
  expYear: Joi.string()
    .regex(/^\d+$/)
    .message("Only number are allowed")
    .regex(/^[1-9](?!\.).*/)
    .message("Invalid year")
    .required()
    .length(4),
  cvv: Joi.string()
    .regex(/^\d+$/)
    .message("Only number are allowed")
    .required()
    .length(3),
  lineItems: Joi.array()
    .items(
      Joi.object({
        product: Joi.string().required(),
        price: Joi.number().required(),
        quantity: Joi.number().required(),
      })
    )
    .required(),
}).options({
  abortEarly: false,
});
