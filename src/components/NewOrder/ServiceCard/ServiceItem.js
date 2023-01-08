import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { selectedServicesState } from "../../../atoms";
import "./ServiceItem.css";

const ServiceItem = ({ ...props }) => {
  const [selectedServices, setSelectedServices] = useRecoilState(
    selectedServicesState
  );
  const [isChecked, setIsChecked] = useState(false);

  // Helper functions //
  const servicesChangeHandler = () => {
    if (!isChecked) {
      setSelectedServices((prevState) => {
        return [...prevState, { name: props.name, price: props.price }];
      });
      setIsChecked(true);
    } else {
      const newSelectedServices = selectedServices.filter(
        (service) => service.name !== props.name
      );
      setSelectedServices(newSelectedServices);
      setIsChecked(false);
    }
  };

  return (
    <div className="service-price-container">
      <label key={props.id} className="type-of-service-text">
        <input
          type="checkbox"
          className="checkbox-round"
          value={props.name}
          checked={isChecked}
          onChange={servicesChangeHandler}
        />
        {props.name} {`${props.price} $`}
      </label>
    </div>
  );
};

export default ServiceItem;
