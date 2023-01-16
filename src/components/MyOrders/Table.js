import React from "react";
import { useRecoilValue } from "recoil";
import { collectValuesState } from "../../atoms";

import { TABLE_HEADER } from "../../constants/tableHeader";
import "./Table.css";

const Table = () => {
  const collectedValues = useRecoilValue(collectValuesState);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {TABLE_HEADER.map((title, index) => {
              return <th key={index}>{title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {collectedValues.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.orderId}</td>
                <td>{item.serviceDay}</td>
                <td>{item.brand}</td>
                <td>{item.model}</td>
                <td>{item.mileage}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
