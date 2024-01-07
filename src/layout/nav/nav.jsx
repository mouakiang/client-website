import "./nav.css";
import React from "react";
import logo from "../../assets/SV.png";
import contactImg from "../../assets/contact.png";
import { NavLink, Link } from "react-router-dom";

export function Nav() {
  return (
    <div className="topnav" id="myTopNav">
        <img src={logo} alt="logo" className="navLogo" />
      

      <nav className="navLinks">
        <h3>
          <NavLink to="/" exact="true" activeClassName="active">
            HOME
          </NavLink>
        </h3>
        <h3>
          <NavLink to="/about" activeClassName="active">
            ABOUT
          </NavLink>
        </h3>
        <h3>
          <NavLink to="/location" activeClassName="active">
            LOCATION
          </NavLink>
        </h3>
        <h3>
          <NavLink to="/appointment" exact="true" activeClassName="active">
            APPOINTMENT
          </NavLink>
        </h3>
      </nav>
      <button className="navContactBtn">
        <Link to="contact">
          <img src={contactImg} alt="contact" className="contactBtnImg" />
          Contact Me
        </Link>
      </button>
    </div>
  );
}
