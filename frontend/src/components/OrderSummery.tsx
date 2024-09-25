import React from "react";
import { CartItemType } from "@/types/entities";

type IProps = {
  cartItems: CartItemType[];
};

const OrderSummery: React.FC<IProps> = ({ cartItems }) => {
  const total = React.useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  return (
    <details className="outline-none border-b border-dashed border-[#d8d2d2] rotate-0">
      <summary className="flex hover:font-bold cursor-pointer items-center py-3">
        <div className="me-3 rotate-90d">
          <span className="svg-icon svg-icon-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        <div className="flex-1 flex flex-col items-end justify-center">
          <div className="flex gap-5 text-2xl">
            <p>Total</p>
            <p>{`$${total}`}</p>
          </div>
        </div>
      </summary>
      <div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.quantity}</td>
                <td>{`$${item.price}`}</td>
                <td>{`$${item.quantity * item.price}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
};

export default OrderSummery;
