import { Request, Response } from "express";
import BaseController from "../BaseController.js";
import orderService from "../../services/OrderService.js";

class GetOrdersController extends BaseController {
  protected async executeImpl(req: Request, res: Response): Promise<Response> {
    const { orders, errors } = await orderService.getAll();
    if (errors) {
      return this.fail(res);
    }

    return this.success(res, "Success", orders);
  }
}

export default new GetOrdersController();
