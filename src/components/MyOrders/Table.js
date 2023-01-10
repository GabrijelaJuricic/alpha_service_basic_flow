import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <table>
      <tr>
        <th>Order ID</th>
        <th>Service day</th>
        <th>Brand</th>
        <th>Model</th>
        <th>Mileage</th>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
      <tr>
        <td>a</td>
        <td>b</td>
        <td>c</td>
        <td>d</td>
        <td>e</td>
      </tr>
    </table>
  );
};

export default Table;
