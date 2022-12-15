import React from "react";
import { Link, useNavigate } from "react-router-dom";
import alphaLogo from "../assets/alphaLogo.png";
import motorcycle_2 from "../assets/motorcycle_2.png";
import alpha from "../assets/alpha.png";
import TableCell from "@mui/material/TableCell";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./MyOrders.css";
import { useRecoilValue } from "recoil";
import { enteredMileageState, selectedModelState } from "../atoms";

const MyOrders = () => {
  const selectedModel = useRecoilValue(selectedModelState);
  const mileage = useRecoilValue(enteredMileageState);
  const navigate = useNavigate();

  const createNewOrderHandler = () => {
    navigate("/new-order");
  };

  const rows = [
    {
      orderId: "orderId",
      serviceDate: "dd/mm/yy",
      selectedModel: selectedModel,
      mileage: mileage,
      progress: "cancelled",
    },
  ];
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
        <TableContainer sx={{ width: 900 }}>
          <Table aria-label="customized table">
            <TableHead sx={{ paddingLeft: 0 }}>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell align="left">Service Date</TableCell>
                <TableCell align="left">Model</TableCell>
                <TableCell align="left">Mileage</TableCell>
                <TableCell align="left">Progress</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {row.orderId}
                  </TableCell>
                  <TableCell align="left">{row.serviceDate}</TableCell>
                  <TableCell align="left">{row.selectedModel}</TableCell>
                  <TableCell align="left">{row.mileage}</TableCell>
                  <TableCell align="left">{row.progress}</TableCell>
                  <TableCell align="center">
                    {
                      <a href="#" style={{ textDecoration: "none" }}>
                        Description
                      </a>
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
