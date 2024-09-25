import { ICustomer } from "../models/Customer.js";
import { FieldError } from "./common.js";

export type CreateCustomerDto = {
  fullname: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
};

export type CreateCustomerResponseDto = {
  errors?: FieldError[];
  message?: string;
  customer?: ICustomer;
};
