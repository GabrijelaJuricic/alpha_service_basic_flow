import React from "react";
// import { useNavigate } from "react-router-dom";
import motorcycle_1 from "../assets/motorcycle_1.png";
import alphaService from "../assets/alphaService.png";
import alphaLogo from "../assets/alphaLogo.png";
import "./Login.css";

const Login = () => {
  // const navigate = useNavigate();

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
        <button type="button">Continue</button>
      </div>
      <div className="login-right">
        <img className="login-motorcycle_1" src={motorcycle_1} />
        <img className="login-alpha-service" src={alphaService} />
      </div>
    </div>
  );
};

export default Login;
