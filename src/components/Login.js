import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Login form submitted:", formData);
  };

  return (
    <Card style={{ marginTop: "100px" }}>
    <div className="auth-wrapper" style={{ margin: "100px" }}>
      <div><strong><h1 style={{ paddingBottom: "20px" }}>Login</h1></strong></div>
      <div className="auth-inner">
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Email:</strong></Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><strong>Password:</strong></Form.Label>
            <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
          </Form.Group>
          <Button className="primaryBtn" variant="primary" type="submit" style={{ width: "315px", marginTop: "15px", marginBottom: "10px" }}>
            Login
          </Button>
        </Form>
        <div>
          <Button
            className="secondaryBtn"
            style={{ width: "315px", marginTop: "15px", marginBottom: "10px" }}
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
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

export default Login;
