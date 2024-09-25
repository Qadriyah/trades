export type CartItemType = {
  product: string;
  price: number;
  quantity: number;
};

export type FieldError = {
  field: string;
  message: string;
};

export type Customer = {
  _id: string;
  fullname: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
};

export type LineItem = {
  _id: string;
  order: string;
  product: string;
  quantity: number;
  price: number;
};

export type Order = {
  _id: string;
  customer: Customer;
  orderNumber: string;
  createdAt: string;
  lineItems: LineItem[];
};

export type CreateOrder = {
  fullname: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  cardHolder: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvv: string;
};
