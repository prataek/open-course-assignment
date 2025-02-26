import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="navbar-title">
            <p>Open Course</p>
         </div>
         <div className="navbar-options">
            <ul>
               <li><Link className="link-family" to="/"> Home </Link></li>
               <li><Link className="link-family" to="/courses"> Courses </Link></li>
               <li><Link className="link-family" to="/about"> About Us </Link></li>
               <li><Link className="link-family" to="login"> Login </Link></li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;