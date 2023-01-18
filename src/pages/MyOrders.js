import React from "react";
import { Link, useNavigate } from "react-router-dom";
import alphaLogo from "../assets/alphaLogo.png";
import Table from "../components/MyOrders/Table";
import motorcycle_2 from "../assets/motorcycle_2.png";
import alpha from "../assets/alpha.png";
import motorcycle_3 from "../assets/motorcycle_3.png";
import "./MyOrders.css";
import { useRecoilValue } from "recoil";
import { collectValuesState } from "../atoms";

const MyOrders = () => {
  // const hasOrders = useRecoilValue(collectValuesState);

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
        {/* <div className="my-orders-list">
          <p>You have no orders.</p>
          <Link to="/new-order">Create New Order</Link>
        </div> */}

        <Table />
      </div>
      <div className="my-orders-right">
        {/* <div className="no-orders">
          <img alt="alpha" className="my-orders-alpha" src={alpha} />
          <div className="no-orders-image">
            <img
              alt="motorcycle_2"
              className="motorcycle_2"
              src={motorcycle_2}
            />
          </div>
        </div> */}
        <div className="has-orders">
          <div className="has-orders-message">
            <h3>Thank you for your order:</h3>
            <h5>#order number!</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="has-orders-image">
            <img
              alt="motorcycle_3"
              className="motorcycle_3"
              src={motorcycle_3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
