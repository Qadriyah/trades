import mongoose, { Document } from "mongoose";
import { ICustomer } from "./Customer.js";

const { Schema } = mongoose;
const SchemaTypes = Schema.Types;

export interface IOrder extends Document {
  customer: ICustomer["_id"];
  orderNumber: string;
}

const OrderSchema = new Schema(
  {
    customer: {
      type: SchemaTypes.ObjectId,
      ref: "Customer",
      required: true,
    },
    orderNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

OrderSchema.virtual("lineItems", {
  ref: "LineItem",
  localField: "_id",
  foreignField: "order",
  justOne: false,
});

const OrderModel = mongoose.model("Order", OrderSchema);

export default OrderModel;
