import React from "react";
import Calendar from "./Calendar";
import ServiceItem from "./ServiceItem";
import DiscountOptions from "./DiscountOptions";
import { TYPE_OF_SERVICE } from "../../../constants/constants";
import { useRecoilState } from "recoil";
import { totalPriceState } from "../../../atoms";
import "./ServiceCard.css";

const ServiceCard = () => {
  const [totalPrice, setTotalPrice] = useRecoilState(totalPriceState);
  const addTotalPriceHandler = (amount) => {
    setTotalPrice(totalPrice + amount);
  };

  return (
    <div className="service-card-container">
      <Calendar></Calendar>
      <div className="type-of-service">
        <label className="label">Type of service</label>
        {TYPE_OF_SERVICE.map(({ name, price, id }) => {
          return (
            <ServiceItem
              name={name}
              price={price}
              key={id}
              onTotalPrice={addTotalPriceHandler}
            />
          );
        })}
      </div>
      <DiscountOptions></DiscountOptions>
    </div>
  );
};

export default ServiceCard;
