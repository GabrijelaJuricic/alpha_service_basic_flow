import React from "react";
import { useRecoilValue } from "recoil";
import { selectedServicesState, totalPriceState } from "../../../atoms";
import "./OrderSummaryCard.css";

const OrderSummaryCard = () => {
  const selectedServices = useRecoilValue(selectedServicesState);
  const totalPrice = useRecoilValue(totalPriceState);

  return (
    <div className="summary-card-container">
      <h4>Order summary</h4>
      <p>Date & Time</p>
      <div className="selected-services">
        <ul>
          {selectedServices.map(({ name, price, id }) => {
            return (
              <li key={Math.random()}>
                {name} {`${price} $`}
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <div className="total-amount-container">
        <div>{`Full Price: ${totalPrice} $`}</div>
        <div>{`Discount: ${0} $`}</div>
        <div>{`Price: ${totalPrice} $`}</div>
      </div>
      <div className="controls">
        <a href="#">Cancel Order</a>
        <button type="submit">Create Order</button>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
