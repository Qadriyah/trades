import { Request, Response } from "express";
import BaseController from "../BaseController.js";
import orderService from "../../services/OrderService.js";
import customerService from "../../services/CustomerService.js";
import lineItemService from "../../services/LineItemService.js";

class CreateOrderConroller extends BaseController {
  protected async executeImpl(req: Request, res: Response): Promise<Response> {
    const {
      fullname,
      email,
      address,
      city,
      state,
      zipcode,
      lineItems,
      ...payment
    } = req.body;

    // We do not store the customer payment info
    // Call payment service to make a payment
    // before creating the order

    const { customer, errors: customerError } = await customerService.create({
      fullname,
      email,
      address,
      city,
      state,
      zipcode,
    });

    if (customerError) {
      return this.fail(res);
    }

    const { order, errors: orderError } = await orderService.create({
      customer: customer.id,
    });

    if (orderError) {
      return this.fail(res);
    }

    await lineItemService.create(
      lineItems.map((item) => ({
        ...item,
        order: order.id,
      }))
    );

    return this.success(res, "Order created successfully", order);
  }
}

export default new CreateOrderConroller();
