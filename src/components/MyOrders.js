import React from "react";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const navigate = useNavigate();

  return (
    <div>
      MyOrders{" "}
      <button onClick={() => navigate("/new-order")}>Go to NewOrder</button>
    </div>
  );
};

export default MyOrders;
