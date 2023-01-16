import React from "react";
import { useRecoilValue } from "recoil";
import { serviceAndPriceForSelectedModelState } from "../../../atoms";
import Calendar from "./Calendar";
import ServiceItem from "./ServiceItem";
import DiscountOptions from "./DiscountOptions";
import "./ServiceCard.css";

const ServiceCard = () => {
  const serviceAndPrice = useRecoilValue(serviceAndPriceForSelectedModelState);
  return (
    <div className="service-card-container">
      <Calendar></Calendar>
      <div className="type-of-service">
        <label>Type of service</label>
        {serviceAndPrice.map(({ name, price, id }, index) => {
          return <ServiceItem name={name} price={price} id={id} key={index} />;
        })}
      </div>
      <DiscountOptions></DiscountOptions>
    </div>
  );
};

export default ServiceCard;
