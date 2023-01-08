import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { dateTimePickerState, selectedServicesState } from "../../../atoms";
import useCalculatePrices from "../../../hooks/useCalculatePrices";
import "./OrderSummaryCard.css";

const OrderSummaryCard = () => {
  const selectedServices = useRecoilValue(selectedServicesState);
  const dateAndTime = useRecoilValue(dateTimePickerState);
  const [fullPrice, discount] = useCalculatePrices();
  const navigate = useNavigate();

  // Date and time deconstruction
  const dd = dateAndTime.$d.getDate();
  const mm = dateAndTime.$d.getMonth() + 1;
  const yy = dateAndTime.$d.getFullYear();
  const hh = dateAndTime.$d.getHours();
  const min = dateAndTime.$d.getMinutes();

  const createOrderHandler = () => {
    navigate("/my-orders");
  };
  const cancelOrderHandler = () => {
    navigate("/");
  };
  return (
    <div className="summary-card-container">
      <h4>Order summary</h4>
      <div>{`${mm}/${dd}/${yy} ${hh}:${min}`}</div>
      <div className="selected-services">
        <ul>
          {selectedServices.map(({ name, price }) => {
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
        <div>{`Full Price: ${fullPrice} $`}</div>
        <div>{`Discount: ${discount} $`}</div>
        <div>{`Price: ${fullPrice - discount} $`}</div>
      </div>
      <div className="controls">
        <a href="#" onClick={cancelOrderHandler}>
          Cancel Order
        </a>
        <button type="submit" onClick={createOrderHandler}>
          Create Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
