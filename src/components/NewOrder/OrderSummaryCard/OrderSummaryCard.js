import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  collectValuesState,
  dateSelectedState,
  dateTimePickerState,
  enteredMileageState,
  selectedBrandState,
  selectedModelState,
  selectedServicesState,
} from "../../../atoms";
import useCalculatePrices from "../../../hooks/useCalculatePrices";
import "./OrderSummaryCard.css";

const OrderSummaryCard = () => {
  const [collectedValues, setCollectedValues] =
    useRecoilState(collectValuesState);
  const brand = useRecoilValue(selectedBrandState);
  const model = useRecoilValue(selectedModelState);
  const mileage = useRecoilValue(enteredMileageState);
  const selectedServices = useRecoilValue(selectedServicesState);
  const isSelected = useRecoilValue(dateSelectedState);
  const dateAndTime = useRecoilValue(dateTimePickerState);
  const [fullPrice, discount] = useCalculatePrices();
  const navigate = useNavigate();

  // Date and time deconstruction
  const date = `${dateAndTime.format("MMMM D, YYYY hh:mm")}`;

  const allStates = {
    orderId: Math.random().toString().slice(2, 11),
    serviceDay: dateAndTime.format("DD/MM/YYYY"),
    brand: brand,
    model: model,
    mileage: mileage,
  };
  const createOrderHandler = () => {
    setCollectedValues((prevState) => [...prevState, allStates]);
    navigate("/my-orders");
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
        <button type="submit" onClick={createOrderHandler}>
          Create Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
