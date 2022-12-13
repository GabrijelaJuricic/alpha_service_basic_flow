import React from "react";
import ProductCard from "./ProductCard";
import Calendar from "./Calendar";
import TypeOfService from "./TypeOfService";
import DiscountOptions from "./DiscountOptions";
import OrderSummaryCard from "./OrderSummaryCard";
import "../NewOrder/NewOrder.css";

// Dummy data //
const typeOfService = [
  { service: "Chain change", price: 100, id: 0 },
  { service: "Oil and oil filter change", price: 100, id: 1 },
  { service: "Air filter change", price: 100, id: 2 },
  { service: "Brake fluid change", price: 100, id: 3 },
];

const NewOrder = () => {
  return (
    <div className="new-order-container">
      <ProductCard></ProductCard>
      {/* The next block of code can intuitively be interpreted as a ServiceCard component. The reason for this block not being unique ServiceCard component is because of the map() and the props that are needed in just one part of the ServiceCard, and that's TypeOfService component */}
      <div className="service-card-container">
        <Calendar></Calendar>
        <div className="type-of-service">
          <label className="label">Type of service</label>
          {typeOfService.map(({ service, price, id }) => {
            return <TypeOfService service={service} price={price} id={id} />;
          })}
        </div>
        <DiscountOptions></DiscountOptions>
      </div>
      {/* End of "ServiceCard" component */}
      <OrderSummaryCard></OrderSummaryCard>
    </div>
  );
};

export default NewOrder;
