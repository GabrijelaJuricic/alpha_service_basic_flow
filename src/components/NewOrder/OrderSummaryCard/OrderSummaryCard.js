import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  dateSelectedState,
  dateTimePickerState,
  selectedServicesState,
} from "../../../atoms";
import useCalculatePrices from "../../../hooks/useCalculatePrices";
import "./OrderSummaryCard.css";

const OrderSummaryCard = () => {
  const selectedServices = useRecoilValue(selectedServicesState);
  const isSelected = useRecoilValue(dateSelectedState);
  const dateAndTime = useRecoilValue(dateTimePickerState);
  const [fullPrice, discount] = useCalculatePrices();
  const navigate = useNavigate();

  // Date and time deconstruction
  const date = `${dateAndTime.format("MMMM D, YYYY hh:mm")}`;

  const createOrderHandler = () => {
    navigate("/my-orders");
  };
  const cancelOrderHandler = () => {
    navigate("/");
  };
  return (
    <div className="summary-card-container">
      <h4>Order summary</h4>
      {isSelected && <div>{date}</div>}
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
