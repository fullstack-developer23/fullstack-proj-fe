import React from "react";
import { useState } from "react";
import { signUpFetch } from "../../utils/fetch";
import "./SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpFetch(username, email, password);
  };

  return (
    <div>
      <div className="signup-container">
        <div className="signup-inner-container">
          <h3 className="signup-title">Sign Up</h3>

          <div className="form-box">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                className="signup-input"
                placeholder="Username"
                onChange={(event) =>
                  changeHandler(event, setUsername, username)
                }
              />
              <input
                className="signup-input"
                placeholder="Email"
                onChange={(event) => changeHandler(event, setEmail, email)}
              />
              <input
                className="signup-input"
                placeholder="Password"
                onChange={(event) =>
                  changeHandler(event, setPassword, password)
                }
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
