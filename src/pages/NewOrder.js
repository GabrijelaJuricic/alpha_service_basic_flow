import React from "react";
import ProductCard from "../components/NewOrder/ProductCard/ProductCard";
import OrderSummaryCard from "../components/NewOrder/OrderSummaryCard/OrderSummaryCard";
import ServiceCard from "../components/NewOrder/ServiceCard/ServiceCard";
import "./NewOrder.css";

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
