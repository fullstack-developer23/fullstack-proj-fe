import React from "react";
import "./Login.css";
import { useState } from "react";
import { loginFetch } from "../../utils/fetch";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginFetch(username, password);
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
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
