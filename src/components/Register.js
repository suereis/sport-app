import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Register</div>
      <button
        id="primaryBtn"
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
