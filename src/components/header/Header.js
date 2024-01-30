import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./logo.png";

const Header = ({ loggedIn }) => {
  return (
    <header className="header-wrapper">
      <div className="header-inner-container">
        <div className="logo">
          <img src={logo} width="150px" alt="Website-Logo" />
        </div>

        {!loggedIn ? (
          <>
            <div className="header-message">
              <p>Please Log In</p>
            </div>
          </>
        ) : (
          <>
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
              <p>Welcome {loggedIn.username}</p>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
