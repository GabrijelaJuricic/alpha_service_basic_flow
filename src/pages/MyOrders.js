import React from "react";
import { Link, useNavigate } from "react-router-dom";
import alphaLogo from "../assets/alphaLogo.png";
import Table from "../components/MyOrders/Table";
import motorcycle_2 from "../assets/motorcycle_2.png";
import alpha from "../assets/alpha.png";
import "./MyOrders.css";
import { useRecoilValue } from "recoil";
import { collectValuesState } from "../atoms";

const MyOrders = () => {
  const hasOrders = useRecoilValue(collectValuesState);

  const navigate = useNavigate();

  const createNewOrderHandler = () => {
    navigate("/new-order");
  };

  return (
    <div className="my-orders-container">
      <div className="my-orders-left">
        <div className="alpha-header">
          <div className="alpha-logo">
            <img src={alphaLogo} />
            <h1>alpha</h1>
          </div>
          <div className="create-new-order-btn">
            <button onClick={createNewOrderHandler}>Create New Order</button>
          </div>
        </div>
        <div className="my-orders-title">
          <h3>My Orders</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {hasOrders ? (
          <div className="my-orders-list">
            <p>You have no orders.</p>
            <Link to="/new-order">Create New Order</Link>
          </div>
        ) : (
          <Table />
        )}
      </div>
      <div className="my-orders-right">
        <img alt="alpha" className="my-orders-alpha" src={alpha} />
        <img
          alt="motorcycle_2"
          className="my-orders-motorcycle_2"
          src={motorcycle_2}
        />
      </div>
    </div>
  );
};

export default MyOrders;
