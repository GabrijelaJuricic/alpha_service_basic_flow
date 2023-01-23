import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
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
  const email = JSON.parse(localStorage.getItem("email"));
  const brand = useRecoilValue(selectedBrandState);
  const model = useRecoilValue(selectedModelState);
  const mileage = useRecoilValue(enteredMileageState);
  const selectedServices = useRecoilValue(selectedServicesState);
  const isSelected = useRecoilValue(dateSelectedState);
  const dateAndTime = useRecoilValue(dateTimePickerState);
  const [fullPrice, discount] = useCalculatePrices();

  const navigate = useNavigate();

  const allStates = {
    email: email,
    orderId: Math.random().toString().slice(2, 11),
    serviceDay: dateAndTime,
    brand: brand,
    model: model,
    mileage: mileage,
  };

  const createOrderHandler = () => {
    if (localStorage.getItem("data") === null) {
      let tempArray = [];
      tempArray.push(allStates);
      localStorage.setItem("data", JSON.stringify(tempArray));
    } else {
      let tempData = JSON.parse(localStorage.getItem("data"));
      tempData.push(allStates);
      localStorage.setItem("data", JSON.stringify(tempData));
    }
    navigate("/my-orders");
  };

  return (
    <div className="summary-card-container">
      <h4>Order summary</h4>
      {isSelected && <div className="date-time-summary">{dateAndTime}</div>}
      <div className="selected-services-container">
        <ul>
          {selectedServices.map(({ name, price }) => {
            return (
              <li key={Math.random()}>
                <div className="summary-service-name">{name}</div>{" "}
                <div className="summary-service-price">{`${price} $`}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="total-amount-container">
        <div>
          Full Price: <div>{fullPrice} $</div>
        </div>
        <div>
          Discount: <div>{discount} $</div>
        </div>
        <div>
          Price: <div>{fullPrice - discount} $</div>
        </div>
      </div>
      <div className="submit-button-container">
        <button type="submit" onClick={createOrderHandler}>
          Create Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
