import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "email") {
      // Check for @ symbol in email
      if (!value.includes("@")) {
        console.log("Invalid email format");
        updatedValue = "";
      }
    } else if (name === "phone") {
      // Remove non-numeric characters from phone number
      updatedValue = value.replace(/\D/g, "");
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here (e.g., API call or validation)
    console.log("Form data submitted:", formData);
  };

  return (
    <Card style={{ marginTop: "100px", marginBottom: "100px" }}>
    <div className="auth-wrapper" style={{ margin: "100px" }}>
      <div><strong><h1 style={{ paddingBottom: "20px" }}>Register</h1></strong></div>
      <div className="auth-inner">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label><strong>Name:</strong></Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Email:</strong></Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label><strong>Phone:</strong></Form.Label>
            <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><strong>Password:</strong></Form.Label>
            <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
          </Form.Group>
          <Button className="primaryBtn" variant="primary" type="submit" style={{ width: "315px", marginTop: "15px", marginBottom: "10px" }}>
            Register
          </Button>
        </Form>
        <div>
          <Button
            className="secondaryBtn"
            style={{ width: "315px", marginTop: "15px", marginBottom: "10px" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </Button>
        </div>
        <div>
          <Button
            className="secondaryBtn"
            style={{ marginTop: "15px", marginBottom: "10px" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Go to Home
          </Button>
        </div>
      </div>
    </div>
    </Card>
  );
};

export default Register;
