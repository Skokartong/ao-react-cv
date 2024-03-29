import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/header.css";
import Logo from "../../assets/AOLogo.png";

export default function Header() {
  return (
    <header>
      <nav id="topnav">
        <input type="checkbox" id="nav-toggle" />
        <img className="logo" src={Logo} />
        <ul className="menu">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/experience">EXPERIENCE</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">PORTFOLIO</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
        <div className="ham-menu">
          <label htmlFor="nav-toggle">
            <i className="fa-solid fa-burger" />
          </label>
        </div>
      </nav>
    </header>
  );
}
