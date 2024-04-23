import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Header/header.css";
import Logo from "../../assets/AOLogo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header>
      <nav id="topnav">
        <input
          type="checkbox"
          id="nav-toggle"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />
        <img className="logo" src={Logo} />
        <ul className="menu">
          <li>
            <NavLink to="/" onClick={closeMenu}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" onClick={closeMenu}>
              EXPERIENCE
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={closeMenu}>
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              CONTACT
            </NavLink>
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
