import mongoose, { Document } from "mongoose";
import { IOrder } from "./Order.js";

const { Schema } = mongoose;
const SchemaTypes = Schema.Types;

export interface ILineItem extends Document {
  order: IOrder["_id"];
  product: string;
  quantity: number;
  price: number;
}

const LineItemSchema = new Schema(
  {
    order: {
      type: SchemaTypes.ObjectId,
      ref: "Order",
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const LineItemModel = mongoose.model("LineItem", LineItemSchema);

export default LineItemModel;
