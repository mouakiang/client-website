import "./nav.css";
import React, { Fragment, useState } from "react";
import logo from "../../assets/SV.png";
import contactImg from "../../assets/contact.png";
import burger from "../../assets/burger-bar.png";
import { NavLink, Link } from "react-router-dom";

export function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="topnav" id="myTopNav">
        <img src={logo} alt="logo" className="navLogo" />
        <div className="desktop-menu">
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
        </div>
        <button className="navContactBtn">
          <Link to="contact">
            <img src={contactImg} alt="contact" className="contactBtnImg" />
            Contact Me
          </Link>
        </button>
        <img
          src={burger}
          alt="burgerMenu"
          className="burgerMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="mobile-menu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <h3>
            <NavLink
              to="/"
              exact="true"
              activeClassName="active"
              onClick={() => setShowMenu(false)}
            >
              HOME
            </NavLink>
          </h3>
          <h3>
            <NavLink
              to="/about"
              activeClassName="active"
              onClick={() => setShowMenu(false)}
            >
              ABOUT
            </NavLink>
          </h3>
          <h3>
            <NavLink
              to="/location"
              activeClassName="active"
              onClick={() => setShowMenu(false)}
            >
              LOCATION
            </NavLink>
          </h3>
          <h3>
            <NavLink
              to="/appointment"
              exact="true"
              activeClassName="active"
              onClick={() => setShowMenu(false)}
            >
              APPOINTMENT
            </NavLink>
          </h3>
          <h3>
            <NavLink to="contact" onClick={() => setShowMenu(false)}>
              CONTACT ME
            </NavLink>
          </h3>
        </div>
      </nav>
    </>
  );
}
