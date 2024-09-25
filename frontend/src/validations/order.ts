import * as Yup from "yup";
import { cardRegex } from "./regex";

export const createOrderValidationSchema = Yup.object().shape({
  fullname: Yup.string().required("Fullname is required"),
  email: Yup.string().email().required("Email is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipcode: Yup.string().required("Zipcode is required"),
  cardHolder: Yup.string().required("Card holder name is required"),
  cardNumber: Yup.string()
    .matches(cardRegex, "Invalid card number")
    .required("Card number is required"),
  expMonth: Yup.lazy((value) =>
    Number(value) > 12
      ? Yup.number().max(12, "Invalid month")
      : Yup.string()
          .matches(/^\d+$/, "Invalid expiry month")
          .required("Expiry month is required")
          .length(2, "Invalid expiry month")
  ),
  expYear: Yup.string()
    .matches(/^\d+$/, "Invalid expiry month")
    .required("Expiry year is required")
    .length(4, "Invalid expiry year"),
  cvv: Yup.string()
    .matches(/^\d+$/, "Invalid cvv")
    .required("CVV is required")
    .length(3, "Invalid cvv"),
});
