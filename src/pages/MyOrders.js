import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "../components/MyOrders/Table";
import alphaLogo from "../assets/alphaLogo.png";
import motorcycle_no_orders from "../assets/motorcycle_no_orders.png";
import alpha from "../assets/alpha.png";
import motorcycle_table from "../assets/motorcycle_table.png";
import "./MyOrders.css";

const MyOrders = () => {
  // const hasOrders = useRecoilValue(collectValuesState);
  const navigate = useNavigate();

  const createNewOrderHandler = () => {
    navigate("/new-order");
  };

  return (
    <div className="my-orders-container">
      <div className="my-orders-left-side">
        <div className="alpha-header">
          <div className="alpha-logo">
            <img src={alphaLogo} />
            <h1>alpha</h1>
          </div>
          <div className="create-order-button-container">
            <button onClick={createNewOrderHandler}>Create New Order</button>
          </div>
        </div>
        <div className="my-orders-title">
          <h3>My Orders</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="no-orders-left">
          <p>You have no orders.</p>
          <Link to="/new-order">Create New Order</Link>
        </div>

        {/* <Table /> */}
      </div>
      <div className="my-orders-right-side">
        <div className="no-orders-right">
          <img alt="alpha" className="alpha-banner" src={alpha} />
          <div className="no-orders-image-container">
            <img
              alt="motorcycle_no_orders"
              className="motorcycle_no_orders"
              src={motorcycle_no_orders}
            />
          </div>
        </div>
        {/* <div className="has-orders">
          <div className="has-orders-message">
            <h3>Thank you for your order:</h3>
            <h5>#order number!</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="has-orders-image">
            <img
              alt="motorcycle_table_view"
              className="motorcycle_table"
              src={motorcycle_table}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MyOrders;
