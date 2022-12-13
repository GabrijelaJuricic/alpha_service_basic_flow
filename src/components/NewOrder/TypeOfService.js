import React from "react";
// import { useRecoilState } from "recoil";
// import { selectedServicesState } from "../../atoms";
import "./TypeOfService.css";

const TypeOfService = ({ ...props }) => {
  //   const [selectedServices, setSelectedServices] = useRecoilState(
  //     selectedServicesState
  //   );

  // Helper functions //
  //   const handleServicesChange = (event) => {
  //     const index = selectedServices.indexOf(event.target.value);
  //     if (index === -1) {
  //       setSelectedServices([...selectedServices, event.target.value]);
  //     } else {
  //       setSelectedServices(
  //         selectedServices.filter((service) => service !== event.target.value)
  //       );
  //     }
  //   };
  return (
    <div className="service-price-container">
      <label key={props.id} className="type-of-service-text">
        <input type="checkbox" className="checkbox-round" />
        {props.service} {`${props.price} $`}
      </label>
    </div>
  );
};

export default TypeOfService;
