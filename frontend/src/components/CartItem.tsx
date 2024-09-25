import { CartItemType } from "@/types/entities";
import React from "react";

type IProps = {
  cartItem: CartItemType;
};

const CartItem: React.FC<IProps> = ({ cartItem }) => {
  return (
    <div className="flex gap-10">
      <p>{cartItem.product}</p>
      <p>{cartItem.price}</p>
    </div>
  );
};

export default CartItem;
