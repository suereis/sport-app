import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div style={{ margin: "100px" }}>
      <div>Register</div>
      <button
        className="primaryBtn"
        onClick={() => {
          navigate("/login");
        }}
      >
        Go back to Login
      </button>
    </div>
  );
};

export default Register;
