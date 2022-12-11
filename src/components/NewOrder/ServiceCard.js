import React from "react";
import "./ServiceCard.css";

const ServiceCard = () => {
  const typeOfService = [
    { service: "Chain change", price: 100, id: 0 },
    { service: "Oil and oil filter change", price: 100, id: 1 },
    { service: "Air filter change", price: 100, id: 2 },
    { service: "Brake fluid change", price: 100, id: 3 },
  ];

  return (
    <div className="service-card-container">
      <div>Calendar</div>
      <div className="type-of-service">
        <label>Type of service</label>
        {typeOfService.map(({ service, price, id }) => {
          return (
            <label key={id}>
              <div className="service-price-container">
                <input type="checkbox" className="checkbox" />
                <div className="service-price">
                  <div>{service}</div>
                  <div>{`${price} $`}</div>
                </div>
              </div>
            </label>
          );
        })}
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
