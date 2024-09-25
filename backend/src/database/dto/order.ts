import { IOrder } from "../models/Order.js";
import { FieldError } from "./common.js";

export type CreateOrderDto = {
  customer: string;
};

export type CreateOrderResponseDto = {
  errors?: FieldError[];
  message?: string;
  order?: IOrder;
};

export type GetOrdersResponseDto = {
  errors?: FieldError[];
  orders?: IOrder[];
};
