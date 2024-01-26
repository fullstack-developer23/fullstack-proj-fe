import React from "react";
import SignUp from "../signUp/SignUp";
import "./LogOrSign.css";
import Login from "../login/Login";

const LogOrSign = ({ loggedIn, setLoggedIn }) => {
  return (
    <div className="logorsign-wrapper">
      <div className="logorsign-inner-container">
        <SignUp />
      </div>
      <div className="logorsign-inner-container">
        <Login setLoggedIn={setLoggedIn} />
      </div>
    </div>
  );
};

export default LogOrSign;
