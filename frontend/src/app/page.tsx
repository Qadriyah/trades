"use client";
import React from "react";
import { useFormik } from "formik";

import Input from "@/components/Input";
import Button from "@/components/Button";
import OrderSummery from "@/components/OrderSummery";
import cartItems from "@/data/cart.json";
import { createOrderValidationSchema } from "@/validations/order";
import { CreateOrder } from "@/types/entities";
import { useRouter } from "next/navigation";

const CARDS = [
  "visa.svg",
  "mastercard.svg",
  "discover.svg",
  "american-express.svg",
];

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (values: CreateOrder) => {
    setLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/orders`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          lineItems: cartItems,
        }),
      }
    );
    const { errors } = await res.json();
    if (errors) {
      setLoading(false);
      return;
    }
    router.push("/success");
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      cardHolder: "",
      cardNumber: "",
      expMonth: "",
      expYear: "",
      cvv: "",
    },
    validateOnChange: true,
    validationSchema: createOrderValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl">Checkout</h1>
      <OrderSummery cartItems={cartItems} />
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-3 bg-[#f2f2f2] p-5">
          <h1 className="text-2xl">Shipping Address</h1>
          <Input
            label="Fullname"
            placeholder="John Doe"
            name="fullname"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            error={
              formik.touched.fullname && formik.errors.fullname
                ? formik.errors.fullname
                : ""
            }
          />
          <Input
            label="Email"
            placeholder="johndoe@example.com"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
          />
          <Input
            label="Address"
            placeholder="542 W. 2nd Street"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={
              formik.touched.address && formik.errors.address
                ? formik.errors.address
                : ""
            }
          />
          <Input
            label="City"
            placeholder="NY"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={
              formik.touched.city && formik.errors.city
                ? formik.errors.city
                : ""
            }
          />
          <div className="flex gap-3">
            <Input
              label="State"
              placeholder="NY"
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              error={
                formik.touched.state && formik.errors.state
                  ? formik.errors.state
                  : ""
              }
            />
            <Input
              label="Zipcode"
              placeholder="11006"
              name="zipcode"
              value={formik.values.zipcode}
              onChange={formik.handleChange}
              error={
                formik.touched.zipcode && formik.errors.zipcode
                  ? formik.errors.zipcode
                  : ""
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-[#f2f2f2] p-5">
          <h1 className="text-2xl">Payment</h1>
          <p>Accepted cards</p>
          <div className="flex gap-3">
            {CARDS.map((card) => (
              <div
                key={card}
                style={{
                  width: 40,
                  height: 25,
                  backgroundImage: `url(/images/${card})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            ))}
          </div>
          <Input
            label="Name on card"
            placeholder="John Doe"
            name="cardHolder"
            value={formik.values.cardHolder}
            onChange={formik.handleChange}
            error={
              formik.touched.cardHolder && formik.errors.cardHolder
                ? formik.errors.cardHolder
                : ""
            }
          />
          <Input
            label="Card number"
            placeholder="4545 4545 4545 4545"
            name="cardNumber"
            value={formik.values.cardNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.cardNumber && formik.errors.cardNumber
                ? formik.errors.cardNumber
                : ""
            }
          />
          <div className="flex gap-3">
            <Input
              label="Exp Month"
              placeholder="02"
              name="expMonth"
              value={formik.values.expMonth}
              onChange={formik.handleChange}
              onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
                (event.target.value = event.target.value
                  .replaceAll(/[^\d]/g, "")
                  .slice(0, 2))
              }
              error={
                formik.touched.expMonth && formik.errors.expMonth
                  ? formik.errors.expMonth
                  : ""
              }
            />
            <Input
              label="Exp Year"
              placeholder="2020"
              name="expYear"
              value={formik.values.expYear}
              onChange={formik.handleChange}
              onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
                (event.target.value = event.target.value
                  .replaceAll(/[^\d]/g, "")
                  .replaceAll(/^[0+]/g, "")
                  .slice(0, 4))
              }
              error={
                formik.touched.expYear && formik.errors.expYear
                  ? formik.errors.expYear
                  : ""
              }
            />
            <Input
              label="CVV"
              placeholder="123"
              name="cvv"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
                (event.target.value = event.target.value
                  .replaceAll(/[^\d]/g, "")
                  .slice(0, 3))
              }
              error={
                formik.touched.cvv && formik.errors.cvv ? formik.errors.cvv : ""
              }
            />
          </div>
          <Button type="submit" disabled={loading} loading={loading}>
            Continue to checkout
          </Button>
        </div>
      </form>
    </div>
  );
}
