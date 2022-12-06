import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      Login{" "}
      <button onClick={() => navigate("/my-orders")}>Go to MyOrders</button>
    </div>
  );
};

export default Login;
