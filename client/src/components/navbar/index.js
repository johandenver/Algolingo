import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import logo1 from "../../images/AlgoLingo1.png";

function Navbar() {
  return (
    <nav className="mainHeader z-depth-0">
      <div className="nav-wrapper z-depth-0">
        <div className="navbar-brand">
          <img src={logo1} height="auto" width="350" alt="AlgoLingo" />
        </div>
        {/* <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                    <Link
                    to="/"
                    className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Login
                    </Link>
                    </li>
                </ul> */}
      </div>
    </nav>
  );
}

export default Navbar;
