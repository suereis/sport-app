import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false); // State for showing the success modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating a successful login
    // In a real application, you would perform actual login logic here
    console.log("Login form submitted:", formData);
    setShowSuccessModal(true); // Show the success modal
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false); // Close the success modal
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
      {/* Success Modal */}
      <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You have successfully logged in.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSuccessModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default Login;
