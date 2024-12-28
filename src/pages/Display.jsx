import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Row, Col, Alert, Container, Form } from "react-bootstrap";

const Display = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch(() => {
        setError("Error fetching product data.");
      });
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue) ||
        item.id.toString().includes(searchValue)
    );
    setFilteredData(filtered);
  };

  const handleSort = (column) => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });

    setFilteredData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <Container className="mt-5 ">
      <Row className="mb-4">
        <Col className="text-center">
          <h1 className="text-primary">Product List</h1>
        </Col>
      </Row>
      {error && <Alert variant="danger">{error}</Alert>}

      <Row className="mb-3" style={{ marginLeft: "20px" }}>
        <Col md={6} className="mx-auto">
          <div className="d-flex border border-2 rounded rounded-3">
            <div className="w-100">
              <Form.Control
                type="text"
                placeholder="Search by product name or ID..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="me-10 mt-2">
              <i
                className="fa-solid fa-magnifying-glass mt-n10  fs-4"
                style={{ color: "grey" }}
              ></i>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={8} className="mx-auto">
          {filteredData.length > 0 ? (
            <Table
              striped
              bordered
              hover
              responsive="xl"
              className="shadow-sm"
              style={{ marginLeft: "30px" }}
            >
              <thead className="table-dark">
                <tr>
                  <th onClick={() => handleSort("id")}>Product ID</th>
                  <th onClick={() => handleSort("name")}>Product Name</th>
                  <th onClick={() => handleSort("price")}>Product Price</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="text-center mt-4">
              <Alert variant="info">No products found.</Alert>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Display;
