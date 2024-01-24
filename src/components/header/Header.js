import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-inner-container">
        <div className="logo"></div>
        <div className="header-nav">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
              <li>
                <Link to="/youruseraccount">User Account</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-message">
          <p>Welcome Back</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
