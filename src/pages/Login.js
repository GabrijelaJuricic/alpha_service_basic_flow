import React from "react";
import { useNavigate } from "react-router-dom";
import motorcycle_1 from "../assets/motorcycle_1.png";
import alphaService from "../assets/alphaService.png";
import alphaLogo from "../assets/alphaLogo.png";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const continueToMyOrdersHandler = () => {
    navigate("/my-orders");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="alpha-logo">
          <img src={alphaLogo} />
          <h1>alpha</h1>
        </div>
        <h3>Welcome to</h3>
        <h1>alpha service</h1>
        <label>Email address</label>
        <input type="email" name="email" />
        <button type="button" onClick={continueToMyOrdersHandler}>
          Continue
        </button>
      </div>
      <div className="login-right">
        <div className="motorcycle_1-container">
          <img className="login-motorcycle_1" src={motorcycle_1} />
        </div>
      </div>
      <img className="login_alpha-service" src={alphaService} />
    </div>
  );
};

export default Login;
