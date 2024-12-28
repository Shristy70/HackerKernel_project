import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    price: "",
  });
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    const api = "http://localhost:3000/products";

    try {
      // Check if product with the same name exists
      const checkResponse = await axios.get(`${api}?name=${values.name}`);
      if (checkResponse.data.length > 0) {
        setError("Product with this name already exists.");
        setValues({ name: "", price: "" });
        return;
      }

      // Add new product
      await axios.post(api, values);
      setMessage("Product added successfully!");
      setValues({ name: "", price: "" });
    } catch (err) {
      console.error(err);
      setError("An error occurred while adding the product.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center w-100% vh-100"
      style={{ backgroundColor: "#f4f4f9" }}
    >
      <div
        className="p-5 border rounded bg-white shadow-lg"
        style={{ width: "100%", maxWidth: "700px" }}
      >
        <h2 className="mb-4 text-center text-primary">Add Product Details</h2>
        <hr />
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicName">
            <Form.Label className="fs-5 fw-bold">Product Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              className="p-3"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPrice">
            <Form.Label className="fs-5 fw-bold">Price:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product price"
              value={values.price}
              onChange={(e) => setValues({ ...values, price: e.target.value })}
              className="p-3"
            />
          </Form.Group>

          <div className="text-center">
            <Button
              variant="primary"
              type="submit"
              className="px-5 py-2 fs-5"
              style={{ width: "100%" }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;
