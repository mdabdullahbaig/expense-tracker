import React from "react";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light">
      <div>
        <span className="navbar-brand">
          <span style={{ color: "white", padding: "10px" }}>
            <b>ExpenseTracker</b>
          </span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
