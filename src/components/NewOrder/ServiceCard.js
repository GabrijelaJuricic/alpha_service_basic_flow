import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import "./ServiceCard.css";
import { useRecoilState } from "recoil";
import { selectedServicesState } from "../../atoms";

// Dummy data //
const typeOfService = [
  { service: "Chain change", price: 100, id: 0 },
  { service: "Oil and oil filter change", price: 100, id: 1 },
  { service: "Air filter change", price: 100, id: 2 },
  { service: "Brake fluid change", price: 100, id: 3 },
];

const ServiceCard = () => {
  const [selectedServices, setSelectedServices] = useRecoilState(
    selectedServicesState
  );

  // Helper functions //
  const handleServicesChange = (event) => {
    const index = selectedServices.indexOf(event.target.value);
    if (index === -1) {
      setSelectedServices([...selectedServices, event.target.value]);
    } else {
      setSelectedServices(
        selectedServices.filter((service) => service !== event.target.value)
      );
    }
  };

  return (
    <div className="service-card-container">
      <div>Calendar</div>
      <div className="type-of-service">
        <FormControl>
          <FormLabel component="legend">Type of service</FormLabel>
          {typeOfService.map(({ service, price, id }) => {
            return (
              <FormGroup key={id}>
                <div className="service-price-container">
                  <div className="service-price">
                    <FormControlLabel
                      label={service}
                      control={
                        <Checkbox
                          value={service}
                          checked={selectedServices.includes(service)}
                          onChange={handleServicesChange}
                        />
                      }
                    />
                    <div>{`${price} $`}</div>
                  </div>
                </div>
              </FormGroup>
            );
          })}
        </FormControl>
      </div>
      <div className="discount-options">
        <h5>Note: Consider discount options</h5>
        <ul>
          <li>
            <strong>40 EUR OFF</strong> for full service
          </li>
          <li>
            <strong>20 EUR OFF</strong> - Chain change + Oil and oil filter
            change + Air filter change
          </li>
          <li>
            <strong>20 EUR OFF</strong> - Oil and oil filter change + Air filter
            change
          </li>
          <li>
            <strong>15% OFF</strong>- Chain change + Brake fluid change
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
