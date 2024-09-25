import { ILineItem } from "../models/LineItems.js";
import { FieldError } from "./common.js";

export type CreateLineItemDto = {
  order: string;
  product: string;
  price: number;
  quantity: number;
};

export type CreateLineItemResponseDto = {
  errors?: FieldError[];
  message?: string;
  lineItems?: ILineItem[];
};
