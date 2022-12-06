import React from "react";
import { useNavigate } from "react-router-dom";

const NewOrder = () => {
  const navigate = useNavigate();

  return (
    <div>
      NewOrder{" "}
      <button onClick={() => navigate("/my-orders")}>Go to MyOrders</button>
    </div>
  );
};

export default NewOrder;
