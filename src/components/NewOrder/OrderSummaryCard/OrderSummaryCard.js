import React from "react";
import { useRecoilValue } from "recoil";
import { selectedServicesState } from "../../../atoms";
import "./OrderSummaryCard.css";

const OrderSummaryCard = () => {
  const selectedServices = useRecoilValue(selectedServicesState);

  return (
    <div className="summary-card-container">
      <h4>Order summary</h4>
      <p>Date & Time</p>
      <div className="selected-services">
        <ul>
          {selectedServices.map(({ name, price, id }) => {
            return (
              <li>
                {name} {`${price} $`}
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <div className="total-amount-container">
        <div>{`Full Price: ${"300"} $`}</div>
        <div>{`Discount: ${"20"} %`}</div>
        <div>{`Price: ${"240"} $`}</div>
      </div>
      <div className="controls">
        <a href="#">Cancel Order</a>
        <button type="submit">Create Order</button>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
