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
    <div className="container">
      <h2 className="mt-5 text-primary">ADD PRODUCT DETAILS</h2>
      <hr />
      <br />
      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}
      <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="fs-3">Product Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label className="fs-3">Price:</Form.Label>
          <Form.Control
            type="text"
            placeholder="3000"
            value={values.price}
            onChange={(e) => setValues({ ...values, price: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
