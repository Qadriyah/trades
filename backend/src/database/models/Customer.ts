import mongoose, { Document } from "mongoose";

const { Schema } = mongoose;
const SchemaTypes = Schema.Types;

export interface ICustomer extends Document {
  fullname: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
}

const CustomerSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CustomerModel = mongoose.model("Customer", CustomerSchema);

export default CustomerModel;
