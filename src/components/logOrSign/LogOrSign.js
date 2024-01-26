import React from "react";
import SignUp from "../signUp/SignUp";
import "./LogOrSign.css";

const LogOrSign = () => {
  return (
    <div className="logorsign-wrapper">
      <div className="logorsign-inner-container">
        <SignUp />
      </div>
    </div>
  );
};

export default LogOrSign;
