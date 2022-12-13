import React from "react";
import "./DiscountOptions.css";

const DiscountOptions = () => {
  return (
    <div className="discount-options">
      <h5>Note: Consider discount options</h5>
      <ul>
        <li>
          <strong>40 EUR OFF</strong> for full service
        </li>
        <li>
          <strong>20 EUR OFF</strong> - Chain change + Oil and oil filter change
          + Air filter change
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
  );
};

export default DiscountOptions;
