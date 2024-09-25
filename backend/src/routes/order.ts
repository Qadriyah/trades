import { Router } from "express";
import createOrderController from "../controllers/order/CreateOrder.js";
import getOrdersController from "../controllers/order/GetOrders.js";
import validationMiddleware from "../middlewares/validationMiddleware.js";
import { validateCreateOrder } from "../validations/order.js";

const orderRouter = Router();

orderRouter.post(
  "/orders",
  validationMiddleware(validateCreateOrder),
  (req, res) => createOrderController.execute(req, res)
);

orderRouter.get("/orders", (req, res) => getOrdersController.execute(req, res));

export default orderRouter;
