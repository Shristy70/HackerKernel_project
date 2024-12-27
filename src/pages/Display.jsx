import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
const Display = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        console.log("Error");
      });
  });
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Display;
