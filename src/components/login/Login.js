import React from "react";
import "./Login.css";
import { useState } from "react";
import { loginFetch } from "../../utils/fetch";

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginFetch(email, password);
    await setLoggedIn(data.user);
  };

  return (
    <div className="login-container">
      <div className="login-inner-container">
        <h3 className="login-title">Log In</h3>

        <div className="form-box">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              className="login-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
