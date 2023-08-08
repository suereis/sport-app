import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div style={{ margin: "100px" }}>
      <div>Login</div>
      <button
        className="primaryBtn"
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
