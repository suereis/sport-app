import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    <div style={{ margin: "100px" }}>
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="primaryBtn" type="submit">
          Register
        </button>
      </form>
      <div>
        <button
          className="secondaryBtn"
          style={{ marginTop: "15px", marginBottom: "10px" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Register;
