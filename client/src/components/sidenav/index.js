import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Sidenav() {
    return (
        <div>

            <ul>
                <li><Link to="/library" className={window.location.pathname === "/library" ? "nav-link active" : "nav-link"}><i className="material-icons">library_books</i>Main Library</Link></li>
                <li><div class="divider"></div></li>
                <li><Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}><i className="material-icons">person</i>Your Dashboard</Link></li>
                <li><Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}><i className="material-icons">library_add</i>Create Algorithm</Link></li>
            </ul>
              
        </div>
    );
}

export default Sidenav;