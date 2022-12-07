import React from "react";
import { Link, useNavigate } from "react-router-dom";
import alphaLogo from "../assets/alphaLogo.png";
import motorcycle_2 from "../assets/motorcycle_2.png";
import alpha from "../assets/alpha.png";
import "./MyOrders.css";

const MyOrders = () => {
  const navigate = useNavigate();

  return (
    <div className="my-orders-container">
      <div className="my-orders-left">
        <div className="alpha-header">
          <div className="alpha-logo">
            <img src={alphaLogo} />
            <h1>alpha</h1>
          </div>
          <div className="create-new-order-btn">
            <button onClick={() => navigate("/new-order")}>
              Create New Order
            </button>
          </div>
        </div>
        <div className="my-orders-title">
          <h3>My Orders</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="my-orders-list">
          <p>You have no orders.</p>
          <Link to="/new-order">Create New Order</Link>
        </div>
      </div>
      <div className="my-orders-right">
        <img
          alt="motorcycle_2"
          className="my-orders-motorcycle_2"
          src={motorcycle_2}
        />
        <img alt="alpha" className="my-orders-alpha" src={alpha} />
      </div>
    </div>
  );
};

export default MyOrders;
