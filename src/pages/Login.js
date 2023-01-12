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
        <div className="login-main-container">
          <div className="welcome-message">
            <h3>Welcome to</h3>
            <h1>alpha service</h1>
          </div>
          <div className="label-container">
            <label>Email address</label>
          </div>
          <div className="input-container">
            <input type="email" name="email" />
          </div>
          <div className="button-container">
            <button type="button" onClick={continueToMyOrdersHandler}>
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="login-right">
        <div className="motorcycle_1-container">
          <img className="login-motorcycle_1" src={motorcycle_1} />
          <div className="login_alpha_service-container">
            <img className="login_alpha_service" src={alphaService} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
