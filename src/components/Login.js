import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Login</div>
      <button
        id="primaryBtn"
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </button>
    </div>
  );
};

export default Login;
