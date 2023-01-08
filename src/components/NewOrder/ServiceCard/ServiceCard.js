import React from "react";
import Calendar from "./Calendar";
import ServiceItem from "./ServiceItem";
import DiscountOptions from "./DiscountOptions";
import { TYPE_OF_SERVICE } from "../../../constants/constants";
import "./ServiceCard.css";

const ServiceCard = () => {
  return (
    <div className="service-card-container">
      <Calendar></Calendar>
      <div className="type-of-service">
        <label className="label">Type of service</label>
        {TYPE_OF_SERVICE.map(({ name, price, id }, index) => {
          return <ServiceItem name={name} price={price} id={id} key={index} />;
        })}
      </div>
      <DiscountOptions></DiscountOptions>
    </div>
  );
};

export default ServiceCard;
