import {
  CreateOrderDto,
  CreateOrderResponseDto,
  GetOrdersResponseDto,
} from "../database/dto/order.js";
import OrderModel from "../database/models/Order.js";

class OrderService {
  async create(
    createOrderDto: CreateOrderDto
  ): Promise<CreateOrderResponseDto> {
    try {
      const orderNumber = await this.generateOrderNumber();
      const order = await OrderModel.create({
        ...createOrderDto,
        orderNumber,
      });
      return { order };
    } catch (err) {
      return {
        errors: [
          {
            field: "",
            message: "Something went wrong",
          },
        ],
      };
    }
  }

  async getAll(): Promise<GetOrdersResponseDto> {
    try {
      const orders = await OrderModel.find({}).populate([
        { path: "lineItems" },
        { path: "customer" },
      ]);
      return { orders };
    } catch (err) {
      return {
        errors: [
          {
            field: "",
            message: "Something went wrong",
          },
        ],
      };
    }
  }

  private async generateOrderNumber(): Promise<number | null> {
    try {
      const min = 1000;
      const max = 999999;
      const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      const order = await OrderModel.findOne({
        orderNumber: randomNumber,
      });
      if (order) {
        return this.generateOrderNumber();
      }
      return randomNumber;
    } catch (err) {
      return null;
    }
  }
}

export default new OrderService();
