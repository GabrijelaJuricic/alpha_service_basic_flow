import React from "react";
import OrderSummaryCard from "./OrderSummaryCard";
import ProductCard from "./ProductCard";
import ServiceCard from "./ServiceCard";
import "../NewOrder/NewOrder.css";

const NewOrder = () => {
  return (
    <div className="new-order-container">
      <ProductCard></ProductCard>
      <ServiceCard></ServiceCard>
      <OrderSummaryCard></OrderSummaryCard>
    </div>
  );
};

export default NewOrder;
